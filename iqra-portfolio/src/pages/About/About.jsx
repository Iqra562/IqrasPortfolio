import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import computerGijrl from '../../assets/Images/computerGirl.png'
const AppContainer = styled(Container)(({ theme }) => ({
  width: "70%",
  backgroundColor: theme.palette.primary.main,
  marginTop: "30px",
  minHeight: "80vh",
  // marginBottom: "100px"
}));



function About(){
    return(
      <AppContainer>
<Container disableGutters style={{backgroundColor:""}}>

<CommonHeader PageName="About"/>
<Box sx={{
  display:"flex",
  justifyContent:"space-between"
}}>
<Box sx={{
  width:"30%",
  backgroundColor:"red"
}}>
<Typography>
  Iqra_
</Typography>
</Box>
<Box sx={{
  width:"30%",
  backgroundColor:"red"
}}>
j
</Box>
</Box>

</Container>
      </AppContainer>
    )
}
export default About;