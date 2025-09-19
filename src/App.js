import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Work from './Work';
import Blog from './Blog';
import Contact from './Contact';

function HomeHero({ orgName }) {
  return (
    <div className="Home-hero">
      <div className="Home-hero-bg"></div>
      <NavBar orgName={orgName} centerOnHome={true} />
    </div>
  );
}

function App() {
  const orgName = 'Liria BD';
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div className="Portfolio">
      {isHome && <HomeHero orgName={orgName} />}
      {!isHome && <NavBar orgName={orgName} centerOnHome={false} />}
      <main className={isHome ? 'Home-content' : 'Page-content'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
