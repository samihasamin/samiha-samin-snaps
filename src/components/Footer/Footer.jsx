import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer className="snaps__footer">
        <h1 className="snaps__footer-title">Snaps</h1>
        <div className="snaps__footer-links">
          <ul>
            <li>
              <a href="#">For photographers</a>
            </li>
            <li>
              <a href="#">Hire talent</a>
            </li>
            <li>
              <a href="#">Inspiration</a>
            </li>
          </ul>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Support</li>
          </ul>
          <div className="snaps__footer-socials"></div>
          <div className="snaps__foter-copyright">
            <p>&copy; 2024 Snaps . Terms Privacy Cookies</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
