import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderWrapper = styled(Box)(({ theme, alignment }) => ({
  textAlign: alignment || 'center',
  marginBottom: theme.spacing(6),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  color: theme.palette.primary.main,
  fontWeight: 600,
  position: 'relative',
  marginBottom: theme.spacing(1.5),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -8,
    left: 0,
    width: '40%',
    height: 3,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 3,
  }
}));

const Title = styled(Typography)(({ theme, contrast }) => ({
  fontWeight: 700,
  fontSize: contrast ? '2.75rem' : '2.25rem',
  marginBottom: theme.spacing(2),
  color: contrast ? 'white' : theme.palette.text.primary,
  [theme.breakpoints.down('md')]: {
    fontSize: contrast ? '2rem' : '1.75rem',
  }
}));

const Description = styled(Typography)(({ theme, contrast }) => ({
  maxWidth: '800px',
  margin: '0 auto',
  color: contrast ? 'rgba(255, 255, 255, 0.8)' : theme.palette.text.secondary,
  fontSize: '1.1rem',
  lineHeight: 1.6,
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  }
}));

const SectionHeader = ({ 
  title, 
  subtitle, 
  description, 
  alignment = 'center',
  contrastColor = false,
  maxWidth = 'md' 
}) => {
  return (
    <Container maxWidth={maxWidth}>
      <HeaderWrapper alignment={alignment}>
        {subtitle && (
          <Subtitle variant="subtitle1" sx={contrastColor ? { color: 'white', '&::after': { backgroundColor: 'white' } } : {}}>
            {subtitle}
          </Subtitle>
        )}
        
        {title && (
          <Title variant="h3" component="h2" contrast={contrastColor ? 1 : 0}>
            {title}
          </Title>
        )}
        
        {description && (
          <Description variant="body1" contrast={contrastColor ? 1 : 0}>
            {description}
          </Description>
        )}
      </HeaderWrapper>
    </Container>
  );
};

export default SectionHeader;