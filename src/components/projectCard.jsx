import React, { useState } from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Box, 
  Chip,
  Grow,
  IconButton,
  Backdrop,
  Modal,
  Fade
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 30px rgba(0, 0, 0, 0.15)',
    '& .media-overlay': {
      opacity: 1,
    }
  },
}));

const CardOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: theme.spacing(3),
  transition: 'background 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)',
  }
}));

const MediaOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(40, 53, 147, 0.2)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease',
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  fontWeight: 600,
  margin: theme.spacing(0.5),
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: 1000,
  maxHeight: '90vh',
  overflowY: 'auto',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[24],
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(4),
  outline: 'none',
  [theme.breakpoints.down('md')]: {
    width: '95%',
    padding: theme.spacing(2),
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  }
}));

const ProjectCard = ({ 
  image, 
  title, 
  category, 
  description, 
  tags, 
  clientName,
  completionDate,
  challenge,
  solution,
  results
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledCard elevation={4}>
        <Box sx={{ position: 'relative', height: 280 }}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{ height: '100%', objectFit: 'cover' }}
          />
          <MediaOverlay className="media-overlay">
            <IconButton 
              onClick={handleOpen}
              sx={{ 
                backgroundColor: 'white', 
                '&:hover': { 
                  backgroundColor: 'white', 
                  transform: 'scale(1.1)' 
                } 
              }}
            >
              <FullscreenIcon />
            </IconButton>
          </MediaOverlay>
          <CardOverlay>
            <Typography variant="overline" sx={{ color: 'white', opacity: 0.8 }}>
              {category}
            </Typography>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
              {title}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1 }}>
              {tags?.slice(0, 3).map((tag, index) => (
                <StyledChip 
                  key={index} 
                  label={tag} 
                  size="small" 
                />
              ))}
              {tags?.length > 3 && (
                <StyledChip 
                  label={`+${tags.length - 3}`} 
                  size="small" 
                  sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                />
              )}
            </Box>
          </CardOverlay>
        </Box>
      </StyledCard>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalContent>
            <CloseButton onClick={handleClose}>
              <CloseIcon />
            </CloseButton>
            
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
              <Box sx={{ flex: '1 1 40%' }}>
                <CardMedia
                  component="img"
                  image={image}
                  alt={title}
                  sx={{ 
                    borderRadius: 2, 
                    height: { xs: 240, md: 400 }, 
                    objectFit: 'cover',
                    mb: 3
                  }}
                />
                <Box sx={{ mb: 3 }}>
                  <Typography variant="overline" color="primary" fontWeight="bold">
                    Project Details
                  </Typography>
                  <Box sx={{ display: 'flex', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', minWidth: 120 }}>
                      Client:
                    </Typography>
                    <Typography variant="body2">{clientName}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', minWidth: 120 }}>
                      Completion:
                    </Typography>
                    <Typography variant="body2">{completionDate}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', minWidth: 120 }}>
                      Category:
                    </Typography>
                    <Typography variant="body2">{category}</Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography variant="overline" color="primary" fontWeight="bold">
                    Technologies Used
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                    {tags?.map((tag, index) => (
                      <Chip 
                        key={index} 
                        label={tag} 
                        size="small" 
                        sx={{ 
                          backgroundColor: (theme) => theme.palette.grey[100],
                          fontWeight: 500
                        }} 
                      />
                    ))}
                  </Box>
                </Box>
              </Box>

              <Box sx={{ flex: '1 1 60%' }}>
                <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom color="primary">
                  {title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {description}
                </Typography>

                <Typography variant="h6" fontWeight="bold" gutterBottom color="primary.dark" sx={{ mt: 4 }}>
                  The Challenge
                </Typography>
                <Typography variant="body1" paragraph>
                  {challenge}
                </Typography>

                <Typography variant="h6" fontWeight="bold" gutterBottom color="primary.dark">
                  Our Solution
                </Typography>
                <Typography variant="body1" paragraph>
                  {solution}
                </Typography>

                <Typography variant="h6" fontWeight="bold" gutterBottom color="primary.dark">
                  Results & Impact
                </Typography>
                <Typography variant="body1">
                  {results}
                </Typography>
              </Box>
            </Box>
          </ModalContent>
        </Fade>
      </Modal>
    </>
  );
};

export default ProjectCard;