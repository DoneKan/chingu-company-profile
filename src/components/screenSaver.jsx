import { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  ThemeProvider, 
  createTheme, 
  CssBaseline,
  Chip,
  Avatar
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DiamondIcon from '@mui/icons-material/Diamond';

// Create modern theme with 2025 aesthetics
const modernTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1', // Indigo
    },
    secondary: {
      main: '#ec4899', // Pink
    },
    background: {
      default: '#0f0f23',
      paper: '#1a1a2e',
    },
    text: {
      primary: '#f8fafc',
      secondary: '#cbd5e1',
    },
  },
  typography: {
    fontFamily: '"Inter", "SF Pro Display", "Helvetica Neue", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 300,
      letterSpacing: '0.1em',
    },
  },
});

export default function ModernHero() {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Handle resize
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Modern 3D shapes animation
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    // Create fewer, simpler floating shapes
    const shapes = Array.from({ length: 6 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 40 + 20,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      hue: Math.random() * 60 + 240,
      alpha: Math.random() * 0.4 + 0.2
    }));
    
    // Fewer particles
    const particles = Array.from({ length: 15 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.6 + 0.3
    }));
    
    let time = 0;
    
    // Simple optimized shape drawing
    const drawShape = (x, y, size, rotation, hue, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Simple gradient rectangle (much faster than complex 3D)
      const gradient = ctx.createLinearGradient(-size/2, -size/2, size/2, size/2);
      gradient.addColorStop(0, `hsla(${hue}, 70%, 65%, ${alpha})`);
      gradient.addColorStop(1, `hsla(${hue + 20}, 60%, 45%, ${alpha * 0.7})`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(-size/2, -size/2, size, size);
      
      // Simple border glow
      ctx.strokeStyle = `hsla(${hue}, 80%, 70%, ${alpha * 0.5})`;
      ctx.lineWidth = 1;
      ctx.strokeRect(-size/2, -size/2, size, size);
      
      ctx.restore();
    };
    
    // Animation loop - optimized for performance
    const animate = () => {
      if (!canvas.isConnected) return;
      
      // Clear with solid color (faster than gradients)
      ctx.fillStyle = '#0f0f23';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles (simplified)
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Simple particle drawing
        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Update and draw shapes (simplified)
      shapes.forEach(shape => {
        // Update position
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotationSpeed;
        
        // Bounce off edges
        if (shape.x < -50 || shape.x > canvas.width + 50) shape.vx *= -1;
        if (shape.y < -50 || shape.y > canvas.height + 50) shape.vy *= -1;
        
        // Draw simple shape
        drawShape(shape.x, shape.y, shape.size, shape.rotation, shape.hue, shape.alpha);
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [dimensions]);

  return (
    <ThemeProvider theme={modernTheme}>
      <CssBaseline />
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          bgcolor: 'background.default',
        }}
      >
        {/* Modern gradient overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.05) 50%, rgba(15, 15, 35, 0.8) 100%)',
            zIndex: 10,
          }}
        />
        
        {/* Canvas for 3D animation */}
        <Box
          component="canvas"
          ref={canvasRef}
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'block',
            zIndex: 20,
          }}
        />
        
        {/* Centered content */}
        <Container
          maxWidth={false}
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 30,
          }}
        >
          {/* Modern logo */}
          <Box
            sx={{
              mb: 8,
              position: 'relative',
              width: 120,
              height: 120,
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(236, 72, 153, 0.1) 100%)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
            }}
          >
            <Avatar
              sx={{
                width: 80,
                height: 80,
                bgcolor: 'transparent',
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                animation: 'float 6s ease-in-out infinite',
              }}
            >
              <DiamondIcon sx={{ fontSize: 40, color: 'white' }} />
            </Avatar>
          </Box>
          
          {/* Modern text */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '4rem', sm: '6rem', md: '8rem' },
                mb: 2,
                background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #06b6d4 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                textShadow: 'none',
                animation: 'glow 4s ease-in-out infinite alternate'
              }}
            >
              CHINGU
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                color: 'rgba(248, 250, 252, 0.8)',
                fontWeight: 300,
                letterSpacing: '0.1em',
                opacity: 0.9
              }}
            >
              CREATIVE STUDIO
            </Typography>
          </Box>
          
          {/* Modern badge */}
          <Box 
            sx={{ 
              mt: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: 4,
              py: 2,
              borderRadius: '50px',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <AutoAwesomeIcon sx={{ mr: 2, color: '#ec4899' }} />
            <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>
              EXPERIENCE THE FUTURE
            </Typography>
          </Box>
        </Container>
        
        {/* Modern dev badge */}
        <Chip
          label="2025"
          color="primary"
          variant="filled"
          size="medium"
          sx={{
            position: 'absolute',
            top: 24,
            right: 24,
            background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
            color: 'white',
            fontWeight: 'bold',
            backdropFilter: 'blur(10px)',
            zIndex: 40,
            px: 2,
            borderRadius: '12px',
          }}
        />
        
        {/* Add keyframes for animations */}
        <Box
          sx={{
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
              '50%': { transform: 'translateY(-10px) rotate(180deg)' },
            },
            '@keyframes glow': {
              '0%': { filter: 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.3))' },
              '100%': { filter: 'drop-shadow(0 0 40px rgba(236, 72, 153, 0.4))' },
            },
          }}
        />
      </Box>
    </ThemeProvider>
  );
}