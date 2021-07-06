import './Navbar.css';


function Footer() {

  return (
    <footer className="footer" style={{ backgroundColor: '#000000', padding: '20px' }}>
      <div className="columns" style={{ marginTop: '6px' }}>
        <div className="column is-2 is-offset-one-3">
          <h5 id="logo-footer" className="is-size-4" style={{ color: '#ffffff' }}>Town Co.</h5>
        </div>
        <div className="column is-4 is-offset-7">
          <h2 className="is-size-4" style={{ color: '#ffffff', marginBottom: '10px', fontWeight: '600' }}>Contact</h2>
          <p className="is-size-6">
            <i className="fas fa-envelope" style={{ color: '#ffffff', marginRight: '5px' }}></i>
            <span>
              <a className="is-size-6" href="mailto:sayhello@townco.city" style={{ color: '#ffffff', fontWeight: '600' }}>sayhello@townco.city</a>
            </span>
          </p>
          <p className="is-size-6">
            <i className="fab fa-twitter" style={{ color: '#ffffff', marginRight: '5px' }}></i>
            <span>
              <a style={{ color: '#ffffff', fontWeight: '600' }} href="https://twitter.com/towncocompany" target="_blank" rel="noreferrer">
                @towncocompany
              </a>
            </span>
          </p>
        </div>
      </div>
      <div className="content has-text-centered">
        <p>&copy; Copyright 2021</p>
        <p style={{ fontSize: '0.79rem' }}>
          Illustration by <a href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
