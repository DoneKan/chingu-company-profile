import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%', 
  display: 'flex', 
  flexDirection: 'column',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  boxShadow: theme.shadows[3],
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  cursor: 'pointer',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: theme.shadows[12],
  },
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const NumberBadge = styled(Box)(({ color }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  width: 36,
  height: 36,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  fontSize: '1rem',
  zIndex: 10,
  color: 'white',
  backgroundColor: color,
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)'
}));

const IconContainer = styled(Box)(({ theme }) => ({
  transform: 'scale(1)',
  transition: 'transform 0.3s ease',
  color: 'white',
  fontSize: '2.5rem',
  '&:hover': {
    transform: 'scale(1.1)'
  }
}));

const TitleUnderline = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: 40,
  height: 3,
  backgroundColor: theme.palette.grey[800],
  borderRadius: '2px'
}));

const StyledChip = styled(Chip)(({ bgcolor }) => ({
  margin: '4px 6px 4px 0',
  fontWeight: '600',
  color: 'white',
  backgroundColor: bgcolor,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  fontSize: '0.75rem',
  height: '24px',
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.12)'
}));

const CardLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
  height: '100%',
}));

const DivisionCard = ({ division, color, number, icon, title, description, keywords, slug }) => {
  return (
    <CardLink to={`/${slug}`}>
      <StyledCard>
        <NumberBadge color={color}>
          {number}
        </NumberBadge>

        <CardMedia
          component="div"
          sx={{
            height: 180,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: color,
            background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`
          }}
        >
          <IconContainer>
            {icon}
          </IconContainer>
        </CardMedia>

        <CardContent sx={{ 
          flexGrow: 1, 
          p: 2.5,
          '&:last-child': { pb: 2.5 }
        }}>
          <Typography 
            variant="h6" 
            component="h3" 
            sx={{ 
              mb: 1.5, 
              fontWeight: 'bold', 
              position: 'relative', 
              pb: 1,
              fontSize: '1.1rem',
              lineHeight: 1.3
            }}
          >
            {title}
            <TitleUnderline />
          </Typography>

          <Typography 
            variant="body2" 
            sx={{ 
              mb: 2, 
              color: 'text.secondary',
              lineHeight: 1.5,
              fontSize: '0.875rem'
            }}
          >
            {description}
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            mt: 'auto',
            pt: 1
          }}>
            {keywords.map((keyword, index) => (
              <StyledChip 
                key={index} 
                label={keyword}
                size="small"
                bgcolor={color}
              />
            ))}
          </Box>
        </CardContent>
      </StyledCard>
    </CardLink>
  );
};

const ChinguDivisionsGrid = () => {
  const divisions = [
    {
      id: '01',
      title: 'CHINGU STUDIO',
      icon: '📐',
      description: 'The Studio is a dynamic subdivision dedicated to playful design and conceptualising innovative ideas. We explore the intersection of imagination and functionality.',
      color: '#FF6B6B',
      keywords: ['CONCEPT', 'DESIGN', 'PROTOTYPE'],
      slug: 'studio',
    },
    {
      id: '02',
      title: 'CHINGU EXPERIENCE',
      icon: '🥽',
      description: 'Harnessing the power of modern technology to bring visions to life. We specialize in utilizing advanced tools such as VR, rendering systems, and 3D printing.',
      color: '#4ECDC4',
      keywords: ['VR', '3D PRINTING', 'CNC'],
      slug: 'experience',
    },
    {
      id: '03',
      title: 'CHINGU TRANSCENDENCE',
      icon: '🏗️',
      description: 'Where imagination meets engineering excellence. We bring prototypes to life, merging creative visions with technical expertise.',
      color: '#6C63FF',
      keywords: ['ENGINEERING', 'PRODUCTION', 'REALIZATION'],
      slug: 'transcendence',
    },
    {
      id: '04',
      title: 'THE FORGE',
      icon: '🔍',
      description: 'At Chingu we believe in bridging the gap between imagination and creation. Our mission is to transform visionary ideas into tangible realities.',
      color: '#FFD166',
      keywords: ['INNOVATION', 'SUSTAINABILITY', 'TECHNOLOGY'],
      slug: 'about',
    }
  ];

  return (
    <Box sx={{ width: '100%', py: { xs: 4, md: 8 }, bgcolor: '' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h2" 
          sx={{ 
            textAlign: 'center', 
            mb: { xs: 4, md: 6 }, 
            pb: 1, 
            position: 'relative',
            fontWeight: 'bold',
            color: 'white',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              width: 80,
              height: 4,
              bgcolor: 'grey.800',
              borderRadius: '2px',
              transform: 'translateX(-50%)'
            }
          }}
        >
          OUR DIVISIONS
        </Typography>

        <Grid 
          container 
          rowSpacing={3} 
          columnSpacing={{ xs: 2, sm: 3, md: 4 }}
        >
          {divisions.map((division) => (
            <Grid size={6} key={division.id}>
              <DivisionCard
                division={division.id}
                color={division.color}
                number={division.id}
                icon={division.icon}
                title={division.title}
                description={division.description}
                keywords={division.keywords}
                slug={division.slug}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ChinguDivisionsGrid;