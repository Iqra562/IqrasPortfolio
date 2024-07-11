import React from 'react';
import { Box, Container, styled } from '@mui/material';

 const AppContainer = styled(Container)(({ theme }) => ({
  height: '80vh',
  width:"70%",
  backgroundColor: theme.palette.primary.main, 
  marginTop:"50px",
}));

function Projects() {
  return (
    <Box style={{
      height:"80vh"
    }}>

    <AppContainer maxWidth="xl" sx={{ backgroundColor: '', }}>
      <h2 style={{color:"white"}}>
        hellow this is Projects poage
      </h2>
      <div className='' style={{height:""}}></div>
    </AppContainer>
    </Box>
  );
}

export default Projects;
