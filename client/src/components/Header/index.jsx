import { Link } from "react-router-dom";
import "../../assets/css/header.css";
import { useState } from "react";
import CreatePostComponent from "../Modals/createPostComponent";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            <div className="logged-in-header-containter">
              <button
                className="header-create-button"
                id="createButton"
                onClick={() => setIsModalOpen(true)}
              >
                Post
              </button>
              Hello, {JSON.parse(userInfo).firstname}!
            </div>
          ) : (
            "Welcome, Guest!"
          )}
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
        <div className="modal-container">
          {isModalOpen && (
            <CreatePostComponent setIsModalOpen={setIsModalOpen} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
