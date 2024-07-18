import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./ThemeProvider/AppThemeProvider";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
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
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
