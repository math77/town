import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-free/js/all.js';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';


import session3 from './images/homesession3t1.png';
import session5 from './images/homesession4.png';
import session4 from './images/homesession5white.png';
import session6 from './images/homesession6t1.png';
import sessionfree from './images/homesessionfree1.png';
import session7 from './images/homesession7t8.png';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />

      <section className="section is-medium background-brand" id="banner-welcome">
        <div className="container">
          <h1 className="big-title has-text-centered banners">
            Building the cities of tomorrow, <span style={{ color: '#EEE318' }}>today</span>.
          </h1>
          <div className="explain-1">
            <p className="is-size-5 has-text-centered">
              You, a community, and we will lead the way to cities of the future.
            </p>
          </div>
          <div className="has-text-centered" style={{ marginTop: '65px' }}>
            <button className="button is-dark is-rounded">
              <span className="icon is-small">
                <i className="fas fa-angle-down"></i>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="section is-medium">
        <div className="container">
          <div className="column">
            <h3 className="is-size-3 has-text-centered" style={{ letterSpacing: '-.01em' }}>
              <strong>Together with you, we guide your city into the future.</strong>
              <br/>

              We start by creating a vibrant and passionate local community and partnering with the local government. 
              We equip our community with the best tools and let them create and lead the way to a city of the future.
            </h3>

            <div className="has-text-centered" style={{ marginTop: '35px' }}>
              <Link className="button is-black is-rounded is-outlined" to="/about">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-medium">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="is-size-1 session-title">
                It starts with <span style={{ color: '#EEE318' }}>you</span>, with your exceptional vision.
              </h2>
              <p className="is-size-5 has-text-justified mt-4">
                <span style={{ color: '#000', fontWeight: '700' }}>Cities are made of people and for people.</span> We think that you as an individual are 
                the starting point so that together we can transform your town into a town of the future. 
                Your ideas, visions, opinions, and wishes about how your city should be are unique in the 
                entire universe, and we always start from there, from your exceptional greatness and vision.
              </p>
            </div>
            <div className="column">
              <figure className="image">
                <img src={session3} alt="You is the best" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-small">
        <div className="container">
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={session4} alt="Tools and technologies" />
              </figure>
            </div>
            <div className="column">
              <h2 className="is-size-1 session-title">
                Then comes a community, from you to the city.
              </h2>
              <p className="is-size-5 has-text-justified mt-4">
                We started with you and your exceptional vision for the city, but we believe 
                that <span style={{ color: '#000000', fontWeight: '700' }}>everything in the community gets better, 
                stronger, more fun, and increases the chances of success.</span> So we are bringing together other talented, creative, and 
                mission-oriented people in our communities in addition to you and giving them the tools 
                and freedom to build the cities of the future.
              </p>
              <p className="is-size-5 has-text-justified mt-3">
                If this excites you and you believe you can contribute in some way, apply to 
                one of our communities and write your name in history.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section is-medium">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="is-size-1 session-title">
                Tools. Simple, modern, and that works.
              </h2>
              <p className="is-size-5 has-text-justified mt-4">
                Since the Stone Age, <span style={{ color: '#000000', fontWeight: '700' }}>people with tools have built and changed the world many times</span>, 
                and now will be no different. With a toolbox designed from the ground up to form a robust, 
                integrated ecosystem that is simple, modern, smart, and easy to use, we expect our communities 
                and partners to be empowered to think, collaborate, innovate, and create the cities of the future.
              </p>
            </div>
            <div className="column">
              <figure className="image">
                <img src={session5} alt="You is the best" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-small">
        <div className="container">
          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={sessionfree} alt="Tools and technologies" />
              </figure>
            </div>
            <div className="column">
              <h2 className="is-size-1 session-title">
                Freedom complements everything.
              </h2>
              <p className="is-size-5 has-text-justified mt-4">
                With our communities, we are using the approach of <span style={{ color: '#000000', fontWeight: '700' }}>staying out of the way and watching the 
                magic happen</span>. We think it's pretty simple how this will all work: we provide the tools, support, 
                and resources for our communities and let its members have the freedom to roam, collaborate, 
                create and be the heroes of their cities, leading everyone to a better and more just future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-medium background-brand">
        <div className="container">   

          <h2 className="is-size-1 has-text-centered session-title">
            The city of the future - just a little earlier.
          </h2>
            
          <div className="column">
            <p className="is-size-5 has-text-centered mt-4" style={{ letterSpacing: '-.01em' }}>
              <span style={{ color: '#000000', fontWeight: '700' }}>Together with you</span>, we are driving all the things that a city of the future should offer. 
              Starting from scratch and with our communities at the center, we hope to be more creative, innovative, 
              and different. We go beyond what has been done before, beyond what most think is possible. We build the 
              best cities with collective strength, with the decentralization of power and tools, we will show that. 
              The cities of the future must be egalitarian, green, fair, technological, and happy.
            </p>
          </div>

          <figure className="image is-16by9" style={{ marginTop: '20px' }}>
            <img src={session6} alt="Who we are" />
          </figure>

          <div className="has-text-centered" style={{ marginTop: '35px' }}>
            <Link className="button is-black is-rounded is-outlined" to="/about">
              Read our manifest
            </Link>
          </div>

        </div>
      </section>

      <section className="section is-medium" style={{ backgroundColor: '#000' }}>
        <div className="container">
          <h1 className="big-title session-title" style={{ color: '#ffffff' }}>People + tools + freedom = future cities</h1>
          <h4 className="is-size-4" style={{ color: '#ffffff', marginTop: '10px' }}> - The one equation that defines the cities of the future.</h4>
        </div>
      </section>

      {/*
      <section className="section is-small background-brand" id="session-explain-community">
        <div className="container">
          <h2 className="is-size-1 session-title">Community-lead.</h2>
          <div className="columns">
            <div className="column is-6 is-offset-one-3">
              <p className="is-size-5 has-text-justified mt-4">
                The best and fastest way to build the cities of the future is 
                to start with <span style={{ color: '#000000', fontWeight: '700' }}>community leadership.</span> When we start in your town, we are just new neighbors, we don't know much about you, and you don't 
                know much about us, but we are open to talk about us and curious to know about you. We want to 
                become good neighbors. For this reason, we always want to start by gathering a strong and beautiful 
                local community of people who are passionate about their city and want to collaborate with us to 
                transform it into a city of the future.
              </p>
              <p className="is-size-5 has-text-justified mt-4">
                How it works is quite simple. We bring stakeholders together in a brilliant community, provide our tools, 
                resources, and technology, and let the members of that community lead the way to a better city for everyone.
              </p>
              <div style={{ marginTop: '35px' }}>
                <Link className="button is-black is-rounded is-outlined" to="/community">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}


      <section className="section is-small background-brand">
        <div className="container">
          <h2 className="is-size-1 session-title">Community-lead.</h2>
          <div className="columns">
            <div className="column is-6 is-offset-one-3">
              <p className="is-size-5 has-text-justified mt-4">
                The best and fastest way to build the cities of the future is 
                to start with <span style={{ color: '#000000', fontWeight: '700' }}>community leadership.</span> When we start in your town, we are just new neighbors, we don't know much about you, and you don't 
                know much about us, but we are open to talk about us and curious to know about you. We want to 
                become good neighbors. For this reason, we always want to start by gathering a strong and beautiful 
                local community of people who are passionate about their city and want to collaborate with us to 
                transform it into a city of the future.
              </p>
              <p className="is-size-5 has-text-justified mt-4">
                How it works is quite simple. We bring stakeholders together in a brilliant community, provide our tools, 
                resources, and technology, and let the members of that community lead the way to a better city for everyone.
              </p>
              <div style={{ marginTop: '35px' }}>
                <Link className="button is-black is-rounded is-outlined" to="/community">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="column">
              <figure>
                <img src={session7} alt="You is the best" />
              </figure>
            </div>
          </div>
        </div>
      </section>


      <section className="section is-small" id="session-first-community">
        <div className="container">
          <h2 className="is-size-1 session-title" style={{ marginBottom: '10px', color: '#ffffff' }}>Our first community.</h2>
          <div className="columns">
            <div className="column is-6 is-offset-one-3">
              <div className="box">
                <h4 className="is-size-3" style={{ marginTop: '15px' }}>Urban Arts, Culture and Entertainment.</h4>
                <p className="is-size-6 has-text-justified">
                  The whole pandemic and quarantine situation left our cities deserted, kept us stuck at home, with no group fun, 
                  and ended up leaving the landscape of our towns lifeless, painting them gray. With this in mind, we decided 
                  that we would start by renewing the image of cities through art, culture, and entertainment. We want happier, 
                  more colorful, more artistic cities in ways we've never seen before. We believe this is a noble, legitimate, 
                  and incredible goal to pursue and achieve.
                </p>
                <p className="is-size-6 has-text-justified mt-4" style={{ fontWeight: '600' }}>
                  So if you work, love, or are just curious about art, culture, or entertainment, please read a little more about 
                  our community and consider applying to work with us on this incredible mission to color cities. 
                </p>
                <div style={{ marginTop: '35px' }}>
                  <Link className="button is-black is-rounded is-outlined" to="/community">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
