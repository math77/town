import React from 'react';

import '@fortawesome/fontawesome-free/js/all.js';

import Accordion from '../../components/Accordion.js';

import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';

import './FAQ.css';


class FAQ extends React.Component {
  render() {
    return(
      <div>
        <Navbar />

        <section className="section is-large" id="banner-welcome-faq">
          <div className="columns">
            <div className="column is-three-fifths">
              <h1 className="is-size-1 banners">Do you have any questions?</h1>
              <div className="explain-1">
                <p className="is-size-5">
                  If your question is not answered below, 
                  feel free to send us an email: <a href="mailto:sayhello@townco.city">sayhello@townco.city</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section is-medium" id="faq">
          <h1 className="is-size-2">People always ask</h1>
          <Accordion title="Why do we exist?" color="#2ecc71">
            <p>
              1 - Acting together with citizens, non-profit organizations, businesses, 
              and local governments to improve urban life for all.
            </p>
            <p>
              2 - Support and be supported by citizens, non-profits, local governments, and 
              local businesses so that all can thrive together. No zero-sum games.
            </p>
            <p>
              3 - Make Orwell fiction again. (We are serious)
            </p>
          </Accordion>
          <Accordion title="How can I collaborate?" color="#ff4365">
            <p>
              Our guiding principle is <span style={{ color: '#ff4365', fontWeight: 'bold' }}>joint design, always!</span> and because we strongly believe in this ideal we decided it was essential from the start 
              to have a strong and passionate community of people who want to deeply collaborate with us and help us improve urban life for everyone. 
              So if you love the idea of being able to participate in building more equitable, greener, fairer and better cities for everyone, consider joining our community and 
              be a vector of change in your community and the world (and of course, get some basic, but heartfelt, gifts) <span style={{ color: '#ff4365', fontSize: '16px' }}>&#10084;</span>.
            </p>
            <a class="button is-white is-outlined is-rounded" href="https://form.typeform.com/to/v4G4wIXa" target="_blank" rel="noreferrer">
              Join community
            </a>
          </Accordion>
          <Accordion title="What do we think about privacy and data?" color="#f1c40f">
            <p>About Data</p>
            <p>
              For us an effective and correct data policy is quite simple: <span style={{ color: '#f1c40f', fontWeight: 'bold' }}>YOUR data is YOUR data</span>. We strongly believe in full owner control over your data and you 
              should always be able to define who can access your data, how they can access it and for what uses, as well as revoke all these settings whenever you want.
            </p>
            <p>About privacy</p>
            <p>
              We know and deeply agree with all the recent concerns about sensors, cameras, lack of privacy and other forms of surveillance in cities. 
              And because we believe that privacy and individual freedoms should be a basic right for everyone, we are rethinking and exploring new ways 
              in which cities can benefit from the data generated, but without compromising the freedom and privacy of their citizens.  
            </p>
            <p style={{ color: '#f1c40f' }}>
              See point 3 of the question "Why do we exist?".
            </p>
          </Accordion>
          <Accordion title="Do you plan to open any investment options for the community?" color="#9b59b6">
            <p>
              It certainly does!
            </p>
            <p>
              The community will work hard together with us to improve urban life for everyone, 
              so it is perfectly fair that they too can reap the rewards of success.
            </p>
            <p>
              More about this soon...
            </p>
          </Accordion>
          <Accordion title="What are our main values?" color="#2ecc71">
            <ul>
              <li>Joint design, always!</li>
              <li>Trust among stakeholders</li>
              <li>Transparency</li>
              <li>Local strength first</li>
              <li>Never zero-sum games</li>
              <li>Mutual Support</li>
            </ul>
          </Accordion>
          <Accordion title="Do you have any partnership programs with non-profit organizations?" color="#ff4365">
            <p>
              Yes, Yes, Yes!
            </p>
            <p>
              We believe that non-profit organizations are essential in building a better city that offers 
              everything for everyone. So, if you lead or represent a non-profit organization 
              in any of the areas listed below, please send us an email at the address below 
              with the title: PARTNERSHIP WITH A NON-PROFIT ORGANIZATION.
            </p>
            <ul>
              <li>Civic engagement</li>
              <li>Teaching digital skills (coding, use of basic tools, internet use, and more)</li>
              <li>Teaching digital rights (personal privacy, security in the digital world, and more)</li>
              <li>Teaching sustainable practices in everyday life</li>
            </ul>
            <p>Email address: <span style={{ color: '#ff4365' }}><a style={{color: '#ff4365'}} href="mailto:sayhello@townco.city">sayhello@townco.city</a></span></p>
            <p></p>
            <p>Note: We will soon open for other types of non-profit organizations.</p>
          </Accordion>
        </section>
        <Footer />
      </div>
    );
  }
}

export default FAQ;