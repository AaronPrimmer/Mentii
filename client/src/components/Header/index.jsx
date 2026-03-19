import { Link } from "react-router-dom";
import "../../assets/css/header.css";

function Header() {
  return (
    <header className="header-main">
      <div>
        <Link to="/">
          <img
            className="header-logo"
            src="/images/mentii-logo300x80.png"
            alt="Mentii Logo"
          />
        </Link>
      </div>
      <div>
        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/profiles">Profiles</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
