import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Button, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// This component creates a 3D-looking hero with animated elements
// No actual 3D library needed for this simple effect
const Hero3D = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Animation variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <Box 
      sx={{
        position: 'relative',
        height: isMobile ? '70vh' : '90vh',
        backgroundColor: '#FF6B6B',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Floating 3D shapes */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ 
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            rotate: Math.random() * 360,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{ 
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            rotate: Math.random() * 360,
            scale: Math.random() * 0.5 + 0.5
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: `${Math.random() * 150 + 50}px`,
            height: `${Math.random() * 150 + 50}px`,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            zIndex: 1
          }}
        />
      ))}
      
      {/* Hero content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Typography 
              variant="overline" 
              component="div"
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                letterSpacing: '0.25em',
                mb: 2,
                fontWeight: 600,
              }}
            >
              CHINGU STUDIO
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Typography 
              variant="h1" 
              component="h1"
              sx={{ 
                color: 'white',
                fontWeight: 800,
                fontSize: isMobile ? '3rem' : '5rem',
                mb: 3,
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              Where Ideas<br />Take Shape
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Typography 
              variant="h5" 
              component="p"
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '600px',
                mb: 4,
                fontWeight: 300,
              }}
            >
              Transforming concepts into compelling designs through creativity, 
              innovation, and a deep understanding of human experience.
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                backgroundColor: 'white',
                color: '#FF6B6B',
                py: 1.5,
                px: 4,
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                },
                transition: 'all 0.3s',
                fontWeight: 'bold',
                mr: 2
              }}
            >
              Explore Our Work
            </Button>
            
            <Button 
              variant="outlined" 
              size="large"
              sx={{ 
                color: 'white',
                borderColor: 'white',
                py: 1.5,
                px: 4,
                borderRadius: '50px',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s',
                fontWeight: 'bold'
              }}
            >
              Our Process
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero3D;