import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ParallaxContainer = styled(Box)(({ theme, imageurl }) => ({
  position: 'relative',
  height: '400px',
  backgroundImage: `url(${imageurl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  '& > .content': {
    position: 'relative',
    zIndex: 2,
  },
  [theme.breakpoints.down('sm')]: {
    backgroundAttachment: 'scroll',
    height: '350px',
  },
}));

const ContentWrapper = styled(Container)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  maxWidth: '800px',
  margin: '0 auto',
  marginBottom: theme.spacing(4),
  opacity: 0.9,
}));

const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  padding: theme.spacing(1.5, 4),
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'none',
  boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 12px 28px rgba(0,0,0,0.25)',
  },
}));

const ParallaxBanner = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  buttonText, 
  buttonLink, 
  buttonColor = 'secondary'
}) => {
  const [offset, setOffset] = useState(0);
  const parallaxRef = useRef(null);

  const handleScroll = () => {
    if (!parallaxRef.current) return;
    const scrollPosition = window.pageYOffset;
    const element = parallaxRef.current;
    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top + scrollPosition;
    const elementVisible = elementTop - window.innerHeight;
    
    if (scrollPosition > elementVisible && scrollPosition < elementTop + elementRect.height) {
      const distance = scrollPosition - elementVisible;
      const maxDistance = window.innerHeight + elementRect.height;
      const percentage = Math.min(distance / maxDistance, 1);
      setOffset(percentage * 50); // Controls parallax intensity
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ParallaxContainer 
      ref={parallaxRef}
      imageurl={backgroundImage}
      sx={{ 
        backgroundPositionY: `calc(50% + ${offset}px)`
      }}
    >
      <ContentWrapper className="content">
        <Title variant="h3" component="h2">
          {title}
        </Title>
        <Subtitle variant="h6">
          {subtitle}
        </Subtitle>
        {buttonText && (
          <ActionButton 
            variant="contained" 
            color={buttonColor}
            href={buttonLink}
          >
            {buttonText}
          </ActionButton>
        )}
      </ContentWrapper>
    </ParallaxContainer>
  );
};

export default ParallaxBanner;