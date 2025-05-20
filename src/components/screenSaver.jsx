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
import SettingsIcon from '@mui/icons-material/Settings';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

// Create custom dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0288d1', // Blue
    },
    secondary: {
      main: '#00e5ff', // Cyan
    },
    background: {
      default: '#0a0c14',
      paper: '#1a1e2c',
    },
    text: {
      primary: '#e0e0f0',
      secondary: '#a0a8c0',
    },
  },
  typography: {
    fontFamily: '"Rajdhani", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '0.5rem',
    },
    h2: {
      fontWeight: 300,
      letterSpacing: '0.2rem',
    },
  },
});

export default function RoboticsScreensaverMUI() {
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

  // Robotics gears animation
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    // Create gears
    const gears = Array.from({ length: 15 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 40 + 20,
      teeth: Math.floor(Math.random() * 8) + 8,
      rotationSpeed: (Math.random() * 0.01) + 0.005,
      rotation: Math.random() * Math.PI * 2,
      color: `rgba(${Math.floor(Math.random() * 30)}, ${Math.floor(Math.random() * 150) + 100}, ${Math.floor(Math.random() * 100) + 155}, 0.7)`
    }));
    
    // Create connection nodes (circuit-like points)
    const nodes = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      radius: Math.random() * 3 + 2,
      connections: []
    }));
    
    // Draw a gear
    const drawGear = (x, y, outerRadius, innerRadius, teeth, toothDepth, rotation, color) => {
      ctx.beginPath();
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      const toothAngle = (2 * Math.PI) / teeth;
      
      for (let i = 0; i < teeth; i++) {
        const angle = i * toothAngle;
        
        // Move to inner point of current tooth
        ctx.lineTo(
          innerRadius * Math.cos(angle),
          innerRadius * Math.sin(angle)
        );
        
        // Draw to outer point of current tooth
        ctx.lineTo(
          outerRadius * Math.cos(angle + toothAngle / 4),
          outerRadius * Math.sin(angle + toothAngle / 4)
        );
        
        // Draw to outer point of current tooth
        ctx.lineTo(
          outerRadius * Math.cos(angle + toothAngle / 2),
          outerRadius * Math.sin(angle + toothAngle / 2)
        );
        
        // Back to inner point of next tooth
        ctx.lineTo(
          innerRadius * Math.cos(angle + toothAngle * 3/4),
          innerRadius * Math.sin(angle + toothAngle * 3/4)
        );
      }
      
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
      
      // Draw inner circle
      ctx.beginPath();
      ctx.arc(0, 0, innerRadius * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = '#111a2e';
      ctx.fill();
      
      // Draw center hole
      ctx.beginPath();
      ctx.arc(0, 0, innerRadius * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = '#060a14';
      ctx.fill();
      
      ctx.restore();
    };
    
    // Draw 3D circuit line
    const drawCircuitLine = (x1, y1, x2, y2) => {
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      gradient.addColorStop(0, 'rgba(0, 195, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(0, 140, 255, 0.2)');
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Add glow effect
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = 'rgba(0, 200, 255, 0.3)';
      ctx.lineWidth = 4;
      ctx.stroke();
    };
    
    // Animation loop
    const animate = () => {
      // Only proceed if canvas is still in the document
      if (!canvas.isConnected) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background grid (subtle tech pattern)
      ctx.strokeStyle = 'rgba(40, 50, 90, 0.1)';
      ctx.lineWidth = 1;
      const gridSize = 30;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Update and draw gears
      gears.forEach(gear => {
        gear.rotation += gear.rotationSpeed;
        drawGear(
          gear.x,
          gear.y,
          gear.radius,
          gear.radius * 0.7,
          gear.teeth,
          gear.radius * 0.2,
          gear.rotation,
          gear.color
        );
      });
      
      // Update nodes
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        node.connections = [];
      });
      
      // Find connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 180) {
            nodes[i].connections.push(j);
            nodes[j].connections.push(i);
          }
        }
      }
      
      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach(j => {
          if (i < j) { // Avoid drawing lines twice
            drawCircuitLine(node.x, node.y, nodes[j].x, nodes[j].y);
          }
        });
      });
      
      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 195, 255, 0.8)';
        ctx.fill();
        
        // Add glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          node.x, node.y, node.radius,
          node.x, node.y, node.radius * 2
        );
        gradient.addColorStop(0, 'rgba(0, 195, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 195, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [dimensions]);

  return (
    <ThemeProvider theme={darkTheme}>
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
        {/* Background gradient overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(13, 71, 161, 0.3) 0%, rgba(10, 12, 20, 0.9) 100%)',
            zIndex: 10,
          }}
        />
        
        {/* Canvas for robotics animation */}
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
        
        {/* Background texture */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("/api/placeholder/1920/1080")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
            filter: 'brightness(0.3) contrast(1.25)',
            zIndex: 0,
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
          {/* Logo at top */}
          <Box
            sx={{
              mb: 6,
              position: 'relative',
              width: 100,
              height: 100,
              borderRadius: '50%',
              bgcolor: 'rgba(25, 35, 60, 0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid',
              borderColor: 'primary.light',
              boxShadow: '0 0 30px rgba(0, 229, 255, 0.3)',
            }}
          >
            <Avatar
              sx={{
                width: 60,
                height: 60,
                bgcolor: 'transparent',
                color: theme => theme.palette.primary.light,
              }}
            >
              <SettingsIcon sx={{ fontSize: 40, animation: 'spin 10s linear infinite' }} />
            </Avatar>
          </Box>
          
          {/* Text */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                mb: 1,
                textShadow: '0 0 15px rgba(0, 229, 255, 0.5)',
                background: 'linear-gradient(90deg, #0288d1 0%, #29b6f6 50%, #0288d1 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 700,
                letterSpacing: '0.5rem'
              }}
            >
              CHINGU
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                color: 'text.secondary',
                fontWeight: 300,
                letterSpacing: '0.3rem'
              }}
            >
              CUT ACROSS
            </Typography>
          </Box>
          
          {/* Animated badge below text */}
          <Box 
            sx={{ 
              mt: 6,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.8
            }}
          >
            <PrecisionManufacturingIcon sx={{ mr: 1, color: 'secondary.main' }} />
            <Typography variant="body2" sx={{ color: 'secondary.light' }}>
              ADVANCED SYSTEMS
            </Typography>
          </Box>
        </Container>
        
        {/* Development watermark */}
        <Chip
          label="DEV MODE"
          color="primary"
          variant="outlined"
          size="small"
          icon={<Box sx={{ fontSize: 14, fontWeight: 'bold' }}>1</Box>}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            bgcolor: 'rgba(25, 118, 210, 0.15)',
            backdropFilter: 'blur(5px)',
            zIndex: 40,
            px: 1,
            borderRadius: 1,
            '& .MuiChip-icon': {
              ml: 0.5,
              mr: -0.5,
            }
          }}
        />
        
        {/* Add keyframes for spin animation */}
        <Box
          sx={{
            '@keyframes spin': {
              '0%': {
                transform: 'rotate(0deg)',
              },
              '100%': {
                transform: 'rotate(360deg)',
              },
            },
          }}
        />
      </Box>
    </ThemeProvider>
  );
}