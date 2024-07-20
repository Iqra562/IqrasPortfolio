import React from 'react';
import { Box, Container, Typography, styled,useMediaQuery,useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Home.css';
export  const AppContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  marginTop: "30px",
  minHeight: "80vh",
  width: "70%",
  [theme.breakpoints.down('sm')]: {
    width: '90%',
  },
}));

// marginBottom: "100px"
const ContentBox = styled(Box)(({ theme }) => ({
width: "50%",
 padding: "50px" ,
marginTop:"60px",

  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '5px',
  },
  [theme.breakpoints.down('xs')]: {
    width: '100%',
    padding: '0px',
    '&.MuiBox-root': { 
  padding: '0px',
},
  },
}));
const IconBox = styled(Box)(({ theme }) => ({
  marginTop: "25px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.down('sm')]: {
    justifyContent: "center",
  },
}));

const IconButtonContainer = styled(IconButton)(()=>({
  color: 'white',
  transition: 'margin-top 0.3s linear, background-color 0.3s linear',
  backgroundColor: '#1f1e1e',
  padding:"8px",
  '&:hover': {
    backgroundColor: '#302f2f',
    marginTop: '-10px',
  },
}))
 
function Home() {
  return (
    // <Box>
      <AppContainer >
        <Container  disableGutters style={{ display: "flex", flexDirection: "row", }}>
          <ContentBox>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: 'center',sm:"left"  } }}>

            <Typography  variant='h4' sx={{ color: '#dedede' ,fontSize: {
                    xs: '25px', 
                    sm: '34px',  
                  }}}>
              HI
              <motion.span
                style={{ color: '#69b6fa', fontSize: '20px' }}
                animate={{ opacity: [9, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, repeatType: 'reverse' }}
              >
                _
              </motion.span>
              
            </Typography>
               <Typography  sx={{color:"#dedede",marginLeft:"10px", fontSize: {
                    xs: '25px', 
                    sm: '34px',  
                  }}}>
              I'M   IQRA 
                </Typography> 
                </Box>
                <Box sx={{textAlign:{xs:"center",sm:"left"} }}>

            <Typography className='gradient-text' variant='' sx={{fontWeight:"bold",lineHeight:{
              xs:'45px',
              sm:'68px',
              md:'68px',
              lg:'68px',
              xl:'68px' 
            }  ,  fontSize: {
                    xs: '35px', 
                    sm: '60px',  
                    md: '60px',    
                    lg: '60px',  
                    xl: '60px'  
                  },}}>
             
            
              
              Frontend Developer
            </Typography>
        
            </Box>
            <Typography sx={{
                marginTop: "20px",
                color: "#a3a3a3",
                textAlign: {
                  xs: 'center', 
                  sm: 'left',
                  md:'left',
                  lg:'left'
                }
              }}
>
              Crafting advanced web solutions that combine creative flair with practical functionality, aimed at delivering captivating user interactions.
            </Typography>
            <IconBox >
            <IconButtonContainer
             component="a" 
             href="https://github.com/Iqra562"
             target="_blank" 
             rel="noopener noreferrer"
      disableRipple={true}
    
    >
      <GitHubIcon fontSize="medium" />
    </IconButtonContainer>
    <IconButtonContainer
    component="a" 
    href="https://www.linkedin.com/in/iqra-khaliq-a90484253"
    target="_blank" 
    rel="noopener noreferrer"
      disableRipple={true}
    
    >
      <LinkedInIcon fontSize="medium" />
    </IconButtonContainer>

          </IconBox>

          </ContentBox>
       
        </Container>
      </AppContainer>
    // </Box>
  );
}

export default Home;
