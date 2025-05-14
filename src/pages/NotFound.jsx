import React, { memo } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { HomeRounded, ArrowBackRounded } from '@mui/icons-material';

// Pure component to avoid unnecessary re-renders
const NotFoundAnimation = memo(() => {
  return (
    <Box 
      component="div" 
      sx={{
        position: 'relative',
        height: 200,
        width: '100%',
        overflow: 'hidden',
        mb: 4
      }}
    >
      <Typography 
        variant="h1" 
        component="div"
        sx={{
          position: 'absolute',
          fontWeight: 900,
          fontSize: { xs: '8rem', md: '12rem' },
          opacity: 0.1,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          userSelect: 'none',
        }}
      >
        404
      </Typography>
      <Typography 
        variant="h2" 
        component="div"
        sx={{
          position: 'absolute',
          fontWeight: 900,
          color: 'primary.main',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          userSelect: 'none',
        }}
      >
        404
      </Typography>
    </Box>
  );
});

// Memoized action buttons to prevent re-renders
const ActionButtons = memo(({ onGoHome, onGoBack }) => {
  return (
    <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
      <Button 
        variant="contained" 
        color="primary" 
        startIcon={<HomeRounded />}
        onClick={onGoHome}
        sx={{ borderRadius: 2 }}
      >
        Home
      </Button>
      <Button 
        variant="outlined"
        color="primary" 
        startIcon={<ArrowBackRounded />}
        onClick={onGoBack}
        sx={{ borderRadius: 2 }}
      >
        Go Back
      </Button>
    </Box>
  );
});

// Main NotFound component
const NotFound = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Handlers are defined once and don't change
  const handleGoHome = React.useCallback(() => {
    window.location.href = '/';
  }, []);
  
  const handleGoBack = React.useCallback(() => {
    window.history.back();
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper 
        elevation={3} 
        sx={{
          p: { xs: 3, sm: 5 },
          borderRadius: 4,
          backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,255,255,0.4))',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          textAlign: 'center',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Visual background pattern (static, won't cause re-renders) */}
        <Box 
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            background: 'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)',
            zIndex: 0
          }}
        />
        
        <Box position="relative" zIndex={1}>
          <NotFoundAnimation />
          
          <Typography 
            variant={isMobile ? "h5" : "h4"} 
            component="h1" 
            sx={{ 
              fontWeight: 700, 
              mb: 2,
              background: 'linear-gradient(45deg, #FF5252, #FF7B7B)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Page Not Found
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 3, maxWidth: '600px', mx: 'auto' }}>
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </Typography>
          
          <ActionButtons onGoHome={handleGoHome} onGoBack={handleGoBack} />
        </Box>
      </Paper>
    </Container>
  );
};

// Using memo to prevent unnecessary re-renders
export default memo(NotFound);