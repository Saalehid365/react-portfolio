import "./Footer.css";
import {
  FaTwitter,
  AiFillLinkedin,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="socials">
        <a href="https://twitter.com/idevelop365" className="socialscircle">
          <FaTwitter className="social" />
        </a>
        <a
          href="https://uk.linkedin.com/in/anthony-nelson-a70688151"
          className="socialscircle"
        >
          <FaLinkedin className="social" />
        </a>
        <a href="https://github.com/Saalehid365" className="socialscircle">
          <FaGithub className="social" />
        </a>
      </div>
      <div>
        <p className="designed">
          Designed and developed by
          <span className="anthony">Anthony Nelson</span>
          <br>
            <span className="id365">I Develop 365</span>
          </br>
        </p>
      </div>
    </div>
  );
};
