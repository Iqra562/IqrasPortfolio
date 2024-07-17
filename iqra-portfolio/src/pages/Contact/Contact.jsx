import { Box, Container, IconButton, styled, Typography } from "@mui/material";
import React from "react";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import colors from "../../ThemeProvider/colors";
import { RxLinkedinLogo } from "react-icons/rx";
import { ImWhatsapp } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const AppContainer = styled(Container)(({ theme }) => ({
  width: "70%",
  backgroundColor: theme.palette.primary.main,
  marginTop: "30px",
  minHeight: "80vh",
  // marginBottom: "100px"
}));
const StackBox = styled(Box)(({theme})=>({
  backgroundColor: "#0a0a0a", 
  display: "flex", 
  flexDirection:"row",
  gap:"16px",
  justifyContent: "start",
   alignItems: "center",
   borderRadius: "4px", 
   padding: "25px",
   flexBasis: "40%", 
  
  [theme.breakpoints.down('lg')]: {
    flexBasis:"40%"
  },
  [theme.breakpoints.down('md')]: {            
    flexBasis:"100%"
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection:"column",
    flexBasis:"100%",
    padding:"20px",
    gap:"10px",
    justifyContent:"center",
    alignItems:"center"
},
  
}))

const IconButtonContainer = styled(IconButton)(() => ({
  color: '#dedede',
  transition: 'margin-top 0.3s linear, background-color 0.3s linear',
  backgroundColor: '#1f1e1e',
  padding: "20px",
  '&:hover': {
    backgroundColor: '#302f2f',
  },
}))

function Contact() {
  return (
    <AppContainer>
      <Container disableGutters >

        <CommonHeader PageName="About" />
        <Box sx={{
          display: "flex",
          flexDirection: {
            sm: "column",
            md: "row",
          },
          flexBasis: "100%",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "25px",
          marginTop: "45px",
              paddingBottom:"20px"
        }}>
          <StackBox >
            <Box>
              <IconButtonContainer
                component="a"
                href="https://www.linkedin.com/in/iqra-khaliq-a90484253"
                target="_blank"
                rel="noopener noreferrer"
                disableRipple={true}

              >
                <ImWhatsapp fontSize="large" />
              </IconButtonContainer>
            </Box>
            <Box > <Typography sx={{ color: "#dedede" }}>0324-92916000</Typography></Box>
          </StackBox>
          <StackBox > 
            <Box>
              <IconButtonContainer
                component="a"
                href="https://www.linkedin.com/in/iqra-khaliq-a90484253"
                target="_blank"
                rel="noopener noreferrer"
                disableRipple={true}

              >
                <AiOutlineMail fontSize="large" />
              </IconButtonContainer>
            </Box>
            <Box> <Typography sx={{ color: "#dedede",fontSize:"12px" }}>iqra44938@gmail.com</Typography></Box>
          </StackBox>
          <StackBox >
            <Box>
              <IconButtonContainer
                component="a"
                href="https://www.linkedin.com/in/iqra-khaliq-a90484253"
                target="_blank"
                rel="noopener noreferrer"
                disableRipple={true}

              >
                <RxLinkedinLogo fontSize="large" />
              </IconButtonContainer>
            </Box>
            <Box> <Typography sx={{ color: "#dedede" }}>

              IQRA KHALIQ
            </Typography>
            </Box>
          </StackBox>
          <StackBox >
            <Box>
              <IconButtonContainer
                component="a"
                href="https://github.com/Iqra562"
                target="_blank"
                rel="noopener noreferrer"
                disableRipple={true}

              >
                <FaGithub fontSize="large" />
              </IconButtonContainer>
            </Box>
            <Box > <Typography sx={{ color: "#dedede" }}>

              Iqra562
            </Typography>
            </Box>
          </StackBox>


        </Box>

      </Container>
    </AppContainer>
  )
}
export default Contact;