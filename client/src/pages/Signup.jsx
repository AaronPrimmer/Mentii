import "../assets/css/signup.css";
import { Link } from "react-router-dom";
import SignupComponent from "../components/Login/signupComponent";

const Signup = () => {
  return (
    <div className="signup-container">
      <h1>Signup Page</h1>
      <SignupComponent />

      <div className="have-account">
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
