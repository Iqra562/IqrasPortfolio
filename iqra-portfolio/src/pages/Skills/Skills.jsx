 import { Box, Container, styled, Typography, } from "@mui/material";
 import "./Skills.css"
import CustomBox from "./CustomBox";
import  {skillIcons}  from "./SkillData";
const AppContainer = styled(Container)(({ theme }) => ({
  width: "70%",
  backgroundColor: theme.palette.primary.main,
  marginTop: "30px",
  minHeight: "80vh",
  // marginBottom: "100px"
}));
const HeadingBox = styled(Box)({
  position: "relative",
  top: "10px",
  
});


const styles = {
  heading: {
    color: "#dedede",
    position: "relative",
    display: "inline-block",
    '::after': {
      content: '""',
      display: "block",
      width: "25%",
      height: "2px",
      backgroundColor: "#69b6fa",
      position: "absolute",
      bottom: "6px",
      left: "41px",
      marginLeft:"10%"
      
    },
  },
};



function Skills() {
  return (
    <AppContainer>
      <Container disableGutters>
        <HeadingBox>

          <Typography sx={styles.heading} className="heading">
            Skills
          </Typography>
        </HeadingBox>
        <Box sx={{backgroundColor:"", display: "flex",justifyContent:"flex-start" ,flexWrap:"wrap",gap:"20px",marginTop:"10px"}}>
{
   skillIcons.map((item,index)=>(
 <CustomBox  key={index}  icon={item.icon} iconName={item.name} />
   ))
 }


         </Box>
       </Container>
  </AppContainer>
  )
}
export default Skills;



