import React from 'react';

import '@fortawesome/fontawesome-free/js/all.js';

import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';

import './Wall.css';

class Wall extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
        
        <section className="section is-medium" id="banner-welcome-wall">
          <div className="columns">
            <div className="column is-three-fifths">
              <h1 className="is-size-1 banners" style={{ color: '#000000' }}>
                Sweet dreams are made of this...Everybody's looking for something.
              </h1>
              <div className="explain-1 dark">
                <p className="is-size-5">
                  Go to twitter, write what you want your city to 
                  become and tag us <span style={{ fontWeight: '700' }}>@towncocompany</span>.
                  Let us imagine together with you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section is-medium">
          <div className="container">
            <h2 className="is-size-1 session-title has-text-centered">
              Oops, it seems that no one has shared their vision for cities with us yet. Be the first!
            </h2>
            <p className="is-size-5 has-text-centered" style={{ marginTop: '10px' }}>
              Go to twitter, write what you want your city to become and tag us <span style={{ fontWeight: '700' }}>@towncocompany</span>
            </p>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}

export default Wall;