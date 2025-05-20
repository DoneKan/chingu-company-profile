import React, { useState } from 'react';
import { Box, Container, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

const PortfolioGrid = ({ projects = [] }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  // Fallback projects if none are provided
  const defaultProjects = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'Branding',
      description: 'Complete visual identity system for a tech startup.',
      color: theme.palette.primary.main
    },
    {
      id: 2,
      title: 'Mobile App UI/UX',
      category: 'UI/UX Design',
      description: 'Intuitive interface design for a fitness tracking application.',
      color: theme.palette.secondary.main
    },
    {
      id: 3,
      title: 'Marketing Website',
      category: 'Web Design',
      description: 'Responsive website design with interactive elements.',
      color: '#FF6B6B' // Custom color for Chingu Studio
    },
    {
      id: 4,
      title: 'Product Packaging',
      category: 'Packaging',
      description: 'Sustainable packaging design for an eco-friendly product line.',
      color: theme.palette.info.main
    },
    {
      id: 5,
      title: 'Digital Campaign',
      category: 'Marketing',
      description: 'Cohesive digital marketing assets for multiple platforms.',
      color: theme.palette.success.main
    },
    {
      id: 6,
      title: 'Design System',
      category: 'UI/UX Design',
      description: 'Comprehensive component library and design guidelines.',
      color: theme.palette.warning.main
    }
  ];

  // Use provided projects or fallback to defaults
  const displayProjects = projects.length > 0 ? projects : defaultProjects;
  
  // States for filtering and sorting
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Extract unique categories
  const categories = ['All', ...new Set(displayProjects.map(project => project.category))];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? displayProjects 
    : displayProjects.filter(project => project.category === activeCategory);

  // Styled components
  const StyledGrid = styled(Grid)(({ theme }) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(6),
  }));

  const ProjectCard = styled(motion.div)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    cursor: 'pointer',
  }));

  const ProjectContent = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }));

  const CategoryBadge = styled(Box)(({ theme, color }) => ({
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: color || theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
    borderRadius: '16px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    zIndex: 1,
  }));

  const CategoryFilter = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(3),
    justifyContent: 'center',
  }));

  const CategoryButton = styled(Box)(({ theme, active }) => ({
    padding: `${theme.spacing(0.75)} ${theme.spacing(2)}`,
    borderRadius: '20px',
    cursor: 'pointer',
    backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[100],
    color: active ? theme.palette.common.white : theme.palette.text.primary,
    fontWeight: active ? 'bold' : 'normal',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: active ? theme.palette.primary.dark : theme.palette.grey[200],
    }
  }));

  // Calculate image heights for masonry-like effect
  const getImageHeight = (index) => {
    const heights = ['300px', '380px', '260px', '340px', '280px', '320px'];
    return heights[index % heights.length];
  };

  return (
    <Container maxWidth="lg">
      <Box mt={8} mb={4} textAlign="center">
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold',
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              backgroundColor: '#FF6B6B', // Chingu Studio color
              borderRadius: '2px',
            }
          }}
        >
          Our Portfolio
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ maxWidth: '600px', margin: '0 auto', mt: 2 }}>
          Explore our creative work across various design disciplines. Each project represents our commitment to innovative and purposeful design.
        </Typography>
      </Box>

      <CategoryFilter>
        {categories.map((category) => (
          <CategoryButton
            key={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryFilter>

      <StyledGrid container spacing={3}>
        {filteredProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <CategoryBadge color={project.color}>
                {project.category}
              </CategoryBadge>
              
              <ImagePlaceholder 
                height={getImageHeight(index)}
                label={`${project.title} Preview`}
                bgColor={project.color}
              />

              <ProjectContent>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </ProjectContent>
            </ProjectCard>
          </Grid>
        ))}
      </StyledGrid>
    </Container>
  );
};

export default PortfolioGrid;