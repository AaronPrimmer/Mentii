import { Link } from "react-router-dom";
import "../assets/css/login.css";
import LoginComponent from "../components/Login/loginComponent";

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <LoginComponent />
      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
};

export default Login;
