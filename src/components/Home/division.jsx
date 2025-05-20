import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%', 
  display: 'flex', 
  flexDirection: 'column',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  boxShadow: theme.shadows[5],
  transition: 'all 0.3s ease',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-16px)',
    boxShadow: theme.shadows[15],
  }
}));

const NumberBadge = styled(Box)(({ color }) => ({
  position: 'absolute',
  top: 20,
  right: 20,
  width: 40,
  height: 40,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  fontSize: '1.125rem',
  zIndex: 10,
  color: 'white',
  backgroundColor: color,
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'
}));

const VerticalBrand = styled(Typography)({
  position: 'absolute',
  top: '50%',
  left: 16,
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  opacity: 0.15,
  fontWeight: 'bold',
  fontSize: '1.5rem',
  letterSpacing: '0.2em',
  zIndex: 10,
  writingMode: 'vertical-rl',
  textOrientation: 'upright'
});

const IconContainer = styled(Box)(({ theme }) => ({
  transform: 'scale(1)',
  transition: 'transform 0.3s ease',
  color: 'white',
  fontSize: '3rem',
  '&:hover': {
    transform: 'scale(1.1)'
  }
}));

const TitleUnderline = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: 40,
  height: 2,
  backgroundColor: theme.palette.grey[800]
}));

const StyledChip = styled(Chip)(({ bgcolor }) => ({
  margin: '0 8px 8px 0',
  fontWeight: 'bold',
  color: 'white',
  backgroundColor: bgcolor,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)'
}));

const DivisionCard = ({ division, color, number, icon, title, description, keywords }) => {
  return (
    <StyledCard>
      <NumberBadge color={color}>
        {number}
      </NumberBadge>

      <VerticalBrand>
        HIGUCN
      </VerticalBrand>

      <CardMedia
        component="div"
        sx={{
          height: 224,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: color
        }}
      >
        <IconContainer>
          {icon}
        </IconContainer>
      </CardMedia>

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography 
          variant="h5" 
          component="h3" 
          sx={{ mb: 2, fontWeight: 'bold', position: 'relative', pb: 1 }}
        >
          {title}
          <TitleUnderline />
        </Typography>

        <Typography 
          variant="body2" 
          sx={{ mb: 3, color: 'text.secondary' }}
        >
          {description}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
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
  );
};

const ChinguDivisionsGrid = () => {
  // Division data
  const divisions = [
    {
      id: '01',
      title: 'CHINGU STUDIO',
      icon: '📐',
      description: 'The Studio is a dynamic subdivision dedicated to playful design and conceptualising innovative ideas. We explore the intersection of imagination and functionality to create designs that are both inspiring and practical.',
      color: '#FF6B6B',
      keywords: ['CONCEPT', 'DESIGN', 'PROTOTYPE'],
    },
    {
      id: '02',
      title: 'CHINGU EXPERIENCE',
      icon: '🥽',
      description: 'Harnessing the power of modern technology to bring visions to life. We specialize in utilizing advanced tools such as virtual reality (VR), rendering systems, CNC machines, and 3D printers to create immersive designs.',
      color: '#4ECDC4',
      keywords: ['VR', '3D PRINTING', 'CNC'],
    },
    {
      id: '03',
      title: 'CHINGU TRANSCENDENCE',
      icon: '🏗️',
      description: 'Where imagination meets engineering excellence. We bring prototypes to life, merging creative visions with technical expertise. Our collaborative approach ensures that every concept is transformed into reality.',
      color: '#6C63FF',
      keywords: ['ENGINEERING', 'PRODUCTION', 'REALIZATION'],
    },
    {
      id: '04',
      title: 'ABOUT CHINGU',
      icon: '🔍',
      description: 'At Chingu we believe in bridging the gap between imagination and creation. Our mission is to transform visionary ideas into tangible realities, utilizing art and design in collaboration with latest advancements in technology.',
      color: '#FFD166',
      keywords: ['INNOVATION', 'SUSTAINABILITY', 'TECHNOLOGY'],
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container>
        <Typography 
          variant="h3" 
          component="h2" 
          sx={{ 
            textAlign: 'center', 
            mb: 6, 
            pb: 1, 
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              width: 80,
              height: 4,
              bgcolor: 'grey.800',
              transform: 'translateX(-50%)'
            }
          }}
        >
          OUR DIVISIONS
        </Typography>

        <Grid container spacing={4}>
          {divisions.map((division) => (
            <Grid item xs={12} md={6} key={division.id}>
              <DivisionCard
                division={division.id}
                color={division.color}
                number={division.id}
                icon={division.icon}
                title={division.title}
                description={division.description}
                keywords={division.keywords}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ChinguDivisionsGrid;