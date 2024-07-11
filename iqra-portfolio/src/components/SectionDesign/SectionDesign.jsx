import React from 'react';
import { Box, Container, styled } from '@mui/material';

 const AppContainer = styled(Container)(({ theme }) => ({
  height: '80vh',
  width:"70%",
  backgroundColor: theme.palette.primary.main, 
  marginTop:"50px",
}));

function SectionDesign() {
  return (
    <Box style={{
      height:"80vh"
    }}>

    <AppContainer maxWidth="xl" sx={{ backgroundColor: '', }}>
      HELLO 
      <div className='' style={{height:""}}></div>
    </AppContainer>
    </Box>
  );
}

export default SectionDesign;
