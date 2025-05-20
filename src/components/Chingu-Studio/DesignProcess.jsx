import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Styled components
const ProcessStep = styled(Paper)(({ theme, color }) => ({
  padding: theme.spacing(4),
  height: '100%',
  borderRadius: theme.spacing(2),
  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '5px',
    width: '100%',
    backgroundColor: color || '#FF6B6B',
  }
}));

const ProcessIcon = styled(Box)(({ theme }) => ({
  width: 70,
  height: 70,
  borderRadius: '20px',
  backgroundColor: 'rgba(255, 107, 107, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  marginBottom: theme.spacing(2),
}));

const ConnectorLine = styled(Box)(({ theme, isMobile }) => ({
  position: 'absolute',
  backgroundColor: '#e0e0e0',
  [isMobile ? 'width' : 'height']: '2px',
  [isMobile ? 'height' : 'width']: '50px',
  top: isMobile ? '50%' : null,
  left: isMobile ? 'calc(100% + 15px)' : null,
  right: isMobile ? null : '25px',
  bottom: isMobile ? null : '0',
}));

const DesignProcess = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Design process steps
  const processSteps = [
    {
      icon: '🔍',
      title: 'Research & Discovery',
      description: 'We begin by understanding your vision, needs, and constraints through stakeholder interviews and market analysis.',
      color: '#FF6B6B'
    },
    {
      icon: '💡',
      title: 'Ideation & Concept',
      description: 'Generating creative concepts and innovative ideas through brainstorming, sketching, and collaborative workshops.',
      color: '#FF8E53'
    },
    {
      icon: '✏️',
      title: 'Design & Iteration',
      description: 'Converting concepts into visual designs, creating prototypes, and refining through iterative feedback loops.',
      color: '#4ECDC4'
    },
    {
      icon: '🏁',
      title: 'Delivery & Implementation',
      description: 'Finalizing design assets, creating comprehensive guidelines, and preparing for seamless handoff to production teams.',
      color: '#6C63FF'
    }
  ];

  // Animation variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 60
      }
    }
  };

  return (
    <Box sx={{ py: 10, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h2" 
          align="center" 
          sx={{ 
            fontWeight: 700, 
            mb: 2,
            position: 'relative'
          }}
        >
          Our Design Process
          <Box 
            sx={{
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 4,
              backgroundColor: '#FF6B6B'
            }}
          />
        </Typography>
        
        <Typography 
          variant="h6" 
          component="p" 
          align="center" 
          color="textSecondary"
          sx={{ 
            maxWidth: 700, 
            mx: 'auto', 
            mb: 8,
            fontWeight: 400
          }}
        >
          A structured yet flexible approach that brings your ideas to life
          through a collaborative design journey.
        </Typography>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4} justifyContent="center">
            {processSteps.map((step, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={3} 
                key={index} 
                sx={{ position: 'relative' }}
              >
                <motion.div variants={itemVariants}>
                  <ProcessStep color={step.color}>
                    <ProcessIcon sx={{ backgroundColor: `${step.color}20` }}>
                      <Typography variant="h3" component="span">
                        {step.icon}
                      </Typography>
                    </ProcessIcon>
                    
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      sx={{ fontWeight: 700, mb: 1.5 }}
                    >
                      {step.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      color="textSecondary"
                    >
                      {step.description}
                    </Typography>
                    
                    {index < processSteps.length - 1 && !isMobile && (
                      <ConnectorLine isMobile={false} />
                    )}
                    
                    {index < processSteps.length - 1 && isMobile && (
                      <ConnectorLine isMobile={true} />
                    )}
                  </ProcessStep>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default DesignProcess;