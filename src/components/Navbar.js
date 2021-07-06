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
        </div>
        
        <div className="navbar-end">
          <div className="navbar-item" id="btn-navbar">
            <div className="buttons">
              <a className="button is-black is-rounded" href="https://airtable.com/shrjufO7WU65KAcu2" target="_blank" rel="noreferrer">
                Join the arts community
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
