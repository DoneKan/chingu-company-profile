import { useState, useEffect, useRef } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

export default function AstroScreensaver() {
  const theme = useTheme();
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
  
  // Astro lines animation
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    // Create stars
    const stars = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.1
    }));
    
    // Create connection points
    const points = Array.from({ length: 10 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      connections: []
    }));
    
    // Animation loop
    const animate = () => {
      // Only proceed if canvas is still in the document
      if (!canvas.isConnected) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Move stars
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Update points
      points.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;
        
        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
        
        point.connections = [];
      });
      
      // Find connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            points[i].connections.push(j);
            points[j].connections.push(i);
          }
        }
      }
      
      // Draw connections
      ctx.strokeStyle = 'rgba(200, 200, 255, 0.5)';
      ctx.lineWidth = 1;
      
      points.forEach((point, i) => {
        point.connections.forEach(j => {
          if (i < j) { // Avoid drawing lines twice
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [dimensions]);
  
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh', 
        bgcolor: 'black',
        overflow: 'hidden'
      }}
    >
      {/* Background gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'linear-gradient(to bottom right, rgba(30, 64, 175, 0.4), rgba(0, 0, 0, 0.8))',
          zIndex: 10
        }}
      />
      
      {/* Canvas for astro lines */}
      <Box
        component="canvas"
        ref={canvasRef}
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: 'block',
          zIndex: 20
        }}
      />
      
      {/* Background image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `url('/api/placeholder/1920/1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
          filter: 'brightness(0.4) contrast(1.2)',
          zIndex: 0
        }}
      />
      
      {/* Centered content */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 30
        }}
      >
        {/* Logo at top */}
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              bgcolor: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid white'
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                bgcolor: 'white',
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  width: '33%',
                  height: '33%',
                  bgcolor: 'black',
                  top: '33%',
                  left: '33%'
                }}
              />
            </Box>
          </Box>
        </Box>
        
        {/* Text */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="h1" 
            sx={{ 
              color: 'white',
              fontSize: '6rem',
              fontWeight: 700,
              letterSpacing: '0.5rem',
              mb: 2
            }}
          >
            CHINGU
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              color: 'white',
              fontSize: '2.5rem',
              fontWeight: 300,
              letterSpacing: '0.25rem'
            }}
          >
            entreprises SA
          </Typography>
        </Box>
      </Box>
      
      {/* Etudiant Ordinateur logo/watermark in corner */}
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          color: 'white',
          bgcolor: 'rgba(255, 255, 255, 0.1)',
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          zIndex: 40
        }}
      >
        <Typography component="span" sx={{ fontWeight: 'bold' }}>1</Typography>
        <Typography component="span" sx={{ fontSize: '0.875rem', ml: 0.5 }}>DEV MODE</Typography>
      </Box>
    </Box>
  );
}