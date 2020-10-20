import React, { useState } from "react";
// import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { register } from "../../store/actions";
import { MainHeader } from "../../reusable-components/reusableComponents";

function Register() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    // email: "",
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
        <h1>Anywhere Fitness</h1>
      </MainHeader>
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={submitAccount}>
          <label>
            Username:
            <input
              type="string"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </label>
          {/* <label>
          Email:
          <input
            type="email"
            name="email"
            // value={user.email}
            onChange={handleChange}
          />
        </label> */}
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={user.password}
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
    </div>
  );
}

export default Register;
