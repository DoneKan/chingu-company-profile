import React, { useEffect } from 'react';
//import backgroundImage from '../assets/images/ddf.jpg';
import innovationBg from '../assets/images/values/innovation.png';
import sustainabilityBg from '../assets/images/values/sustainability.png';
import creativityBg from '../assets/images/values/creativity.png';
import excellenceBg from '../assets/images/values/excellence.png';
import ChinguDivisionsGrid from '../components/Home/division';
import Screen from '../components/screenSaver';

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
    Menu,
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

{/*Custom styled components
const HeroSection = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    padding: theme.spacing(15, 0, 10),
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better text visibility
        zIndex: 1
    },
    '& > *': { // This targets all direct children
        position: 'relative',
        zIndex: 2 // Ensures content appears above the overlay
    }
}));  */}

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



            {/* Hero Section 
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
            */}

            <Screen />


            {/* About Section */}

            


            {/* Services Section */}

            <ChinguDivisionsGrid />
           

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
            <Grid item xs={12} md={6}>
                <div style={{
                    height: 300,
                    width: '100%',
                    overflow: 'hidden',
                    borderRadius: '4px'
                }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7572380113456!2d32.62199931475247!3d0.31230199975522856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb828add16c9%3A0x9a1d4a3e11c5e35b!2sOld%20Port%20Bell%20Rd%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1621345678901!5m2!1sen!2sus"
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 0
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </Grid>


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

