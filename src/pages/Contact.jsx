import React, { useState, useCallback } from 'react';
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
    Card,
    CardContent,
    Snackbar,
    Alert,
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

// Optimized motion components - only use animation where it matters most
const AnimatedTypography = motion(Typography);
const AnimatedPaper = motion(Paper);

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
    
    // Remove unnecessary hover state tracking
    const [currentHoveredIcon, setCurrentHoveredIcon] = useState(null);

    // Efficient form handling with useCallback
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    const handleSubmit = useCallback((e) => {
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
    }, []);

    const handleCloseSnackbar = useCallback(() => {
        setSuccess(false);
        setError(false);
    }, []);

    const services = [
        { name: "Studio", icon: <DesignServices />, description: "Playful concept design and prototyping" },
        { name: "Experience", icon: <ThreeDRotation />, description: "VR, rendering, and 3D printing" },
        { name: "Transcendence", icon: <Construction />, description: "Engineering excellence bringing prototypes to life" },
    ];

    // Simplified gradient backgrounds
    const primaryGradient = `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`;
    const paperBackground = theme.palette.background.paper;

    return (
        <Container maxWidth="xl" sx={{ py: 8 }}>
            {/* Header Section with minimal animations */}
            <Box sx={{ mb: 6, textAlign: 'center' }}>
                <AnimatedTypography
                    variant="h1"
                    sx={{
                        fontWeight: 800,
                        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                        background: primaryGradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
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
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mt: 2, maxWidth: '800px', mx: 'auto' }}
                >
                    Where innovation meets design. Let's create something extraordinary together.
                </Typography>
            </Box>

            <Grid container spacing={4} alignItems="stretch">
                {/* Contact Information Card - Fixed width to match form */}
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            borderRadius: 2,
                            height: '100%',
                            backgroundColor: paperBackground,
                        }}
                    >
                        <Box>
                            <Typography variant="h4" fontWeight={700} mb={3} sx={{
                                position: 'relative',
                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: -8,
                                    width: 60,
                                    height: 3,
                                    bgcolor: theme.palette.primary.main,
                                    borderRadius: 1
                                }
                            }}>
                                Get in Touch
                            </Typography>

                            <Box sx={{ mt: 5 }}>
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
                                    <Box
                                        key={index}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 3,
                                            p: 2,
                                            borderRadius: 2,
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                bgcolor: 'background.paper',
                                                boxShadow: 1,
                                                transform: 'translateX(5px)'
                                            }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                mr: 3,
                                                color: theme.palette.primary.main,
                                                p: 1.5,
                                                borderRadius: '50%',
                                                backgroundColor: `${theme.palette.primary.main}15`,
                                            }}
                                        >
                                            {item.icon}
                                        </Box>
                                        <Box>
                                            <Typography variant="body1" fontWeight={600}>
                                                {item.primary}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.secondary}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>

                            <Typography variant="subtitle1" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>
                                Our Services
                            </Typography>

                            <Grid container spacing={2}>
                                {services.map((service, index) => (
                                    <Grid item xs={12} sm={4} key={index}>
                                        <Card
                                            sx={{
                                                textAlign: 'center',
                                                p: 1,
                                                height: '100%',
                                                transition: 'transform 0.2s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-5px)',
                                                    boxShadow: 2
                                                }
                                            }}
                                        >
                                            <CardContent>
                                                <Box
                                                    sx={{
                                                        mb: 1,
                                                        color: theme.palette.primary.main
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
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>

                {/* Contact Form - Matching width with contact info */}
                <Grid item xs={12} md={6}>
                    <Paper
                        elevation={3}
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            p: 4,
                            borderRadius: 2,
                            height: '100%',
                            backgroundColor: paperBackground,
                        }}
                    >
                        <Box>
                            <Typography variant="h4" fontWeight={700} mb={3} sx={{
                                position: 'relative',
                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: -8,
                                    width: 60,
                                    height: 3,
                                    bgcolor: theme.palette.secondary.main,
                                    borderRadius: 1
                                }
                            }}>
                                Send Us a Message
                            </Typography>

                            <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
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
                                                borderRadius: 1,
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
                                                borderRadius: 1,
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
                                                borderRadius: 1,
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 1,
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
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 1,
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
                                            borderRadius: 2,
                                            py: 1.5,
                                            px: 4,
                                            fontWeight: 600,
                                            background: primaryGradient,
                                            '&:hover': {
                                                boxShadow: 3
                                            }
                                        }}
                                        startIcon={loading ? null : <Send />}
                                    >
                                        {loading ? (
                                            <CircularProgress size={24} color="inherit" />
                                        ) : (
                                            "Send Message"
                                        )}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            {/* Map Section - Simplified */}
            <Box sx={{ mt: 8 }}>
                <Paper
                    elevation={3}
                    sx={{
                        borderRadius: 2,
                        overflow: 'hidden',
                        height: 400,
                        position: 'relative'
                    }}
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

                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 30,
                            left: 30,
                            maxWidth: 350,
                            bgcolor: 'background.paper',
                            p: 3,
                            borderRadius: 2,
                            boxShadow: 3
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
                        >
                            Get Directions
                        </Button>
                    </Box>
                </Paper>
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