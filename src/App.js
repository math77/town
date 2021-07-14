import { useState } from 'react';

import { Link } from 'react-router-dom';

import { supabase } from './supabaseClient';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';


import './App.css';

function App() {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');


  const handleSubscriber = async (fullname, email) => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from('subscribers')
        .insert([
          { full_name: fullname, email: email },
        ]);

      if (error) throw error
      alert('Successfully signed up. Sorry for the ugly message, the first days of a startup are just like that.');
      setFullname('');
      setEmail('');
      console.log(data);
    } catch (error) {
      alert('Something went wrong, try again! Sorry for the ugly message, the first days of a startup are just like that.');
    } finally {
      setLoading(false);
    }
  }


  return (
    <div>

     <Navbar />

      
      <section className="section is-medium" id="banner-welcome">
        <div className="container">
          <h1 className="big-title has-text-centered banners">
            Building the cities of the future - <span style={{ color: '#fff' }}>today.</span>
          </h1>
          <div className="has-text-centered" style={{ marginTop: '65px' }}>
            <Link className="button is-white is-rounded is-outlined" to="/about">
              Read our manifesto
            </Link>
          </div>
        </div>
      </section>

      <section className="section is-medium">
        <div className="container">
          <h3 className="is-size-2 has-text-centered session-title" style={{ color: '#fff' }}>Stay tuned.</h3>
          <div className="column is-one-third is-offset-one-third">
            <input className="input" type="text" placeholder="Your name" value={fullname} onChange={(e) => setFullname(e.target.value)} style={{ backgroundColor: 'transparent', borderColor: '#fff' }} />
            <input className="input mt-5" type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ backgroundColor: 'transparent', borderColor: '#fff' }} />
            <div className="has-text-centered">
              <button className="button is-white is-rounded mt-5" disabled={loading} onClick={(e) => { e.preventDefault(); handleSubscriber(fullname, email) }}>
                Subscribe
              </button>
            </div>
          </div>
      
        </div>
      </section>
            
      <Footer />
    </div>
  );
}

export default App;
