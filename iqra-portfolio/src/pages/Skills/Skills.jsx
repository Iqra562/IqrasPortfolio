 import { Box, Container, styled, Typography, } from "@mui/material";
 import "./Skills.css"
import CustomBox from "./CustomBox";
import  {skillIcons}  from "./SkillData";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import  {AppContainer} from "../Home/Home"
// const AppContainer = styled(Container)(({ theme }) => ({
//   width: "70%",
//   backgroundColor: theme.palette.primary.main,
//   marginTop: "30px",
//   minHeight: "80vh",
//   // marginBottom: "100px"
// }));


function Skills() {
  return (
    <AppContainer>
      <Container disableGutters>
        <CommonHeader PageName="Skills"/>
      
        <Box sx={{ display: "flex",justifyContent:"flex-start" ,flexWrap:"wrap",gap:"20px",marginTop:"10px"}}>
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



