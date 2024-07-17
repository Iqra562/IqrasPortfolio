import { Box, Container, IconButton, styled, Typography } from "@mui/material";
import React from "react";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import computerGijrl from '../../assets/Images/computerGirl.png'
import colors from "../../ThemeProvider/colors";
import { RxLinkedinLogo } from "react-icons/rx";
import { ImWhatsapp } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppContainer = styled(Container)(({ theme }) => ({
  width: "70%",
  backgroundColor: theme.palette.primary.main,
  marginTop: "30px",
  minHeight: "80vh",
  // marginBottom: "100px"
}));

const IconButtonContainer = styled(IconButton)(()=>({
  color: '#dedede',
  transition: 'margin-top 0.3s linear, background-color 0.3s linear',
  backgroundColor: '#1f1e1e',
  padding:"20px",
  '&:hover': {
    backgroundColor: '#302f2f',
  },
}))

function Contact(){
    return(
      <AppContainer>
<Container disableGutters >

<CommonHeader PageName="About"/>
<Box sx={{
  display:"flex",
  flexDirection:{
    sm:"column",
    md:"row",

  },
  flexBasis:"100%",
  justifyContent:"space-between",
  flexWrap:"wrap",
  gap:"25px",
  marginTop:"45px"
}}>
<Box sx={{backgroundColor:"#0a0a0a",display:"flex",justifyContent:"start",alignItems:"center",flexBasis:"40%",borderRadius:"4px",padding:"25px"}}>
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
     <Box sx={{marginLeft:"20px"}}> <Typography sx={{color:"#dedede"}}>0324-92916000</Typography></Box>
</Box>
<Box sx={{backgroundColor:"#0a0a0a",display:"flex",justifyContent:"start",alignItems:"center",width:"40%",height:"",borderRadius:"4px",padding:"25px"}}>
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
     <Box sx={{marginLeft:"20px"}}> <Typography sx={{color:"#dedede",fontSize:"13px"}}>iqra44938@gmail.com</Typography></Box>
</Box>
<Box sx={{backgroundColor:"#0a0a0a",display:"flex",justifyContent:"start",alignItems:"center",width:"40%",height:"",borderRadius:"4px",padding:"25px"}}>
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
     <Box sx={{marginLeft:"20px"}}> <Typography sx={{color:"#dedede"}}> 
     
      IQRA KHALIQ
                            </Typography>
                            </Box>
</Box>
<Box sx={{backgroundColor:"#0a0a0a",display:"flex",justifyContent:"start",alignItems:"center",width:"40%",height:"",borderRadius:"4px",padding:"25px"}}>
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
     <Box sx={{marginLeft:"20px"}}> <Typography sx={{color:"#dedede"}}> 
     
      Iqra562
                            </Typography>
                            </Box>
</Box>


</Box>

</Container>
      </AppContainer>
    )
}
export default Contact;