import React, { useState } from "react";
import { Box, Card, CardContent, CardMedia, colors, Container, IconButton, Link, styled, Typography } from "@mui/material";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import { HiLink } from "react-icons/hi";
import { IoIosGitBranch } from "react-icons/io";
import CustomProjectDiv from "./CustomProjectDiv";
import { ProjectData } from "./ProjectData";
import { AppContainer } from "../Home/Home";


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
