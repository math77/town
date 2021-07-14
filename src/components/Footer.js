import './Navbar.css';


function Footer() {

  return (
    <footer className="footer" style={{ backgroundColor: 'transparent', padding: '5px' }}>
      <div className="content has-text-centered">
        <p className="is-size-6 mt-2">
          <a href="https://twitter.com/towncocompany" style={{ color: '#ffffff', fontWeight: '700' }} target="_blank" rel="noreferrer">
            @towncocompany
          </a>
        </p>
        <a className="is-size-6" href="mailto:sayhello@townco.city" style={{ color: '#ffffff', fontWeight: '700' }}>sayhello@townco.city</a>
        <p className="is-size-6 mt-3">&copy; Copyright 2021</p>
      </div>
    </footer>
  );
}

export default Footer;
