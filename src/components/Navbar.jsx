import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons";
import { FaConnectdevelop } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="logo-con">
        <FaConnectdevelop className="develop" />
        <p className="logo"> IDevelop365 </p>
      </div>
      <div className="links">
        <Link className="nav-link-list" to="/">
          Home
        </Link>
        <Link className="nav-link-list" to="/About">
          About
        </Link>
        <Link className="nav-link-list" to="/Projects">
          Projects
        </Link>
        <Link className="nav-link-list" to="/Contact">
          Contact
        </Link>
        <button className="nav-hire-btn">
          <Link className="nav-link-list nll-hire" to="/">
            Hire me
          </Link>
        </button>
      </div>
    </div>
  );
};
