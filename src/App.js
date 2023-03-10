import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ProjectGallery from './components/pages/Project-Gallery';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume'
import "./App.css";

function App() {
  return (
    <Router>
      <div class="bg-info" >
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project-gallery" element={<ProjectGallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

