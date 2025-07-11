import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import usePageTracking from './hooks/usePageTracking';
  import ReactGA from 'react-ga';
import { useEffect } from "react";
ReactGA.initialize('G-1TSD80KJ1L');

function App() {
    // usePageTracking();
     useEffect(() => {
     ReactGA.send({ hitType: "pageview", page: window.location.pathname });
   }, []);

//   function Tracker() {
//   const location = useLocation();
  
//   useEffect(() => {
//     const pageName = getPageName(location.pathname);
//     ReactGA.pageview(location.pathname, [], {
//       page_title: document.title,
//       page_name: pageName
//     });
//   }, [location]);
  
//   return null;
// }

   
  return (
    
    <>
          <Tracker />
    <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="about" element={<About />} /> */}
            <Route path="skills" element={<Skills/>} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route  path="home" element={<Home />} />
          </Route>
        </Routes>
    </>

    
  );
}
// function getPageName(pathname) {
//   const nameMap = {
//     '/': 'Home',
//     '/skills': 'Skills',
//     '/projects': 'Projects',
//     '/contact': 'Contact'
//   };
  
//   return nameMap[pathname] || pathname;
// }
export default App;
