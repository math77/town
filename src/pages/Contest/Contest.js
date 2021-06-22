import React from 'react';

import '@fortawesome/fontawesome-free/js/all.js';

import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';

import timeline2 from '../../images/timelinecontest2.jpg';

import './Contest.css';

class Contest extends React.Component {
  render() {
    return(
      <div>
        <Navbar />

        <section className="section is-medium" id="banner-welcome-contests">
          <div className="container">
            <h1 className="is-size-1 has-text-centered banners">
              City Mosaic Contest - 1st ed.
            </h1>
              <div className="explain-1">
                <p className="is-size-5 has-text-centered">
                  Let's take a look at the beauty of public spaces in cities around the world.
                </p>
              </div>
              <div className="has-text-centered" style={{ marginTop: '35px' }}>
                <a className="button is-white is-rounded" href="#iwantparticipate">
                  I want to register
                </a>
              </div>
          </div>
        </section>

        <section className="section is-small">
          <div className="container">
            <h2 className="is-size-1 has-text-centered session-title">The Contest</h2>
            
            <div className="column is-three-fifths is-offset-one-fifth">
              <p className="is-size-5 has-text-justified">
                Every city around the world has at least one public place or space where the inhabitants 
                come together to share in the good, communal life of the city. These places are beautiful, 
                green, alive, and full of diverse stories that deeply reflect the people who live there. And now 
                we want to get to know and show the world all these beautiful spaces that cities offer, creating a 
                big mosaic that shows where people can go to share and live together in post-pandemic life.
              </p>
              <br/>
              <p className="is-size-5 has-text-justified" style={{ fontWeight: '670' }}>
                The Contest: Send us a photo taken by you of some public place or space in your city where people 
                like to hang out, share, and live in community + a sentence of your own about how people use that 
                place and the feelings it gives you.
              </p>
            </div>

          </div>
        </section>
        
        <section className="section is-small" style={{ backgroundColor: '#f8f8ff' }}>
          <div className="container">
            <h2 className="is-size-1 has-text-centered session-title">How does it work?</h2>
            <div className="columns" style={{ marginTop: '20px' }}>
              <div className="column">
                <div className="box dark conn is-shadowless">

                  <h4 className="is-size-3" style={{ marginTop: '15px' }}>Step 1.</h4>
                  <p className="is-size-6" style={{ marginBottom: '30px', 'textAlign': 'justify', 'wordSpacing': '-2px' }}>
                    Register to participate in the contest by paying the registration fee at the link below. 
                    We will send you an email with your registration number and general contest instructions.
                  </p>
                  <a href="#iwantparticipate" style={{ fontWeight: '600', color: '#3498db' }}>
                    Sign me up
                  </a>
                </div>
              </div>
              <div className="column">
                <div className="box dark conn is-shadowless">

                  <h4 className="is-size-3" style={{ marginTop: '15px' }}>Step 2.</h4>
                  <p className="is-size-6" style={{ 'textAlign': 'justify', 'wordBreak': 'break-all' }}>
                   Start your creative process to make a great photo and write an amazing sentence. 
                   We know you can do it.
                  </p>
                </div>  
              </div>
              <div className="column">
                <div className="box dark conn is-shadowless">

                  <h4 className="is-size-3" style={{ marginTop: '15px' }}>Step 3.</h4>
                  <p className="is-size-6" style={{ 'textAlign': 'justify', 'wordBreak': 'break-all' }}>
                    Wait until submissions open on June 30, 2021 and submit your photo + sentence. 
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="box dark conn is-shadowless">

                  <h4 className="is-size-3" style={{ marginTop: '15px' }}>Step 4.</h4>
                  <p className="is-size-6" style={{ marginBottom: '30px', 'textAlign': 'justify', 'wordBreak': 'break-all' }}>
                    Wait until July 9, 2021 to find out the big winner. 
                    We will announce it here and on twitter: <a style={{ fontWeight: '600', color: '#3498db' }} href="https://twitter.com/towncocompany" target="_blank" rel="noreferrer">@towncocompany</a>
                  </p>
                </div>
              </div>
            </div>
            <p className="is-size-6 has-text-centered" style={{ marginTop: '30px' }}>
              Follow us on twitter to stay informed about the contest. <a style={{ fontWeight: '600', color: '#3498db' }} href="https://twitter.com/towncocompany" target="_blank" rel="noreferrer">@towncocompany</a>
            </p>
          </div>
        </section>

        <section className="section is-medium" style={{ backgroundColor: '#000' }}>
          <div className="container">
            <h1 className="has-text-centered session-title" id="pgradient">
              A prize of $200 USD for the winner.
            </h1>
          </div>
        </section>

        <section className="section is-small">
          <div className="container">
            <h2 className="is-size-1 has-text-centered session-title">
              Timeline
            </h2>

            <figure className="image" style={{ marginTop: '30px' }}>
              <img src={timeline2} alt="Contest timeline" />
            </figure>

          </div>
        </section>

        <section className="section is-medium" id="iwantparticipate">
          <div className="container">
            <h2 className="is-size-1 has-text-centered session-title">
              I want to participate now
            </h2>
            <div className="column is-three-fifths is-offset-one-fifth">
              <p className="is-size-5 has-text-centered">
                By clicking the button below your browser will open a tab containing a secure checkout provided 
                by Stripe for you to pay for your entry. After the purchase is successfully completed you will 
                receive an email containing the receipt for your purchase and another email with your contest 
                entry code and general contest instructions.
              </p>

              <div className="box dark connprice" style={{ marginTop: '40px' }}>
                <h4 className="is-size-3" style={{ marginTop: '10px' }} id="cardfee">Registration fee.</h4>
                <h6 className="is-size-4" style={{ marginTop: '15px', fontWeight: '680' }}>Launch Day(06/22): $4.00 USD</h6>
                <h6 className="is-size-4" style={{ fontWeight: '680' }}>After: $8.00 USD</h6>
                <h5 className="is-size-5" style={{ marginTop: '30px' }}>Coupon for launch day: <span style={{ fontWeight: '700' }}>LAUNCHDAY50</span></h5>
              </div>
            </div>

            <div className="has-text-centered" style={{ marginTop: '35px' }}>
              <a className="button is-black is-rounded" href="https://buy.stripe.com/7sI4gG34R0xL3pS9AC" target="_blank" rel="noreferrer">
                Make my registration
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Contest;