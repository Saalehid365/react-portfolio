import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="nav-bar">
      <div>
        <p> ID365 </p>
      </div>
      <div className="links">
        <Link style={{ textDecoration: "none" }} to="/">
          Home
        </Link>
        <Link style={{ textDecoration: "none" }} to="/About">
          About
        </Link>
        <Link style={{ textDecoration: "none" }} to="/Projects">
          Projects
        </Link>
        <Link style={{ textDecoration: "none" }} to="/Contact">
          Contact
        </Link>
        <button className="nav-hire-btn">
          <Link style={{ textDecoration: "none" }} to="/">
            Hire me
          </Link>
        </button>
      </div>
    </div>
  );
};
