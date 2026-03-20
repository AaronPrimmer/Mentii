import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { ADD_USER } from "../../utils/mutations";

const signupComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    status: "",
    skills: [],
    title: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formData },
      });

      setFormData({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        status: "",
        skills: [],
        title: "",
      });
      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Error during signup:", err);
    }
    // Here you would typically send the formData to your backend for authentication
  };

  return (
    <form id="signupForm" onSubmit={handleSubmit}>
      <label htmlFor="firstname">First Name:</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        value={formData.firstname}
        required
        onChange={(e) =>
          setFormData({ ...formData, firstname: e.target.value })
        }
      />
      <label htmlFor="lastname">Last Name:</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        value={formData.lastname}
        required
        onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
      />
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        required
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        required
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        required
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <fieldset
        className="role-fieldset"
        required
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
      >
        <legend>Role:</legend>
        <label>
          <input type="checkbox" name="role" value="mentor" /> Mentor
        </label>
        <label>
          <input type="checkbox" name="role" value="mentee" /> Mentee
        </label>
        <label>
          <input type="checkbox" name="role" value="both" /> Both
        </label>
      </fieldset>
      <label htmlFor="skills">Skills:</label>
      <input
        type="text"
        id="skills"
        name="skills"
        value={formData.skills}
        onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
      />
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default signupComponent;
