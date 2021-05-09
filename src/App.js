import ReactPlayer from 'react-player';

import { Link } from 'react-router-dom';

import video from './images/newvideotowebpage1-03-05.mp4';
import colab2 from './images/colab6.png';
import longterm from './images/longterm.png';
import deal from './images/deal.png';
import powerlocal from './images/powerlocal.png';


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
          <h1 className="Big-text">You</h1>
          <h1 className="Big-text">City</h1>
        </div>
        <div className="has-text-centered" id="explain-1">
          <p className="is-size-5">It is the time to make cities what we want them to be.</p>
        </div>
      </section>
      <section className="section is-small" id="back-video">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <ReactPlayer url={video} width="100%" height="100%" controls />
            </div>
          </div>
        </div>
      </section>
      <section className="section is-small" id="banner-us">
        <h2 className="has-text-centered" style={{ fontSize: '5rem' }}>An urban planner who does everything except plan.</h2>
      </section>
      <section className="section is-mall">
        <div class="tile is-parent">
          <article class="tile is-child box is-shadowless" id="box0">
            <p class="title is-size-2" style={{fontWeight: '700'}}>Who we are</p>
            <div className="content">
              <p className="tile-text" style={{ textAlign: 'justify' }}>
                We believe and religiously follow the principle that the best cities are built on the vision and direct work of their citizens. Led by this principle we are building a process that supports and facilitates citizens to think, define and build together their vision for the community in which they live.
              </p>
            </div>
          </article>
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
                <img src={colab2} width="600px" alt="Collaboration win" />
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
                <img src={powerlocal} width="250px" alt="Local power win" />
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
                <img src={deal} width="300px" height="300px" alt="Deal win" />
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article className="tile is-child box is-shadowless" id="box4">
              <p className="title has-text-centered is-size-2" style={{fontWeight: '700', color: '#ffffff'}}>A very long-term commitment.</p>
              <div className="content has-text-centered">
                <p className="tile-text" style={{ color: '#ffffff', textAlign: 'justify' }}>
                  We all know that cities are complex by design and that each one faces unique problems that are difficult and often expensive to solve for already strained public budgets. We empathetically understand this situation and believe that the best approach to improving our cities is to take one step at a time and reject any kind of megalomaniac project that only makes things worse than they already are.
                </p>
                <img src={longterm} width="340px" style={{ marginTop: '30px' }} alt="Long-term win" />
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section is-medium" id="jacobs-quote">
        <h4 className="is-size-1 has-text-centered">
          "Cities have the capability of providing something for everybody, only because, and only when, they are <span style={{ color: '#2ecc71' }}>created by everybody</span>."
        </h4>
        <p className="is-size-5 has-text-centered">Jane Jacobs</p>
      </section>
      <section className="section is-small" style={{ backgroundColor: '#131617' }}>
        <p className="title is-size-1" style={{fontWeight: '700', color: '#ffffff'}}>You + us = change.</p>
        <div className="content">
          <div style={{ width: '89%' }}>
            <p className="tile-text is-size-5" style={{ color: '#ffffff', textAlign: 'justify', marginBottom: '33px' }}>
              We are bringing together a diverse community of people who believe that there is great work to be done in our cities so that they can offer something for everyone. 
              We hope that everyone will bring to the table their visions, opinions, ideas, challenges and opportunities 
              that they see in their city and collaborate deeply with us to better understand how we can help everyone.
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
          Illustration by <a href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
