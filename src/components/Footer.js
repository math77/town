import './Navbar.css';


function Footer() {

  return (
    <footer className="footer" style={{ backgroundColor: '#131617', padding: '20px' }}>
      <div className="content has-text-centered">
        <h5 id="logo-footer" className="is-size-4" style={{ color: '#ffffff' }}>Town Co.</h5>
        <p className="is-size-6">
          <i className="fab fa-twitter" style={{ color: '#ffffff', marginRight: '5px' }}></i>
          <span>
            <a href="https://twitter.com/towncocompany" target="_blank" rel="noreferrer">
              @towncocompany
            </a>
          </span>
        </p>
        <a className="is-size-6" href="mailto:sayhello@townco.city" style={{ color: '#ffffff', fontWeight: '600' }}>sayhello@townco.city</a>
      </div>
    </footer>
  );
}

export default Footer;
