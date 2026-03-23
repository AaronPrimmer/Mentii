import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

const loginComponent = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({
        variables: { ...formData },
      });
      localStorage.setItem("user-info", JSON.stringify(data.login.user)); // Store token in localStorage
      console.log("Login successful:", data);
      // Handle successful login, e.g., store token, redirect, etc.
      window.location.href = "/"; // Redirect to home page after successful login
    } catch (err) {
      console.error("Error during login:", err);
    }

    setFormData({
      username: "",
      password: "",
    });
    // Here you would typically send the formData to your backend for authentication
  };

  return (
    <div>
      <form id="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username.trim()}
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password.trim()}
          required
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default loginComponent;
