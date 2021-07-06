import React from 'react';

import '@fortawesome/fontawesome-free/js/all.js';

import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';

import iconcommunity from '../../images/iconcomm1-blue.png';
import iconbuild from '../../images/iconbuild1-blue.png';
import iconrewards from '../../images/iconrewards1-blue.png';

import formula from '../../images/communitysession3.mp4';

import './Community.css';

class Community extends React.Component {
  render() {
    return(
      <div>
        <Navbar />

        <section className="section is-medium" id="banner-welcome-community">
          <div className="columns">
            <div className="column is-three-fifths">
              <h1 className="is-size-1 banners">
                Communities
              </h1>
              <div className="explain-1">
                <p className="is-size-5">
                  The key element of our company.
                </p>
              </div>
              <div style={{ marginTop: '35px' }}>
                <a className="button is-black is-rounded" href="https://airtable.com/shrjufO7WU65KAcu2" target="_blank" rel="noreferrer">
                  I want to be part of it
                </a>
              </div>
            </div>
          </div>
        </section>

        {/*
        <section className="section is-medium" id="banner-why-community">
          <div className="container">
            <div className="columns">
              <div className="column is-6 is-offset-one-3">
                <h2 className="is-size-1 session-title">
                  Why a community?
                </h2>
                <p className="is-size-5 has-text-justified mt-4">
                  People have been connecting and sharing since prehistoric times. This feeling of collectivity is in our DNA. 
                  It is in your DNA. And for us, it all starts and ends with community. Great people together, aligned with an 
                  incredible mission, and equipped with the best tools are what will change the horizon of our cities. These people 
                  will impact our planet for years to come. Everything we do is always about our worldview. For us, each town in the 
                  world is unique, and when we arrive in your town, we are just new neighbors, we don't know much about your people, 
                  your resources, your desires, and values, but we want to know you, and we want you to know us. We know then that 
                  the best way to transform your city into a city of the future is simply by working together with you and the 
                  people of your town. By gathering the most passionate stakeholders in your city into a beautiful and vibrant 
                  community, giving them the best tools, resources, and support, and letting these people, who know the direction 
                  their city should go in, lead the way to a city of the future. The city that is better for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>
        */}

        <section className="section is-medium background-brand">
          <div className="container">
            <h2 className="is-size-1 session-title">
              Why a community?
            </h2>
            <div className="columns mt-4">
              <div className="column">
                <p className="is-size-5 has-text-justified">
                  People have been connecting and sharing since prehistoric times. This feeling of collectivity is in our DNA. 
                  It is in your DNA. And for us, it all starts and ends with community. Great people together, aligned with an 
                  incredible mission, and equipped with the best tools are what will change the horizon of our cities. These people 
                  will impact our planet for years to come. Everything we do is always about our worldview. For us, each town in the 
                  world is unique, and when we arrive in your town, we are just new neighbors, we don't know much about your people, 
                  your resources, your desires, and values, but we want to know you, and we want you to know us.
                </p>
              </div>
              <div className="column">
                <p className="is-size-5 has-text-justified">
                  We know then that the best way to transform your city into a city of the future is simply by working together with you and the 
                  people of your town. By gathering the most passionate stakeholders in your city into a beautiful and vibrant 
                  community, giving them the best tools, resources, and support, and letting these people, who know the direction 
                  their city should go in, lead the way to a city of the future. The city that is better for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section is-medium background-brand">
          <div className="container">
            <h2 className="is-size-1 session-title has-text-centered mb-4">
              People - The central element of the cities of the future.
            </h2>
            <video autoPlay={true} loop={true} className="Video">
              <source src={formula} type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="section is-small">
          <div className="container">
            <div className="column is-6 is-offset-one-3">
              <h2 className="is-size-1 session-title">Our community approach.</h2>
              <p className="is-size-5 has-text-justified mt-4 mb-4">
                A simple and meaningful approach. Places community members throughout the process, 
                believes in their qualities, their work, and their visions. We share the work and also 
                share the gains.
              </p>
            </div>

            <div className="columns">
              <div className="column">
                <div className="box dark">
                  
                  <figure className="image is-64x64">
                    <img src={iconcommunity} alt="Icon community" />
                  </figure>

                  <h4 className="is-size-5" style={{ marginTop: '15px' }}>Apply.</h4>
                  <p className="is-size-6 has-text-justified">
                    Apply to join one of our communities. The community where you believe you can have a significant impact or the work theme is your love.
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="box dark">

                  <figure className="image is-64x64">
                    <img src={iconbuild} alt="Icon build" />
                  </figure>

                  <h4 className="is-size-5" style={{ marginTop: '15px' }}>Build and lead.</h4>
                  <p className="is-size-6 has-text-justified">
                   Build with us and other community members products, services, and initiatives that improve the world's cities.
                  </p>
                </div>  
              </div>
              <div className="column">
                <div className="box dark">

                  <figure className="image is-64x64">
                    <img src={iconrewards} alt="Icon rewards" />
                  </figure>

                  <h4 className="is-size-5" style={{ marginTop: '15px' }}>Make an impact and earn.</h4>
                  <p className="is-size-6 has-text-justified">
                    Everyone will work together to build and lead the way to cities that offer everything to 
                    everyone, and to us it is perfectly fair that. 
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="section is-large background-brand" id="session-quote">
          <div className="container">
            <h2 className="is-size-1 session-title has-text-centered">What is the city but the people?</h2>
            <p className="has-text-centered">William Shakespeare</p>
          </div>
        </section>

        <section className="section is-medium" style={{ backgroundColor: '#000' }} id="banner-first-community">
          <div className="container">
            <h2 className="is-size-1 session-title" style={{ marginBottom: '10px', color: '#ffffff' }}>Our first community.</h2>
            <div className="columns">
              <div className="column is-5 is-offset-one-3">
                <div className="box" style={{ marginTop: '15px' }}>
                  <h4 className="is-size-3" style={{ marginTop: '15px' }}>Urban Arts, Culture and Entertainment.</h4>
                  <p className="is-size-6 has-text-justified">
                    <span style={{ color: '#000000', fontWeight: '700' }}>Happy cities, happy people.</span> For us, art, culture, and entertainment are a basic right for every human 
                    being, a fundamental piece of infrastructure. And our cities need to offer this to everyone, simply 
                    and without friction. Based on this vision, our arts, culture, and entertainment community was born, 
                    with the mission to make our cities happier, more colorful, and artistic. We want to bring together a 
                    diverse group of talented, creative, and mission-oriented people. These people will collaborate deeply 
                    with us, finding innovative ways to merge new trends with more traditional approaches, creating new things, 
                    and sharing with us all the gains, rewards, and benefits of achieving this rewarding goal of making happier 
                    cities.
                  </p>
                </div>
              </div>
              <div className="column" style={{ marginTop: '50px' }}>
                {/* LINE 1 */}
                <div className="columns">
                  <div className="column">
                    <div className="box is-shadowless" style={{ marginTop: '15px' }}>
                      <h4 className="is-size-5" style={{ marginTop: '15px' }}>Connect Deeply.</h4>
                      <p className="is-size-6 has-text-justified">
                        Connect with people of different ages, genders, locations, and perspectives. 
                        Meet people who, like you, love the arts, culture, and entertainment. 
                        Make lifelong friends!
                      </p>
                    </div>
                  </div>
                  <div className="column">
                    <div className="box is-shadowless" style={{ marginTop: '15px' }}>
                      <h4 className="is-size-5" style={{ marginTop: '15px' }}>Explore and Build.</h4>
                      <p className="is-size-6 has-text-justified">
                        With other community members, explore NFT, crypto economy, creator economy, and 
                        many other things. Combine all this with more old-school stuff and find new ways 
                        to make cities more artistic, colorful, and happy. Be curious and innovative.
                      </p>
                    </div>
                  </div>
                </div>
                {/* LINE 2 */}
                <div className="columns">
                  <div className="column">
                    <div className="box is-shadowless" style={{ marginTop: '15px' }}>
                      <h4 className="is-size-5" style={{ marginTop: '15px' }}>A new painting of your city.</h4>
                      <p className="is-size-6 has-text-justified">
                        Make your city a place where art, culture, and entertainment are accessible to all. Value 
                        culture and local artists, bring everyone into the room and make and make everything more 
                        colorful. Transform the image of your city.
                      </p>
                    </div>
                  </div>
                  <div className="column">
                    <div className="box is-shadowless" style={{ marginTop: '15px' }}>
                      <h4 className="is-size-5" style={{ marginTop: '15px' }}>Be recognized, be owned.</h4>
                      <p className="is-size-6 has-text-justified">
                        Be recognized for your innovative and creative work done in collaboration with Town Co. 
                        Bring your ideas and influence the path we should follow. Participate in every win.
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="has-text-centered" style={{ marginTop: '55px' }}>
              <a className="button is-white is-rounded is-outlined" href="https://airtable.com/shrjufO7WU65KAcu2" target="_blank" rel="noreferrer">
                I want to be part of it
              </a>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}

export default Community;