import React from 'react';
import { Container, styled } from '@mui/material';

const AppContainer = styled(Container)(({ theme }) => ({
  height: '100px',
  width:"70%",
//   backgroundColor: theme.palette.primary.main, 
  marginTop:"20px"
  // Ensure that `status.danger` exists in your theme
}));

function SectionDesign() {
  return (
    <AppContainer maxWidth="lg" sx={{ backgroundColor: '', }}>
      HELLO 
    </AppContainer>
  );
}

export default SectionDesign;
