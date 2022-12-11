import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons";

export const Navbar = () => {
  return (
    <div className="nav-bar">
      <div>
        <p className="logo"> ID365 </p>
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
          <Link className="nav-link-list" to="/">
            Hire me
          </Link>
        </button>
      </div>
    </div>
  );
};
