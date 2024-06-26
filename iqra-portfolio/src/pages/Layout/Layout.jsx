import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import './Layout.css' 
import { Container } from "@mui/material";
import SectionDesign from "../../components/SectionDesign/SectionDesign";
function Layout(){
return(
    <>
    <div className="main">

  <ResponsiveAppBar/>
    {/* <Outlet/> */}
<SectionDesign/>
    </div>
    </>
)
}
export default Layout;