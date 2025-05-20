import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * A reusable image placeholder component that displays an aesthetically pleasing
 * placeholder until actual images are available
 * 
 * @param {Object} props
 * @param {string} props.width Width of the placeholder
 * @param {string} props.height Height of the placeholder
 * @param {string} props.label Text to display in the placeholder
 * @param {string} props.bgColor Background color (defaults to theme primary light)
 * @param {string} props.textColor Text color (defaults to theme primary dark)
 * @param {string} props.borderRadius Border radius of the placeholder
 */
const ImagePlaceholder = ({
  width = '100%',
  height = '300px',
  label = 'Image Coming Soon',
  bgColor,
  textColor,
  borderRadius = '8px'
}) => {
  const theme = useTheme();

  const defaultBgColor = bgColor || theme.palette.primary.light;
  const defaultTextColor = textColor || theme.palette.primary.dark;

  const PlaceholderContainer = styled(Box)(({ theme }) => ({
    width: width,
    height: height,
    backgroundColor: defaultBgColor,
    borderRadius: borderRadius,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: theme.shadows[4],
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `repeating-linear-gradient(
        45deg,
        ${defaultBgColor},
        ${defaultBgColor} 10px,
        ${theme.palette.background.default} 10px,
        ${theme.palette.background.default} 20px
      )`,
      opacity: 0.15,
    }
  }));

  const IconContainer = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    '& svg': {
      fontSize: '3rem',
      color: defaultTextColor,
    }
  }));

  return (
    <PlaceholderContainer>
      <IconContainer>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM13.96 12.29L11.21 15.83L9.25 13.47L6.5 17H17.5L13.96 12.29Z"
            fill={defaultTextColor} />
        </svg>
      </IconContainer>
      <Typography
        variant="h6"
        component="div"
        color={defaultTextColor}
        sx={{ fontWeight: 'medium', textAlign: 'center', px: 2 }}
      >
        {label}
      </Typography>
    </PlaceholderContainer>
  );
};

export default ImagePlaceholder;