import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import './Layout.css' 
function Layout(){
return(
    <>
  <ResponsiveAppBar/>
    {/* <Outlet/> */}
    </>
)
}
export default Layout;