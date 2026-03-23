import { Link } from "react-router-dom";
import "../../assets/css/header.css";

function Header() {
  const userInfo = localStorage.getItem("user-info");

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
          {userInfo ? (
            <div>Hello, {JSON.parse(userInfo).firstname}!</div>
          ) : (
            "Welcome, Guest!"
          )}
          <Link to="/">Home</Link>
          {!userInfo ? (
            <Link to="/login">Login</Link>
          ) : (
            <div className="logged-in-container">
              <Link to={`/profiles/${JSON.parse(userInfo).username}`}>
                Profiles
              </Link>
              <Link to="/logout">Logout</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
