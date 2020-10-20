
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
    role: "student",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitAccount = (e) => {
    e.preventDefault();
    dispatch(register(user));
  };

  return (
    <div>
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
        <button>Sign Up</button>
      </form>
    </div>
  );
}


export default Register;
