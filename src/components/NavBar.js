import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      {/* Home link removed */}
      
      <div className="nav-links">
      {/* <Link to="/"><h1>hola amigo 👋</h1></Link> */}
      <Link to="/">genesis</Link>
        <Link to="/projects">projects</Link>
        <Link to="/blog">blog</Link>
      </div>
     

    </nav>
  );
}

export default NavBar;
