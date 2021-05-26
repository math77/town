import ReactPlayer from 'react-player';

import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-free/js/all.js';

import video from './images/towncvideo.mp4';


import './App.css';
import './Navbar.css';

function App() {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" id="logo">
            TOWN COMPANY
          </Link>
        </div>
        <div className="navbar-start">
          <Link className="navbar-item" id="about-navbar" to="/about">About us</Link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item" id="btn-navbar">
            <div class="buttons">
              <a class="button is-white is-outlined is-rounded" href="https://form.typeform.com/to/v4G4wIXa" target="_blank" rel="noreferrer">
                Join community
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section className="section is-small" id="banner-welcome">
        <div className="has-text-centered">
          <h1 className="Big-text">Build</h1>
          <h1 className="Big-text">Your</h1>
          <h1 className="Big-text">City</h1>
        </div>
        <div className="has-text-centered" id="explain-1">
          <p className="is-size-5">Citizen-led collaborative cities.</p>
        </div>
      </section>
      <section className="section is-small" id="back-video">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <ReactPlayer
                controls 
                url={video} 
                width="100%" 
                height="100%" 
                config={{ file: { 
                  attributes: {
                  controlsList: 'nodownload nofullscreen noremoteplayback',
                  disablePictureInPicture: true,
                  onContextMenu: e => e.preventDefault()
                }
              }}} />
            </div>
          </div>
        </div>
      </section>
      <section className="section is-medium" id="banner-us">
        <div className="container">
          <h2 style={{ fontSize: '5rem' }}>Who we are</h2>
          <div style={{ display: 'flex' }}>
            <div>
              <p style={{ fontSize: '1.6rem', textAlign: 'justify' }}>
                We are a globally based company that believes that every city can offer everything 
                to everyone, as long as it is created and constantly improved by everyone.
              </p>
            </div>
            <div id="content-who">
              <p style={{ fontSize: '1.6rem', textAlign: 'justify' }}>
                Our most intimate vision is that in the future each city can deeply reflect 
                the community of people who live in it and everyone can unlock their full 
                potential and have the opportunity to have and be more. 
              </p>
            </div>
          </div>
          <div className="has-text-centered" style={{ marginTop: '35px' }}>
            <Link className="button is-black is-outlined is-rounded" to="/about">
              Learn more
            </Link>
          </div>
        </div>
      </section>
      <section className="section is-small" id="banner-building">
        <div className="container">
          <h2 className="has-text-centered" style={{ fontSize: '5rem' }}>What we are building</h2>
          <p className="is-size-4 has-text-centered" style={{textAlign: 'justify'}}>
            We are rethinking from scratch the entire infrastructure that will support and enable local governments and citizens 
            to work together to design, build, and lead the way in building cities that offer everything for everyone.
          </p>
        </div>
      </section>
      <section className="section is-small">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box is-shadowless" id="box1">
              <p class="title has-text-centered is-size-2" style={{fontWeight: '700', color: '#ffffff'}}>Joint design, always!</p>
              <div className="content has-text-centered">
                <p className="tile-text" style={{ textAlign: 'justify', color: '#ffffff' }}>
                  We believe and religiously follow the principle that the best cities are built on the vision and direct work of their citizens. Led by this principle we are building a process that supports and facilitates citizens to think, define and build together their vision for the community in which they live.
                </p>
                
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box is-shadowless" id="box2">
              <p class="title has-text-centered is-size-2" style={{fontWeight: '700', color: '#ffffff'}}>Local power is always better.</p>
              <div className="content has-text-centered">
                <p className="tile-text" style={{ color: '#ffffff', textAlign: 'justify' }}>
                  Each city has a universe inside of it. Culture, diversity, people, relationships, economy and values are unique to each place and if we want to solve the most latent problems of our urban life and improve our cities for everyone, we first need to think small and we need to think local.
                </p>
                
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box is-shadowless" id="box3">
              <p class="title has-text-centered is-size-2" style={{fontWeight: '700', color: '#ffffff'}}>Mutual support defines humans and also defines us.</p>
              <div className="content has-text-centered">
                <p className="tile-text" style={{ color: '#ffffff', textAlign: 'justify' }}>
                  A true joint construction requires above all that everyone understands his or her role in the process and that there is sincere support among all. We deeply believe in this value and want to support and be supported by local citizens, organizations, businesses, and government to better build a city that offers everything for everyone.
                </p>
                
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article className="tile is-child box is-shadowless" id="box4">
              <p className="title has-text-centered is-size-2" style={{fontWeight: '700', color: '#000000'}}>A very long-term commitment.</p>
              <div className="content has-text-centered">
                <p className="tile-text" style={{ color: '#000000', textAlign: 'justify' }}>
                  We all know that cities are complex by design and that each one faces unique problems that are difficult and often expensive to solve for already strained public budgets. We empathetically understand this situation and believe that the best approach to improving our cities is to take one step at a time and reject any kind of megalomaniac project that only makes things worse than they already are.
                </p>
                
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section is-medium" id="jacobs-quote">
        <div className="container">
          <h4 className="has-text-centered" style={{ fontSize: '2.1rem' }}>
            "Cities have the capability of providing something for everybody, only because, and only when, they are <span style={{ color: '#2ecc71' }}>created by everybody</span>."
          </h4>
        </div>
        <p className="is-size-5 has-text-centered">Jane Jacobs</p>
      </section>
      <section className="section is-small" style={{ backgroundColor: '#131617' }}>
        <p className="title is-size-1" style={{fontWeight: '700', color: '#ffffff'}}>You + us = change.</p>
        <div className="content">
          <div style={{ width: '89%' }}>
            <p className="tile-text is-size-5" style={{ color: '#ffffff', textAlign: 'justify', marginBottom: '33px' }}>
              We are bringing together a diverse community of people who believe there is great work to be done in our cities so that they can offer everything for everyone. 
              We hope that everyone will bring to the table their visions, opinions, ideas, challenges and opportunities that they see in their city and collaborate deeply 
              with us to build products and to better understand how we can help everyone.
            </p>
            <p className="tile-text is-size-5" style={{ color: '#ffffff', textAlign: 'justify', marginBottom: '33px' }}>
              So if you want to be a vector of change for your city and for cities around the world, please join our community 
              and collaborate with us on this amazing journey (and, of course, get some basic but heartfelt gifts)<span style={{ color: '#ff4365', fontSize: '21px' }}>&#10084;</span>.
            </p>
            <a class="button is-white is-outlined is-rounded" href="https://form.typeform.com/to/v4G4wIXa" target="_blank" rel="noreferrer">
              Join community
            </a>
          </div>
        </div>
      </section>
      <footer className="footer" style={{ backgroundColor: '#000000', padding: '20px' }}>
        <div className="content has-text-centered">
          <h5 id="logo-footer" style={{ color: '#ffffff' }}>TOWN COMPANY</h5>
          <a href="https://twitter.com/towncocompany" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter" style={{ color: '#ffffff', fontSize: '1.5rem' }}></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
