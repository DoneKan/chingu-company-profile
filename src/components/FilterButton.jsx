import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledFilterButton = styled(Button)(({ theme, active }) => ({
  borderRadius: '50px',
  padding: theme.spacing(0.75, 3),
  textTransform: 'none',
  fontWeight: 600,
  margin: theme.spacing(0.5),
  transition: 'all 0.3s ease',
  backgroundColor: active ? theme.palette.primary.main : 'transparent',
  color: active ? 'white' : theme.palette.text.primary,
  border: active ? 'none' : `1px solid ${theme.palette.grey[300]}`,
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.dark : theme.palette.grey[100],
    boxShadow: active ? '0 6px 12px rgba(40, 53, 147, 0.2)' : 'none',
  },
}));

const FilterButton = ({ label, active, onClick }) => {
  return (
    <StyledFilterButton
      active={active ? 1 : 0}
      onClick={onClick}
      disableElevation
    >
      {label}
    </StyledFilterButton>
  );
};

export default FilterButton;