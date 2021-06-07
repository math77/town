import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-free/js/all.js';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

import Typical from 'react-typical';

import imagewhoweare from './images/whoweare2.png';
import imagewhowebuild from './images/whowebuild1.png';
import imagecommunitysnow from './images/communitystart-end.png';

import teste from './images/teste2.png';


import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      
      <section className="section is-large" id="banner-welcome">
        <div className="columns">
          <div className="column is-three-fifths">
            <h1 className="is-size-1 banners">
              Reinventing the technology and approach to city building.
            </h1>
            <div className="explain-1">
              <p className="is-size-5">
                Working together with communities and government to create cities that 
                offer everything for everyone.
              </p>
            </div>
            <div style={{ marginTop: '35px' }}>
              <Link className="button is-white is-outlined is-rounded" to="/about">
                More about our mission
              </Link>
            </div>
          </div>
        </div>    
      </section>

      <section className="section is-small" id="banner-us">
        <div className="container">
          <h2 className="is-size-1 has-text-centered">
            We are a{' '}
            <Typical 
              loop={Infinity}
              wrapper="b"
              steps={[
                'company.',
                3700,
                'community.',
                3700,
                'game changer.',
                3700
                ]}
            />
          </h2>
          <div className="column is-three-fifths is-offset-one-fifth">
            <p className="is-size-5 has-text-centered">
              An amazing community that thinks, believes and develops ideas that help create cities that offer 
              everything for everyone. Regardless of where you live, your background or what you do, if you're looking 
              to make a big positive impact on the image of our cities and people's daily lives, the Town Co. community 
              is the place for you. 
            </p>
          </div>
          

          <div className="has-text-centered" style={{ marginTop: '35px' }}>
            <Link className="button is-black is-outlined is-rounded" to="/about">
              About why we exist
            </Link>
          </div>

          <figure className="image is-16by9">
            <img src={imagewhoweare} alt="Who we are" />
          </figure>

        </div>
      </section>

      <section className="section is-small">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h2 className="is-size-1 session-title">
                Building the tools and giving the freedom to create.
              </h2>
              <p className="is-size-5 has-text-justified" style={{ marginTop: '10px' }}>
                Our role is performed entirely in the background. We are building the tools, bringing together 
                amazing and talented people, putting them to work together, and giving them the freedom to are 
                to lead and  create the way to build cities that offer everything for everyone.
              </p>
              <ul id="whowebuild-list">
                <li className="is-size-5" style={{ marginTop: '30px' }}>We build the tools</li>
                <li className="is-size-5">We bring together amazing, diverse, talented people in a community of lifelong friends.</li>
                <li className="is-size-5">We give freedom to the community to lead and create.</li>
                <li className="is-size-5">We sat back and watched the magic happen.</li>
              </ul>
            </div>
            <div className="column">
              <figure className="image">
                <img src={imagewhowebuild} alt="Who we build" />
              </figure>
            </div>
          </div> 
        </div>
      </section>

      <section className="section is-small" style={{backgroundColor: '#f8f8ff'}}>
        <div className="container">
          <h2 className="is-size-1 has-text-centered session-title">
            The community from start to finish.
          </h2>
          
          <div className="column is-three-fifths is-offset-one-fifth">
            <p className="is-size-5 has-text-centered">
              The three things that are most important to us are our community, 
              the people who live in cities around the world, and the impact they 
              can make on the planet by dreaming and working together. In our vision 
              it all starts, goes and ends with the community, they have the best vision 
              of what they want and just need the support and tools to lead the way 
              to what they want.
            </p>
          </div>

          
          <figure className="image is-16by9">
            <img src={imagecommunitysnow} alt="Community from start to finish" />  
          </figure>
          
          <div className="has-text-centered" style={{ marginTop: '35px' }}>
            <Link className="button is-black is-outlined is-rounded" to="/community">
              How I can participate
            </Link>
          </div>
        </div>
      </section>

      <section className="section is-small">
        <div className="container">
          <div className="columns">
            <div className="column">
              <figure className="image is-3by4">
                <img src={teste} alt="Who we build" />
              </figure>
            </div>
            <div className="column">
              <h2 className="is-size-1 session-title">A free, equal opportunity, and just world.</h2>
              <p className="is-size-5 has-text-justified" style={{ marginTop: '10px' }}>
                We are kicking off the long but incredible and important journey of thinking, discussing, 
                and building cities that offer everything for everyone. Our goal is that in the near future 
                everyone will have access to quality infrastructure, resources, knowledge, and tools so that 
                they are free to unlock their full potential, seize opportunities, contribute to a better and 
                more just world, and build the life they want to live. 
              </p>
              <p className="is-size-5" style={{ fontWeight: 'bold', marginTop: '20px' }}>
                The future will be beautiful if we raise them together.
              </p>
              <div style={{ marginTop: '70px' }}>
                <Link className="button is-light" to="/dreams">
                  <span>See collective dreams for the cities</span>
                  <span class="icon is-small">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section is-small" style={{ backgroundColor: '#f8f8ff'}}>
        <div className="container">
          <h2 className="is-size-1 session-title">How can I contribute?</h2> 
          <div className="columns" style={{ marginTop: '20px' }}>
            <div className="column">
              <Link to="/community">
                <div className="box" id="box-community">
                  <h4 className="is-size-3">Sign up for the community.</h4>
                  <p className="is-size-5 has-text-justified">
                    Sign up for our community and meet talented, problem-solving, world-class people. 
                    Work with them to build and lead the way to cities that give everything to everyone, 
                    and make lifelong friendships.
                  </p>
                  <div className="is-pulled-right" style={{ marginTop: '100px' }}>
                    <Link className="button is-white is-rounded" to="/community">
                      How do I sign up
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
            <div className="column">
              <div className="box" id="box-money">
                <h4 className="is-size-3">Alternative funding.</h4>
                <p className="is-size-5 has-text-justified">
                  We do not want to be a conventional company, so we want to finance our 
                  early days in an unconventional way. We have explored some win-win ways 
                  so that you can help us raise funding and get something out of it. So please 
                  consider reading a little more about it and see if it fits for you.
                </p>
                <div className="is-pulled-right" style={{ marginTop: '-18px' }}>
                  <Link className="button is-white is-rounded" to="/funding">
                    See more about
                  </Link>
                </div>
              </div>  
            </div>
            <div className="column">
              <div className="box" id="box-wall">
                <h4 className="is-size-3">Sweet dreams for the cities.</h4>
                <p className="is-size-5 has-text-justified">
                  We want to hear each person's dreams, visions, and desires about what their city 
                  should become. Please make a tweet showing your vision and tag us @towncocompany. 
                  Let us imagine together with you. 
                </p>
                <div className="is-pulled-right" style={{ marginTop: '100px' }}>
                  <Link className="button is-white is-rounded" to="/dreams">
                    How I publish
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-medium" id="banner-call-to-community">
        <div className="container">
          <h3 className="is-size-1 has-text-centered session-title" style={{ color: '#ffffff' }}>
            Join our community today!
          </h3>
          
          <div className="column is-three-fifths is-offset-one-fifth">
            <p className="is-size-5 has-text-centered" style={{ color: '#ffffff' }}>
              Join our community and be at the forefront of building cities that offer everything for everyone.
            </p>
          </div>

          <div className="has-text-centered" style={{ marginTop: '20px'}}>
            <Link className="button is-white is-outlined is-rounded" to="/community">
              I want to be part of it
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
