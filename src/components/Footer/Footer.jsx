import "./Footer.scss";
import Facebook from "../../assets/images/Icons/Facebook.svg";
import Twitter from "../../assets/images/Icons/X_twitter.svg";
import Instagram from "../../assets/images/Icons/Instagram.svg";
import Pinterest from "../../assets/images/Icons/Pinterest.svg";

function Footer() {
  return (
    <>
      <footer className="snaps__footer">
        <div className="snaps__footer-top">
          <h1 className="snaps__footer-top-title">Snaps</h1>
          <div className="snaps__footer-top-links">
            <ul className="snaps__footer-top-links-talent">
              <li className="snaps__footer-top-links-talent-link">
                <a href="#">For photographers</a>
              </li>
              <li className="snaps__footer-top-links-talent-link">
                <a href="#">Hire talent</a>
              </li>
              <li className="snaps__footer-top-links-talent-link">
                <a href="#">Inspiration</a>
              </li>
            </ul>
            <ul className="snaps__footer-top-links-about">
              <li className="snaps__footer-top-links-about-link">
                <a href="#">About</a>
              </li>
              <li className="snaps__footer-top-links-about-link">
                <a href="#">Careers</a>
              </li>
              <li className="snaps__footer-top-links-about-link">
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="snaps__footer-socials">
          <a href="https://www.facebook.com/">
            <img src={Facebook} alt="Facebook Icon" />
          </a>
          <a href="https://x.com/?lang=en">
            <img src={Twitter} alt="Twitter Icon" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={Instagram} alt="Instagram Icon" />
          </a>
          <a href="https://www.pinterest.com/">
            <img src={Pinterest} alt="Pinterest Icon" />
          </a>
        </div>
        <div className="snaps__footer-copyright">
          <p className="snaps__footer-copyright-text">&copy; 2024 Snaps</p>
          <p className="snaps__footer-copyright-text">
            <p className="snaps__footer-copyright-text">.</p>
          </p>
          <p className="snaps__footer-copyright-text">
            <a>Terms </a>
          </p>
          <p className="snaps__footer-copyright-text">
            <a>Privacy</a>
          </p>
          <p className="snaps__footer-copyright-text">
            <a>Cookies</a>
          </p>
        </div>
        <div className="snaps__footer-desktop-top">
          <div className="snaps__footer-desktop-top-title">
            <h1 className="snaps__footer-desktop-top-title-text">Snaps</h1>
          </div>
          <div className="snaps__footer-desktop-top-aside">
            <div className="snaps__footer-desktop-top-aside-links">
              <ul className="snaps__footer-desktop-top-aside-links-talent">
                <li className="snaps__footer-desktop-top-aside-links-talent-link">
                  <a href="#">For photographers</a>
                </li>
                <li className="snaps__footer-desktop-top-aside-links-talent-link">
                  <a href="#">Hire talent</a>
                </li>
                <li className="snaps__footer-desktop-top-aside-links-talent-link">
                  <a href="#">Inspiration</a>
                </li>
              </ul>
              <ul className="snaps__footer-desktop-top-aside-links-about">
                <li className="snaps__footer-desktop-top-aside-links-about-link">
                  <a href="#">About</a>
                </li>
                <li className="snaps__footer-desktop-top-aside-links-about-link">
                  <a href="#">Careers</a>
                </li>
                <li className="snaps__footer-desktop-top-aside-links-about-link">
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
            <div className="snaps__footer-desktop-top-aside-socials">
              <a href="https://www.facebook.com/">
                <img src={Facebook} alt="Facebook Icon" />
              </a>
              <a href="https://x.com/?lang=en">
                <img src={Twitter} alt="Twitter Icon" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={Instagram} alt="Instagram Icon" />
              </a>
              <a href="https://www.pinterest.com/">
                <img src={Pinterest} alt="Pinterest Icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="snaps__footer-desktop-copyright">
          <p className="snaps__footer-desktop-copyright-text">
            &copy; 2024 Snaps
          </p>
          <p className="snaps__footer-desktop-copyright-text">
            <p className="snaps__footer-desktop-copyright-text">.</p>
          </p>
          <p className="snaps__footer-desktop-copyright-text">
            <a>Terms </a>
          </p>
          <p className="snaps__footer-desktop-copyright-text">
            <a>Privacy</a>
          </p>
          <p className="snaps__footer-desktop-copyright-text">
            <a>Cookies</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
