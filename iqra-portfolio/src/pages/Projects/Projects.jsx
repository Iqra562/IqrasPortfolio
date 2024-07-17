import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, colors, Container, IconButton, Link, styled, Typography } from "@mui/material";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import myimage from "../../assets/Images/computerGirl.png"
import { HiLink } from "react-icons/hi";
import { IoIosGitBranch } from "react-icons/io";
const AppContainer = styled(Container)(({ theme }) => ({
  width: "70%",
  backgroundColor: theme.palette.primary.main,
  marginTop: "30px",
  minHeight: "80vh",
}));


const StyledCard= styled(Box)({
  position:"relative",
  width:"100%",
  // height:"1200px",
  borderRadius:"3px",
  overflow:"hidden",
  "&:hover .overlay":{
    opacity :0.9
  }

  
})

const CardOverlay=styled(Box)({
  position:"absolute",
  top:0,
  left:0,
  backgroundColor:"#000",
 width:"100%",
 height:"100%",
 display:"flex",
 justifyContent:"center",
 alignItems:"center",
 opacity:0,
 transition: "opacity 0.9s ease" 
})

const ProjectContainer=styled(Box)(({theme})=>({

  border:`1px solid #1c1c1c`, 
  borderRadius:"7px",
  width:'50%',
        backgroundColor:"#0a0a0a",
        padding:"20px",
        [theme.breakpoints.up('xs')]: {
          width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
          width: '100%',
        },
        [theme.breakpoints.up('md')]: {
          width: '50%',
        },
        [theme.breakpoints.up('lg')]: {
          width: '50%',
        },
        
        
      }))
function Projects() {
 

  return (
    <AppContainer>
      <Container disableGutters>
        <CommonHeader PageName="Projects" />
        <Box sx={{marginTop:"20px",paddingBottom:"20px",display:"flex",   flexDirection: {
          xs: 'column',
          sm: 'column', 
          md: 'row',   
          lg: 'row',    
        },gap:"20px"}}>
       <ProjectContainer sx={{
    
       }}>
    <Card   sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row', 
          md: 'row',   
          lg: 'row',    
        },
        gap: '20px',
        backgroundColor: 'inherit',
        boxShadow: 'none',
      }}>


       <StyledCard>
          <CardMedia
          component="img"
          height="200"
          image={myimage}
          alt="Frontend Developer"
          style={{
            height:"100%",
            objectFit:"cover"
          }}
          />
          <CardOverlay className="overlay">
<IconButton
   component="a" 
   href="https://github.com/Iqra562"
   target="_blank" 
   rel="noopener noreferrer"
disableRipple={true}
>
<HiLink style={{color:"#979191"}}/>
</IconButton>
          </CardOverlay>

          
          </StyledCard>
                 
        <CardContent sx={{
          color:"white",
          padding:0,
          width:"100%",
          
        }}>
     <Box sx={{display:"flex"}}>

        <Typography>
        <Link
        href="https://your-link.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        React App
      </Link>

        </Typography>
        <IconButton
   component="a" 
   href="https://github.com/Iqra562"
   target="_blank" 
   rel="noopener noreferrer"
disableRipple={true}
sx={{marginTop:"-5px"}}

>
<IoIosGitBranch fontSize="large" style={{color:"#979191"}}/>
</IconButton>
        </Box>
        <Typography sx={{
          color:"#a3a3a3",
          fontSize:"14px"
        }}>
        eurieurieurie urieuri eurie urieur ieuriurieur urieur urieur urieur urieur urieur urieur eurie urieurieuri
        </Typography>

        <Box sx={{display:"flex",gap:"2px",flexWrap:"wrap",marginTop:"8px"}}>
          <Box sx={{backgroundColor:"#272626",fontWeight:"bold",display:"inline-block",paddingTop:"2px",paddingBottom:"2px",paddingLeft:"10px",paddingRight:"10px",justifyContent:"center",borderRadius:"20px",fontSize:"12px"}}>React</Box>
          <Box sx={{backgroundColor:"#272626",fontWeight:"bold",display:"inline-block",paddingTop:"2px",paddingBottom:"2px",paddingLeft:"10px",paddingRight:"10px",justifyContent:"center",borderRadius:"20px",fontSize:"12px"}}>React</Box>
          <Box sx={{backgroundColor:"#272626",fontWeight:"bold",display:"inline-block",paddingTop:"2px",paddingBottom:"2px",paddingLeft:"10px",paddingRight:"10px",justifyContent:"center",borderRadius:"20px",fontSize:"12px"}}>React</Box>
        </Box>
          </CardContent>
    </Card>


     

       </ProjectContainer>
      
       <ProjectContainer sx={{
    
       }}>
    <Card   sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row', 
          md: 'row',   
          lg: 'row',    
        },
        gap: '20px',
        backgroundColor: 'inherit',
        boxShadow: 'none',
      }}>


       <StyledCard>
          <CardMedia
          component="img"
          height="200"
          image={myimage}
          alt="Frontend Developer"
          style={{
            height:"100%",
            objectFit:"cover"
          }}
          />
          <CardOverlay className="overlay">
<IconButton
   component="a" 
   href="https://github.com/Iqra562"
   target="_blank" 
   rel="noopener noreferrer"
disableRipple={true}
>
<HiLink style={{color:"#979191"}}/>
</IconButton>
          </CardOverlay>

          
          </StyledCard>
                 
        <CardContent sx={{
          color:"white",
          padding:0,
          width:"100%",
          
        }}>
     <Box sx={{display:"flex"}}>

        <Typography>
        <Link
        href="https://your-link.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        React App
      </Link>

        </Typography>
        <IconButton
   component="a" 
   href="https://github.com/Iqra562"
   target="_blank" 
   rel="noopener noreferrer"
disableRipple={true}
sx={{marginTop:"-5px"}}

>
<IoIosGitBranch fontSize="large" style={{color:"#979191"}}/>
</IconButton>
        </Box>
        <Typography sx={{
          color:"#a3a3a3",
          fontSize:"14px"
        }}>
        eurieurieurie urieuri eurie urieur ieuriurieur urieur urieur urieur urieur urieur urieur eurie urieurieuri
        </Typography>

        <Box sx={{display:"flex",gap:"2px",flexWrap:"wrap",marginTop:"8px"}}>
          <Box sx={{backgroundColor:"#272626",fontWeight:"bold",display:"inline-block",paddingTop:"2px",paddingBottom:"2px",paddingLeft:"10px",paddingRight:"10px",justifyContent:"center",borderRadius:"20px",fontSize:"12px"}}>React</Box>
          <Box sx={{backgroundColor:"#272626",fontWeight:"bold",display:"inline-block",paddingTop:"2px",paddingBottom:"2px",paddingLeft:"10px",paddingRight:"10px",justifyContent:"center",borderRadius:"20px",fontSize:"12px"}}>React</Box>
          <Box sx={{backgroundColor:"#272626",fontWeight:"bold",display:"inline-block",paddingTop:"2px",paddingBottom:"2px",paddingLeft:"10px",paddingRight:"10px",justifyContent:"center",borderRadius:"20px",fontSize:"12px"}}>React</Box>
        </Box>
          </CardContent>
    </Card>


     

       </ProjectContainer>
      
       

        
      

        </Box>
      </Container>
    </AppContainer>
  );
}

export default Projects;
