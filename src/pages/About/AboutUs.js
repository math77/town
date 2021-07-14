import React from 'react';

import Navbar from '../../components/Navbar.js';
import Footer from '../../components/Footer.js';

import './Aboutus.css';


class AboutUs extends React.Component {
  render() {
    return(
      <div>
        <Navbar />

        <section className="section is-medium">
          <div className="container">
            <h2 className="is-size-1 has-text-centered session-title">We</h2>
            
            <div className="column is-three-fifths is-offset-one-fifth">
              <p className="is-size-5 has-text-justified">
                We are a company, a community, a big family that loves cities and urban life. 
                There's something in our heads that we can't get out of our heads, that our cities 
                need a new direction, that they can offer more than they do today. For us, the cities 
                of the future, which are full of opportunities, technologies, innovations, are sustainable, 
                fair, and inclusive for everyone, can be leveraged and built quickly if we follow a simple 
                formula, the formula of the cities of the future.
              </p>
              
              <h3 className="is-size-4 has-text-centered mt-5" style={{ fontWeight: '700' }}>People + tools + freedom = future cities</h3>

              <p className="is-size-5 has-text-justified mt-5">
                We created the formula for the cities of the future to demonstrate that with the right people, 
                equipped with the best tools, and the freedom to think, discuss, and create, we will all enter 
                an era of significant advances and, what was predicted for the next 50 years we will achieve in 
                this decade.
              </p>

              <p className="is-size-5 has-text-justified mt-3">
                We strongly believe in the power that a well-aligned community has. That people enjoy connecting 
                and sharing since the beginning of human life. We believe in the natural strength of people. 
                For us, all these people need is a shared vision, someone who trusts them, and someone who collaborates 
                with them. We are this someone.
              </p>

              <p className="is-size-5 has-text-justified mt-3">
                We want, together with you, to be more innovative, creative, and daring. We want to go beyond what 
                has already been accomplished, beyond what most people think is possible. There are no maps, plans, 
                or tips to get to a new place, so all we have, is our persistence, vision, and the strength of our communities. 
                We build the best cities with collective strength, with the decentralization of power and tools. We will show 
                this to everyone. 
              </p>

              <p className="is-size-5 has-text-justified mt-5" style={{ fontWeight: '600' }}>
                The cities of the future must above all be cities for people. 
              </p>

              <p className="is-size-5 has-text-justified mt-3" style={{ fontWeight: '600' }}>
                The cities of the future must be sustainable, fair, technological, and with opportunities for all. They must be happy.  
              </p>
              <hr style={{ width: '100%', backgroundColor: '#000000' }}/>
              <p className="is-size-5 has-text-justified mt-3" style={{ fontWeight: '700' }}>
                We hope you will collaborate with us so that together we can reimagine our cities, build a bright future as soon as possible, 
                and have a lot of fun along the way.  
              </p>

              <p className="is-size-5 has-text-justified mt-3" style={{ fontWeight: '700' }}>
                We hope that this little message of ours has made you think and look at your city differently.
              </p>

              <p className="is-size-5 has-text-justified mt-3" style={{ fontWeight: '700' }}>
                We hope this message is enough for you to get excited and collaborate with us so that together we can build the cities of the future. 
              </p>

              <p className="is-size-5 has-text-justified mt-6">
                To infinity and beyond. — Toy Story, in a message to you.
              </p>

            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
}

export default AboutUs;