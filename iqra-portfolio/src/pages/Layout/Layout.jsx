import { Outlet, useLocation } from "react-router-dom";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import './Layout.css' 
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Box } from "@mui/material";
function Layout(){
  const location = useLocation();
return(
    <>
    {/* <div className="main"> */}

  <ResponsiveAppBar/>
{/* <SectionDesign/> */}
<div className="main" style={{paddingBottom:"50px"}}>
<TransitionGroup component={null}>

        <CSSTransition
          key={location.key}
          timeout={1000}
          classNames="slide-up"
          >

            <Box className="container">

  <Outlet/>
            </Box>

          </CSSTransition>
          </TransitionGroup>

</div>
    {/* </div> */}
    </>
)
}
export default Layout;