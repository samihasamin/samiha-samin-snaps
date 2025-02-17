import "./Footer.scss";
import Facebook from "../../assets/images/Icons/Facebook.svg";
import Twitter from "../../assets/images/Icons/X_twitter.svg";
import Instagram from "../../assets/images/Icons/Instagram.svg";
import Pinterest from "../../assets/images/Icons/Pinterest.svg";

function Footer() {
  return (
    <>
      <footer className="snaps__footer">
        <h1 className="snaps__footer-title">Snaps</h1>
        <div className="snaps__footer-links">
          <ul className="snaps__footer-links-talent">
            <li className="snaps__footer-links-talent-link">
              <a href="#">For photographers</a>
            </li>
            <li className="snaps__footer-links-talent-link">
              <a href="#">Hire talent</a>
            </li>
            <li className="snaps__footer-links-talent-link">
              <a href="#">Inspiration</a>
            </li>
          </ul>
          <ul className="snaps__footer-links-about">
            <li className="snaps__footer-links-about-link">About</li>
            <li className="snaps__footer-links-about-link">Careers</li>
            <li className="snaps__footer-links-about-link">Support</li>
          </ul>
          <div className="snaps__footer-socials">
            <img src={Facebook} alt="Facebook Icon" />
            <img src={Twitter} alt="Twitter Icon" />
            <img src={Instagram} alt="Instagram Icon" />
            <img src={Pinterest} alt="Pinterest Icon" />
          </div>
          <div className="snaps__footer-copyright">
            <p className="snaps__footer-copyright-text">
              &copy; 2024 Snaps . Terms Privacy Cookies
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
