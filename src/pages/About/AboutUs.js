import React from 'react';

import { Link } from 'react-router-dom';


import '@fortawesome/fontawesome-free/js/all.js';

import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';

import aboutus1 from '../../images/aboutus-session4.png';
import aboutus2 from '../../images/aboutus-session2.png';
import aboutuswe from '../../images/aboutus-session-we4.png';

import './Aboutus.css';


class AboutUs extends React.Component {
  render() {
    return(
      <div>
        <Navbar />

        <section className="section is-medium" id="banner-welcome-about">
          <div className="columns">
            <div className="column is-three-fifths">
              <h1 className="is-size-1 banners">
                Tools, people in community, collaborative work, and cities that offer everything to everyone.
              </h1>
              <div className="explain-1">
                <p className="is-size-5">
                  Building the tools, bringing talented people together, 
                  and seeing cities that offer everything to everyone emerge.
                </p>
              </div>
              <div style={{ marginTop: '35px' }}>
                <Link className="button is-white is-outlined is-rounded" to="/community">
                  I want to be part of the community
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section is-small">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2 className="is-size-1 session-title">
                  6.5 billion people living in cities by 2050.
                </h2>
                <p className="is-size-5 has-text-justified" style={{ marginTop: '10px' }}>
                  The UN estimates that by 2050 the world population will be approximately 10 billion people 
                  with 6.5 billion of these people living in urban areas. All of this growing population will 
                  need access to the basic resources, services, and infrastructure that a city must provide for 
                  everyone such as health, education, food, housing, energy, transportation, and more. To provide 
                  these basic requirements for all people, our current cities need a rethink.
                </p>
              </div>
              <div className="column">
                <figure className="image is-1by1">
                  <img src={aboutus1} alt="Kkka" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="section is-small">
          <div className="container">
            <div className="columns">
              <div className="column">
                <figure className="image is-4by5">
                  <img src={aboutus2} alt="Kkka" />
                </figure>
              </div>
              <div className="column">
                <h2 className="is-size-1 session-title">
                  Today's cities are made for cars and for the few.
                </h2>
                <p className="is-size-5 has-text-justified" style={{ marginTop: '10px' }}>
                  Our current cities are decaying, boring, polluted and violent, made for cars, 
                  parking lots and gigantic expensive skyscrapers they offer too much for the few 
                  and too little for the many. We have left the most valuable "asset" of cities aside, 
                  the people, and now we must work to redefine and rebuild how urban life should be. 
                  We believe that a rethinking of urban life so that our cities offer everything to everyone 
                  is possible, necessary, and what we will do.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section is-small">
          <div className="container">
            <h2 className="is-size-1 has-text-centered session-title">We</h2>

            <div className="column is-three-fifths is-offset-one-fifth">
              <p className="is-size-5 has-text-centered">
               We are building the tools, bringing together amazing and talented people, 
               putting them to work together, and giving them the freedom to are to lead 
               and create the way to build cities that offer everything for everyone.
              </p>
            </div>

            <figure className="image is-16by9">
              <img src={aboutuswe} alt="Who it works diagram" />
            </figure>

            <h2 className="is-size-2 has-text-centered session-title">People, Tools, Better Cities.</h2>

            <div className="has-text-centered" style={{ marginTop: '20px' }}>
              <Link className="button is-black is-outlined is-rounded" to="/community">
                More about our community
              </Link>
            </div>
            
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}

export default AboutUs;