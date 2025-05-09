import React, {useEffect} from 'react';
 
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Box,
    Divider,
    Paper,
    IconButton,
    useTheme,
    useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import './styles.css'; 



// Import MUI icons
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import VrpanoIcon from '@mui/icons-material/Vrpano';
import Architecture from '@mui/icons-material/Architecture';

// Need to add a Chip component that was used but not imported
const Chip = styled(Box)(({ theme }) => ({
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '16px',
    backgroundColor: theme.palette.grey[200],
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: theme.palette.text.secondary,
}));

// Custom styled components
const HeroSection = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
    color: 'white',
    padding: theme.spacing(15, 0, 10),
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
}));

const ServiceCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: theme.shadows[10],
    },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    position: 'relative',
    marginBottom: theme.spacing(6),
    paddingBottom: theme.spacing(2),
    textAlign: 'center',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        width: '80px',
        height: '4px',
        background: theme.palette.primary.main,
        transform: 'translateX(-50%)',
    },
}));

const ContactItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
}));




function ChinguHomePage() {


    useEffect(() => {
        // Reveal animations on scroll
        const observerOptions = {
          threshold: 0.2,
          rootMargin: '0px 0px -100px 0px'
        };
        
        const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              revealObserver.unobserve(entry.target);
            }
          });
        }, observerOptions);
        
        document.querySelectorAll('.reveal-on-scroll').forEach(element => {
          revealObserver.observe(element);
        });
        
        // Parallax scroll effect
        const parallaxElements = document.querySelectorAll('.parallax-element');
        
        function handleScroll() {
          const scrollPosition = window.pageYOffset;
          
          parallaxElements.forEach(element => {
            const elementPosition = element.offsetTop;
            const distance = elementPosition - scrollPosition;
            const speed = 0.2;
            
            element.style.transform = `translateY(${distance * speed}px)`;
          });
          
          // Scroll speed for value items
          document.querySelectorAll('[data-scroll-speed]').forEach(element => {
            const speed = parseFloat(element.getAttribute('data-scroll-speed'));
            const rect = element.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            
            if (rect.top < viewHeight && rect.bottom > 0) {
              const scrollPercentage = (viewHeight - rect.top) / (viewHeight + rect.height);
              const moveY = (scrollPercentage - 0.5) * speed * 100;
              
              element.style.transform = `translateY(${moveY}px)`;
            }
          });
        }
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initialize positions
        
        // Interactive hotspots
        document.querySelectorAll('.hotspot').forEach(hotspot => {
          hotspot.addEventListener('mouseenter', () => {
            // Add any additional interactive effects here
          });
        });
        
        // Clean up event listeners on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
          revealObserver.disconnect();
        };
      }, []); // Empty dependency array means this runs once on mount

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>


            {/* Navigation */}
            <AppBar position="fixed" color="default" elevation={1}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        CHINGU
                    </Typography>
                    {isMobile ? (
                        <IconButton color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <>
                            <Button color="inherit">Home</Button>
                            <Button color="inherit">About</Button>
                            <Button color="inherit">Services</Button>
                            <Button color="inherit">Projects</Button>
                            <Button color="inherit">Contact</Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <HeroSection>
                <Container>
                    <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
                        CUT ACROSS
                    </Typography>
                    <Typography variant="h5" component="h2" paragraph>
                        Where innovation meets sustainability, research fuels creativity
                    </Typography>
                    <Box mt={4}>
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            sx={{ mr: 2, borderRadius: '50px', px: 4 }}
                        >
                            Our Services
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{ color: 'white', borderColor: 'white', borderRadius: '50px', px: 4 }}
                        >
                            Contact Us
                        </Button>
                    </Box>
                </Container>
            </HeroSection>

            {/* About Section */}

            <section id="about" class="about-section">
                <div class="container">
                    <div class="about-wrapper">
                        
                        <div class="section-header" data-scroll-reveal="enter from the top">
                            <h2 class="gradient-text">ABOUT US</h2>
                            <div class="accent-line"></div>
                        </div>

                        <div class="about-content">
                            <div class="text-content">
                              
                                <p class="lead-text reveal-on-scroll">
                                    Chingu is where innovation meets sustainability, research fuels creativity, playful design
                                    sparks joy, technology empowers, and experience reigns supreme. At Chingu, we're not
                                    just building products; we're crafting experiences that resonate with our users on a
                                    profound level.
                                </p>

                                <p class="reveal-on-scroll">
                                    We believe in bridging the gap between imagination and creation. Our mission is to
                                    transform visionary ideas into tangible realities, through utilising art and design in
                                    collaboration with latest advancements in technology.
                                </p>

                                <p class="reveal-on-scroll">
                                    We are committed to enhancing the manufacturing process in Uganda by integrating
                                    modern tools such as design software, 3D printers, laser cutters, and CNC machines. This
                                    commitment ensures that every project we undertake is executed with precision,
                                    creativity, and excellence.
                                </p>
                            </div>

                           
                            <div class="company-image-container">
                              
                                <div class="image-wrapper parallax-element">
                                    <img
                                        src="company-image.webp"
                                        alt="Chingu Innovation"
                                        class="responsive-image blur-in"
                                        loading="lazy"
                                    />

                                    
                                    <div class="interactive-overlay">
                                        <div class="hotspot" data-target="innovation">
                                            <span class="pulse-circle"></span>
                                            <div class="info-tooltip">
                                                <h4>Innovation Hub</h4>
                                                <p>Where cutting-edge ideas become reality</p>
                                            </div>
                                        </div>

                                        <div class="hotspot" data-target="sustainability">
                                            <span class="pulse-circle"></span>
                                            <div class="info-tooltip">
                                                <h4>Sustainable Process</h4>
                                                <p>Our commitment to environmental stewardship</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="values-container">
                            <div class="value-item" data-scroll-speed="1.2">
                                <div class="value-icon">
                                    <svg viewBox="0 0 24 24" class="svg-icon"></svg>
                                </div>
                                <h3>Innovation</h3>
                            </div>

                            <div class="value-item" data-scroll-speed="1.4">
                                <div class="value-icon">
                                    <svg viewBox="0 0 24 24" class="svg-icon"></svg>
                                </div>
                                <h3>Sustainability</h3>
                            </div>

                            <div class="value-item" data-scroll-speed="1.6">
                                <div class="value-icon">
                                    <svg viewBox="0 0 24 24" class="svg-icon"></svg>
                                </div>
                                <h3>Creativity</h3>
                            </div>

                            <div class="value-item" data-scroll-speed="1.8">
                                <div class="value-icon">
                                    <svg viewBox="0 0 24 24" class="svg-icon"></svg>
                                </div>
                                <h3>Excellence</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Services Section */}
            <Box py={10} sx={{ backgroundColor: '#f8f9fa' }}>
                <Container>
                    <SectionTitle variant="h3" component="h2">
                        OUR DIVISIONS
                    </SectionTitle>
                    <Grid container spacing={4}>
                        {/* CHINGU Studio */}
                        <Grid item xs={12} md={4}>
                            <ServiceCard elevation={3}>
                                <CardMedia
                                    component="div"
                                    sx={{
                                        height: 200,
                                        backgroundColor: theme.palette.primary.light,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <DesignServicesIcon sx={{ fontSize: 80, color: 'white' }} />
                                </CardMedia>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h3" fontWeight="bold">
                                        CHINGU STUDIO
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        The Studio is a dynamic subdivision dedicated to playful design and conceptualising innovative ideas.
                                        We explore the intersection of imagination and functionality to create designs that are both inspiring and practical.
                                    </Typography>
                                    <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
                                        <Chip label="CONCEPT" />
                                        <Chip label="DESIGN" />
                                        <Chip label="PROTOTYPE" />
                                    </Box>
                                </CardContent>
                            </ServiceCard>
                        </Grid>

                        {/* CHINGU Experience */}
                        <Grid item xs={12} md={4}>
                            <ServiceCard elevation={3}>
                                <CardMedia
                                    component="div"
                                    sx={{
                                        height: 200,
                                        backgroundColor: theme.palette.secondary.light,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <VrpanoIcon sx={{ fontSize: 80, color: 'white' }} />
                                </CardMedia>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h3" fontWeight="bold">
                                        CHINGU EXPERIENCE
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        Harnessing the power of modern technology to bring visions to life. We specialize in
                                        utilizing advanced tools such as virtual reality (VR), rendering systems, CNC machines,
                                        and 3D printers to create immersive, precise, and innovative designs.
                                    </Typography>
                                    <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
                                        <Chip label="VR" />
                                        <Chip label="3D PRINTING" />
                                        <Chip label="CNC" />
                                    </Box>
                                </CardContent>
                            </ServiceCard>
                        </Grid>

                        {/* CHINGU Transcendence */}
                        <Grid item xs={12} md={4}>
                            <ServiceCard elevation={3}>
                                <CardMedia
                                    component="div"
                                    sx={{
                                        height: 200,
                                        backgroundColor: theme.palette.error.light,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Architecture sx={{ fontSize: 80, color: 'white' }} />
                                </CardMedia>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h3" fontWeight="bold">
                                        CHINGU TRANSCENDENCE
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" paragraph>
                                        Where imagination meets engineering excellence. We bring prototypes to life, merging creative
                                        visions with technical expertise. Our collaborative approach ensures that every concept is
                                        transformed into a functional and aesthetically pleasing reality.
                                    </Typography>
                                    <Box display="flex" flexWrap="wrap" gap={1} mt={2}>
                                        <Chip label="ENGINEERING" />
                                        <Chip label="PRODUCTION" />
                                        <Chip label="REALIZATION" />
                                    </Box>
                                </CardContent>
                            </ServiceCard>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Vision & Mission Section */}
            <Box py={10}>
                <Container>
                    <SectionTitle variant="h3" component="h2">
                        VISION & MISSION
                    </SectionTitle>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Card elevation={4} sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" color="primary">
                                        Our Vision
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        At Chingu Design, our vision is to unlock the full potential of design and innovation
                                        within an industry. We strive to be the catalyst that transforms creative ideas into
                                        groundbreaking solutions, revolutionizing the way products and structures are
                                        conceived and realized.
                                    </Typography>
                                    <Typography variant="body1">
                                        By integrating advanced technologies and fostering a culture of continuous innovation art,
                                        we aim to set new standards in design excellence and manufacturing efficiency.
                                        Our goal is to empower businesses and communities in Uganda and beyond.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card elevation={4} sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" color="secondary">
                                        Our Mission
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        Our mission at Chingu is to pioneer a new era of innovation where sustainability,
                                        research, playful design, technology, and experience converge seamlessly. We are
                                        committed to crafting products and experiences that not only delight our users but
                                        also positively impact the world around us.
                                    </Typography>
                                    <Typography variant="body1">
                                        Through relentless curiosity, eco-conscious practices, rigorous research, imaginative design,
                                        cutting-edge technology, and unwavering dedication to the user experience,
                                        we aim to inspire joy, spark creativity, and empower individuals to thrive.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box py={10} sx={{ backgroundColor: theme.palette.primary.main, color: 'white' }}>
                <Container>
                    <Box textAlign="center">
                        <Typography variant="h4" component="h2" gutterBottom>
                            Ready to transform your ideas into reality?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Contact us today to discuss how we can help bring your vision to life.
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            sx={{ borderRadius: '50px', px: 5, py: 1.5 }}
                        >
                            Get in Touch
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Contact Section */}
            <Box py={10}>
                <Container>
                    <SectionTitle variant="h3" component="h2">
                        CONTACT US
                    </SectionTitle>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <ContactItem>
                                <LocationOnIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                                <Typography variant="body1">
                                    7k Old Port Bell Rd, Kampala
                                </Typography>
                            </ContactItem>
                            <ContactItem>
                                <PhoneIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                                <Typography variant="body1">
                                    +256 786458897
                                </Typography>
                            </ContactItem>
                            <ContactItem>
                                <EmailIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                                <Typography variant="body1">
                                    eugenemusinguziemu@gmail.com
                                </Typography>
                            </ContactItem>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={3}
                                sx={{
                                    height: 300,
                                    backgroundColor: '#f5f5f5',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Typography variant="h6" color="textSecondary">Map Location</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>


            {/* Footer */}
            <Box py={3} sx={{ backgroundColor: '#212121', color: 'white' }}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body2">
                                © {new Date().getFullYear()} CHINGU Co LTD. All rights reserved.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' }, mt: { xs: 2, md: 0 } }}>
                            <Typography variant="body2">
                                Designed with passion, Built with innovation
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default ChinguHomePage;

