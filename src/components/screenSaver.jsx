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
    
    // Create floating 3D shapes
    const shapes = Array.from({ length: 12 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 100 + 50,
      size: Math.random() * 60 + 30,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      vz: (Math.random() - 0.5) * 0.3,
      type: ['cube', 'sphere', 'diamond'][Math.floor(Math.random() * 3)],
      hue: Math.random() * 60 + 240, // Blue to purple range
      pulseOffset: Math.random() * Math.PI * 2
    }));
    
    // Create floating particles
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 50 + 25,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      twinkle: Math.random() * Math.PI * 2
    }));
    
    let time = 0;
    
    // Draw 3D cube
    const drawCube = (x, y, size, rotation, depth, hue, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      const perspective = 0.6;
      const s = size * (1 + depth * 0.01);
      
      // Create gradient for 3D effect
      const gradient = ctx.createLinearGradient(-s/2, -s/2, s/2, s/2);
      gradient.addColorStop(0, `hsla(${hue}, 70%, 65%, ${alpha})`);
      gradient.addColorStop(1, `hsla(${hue + 20}, 80%, 45%, ${alpha * 0.8})`);
      
      // Front face
      ctx.fillStyle = gradient;
      ctx.fillRect(-s/2, -s/2, s, s);
      
      // Top face (3D effect)
      ctx.beginPath();
      ctx.moveTo(-s/2, -s/2);
      ctx.lineTo(-s/2 + s * perspective, -s/2 - s * perspective);
      ctx.lineTo(s/2 + s * perspective, -s/2 - s * perspective);
      ctx.lineTo(s/2, -s/2);
      ctx.closePath();
      ctx.fillStyle = `hsla(${hue + 10}, 60%, 75%, ${alpha * 0.9})`;
      ctx.fill();
      
      // Right face (3D effect)
      ctx.beginPath();
      ctx.moveTo(s/2, -s/2);
      ctx.lineTo(s/2 + s * perspective, -s/2 - s * perspective);
      ctx.lineTo(s/2 + s * perspective, s/2 - s * perspective);
      ctx.lineTo(s/2, s/2);
      ctx.closePath();
      ctx.fillStyle = `hsla(${hue - 10}, 65%, 55%, ${alpha * 0.7})`;
      ctx.fill();
      
      // Add glow
      ctx.shadowColor = `hsla(${hue}, 80%, 60%, 0.3)`;
      ctx.shadowBlur = 15;
      ctx.strokeStyle = `hsla(${hue}, 90%, 70%, ${alpha * 0.5})`;
      ctx.lineWidth = 2;
      ctx.strokeRect(-s/2, -s/2, s, s);
      
      ctx.restore();
    };
    
    // Draw 3D sphere
    const drawSphere = (x, y, size, depth, hue, alpha, pulse) => {
      ctx.save();
      ctx.translate(x, y);
      
      const radius = size * (1 + depth * 0.01) * (1 + Math.sin(pulse) * 0.1);
      
      // Create radial gradient for 3D sphere effect
      const gradient = ctx.createRadialGradient(
        -radius * 0.3, -radius * 0.3, 0,
        0, 0, radius
      );
      gradient.addColorStop(0, `hsla(${hue}, 80%, 80%, ${alpha})`);
      gradient.addColorStop(0.7, `hsla(${hue}, 70%, 60%, ${alpha * 0.8})`);
      gradient.addColorStop(1, `hsla(${hue - 20}, 60%, 40%, ${alpha * 0.6})`);
      
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add highlight
      ctx.beginPath();
      ctx.arc(-radius * 0.3, -radius * 0.3, radius * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.3})`;
      ctx.fill();
      
      // Add glow
      ctx.shadowColor = `hsla(${hue}, 80%, 60%, 0.4)`;
      ctx.shadowBlur = 20;
      ctx.strokeStyle = `hsla(${hue}, 90%, 70%, ${alpha * 0.3})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      
      ctx.restore();
    };
    
    // Draw 3D diamond
    const drawDiamond = (x, y, size, rotation, depth, hue, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      const s = size * (1 + depth * 0.01);
      
      // Create gradient
      const gradient = ctx.createLinearGradient(-s/2, -s/2, s/2, s/2);
      gradient.addColorStop(0, `hsla(${hue}, 85%, 70%, ${alpha})`);
      gradient.addColorStop(0.5, `hsla(${hue + 30}, 90%, 80%, ${alpha})`);
      gradient.addColorStop(1, `hsla(${hue}, 75%, 50%, ${alpha * 0.8})`);
      
      // Draw diamond shape
      ctx.beginPath();
      ctx.moveTo(0, -s/2);
      ctx.lineTo(s/2, 0);
      ctx.lineTo(0, s/2);
      ctx.lineTo(-s/2, 0);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add sparkle effect
      ctx.strokeStyle = `hsla(${hue + 40}, 95%, 85%, ${alpha * 0.6})`;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Add glow
      ctx.shadowColor = `hsla(${hue}, 80%, 60%, 0.5)`;
      ctx.shadowBlur = 25;
      ctx.strokeStyle = `hsla(${hue}, 90%, 70%, ${alpha * 0.4})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      
      ctx.restore();
    };
    
    // Animation loop
    const animate = () => {
      if (!canvas.isConnected) return;
      
      time += 0.01;
      
      // Create subtle gradient background
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      );
      bgGradient.addColorStop(0, '#1a1a2e');
      bgGradient.addColorStop(1, '#0f0f23');
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.twinkle += 0.05;
        
        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        const twinkleAlpha = particle.opacity * (0.5 + 0.5 * Math.sin(particle.twinkle));
        
        ctx.save();
        ctx.shadowColor = '#6366f1';
        ctx.shadowBlur = 10;
        ctx.fillStyle = `rgba(99, 102, 241, ${twinkleAlpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      
      // Update and draw 3D shapes
      shapes.forEach(shape => {
        // Update position
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.z += shape.vz;
        shape.rotation += shape.rotationSpeed;
        shape.pulseOffset += 0.05;
        
        // Bounce off edges
        if (shape.x < -100 || shape.x > canvas.width + 100) shape.vx *= -1;
        if (shape.y < -100 || shape.y > canvas.height + 100) shape.vy *= -1;
        if (shape.z < 20 || shape.z > 150) shape.vz *= -1;
        
        // Calculate alpha based on depth
        const alpha = 0.3 + (shape.z / 150) * 0.5;
        const pulse = Math.sin(time * 2 + shape.pulseOffset);
        
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        
        // Draw shape based on type
        switch (shape.type) {
          case 'cube':
            drawCube(shape.x, shape.y, shape.size, shape.rotation, shape.z, shape.hue, alpha);
            break;
          case 'sphere':
            drawSphere(shape.x, shape.y, shape.size / 2, shape.z, shape.hue + 60, alpha, pulse);
            break;
          case 'diamond':
            drawDiamond(shape.x, shape.y, shape.size * 0.8, shape.rotation, shape.z, shape.hue + 120, alpha);
            break;
        }
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