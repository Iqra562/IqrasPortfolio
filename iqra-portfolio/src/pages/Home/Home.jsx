import React from 'react';
import { Box, Container, Typography, styled } from '@mui/material';
import { motion } from 'framer-motion';
import './Home.css';

const AppContainer = styled(Container)(({ theme }) => ({
  width: "70%",
  backgroundColor: theme.palette.primary.main,
  marginTop: "30px",
 minHeight:"80vh",
  // marginBottom: "100px"
}));
 
function Home() {
  return (
    <Box>
      <AppContainer sx={{ backgroundColor: '' }}>
        <Container style={{ backgroundColor: "", display: "flex", flexDirection: "row" }}>
          <Box style={{ backgroundColor: "", width: "50%", padding: "40px" ,marginTop:"60px",marginBottom:"60px"}}>
            <Box style={{display:"flex",alignItems:"center",fontSize:""}}>
            <Typography  style={{ color: '#dedede', fontSize: '30px',  fontFamily: '' }}>
              HI
              <motion.span
                style={{ color: '#69b6fa', display: 'inline-block', fontSize: '20px' }}
                animate={{ opacity: [9, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, repeatType: 'reverse' }}
              >
                _
              </motion.span>
              
            </Typography>
               <Typography variant='h4' style={{color:"#dedede",marginLeft:"10px"}}>
              I'M   IQRA 
                </Typography> 
                </Box>
            <Typography variant='h2' style={{ color: "white", marginTop: "", fontSize: '',fontWeight:"bold" }}>
             
            
              
              <div className="gradient-text">
              Frontend Developer
              </div>
            </Typography>
        
            <Typography style={{ marginTop: "20px" ,color:"#a3a3a3"}}>
              Crafting advanced web solutions that combine creative flair with practical functionality, aimed at delivering captivating user interactions.
            </Typography>
          </Box>
        </Container>
      </AppContainer>
    </Box>
  );
}

export default Home;
