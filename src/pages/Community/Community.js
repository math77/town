import React from 'react';

import '@fortawesome/fontawesome-free/js/all.js';

import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';


import session1 from '../../images/communitypage-session1.png';
import session2 from '../../images/communitypage-session2.png';
import session3 from '../../images/communitypage-session3.png';
import session4 from '../../images/communitypage-session4.png';

import iconcommunity from '../../images/iconcomm1-blue.png';
import iconbuild from '../../images/iconbuild1-blue.png';
import iconrewards from '../../images/iconrewards1-blue.png';

import './Community.css';

class Community extends React.Component {
  render() {
    return(
      <div>
        <Navbar />

        <section className="section is-medium" id="banner-welcome-community">
          <div className="columns">
            <div className="column is-three-fifths">
              <h1 className="is-size-1 banners">If one person can make a difference, imagine what a community can do.</h1>
              <div className="explain-1">
                <p className="is-size-5">
                  We will bring together amazing people, offer tools and freedom to create, and watch magic happen.
                </p>
              </div>
              <div style={{ marginTop: '35px' }}>
                <a className="button is-white is-rounded" href="https://form.typeform.com/to/v4G4wIXa" target="_blank" rel="noreferrer">
                  I want to be part of it
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section is-medium">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2 className="is-size-1 session-title">
                  Incredible and talented people together.
                </h2>
                <p className="is-size-5 has-text-justified">
                  People are the most fundamental point of a city, and for us, bringing together in 
                  community a group of world-class, talented, problem-solving people who believe that 
                  our cities need a reset is key to leading the way in building cities that offer everything 
                  for everyone.
                </p>
              </div>
              <div className="column">
                <figure className="image is-1by1">
                  <img src={session1} alt="People together" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="section is-small">
          <div className="container">
            <div className="columns">
              <div className="column">
                <figure className="image is-1by1">
                  <img src={session2} alt="People working together" />
                </figure>
              </div>
              <div className="column">
                <h2 className="is-size-1 session-title">
                  With tools and freedom to create.
                </h2>
                <p className="is-size-5 has-text-justified">
                  We believe that diversity and freedom are the real keys to innovation and it is critical for 
                  us to equip our community with the best tools and resources and give them the freedom to be 
                  curious, collaborative and innovative in finding new and exciting ways to build better cities.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="section is-small">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2 className="is-size-1 session-title">
                  Building, leading, and changing.
                </h2>
                <p className="is-size-5 has-text-justified">
                  The community and we will always work together to better create tools, products, 
                  services, and resources that enable the community to think, build, and lead the 
                  way in building cities that provide everything for everyone, thus creating a future 
                  of equal and fair opportunities for all.
                </p>
              </div>
              <div className="column">
                <figure className="image is-1by1">
                  <img src={session3} alt="Building, leading, and changing." />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="section is-small">
          <div className="container">
            <h2 className="is-size-1 has-text-centered session-title">People, people, people...</h2>
            
            <div className="column is-three-fifths is-offset-one-fifth">
              <p className="is-size-5 has-text-centered">
                The fastest way to revive our cities and provide everything for everyone in a future of 
                fairness and opportunity is to put diverse, talented, and innovative people throughout the 
                process, from start to finish, and give them the freedom to think, invent, and build. 
                That's what we believe, and that's what we're going to do.
              </p>
            </div>

            <figure className="image is-16by9" style={{ marginTop: '20px' }}>
              <img src={session4} alt="Who we are" />
            </figure>
          </div>
        </section>

        <section className="section is-small" style={{ backgroundColor: '#f8f8ff'}}>
          <div className="container">
            <h2 className="is-size-1 session-title">What I get</h2> 
            <div className="columns" style={{ marginTop: '20px' }}>
              <div className="column">
                <div className="box dark comm">
                  
                  <figure className="image is-64x64">
                    <img src={iconcommunity} alt="Icon community" />
                  </figure>

                  <h4 className="is-size-3" style={{ marginTop: '15px' }}>Community of lifelong friends.</h4>
                  <p className="is-size-6 has-text-justified">
                    Be part of a community of diverse, world-class, talented, problem-solving people. 
                    See new points of view, discuss ideas, work together, teach and learn from people 
                    from all over the world, with different backgrounds, and participate in building 
                    cities that offer everything for everyone. Make friends for life!
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="box dark comm">

                  <figure className="image is-64x64">
                    <img src={iconbuild} alt="Icon build" />
                  </figure>

                  <h4 className="is-size-3" style={{ marginTop: '15px' }}>Voice and freedom to build.</h4>
                  <p className="is-size-6 has-text-justified">
                   Bring your ideas, opinions and visions to the table and discuss, think, research and 
                   build together anything that will help us all take another step towards building cities 
                   that offer everything for everyone.
                  </p>
                </div>  
              </div>
              <div className="column">
                <div className="box dark comm">

                  <figure className="image is-64x64">
                    <img src={iconrewards} alt="Icon rewards" />
                  </figure>

                  <h4 className="is-size-3" style={{ marginTop: '15px' }}>Benefits and Rewards.</h4>
                  <p className="is-size-6 has-text-justified">
                    Everyone will work together to build and lead the way to cities that offer everything to 
                    everyone, and to us it is perfectly fair that community members in addition to other benefits 
                    should also receive equity in whatever is developed. For us this is valuing those who are building 
                    with us, it's fair, it's simple and it's what we're going to do. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section is-medium" id="banner-join-community">
          <div className="container">
            <h1 className="is-size-1 has-text-centered banners">
              Come together, right now. You too can be part of the change.
            </h1>
            <div className="explain-1 column is-three-fifths is-offset-one-fifth">
              <p className="is-size-5 has-text-centered" style={{ fontWeight: '600' }}>
                Work with amazing people, bring your voice and vision, have the freedom to build and make a better future for all.
              </p>
            </div>
            <div className="has-text-centered" style={{ marginTop: '35px' }}>
              <a className="button is-white is-outlined is-rounded" href="https://form.typeform.com/to/v4G4wIXa" target="_blank" rel="noreferrer">
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