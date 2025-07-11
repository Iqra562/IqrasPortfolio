import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import usePageTracking from './hooks/usePageTracking';
import ReactGA from "react-ga4";
import { useEffect } from "react";

function App() {
    const location = useLocation();
    // usePageTracking();

  useEffect(() => {
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
  title: document.title,
  location: window.location.href,
});
  }, [location]);


   
  return (
    
    <>
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

export default App;
