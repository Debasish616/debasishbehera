import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      {/* Home link removed */}
      
      <div className="nav-links">
      {/* <Link to="/"><h1>hola amigo 👋</h1></Link> */}
      <Link to="/">Genesis</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Blog</Link>
      </div>
     

    </nav>
  );
}

export default NavBar;
