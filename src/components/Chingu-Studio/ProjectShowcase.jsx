import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Tabs, Tab, Button, IconButton, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import FilterListIcon from '@mui/icons-material/FilterList';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

// Placeholder 3D model component
const Model3D = ({ rotation = [0, 0, 0] }) => {
  return (
    <mesh rotation={rotation}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#FF6B6B" />
    </mesh>
  );
};

// Styled components
const ProjectCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 5px 15px',
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 15px 30px',
  }
}));

const CategoryTab = styled(Tab)(({ theme }) => ({
  fontWeight: 600,
  padding: theme.spacing(1, 3),
  textTransform: 'none',
  fontSize: '0.9rem',
  '&.Mui-selected': {
    color: '#FF6B6B'
  }
}));

const ProjectShowcase = () => {
  const theme = useTheme();
  const [category, setCategory] = useState(0);
  const [expanded, setExpanded] = useState(null);

  // Project data - would normally come from an API
  const projects = [
    {
      id: 1,
      title: 'Vision AI Dashboard',
      category: 'UI Design',
      description: 'A modern dashboard for an artificial intelligence application, featuring intuitive information hierarchy and vibrant data visualizations.',
      has3D: true,
      image: null, // Placeholder for when real images are available
    },
    {
      id: 2,
      title: 'Eco Packaging Collection',
      category: 'Product Design',
      description: 'Sustainable packaging solutions designed with recycled materials and innovative folding techniques to minimize environmental impact.',
      has3D: true,
      image: null,
    },
    {
      id: 3,
      title: 'FinTech Mobile App',
      category: 'UI Design',
      description: 'Mobile banking application redesign focusing on accessibility and clear transaction flows while maintaining security compliance.',
      has3D: false,
      image: null,
    },
    {
      id: 4,
      title: 'Smart Home Ecosystem',
      category: 'Product Design',
      description: 'Connected home devices designed with a consistent visual language and intuitive interaction patterns for seamless user experience.',
      has3D: true,
      image: null,
    },
    {
      id: 5,
      title: 'Healthcare Portal',
      category: 'UI Design',
      description: 'Patient management system with emphasis on clean information display and accessibility features for diverse user needs.',
      has3D: false,
      image: null,
    },
    {
      id: 6,
      title: 'Augmented Reality Glasses',
      category: 'Product Design',
      description: 'Lightweight AR glasses concept designed for all-day wear with minimal visual intrusion and intuitive gesture controls.',
      has3D: true,
      image: null,
    }
  ];

  // Categories and filtering
  const categories = ['All Projects', 'UI Design', 'Product Design', 'Brand Identity'];
  
  const filteredProjects = category === 0 
    ? projects 
    : projects.filter(project => project.category === categories[category]);

  const handleCategoryChange = (event, newValue) => {
    setCategory(newValue);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 50 }
    }
  };

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              position: 'relative',
              display: 'inline-block'
            }}
          >
            Our Work
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
            color="textSecondary"
            sx={{ maxWidth: 700, mx: 'auto', mb: 6 }}
          >
            Explore our latest projects showcasing innovative design solutions
            across various industries and challenges.
          </Typography>
          
          <Box sx={{ mb: 6, display: 'flex', justifyContent: 'center' }}>
            <Tabs 
              value={category} 
              onChange={handleCategoryChange}
              indicatorColor="primary"
              textColor="primary"
              sx={{ 
                '& .MuiTabs-indicator': {
                  backgroundColor: '#FF6B6B',
                }
              }}
            >
              {categories.map((cat, index) => (
                <CategoryTab key={index} label={cat} />
              ))}
            </Tabs>
          </Box>
        </Box>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Grid container spacing={4}>
              {filteredProjects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <motion.div variants={itemVariants}>
                    <ProjectCard>
                      {/* Project Media - 3D model or image placeholder */}
                      <Box sx={{ position: 'relative', height: 240, backgroundColor: '#f5f5f5' }}>
                        {project.has3D ? (
                          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                            <Model3D rotation={[Math.PI / 4, Math.PI / 4, 0]} />
                            <OrbitControls enableZoom={false} />
                            <Environment preset="city" />
                          </Canvas>
                        ) : (
                          <Box
                            sx={{
                              height: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: '#f0f0f0',
                              backgroundImage: 'radial-gradient(circle, #f0f0f0 10%, transparent 10.5%), radial-gradient(circle, #f0f0f0 10%, transparent 10.5%)',
                              backgroundSize: '30px 30px',
                              backgroundPosition: '0 0, 15px 15px',
                            }}
                          >
                            <Typography variant="body1" color="textSecondary">
                              Design Preview
                            </Typography>
                          </Box>
                        )}
                        <IconButton
                          sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            }
                          }}
                        >
                          <FullscreenIcon />
                        </IconButton>
                      </Box>
                      
                      <CardContent>
                        <Typography 
                          variant="overline" 
                          component="div" 
                          color="primary"
                          sx={{ fontWeight: 600, color: '#FF6B6B' }}
                        >
                          {project.category}
                        </Typography>
                        
                        <Typography 
                          variant="h6" 
                          component="h3"
                          sx={{ fontWeight: 700, mb: 1 }}
                        >
                          {project.title}
                        </Typography>
                        
                        <Typography 
                          variant="body2" 
                          color="textSecondary"
                          sx={{ mb: 2 }}
                        >
                          {project.description}
                        </Typography>
                        
                        <Button 
                          variant="outlined" 
                          size="small"
                          sx={{
                            borderColor: '#FF6B6B',
                            color: '#FF6B6B',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 107, 107, 0.05)',
                              borderColor: '#FF6B6B',
                            }
                          }}
                        >
                          View Project
                        </Button>
                      </CardContent>
                    </ProjectCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
        
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Button 
            variant="contained" 
            size="large"
            sx={{
              backgroundColor: '#FF6B6B',
              '&:hover': {
                backgroundColor: '#ff5252',
              },
              px: 4,
              py: 1.5,
              borderRadius: 2
            }}
          >
            View All Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectShowcase;