import { Container, Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';

// Import components
import Hero3D from "../components/Chingu-Studio/Hero3D";
import ProjectShowcase from "../components/Chingu-Studio/ProjectShowcase";
import DesignProcess from "../components/Chingu-Studio/DesignProcess";
import ServiceCard from "../components/Chingu-Studio/serviceCard";
import PortfolioGrid from "../components/Chingu-Studio/PortfolioGrid";
import InteractiveCanvas from "../components/Chingu-Studio/InteractiveCanvas";
import ImagePlaceholder from "../components/Chingu-Studio/ImagePlaceholder";


const ChinguStudioPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('default'));

  // Studio services
  const studioServices = [
    {
      icon: "", // You'd replace this with your actual icon component
      title: "Visual Design",
      description: "We create stunning visuals that communicate your brand's story effectively across all touchpoints.",
      color: theme.palette.primary.main
    },
    {
      icon: "", // You'd replace this with your actual icon component
      title: "UX/UI Design",
      description: "User-centered design solutions that balance aesthetics with functionality and usability.",
      color: theme.palette.secondary.main
    },
    {
      icon: "", // You'd replace this with your actual icon component
      title: "Brand Identity",
      description: "Crafting cohesive brand systems that resonate with your audience and set you apart.",
      color: "#FF6B6B" // Chingu Studio's color
    },
    {
      icon: "", // You'd replace this with your actual icon component
      title: "Digital Product Design",
      description: "End-to-end product design from concept and wireframing to prototyping and testing.",
      color: theme.palette.info.main
    }
  ];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* 3D Hero Section */}
      <Hero3D />
      
      {/* Interactive Background Section */}
      <Box sx={{ position: 'relative', py: 8, bgcolor: 'background.paper' }}>
        <InteractiveCanvas height="100%" />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h3" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontWeight: 'bold',
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, #FF6B6B)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 3
                }}
              >
                Where Creativity Meets Innovation
              </Typography>
              <Typography variant="body1" paragraph>
                Chingu Studio is our creative powerhouse, where design thinking and innovation 
                come together to solve complex problems through visual storytelling and 
                user-centered design approaches.
              </Typography>
              <Typography variant="body1">
                We blend art, technology, and strategy to create designs that not only look 
                beautiful but also deliver meaningful experiences and business results.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', height: '100%', minHeight: '400px' }}>
                <ImagePlaceholder 
                  height="400px"
                  label="Studio Workspace"
                  bgColor="#FF6B6B"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
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
                position: 'auto',
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                backgroundColor: '#FF6B6B',
                borderRadius: '2px',
              }
            }}
          >
            Our Design Services
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '700px', mx: 'auto', mt: 2 }}>
            From concept to completion, we offer a full spectrum of design services to help bring your vision to life.
          </Typography>
        </Box>
        
        <Grid container spacing={3}>
          {studioServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* Design Process Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <DesignProcess />
      </Box>
      
      {/* Portfolio Grid */}
      <PortfolioGrid />
      
      {/* Featured Projects Section */}
      <Box sx={{ py: 8 }}>
        <ProjectShowcase />
      </Box>
      
      {/* Closing Section with 3D Elements */}
      <Box 
        sx={{ 
          bgcolor: 'background.paper', 
          py: 8,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Box textAlign="center">
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom
              sx={{ 
                fontWeight: 'bold',
                mb: 3
              }}
            >
              Ready to Create Something Amazing?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
              Whether you're looking to refresh your brand, design a new product, or create a compelling digital experience, Chingu Studio is here to bring your vision to life.
            </Typography>
            <Box 
              component="button"
              sx={{
                bgcolor: '#FF6B6B',
                color: 'white',
                py: 1.5,
                px: 4,
                fontSize: '1rem',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: theme.shadows[2],
                '&:hover': {
                  bgcolor: '#ff5252',
                  transform: 'translateY(-3px)',
                  boxShadow: theme.shadows[4],
                }
              }}
            >
              Start a Project
            </Box>
          </Box>
        </Container>
        
        {/* Background 3D effect */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.15 }}>
          <InteractiveCanvas height="100%" color="#FF6B6B" density={30} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChinguStudioPage;