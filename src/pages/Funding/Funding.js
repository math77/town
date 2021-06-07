import React from 'react';

import '@fortawesome/fontawesome-free/js/all.js';

import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';

import './Funding.css';

class Funding extends React.Component {
  render() {
    return(
      <div>
        <Navbar />

        <section className="section is-medium" id="banner-welcome-funding">
          <div className="columns">
            <div className="column is-three-fifths">
              <h1 className="is-size-1 banners">
                Unconventional funding for an unconventional company.
              </h1>
              <div className="explain-1">
                <p className="is-size-5">
                  See below if any of the explored ways that work to help us also work to help you.
                </p>
              </div>
            </div>
          </div>
        </section>

        

        <section className="section is-small">
          <div className="container">
            <div className="column is-three-fifths is-offset-one-fifth">
              <p className="is-size-4 has-text-centered">
                In the next few days we will be launching some alternative ways to raise funding to 
                keep our early days going. We want the ways we think of to be good for helping us and 
                in some way also help you who are interested in contributing. So if you want to know if 
                any of the ways might work for you, please leave your contact email in the forms below to 
                be notified first hand when we publish.
              </p>
            </div>
            <div className="has-text-centered" style={{ marginTop: '35px' }}>
              <a className="button is-black is-outlined is-rounded" href="https://form.typeform.com/to/xYWquZUt" target="_blank" rel="noreferrer">
                Register my interest
              </a>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}

export default Funding;