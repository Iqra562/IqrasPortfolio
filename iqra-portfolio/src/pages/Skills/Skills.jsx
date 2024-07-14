import { Box, Container, IconButton, styled, Typography ,Stepper, Step, StepLabel,} from "@mui/material";
import "./Skills.css"
import { FaHtml5 } from "react-icons/fa6";
import JavascriptIcon from '@mui/icons-material/Javascript';
const AppContainer = styled(Container)(({ theme }) => ({
    width: "70%",
    backgroundColor: theme.palette.primary.main,
    marginTop: "30px",
   minHeight:"80vh",
    // marginBottom: "100px"
  }));
  const HeadingBox = styled(Box)({
position:"relative",
top:"10px"  
  });
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

  const styles = {
    heading: {
      
      color: "#dedede",
      // marginLeft: "-30px",
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
        left:"41px",
      },
    },
  };

const CustomStepIcon = () => {
  return <div />;
};

function Skills(){
    return(
      <AppContainer>
      <Container disableGutters  sx={{
        width:"100%",
        
      }}>
<HeadingBox>

<Typography sx={styles.heading} className="heading">
  Skills
</Typography>
</HeadingBox>
<Box sx={{display:"flex"}}>
  <Box sx={{
    // backgroundColor:"#0f0f0f",
    width:"20%",
    border:"1px solid #272626",
    display:"flex",
    borderRadius:"5px",
    flexDirection:"column",
    alignItems:"center",
    marginTop:"30px",
    padding:"20px",
    gap:"10px"
  }}>
    <IconButton sx={{ color: "white", fontSize: "60px", backgroundColor: "  " }} style={{fontSize:""}}>
    <FaHtml5 />
    </IconButton>
  {/* <Typography sx={{color:"white"}}>
    JS
  </Typography> */}
  </Box>


  {/* <Box sx={{ width: '100%', mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Skills
      </Typography>
      <Stepper activeStep={-1} orientation="vertical">
        {skills.map((skill, index) => (
          <Step sx={{backgroundColor:"",color:"white"}}>
            <StepLabel StepIconComponent={CustomStepIcon} sx={{color:"white"}}>{skill}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box> */}
</Box>
      </Container>
      </AppContainer>
    )
}
export default Skills;