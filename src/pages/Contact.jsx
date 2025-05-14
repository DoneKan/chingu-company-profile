import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Paper,
    useTheme,
    useMediaQuery,
    Divider,
    Card,
    CardContent,
    Snackbar,
    Alert,
    IconButton,
    Tooltip,
    Fade,
    CircularProgress
} from '@mui/material';
import {
    LocationOn,
    Phone,
    Email,
    Send,
    AccessTime,
    DesignServices,
    Architecture,
    Construction,
    ThreeDRotation
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Custom styled components
const AnimatedBox = motion(Box);
const AnimatedPaper = motion(Paper);
const AnimatedTypography = motion(Typography);
const AnimatedCard = motion(Card);

const ContactUs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        service: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [hover, setHover] = useState(false);
    const [currentHoveredIcon, setCurrentHoveredIcon] = useState(null);

    // Parallax effect on scroll
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate form submission with API call
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
                service: ''
            });
        }, 2000);
    };

    const handleCloseSnackbar = () => {
        setSuccess(false);
        setError(false);
    };

    const services = [
        { name: "Studio", icon: <DesignServices />, description: "Playful concept design and prototyping" },
        { name: "Experience", icon: <ThreeDRotation />, description: "VR, rendering, and 3D printing" },
        { name: "Transcendence", icon: <Construction />, description: "Engineering excellence bringing prototypes to life" },
    ];

    return (
        <Container maxWidth="xl" sx={{ py: 12, overflow: 'hidden' }}>
            {/* Header Section with AnimatedTypography */}
            <Box sx={{ mb: 10, textAlign: 'center' }}>
                <AnimatedTypography
                    variant="h1"
                    sx={{
                        fontWeight: 800,
                        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-0.05em'
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Box component="span" sx={{ display: 'inline-block', position: 'relative' }}>
                        C
                        <Box
                            component="span"
                            sx={{
                                position: 'absolute',
                                top: -5,
                                right: -10,
                                width: 15,
                                height: 15,
                                borderRadius: '50%',
                                bgcolor: theme.palette.secondary.main,
                                display: 'inline-block'
                            }}
                        />
                    </Box>
                    Connect with CHINGU
                </AnimatedTypography>
                <AnimatedTypography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mt: 2, maxWidth: '800px', mx: 'auto', lineHeight: 1.6 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Where innovation meets design. Let's create something extraordinary together.
                </AnimatedTypography>
            </Box>

            <Grid container spacing={6}>
                {/* Contact Information Card */}
                <Grid item xs={12} md={6}>  {/* Changed from md={7} to md={6} */}
                    <AnimatedPaper
                        elevation={8}
                        sx={{
                            p: 4,
                            borderRadius: 4,
                            height: '100%',
                            width: '100%',
                            background: `linear-gradient(145deg, 
                    ${theme.palette.background.paper}, 
                    ${theme.palette.background.default})`,
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        {/* Abstract geometric shapes */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: -100,
                                right: -100,
                                width: 300,
                                height: 300,
                                borderRadius: '50%',
                                background: `radial-gradient(circle, ${theme.palette.primary.light}22, transparent 70%)`,
                                zIndex: 0,
                            }}
                        />

                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                            <Typography variant="h4" fontWeight={700} mb={4} sx={{
                                position: 'relative',
                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: -10,
                                    width: 80,
                                    height: 4,
                                    bgcolor: theme.palette.primary.main,
                                    borderRadius: 2
                                }
                            }}>
                                Get in Touch
                            </Typography>

                            <Box sx={{ mt: 7 }}>
                                {[
                                    {
                                        icon: <LocationOn fontSize="large" />,
                                        primary: "Visit Us",
                                        secondary: "7k Old Port Bell Rd, Kampala"
                                    },
                                    {
                                        icon: <Phone fontSize="large" />,
                                        primary: "Call Us",
                                        secondary: "+256 786458897"
                                    },
                                    {
                                        icon: <Email fontSize="large" />,
                                        primary: "Email Us",
                                        secondary: "eugenemusinguziemu@gmail.com"
                                    },
                                    {
                                        icon: <AccessTime fontSize="large" />,
                                        primary: "Working Hours",
                                        secondary: "Mon - Fri: 9:00AM - 6:00PM"
                                    }
                                ].map((item, index) => (
                                    <AnimatedBox
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 4,
                                            p: 2,
                                            borderRadius: 2,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                bgcolor: 'background.paper',
                                                transform: 'translateX(10px)',
                                                boxShadow: 3
                                            }
                                        }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    >
                                        <Box
                                            sx={{
                                                mr: 3,
                                                color: theme.palette.primary.main,
                                                p: 1.5,
                                                borderRadius: '50%',
                                                backgroundColor: `${theme.palette.primary.main}15`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            {item.icon}
                                        </Box>
                                        <Box>
                                            <Typography variant="body1" fontWeight={600}>
                                                {item.primary}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                                {item.secondary}
                                            </Typography>
                                        </Box>
                                    </AnimatedBox>
                                ))}
                            </Box>

                            <Typography variant="subtitle1" sx={{ mt: 6, mb: 3, fontWeight: 600 }}>
                                Our Services
                            </Typography>

                            <Grid container spacing={2}>
                                {services.map((service, index) => (
                                    <Grid item xs={12} sm={4} key={index}>
                                        <AnimatedCard
                                            sx={{
                                                textAlign: 'center',
                                                p: 2,
                                                height: '100%',
                                                transition: 'transform 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-8px)',
                                                    boxShadow: 6
                                                }
                                            }}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                            whileHover={{
                                                scale: 1.05,
                                                transition: { duration: 0.2 }
                                            }}
                                            onMouseEnter={() => setCurrentHoveredIcon(index)}
                                            onMouseLeave={() => setCurrentHoveredIcon(null)}
                                        >
                                            <CardContent>
                                                <Box
                                                    sx={{
                                                        mb: 2,
                                                        color: theme.palette.primary.main,
                                                        transform: currentHoveredIcon === index ? 'scale(1.2)' : 'scale(1)',
                                                        transition: 'transform 0.3s ease'
                                                    }}
                                                >
                                                    {service.icon}
                                                </Box>
                                                <Typography variant="subtitle2" fontWeight={600}>
                                                    {service.name}
                                                </Typography>
                                                <Typography variant="caption" color="text.secondary">
                                                    {service.description}
                                                </Typography>
                                            </CardContent>
                                        </AnimatedCard>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </AnimatedPaper>
                </Grid>

                {/* Contact Form */}
                <Grid item xs={12} md={7}>
                    <AnimatedPaper
                        elevation={8}
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            p: 4,
                            borderRadius: 4,
                            position: 'relative',
                            overflow: 'hidden',
                            background: `linear-gradient(135deg, 
                ${theme.palette.background.paper}, 
                ${theme.palette.background.default})`,
                        }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Abstract design elements */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: -80,
                                left: -80,
                                width: 250,
                                height: 250,
                                borderRadius: '50%',
                                background: `radial-gradient(circle, ${theme.palette.secondary.light}22, transparent 70%)`,
                                zIndex: 0,
                            }}
                        />

                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                            <Typography variant="h4" fontWeight={700} mb={4} sx={{
                                position: 'relative',
                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: -10,
                                    width: 60,
                                    height: 4,
                                    bgcolor: theme.palette.secondary.main,
                                    borderRadius: 2
                                }
                            }}>
                                Send Us a Message
                            </Typography>

                            <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                                Have a question or want to collaborate? Fill out the form below and we'll get back to you within 24 hours.
                            </Typography>

                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Your Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label="Your Email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Service Interest (Optional)"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                            }
                                        }}
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service.name}>
                                                {service.name}
                                            </option>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Your Message"
                                        name="message"
                                        multiline
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        disabled={loading}
                                        sx={{
                                            borderRadius: 8,
                                            py: 1.5,
                                            px: 4,
                                            fontWeight: 600,
                                            position: 'relative',
                                            overflow: 'hidden',
                                            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-3px)',
                                                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                            }
                                        }}
                                        startIcon={loading ? null : <Send />}
                                        onMouseEnter={() => setHover(true)}
                                        onMouseLeave={() => setHover(false)}
                                    >
                                        {loading ? (
                                            <CircularProgress size={24} color="inherit" />
                                        ) : (
                                            "Send Message"
                                        )}

                                        {/* Ripple effect on hover */}
                                        {hover && (
                                            <Box
                                                component={motion.div}
                                                sx={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    width: '300%',
                                                    height: '300%',
                                                    borderRadius: '50%',
                                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                    zIndex: 0,
                                                }}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 0.8 }}
                                            />
                                        )}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </AnimatedPaper>
                </Grid>
            </Grid>

            {/* Map Section */}
            <Box sx={{ mt: 10 }}>
                <AnimatedPaper
                    elevation={5}
                    sx={{
                        borderRadius: 4,
                        overflow: 'hidden',
                        height: 400,
                        position: 'relative'
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7568896861844!2d32.629!3d0.315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTgnNTQuMCJOIDMywrAzNyc0NC40IkU!5e0!3m2!1sen!2sus!4v1621360000000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Chingu Company Location"
                    />

                    {/* Overlay card with company info */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 30,
                            left: 30,
                            maxWidth: 350,
                            bgcolor: 'background.paper',
                            p: 3,
                            borderRadius: 2,
                            boxShadow: 5
                        }}
                    >
                        <Typography variant="h6" fontWeight={700} gutterBottom>
                            Chingu Headquarters
                        </Typography>
                        <Typography variant="body2" paragraph>
                            7k Old Port Bell Rd, Kampala, Uganda
                        </Typography>
                        <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            startIcon={<LocationOn />}
                            component="a"
                            href="https://goo.gl/maps/JyJYJ2h9X5Z2n9Jt7"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ mt: 1 }}
                        >
                            Get Directions
                        </Button>
                    </Box>
                </AnimatedPaper>
            </Box>

            {/* Feedback Snackbars */}
            <Snackbar open={success} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert
                    onClose={handleCloseSnackbar}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Your message has been sent successfully! We'll get back to you soon.
                </Alert>
            </Snackbar>

            <Snackbar open={error} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert
                    onClose={handleCloseSnackbar}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    There was an error sending your message. Please try again.
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default ContactUs;