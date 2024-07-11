import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import './Layout.css' 
import { Container } from "@mui/material";
import SectionDesign from "../../components/SectionDesign/SectionDesign";
function Layout(){
return(
    <>
    {/* <div className="main"> */}

  <ResponsiveAppBar/>
{/* <SectionDesign/> */}
<div className="main" style={{paddingBottom:"50px"}}>
  <Outlet/>

</div>
    {/* </div> */}
    </>
)
}
export default Layout;