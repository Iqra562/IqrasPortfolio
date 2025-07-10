import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import usePageTracking from './hooks/usePageTracking';

function App() {
//    usePageTracking();
  return (
   
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
    
  );
}

export default App;
