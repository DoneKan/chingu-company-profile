import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ icon, title, description, color = '#FF6B6B', delay = 0 }) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation variants
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        delay: delay 
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          mb: 6,
          p: 3,
          borderRadius: 4,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            transform: 'translateY(-5px)'
          }
        }}
      >
        <Box
          sx={{
            width: { xs: 60, md: 80 },
            height: { xs: 60, md: 80 },
            minWidth: { xs: 60, md: 80 },
            backgroundColor: `${color}15`,
            color: color,
            borderRadius: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: { xs: '2rem', md: '2.5rem' },
            mb: { xs: 2, md: 0 },
            mr: { xs: 0, md: 4 },
          }}
        >
          {icon}
        </Box>
        
        <Box>
          <Typography 
            variant="h5" 
            component="h3" 
            sx={{ 
              mb: 1,
              fontWeight: 700,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: -8,
                width: 40,
                height: 3,
                backgroundColor: color,
                borderRadius: 1,
              }
            }}
          >
            {title}
          </Typography>
          
          <Typography 
            variant="body1" 
            color="textSecondary"
            sx={{ mt: 2 }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ServiceCard;