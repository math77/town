import React from 'react';

import '@fortawesome/fontawesome-free/js/all.js';

import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';

import { Link } from 'react-router-dom';


class NotFound extends React.Component {
  render() {
    return(
      <div>
        <Navbar />

        <section className="section is-small">
          <div className="container">
          	<div className="has-text-centered">
          	  <iframe src="https://giphy.com/embed/kF0ngyP7S1DfmzKqiN" title="404 gif" width="400" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/error-404-not-found-kF0ngyP7S1DfmzKqiN">via GIPHY</a></p>

              <h2 className="is-size-3 has-text-centered session-title">404</h2>
              <h2 className="is-size-3 has-text-centered session-title">Page not found.</h2>
              <Link to="/" style={{ fontWeight: '600', fontSize: '1.2rem' }}>Back to home</Link>
        	</div>

          </div>
        </section>
        

        <Footer />
      </div>
    );
  }
}

export default NotFound;