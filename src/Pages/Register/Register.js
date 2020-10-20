

import React, { useState } from "react";
// import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { register } from "../../store/actions";

function Register() {
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
    instructor: false,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setUser({ ...user, [e.target.name]: e.target.checked });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const submitAccount = (e) => {
    e.preventDefault();
    dispatch(register(user));
  };

  return (
    <div>
      <MainHeader>
        <h1 onClick={handleTitleClick}>Anywhere Fitness</h1>
        <nav className="top-nav">
          <a href="/Dash/#" onClick={handleHelpClick}>
            Help
          </a>
          <a href="/Dash/#" onClick={handleAboutClick}>
            About
          </a>
        </nav>
      </MainHeader>
      <form onSubmit={submitAccount}>
        <label>
          Username:
          <input
            type="string"
            name="name"
            // value={user.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            // value={user.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            // value={user.age}
            onChange={handleChange}
          />
        </label>
        <label>
          Are you an instructor?
          <input
            name="instructor"
            type="checkbox"
            checked={user.instructor}
            onChange={handleChange}
          />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
}


export default Register;
