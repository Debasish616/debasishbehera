import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="page-container"> {/* Wrap everything in a flex container */}
      <div className="home-container">
        <h1 className="greeting">hola amigo 👋</h1>
        <p className="intro">
        i’m debasish behera, your friendly neighborhood blockchain guy.
i do fintech things, blockchain stuff, and occasionally pretend to know what i'm doing.
right now, i’m focused on celeriz – think global payments, but less paperwork and no headache.

based between berlin and delhi, because why choose just one timezone to be confused in?
        </p>

        <p>when i’m not working on cool tech, you can find me geeking out on all things crypto, teaching my laptop new tricks (aka coding), or explaining to my friends why blockchain isn't just for buying pizzas with bitcoin.

currently, i’m busy creating solutions that make global payments simple. in other words, less crying over fees, more sending money like it's a text message.</p>

        {/* Featured Projects Section */}
        <section className="projects-preview">
          <h2>Featured Projects</h2>
          <div className="projects-list">
            <div className="project-card">
              <h3>CeleriZ</h3>
              <p>A global payment app simplifying cross-border transactions with Stellar Blockchain.</p>
              <Link to="/projects">View More</Link>
            </div>
            <div className="project-card">
              <h3>Lunar Hazard Mapping</h3>
              <p>Developed a high-precision hazard map using CNNs, TensorFlow, PyTorch, and Quantum GIS for safe lunar landings.</p>
              <Link to="/projects">View More</Link>
            </div>
          </div>
        </section>

        {/* Featured Blogs Section */}
        <section className="blogs-preview">
          <h2>Recent Blogs</h2>
          <div className="blogs-list">
            <div className="blog-card">
              <h3>Why I am building CeleriZ</h3>
              <p>How blockchain can simplify cross-border payments.</p>
              <Link to="/blog">Read More</Link>
            </div>
            <div className="blog-card">
              <h3>How Web3 is Changing Finance</h3>
              <p>An exploration of decentralized finance and its impact on fintech.</p>
              <Link to="/blog">Read More</Link>
            </div>
          </div>
        </section>

       
      </div>
    </div>
  );
}

export default Home;
