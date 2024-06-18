import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomeComponent from './pages/Home';
import ContactComponent from './pages/Contact';
import NavBar from './pages/Navbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <RoutesWithTransitions />
      </div>
    </Router>
  );
};

const RoutesWithTransitions = () => {
  const location = useLocation();

  return (
    <div className="route-container">
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="slide-up"
        >
            {/* <div className="route-section"> */}
              
          <Routes location={location}>
            <Route exact path="/" element={<HomeComponent />} />
            <Route path="/contact" element={<ContactComponent />} />
          </Routes>
            {/* </div> */}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
