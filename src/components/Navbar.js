import { useState } from 'react';

import { Link } from 'react-router-dom';

import './Navbar.css';


function Navbar() {
  const [isActive, setisActive] = useState(false);

  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" id="logo">
          Town Co.
        </Link>

        <Link
          onClick={() => {
            setisActive(!isActive)
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarTown"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>

      </div>
      <div id="navbarTown" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start" id="navbar-items">
          <Link className="navbar-item" to="/about">We</Link>
          <Link className="navbar-item" to="/community">Community</Link>
          <Link className="navbar-item" to="/contest">Contests</Link>
          <Link className="navbar-item" to="/faq">FAQ</Link>
        </div>
        
        <div className="navbar-end">
          <div className="navbar-item" id="btn-navbar">
            <div className="buttons">
              <a className="button is-black is-rounded" href="https://form.typeform.com/to/v4G4wIXa" target="_blank" rel="noreferrer">
                Join community
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
