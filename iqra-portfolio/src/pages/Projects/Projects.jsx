import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, colors, Container, IconButton, Link, styled, Typography } from "@mui/material";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import myimage from "../../assets/Images/computerGirl.png"
import { HiLink } from "react-icons/hi";
import { IoIosGitBranch } from "react-icons/io";
import CustomProjectDiv from "./CustomProjectDiv";
import { ProjectData } from "./ProjectData";
const AppContainer = styled(Container)(({ theme }) => ({
  width: "70%",
  backgroundColor: theme.palette.primary.main,
  marginTop: "30px",
  minHeight: "80vh",
}));


function Projects() {
 

  return (
    <AppContainer>
      <Container disableGutters>
        <CommonHeader PageName="Projects" />
        <Box sx={{marginTop:"20px",paddingBottom:"20px",display:"flex",   flexDirection:"column",gap:"20px"}}>

      {
        ProjectData.map((item,index)=>(

          <CustomProjectDiv key={index} data={item}/>
        ))
      }

        
      

        </Box>
      </Container>
    </AppContainer>
  );
}

export default Projects;
