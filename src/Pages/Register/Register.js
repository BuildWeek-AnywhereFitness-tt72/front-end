import React, { useState } from "react";
// import styles from "./Register.module.css";
import { Link } from "react-router-dom";

function Register() {
  const [newFriend, setNewFriend] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const submitAccount = (e) => {
    e.preventDefault();
    // props.submitAccount(newFriend);
    setNewFriend({ name: "", password: "", email: "" });
  };

  return (
    <div>
      <form onSubmit={submitAccount}>
        <label>
          Username:
          <input
            type="string"
            name="name"
            // value={newFriend.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            // value={newFriend.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            // value={newFriend.age}
            onChange={handleChange}
          />
        </label>
        <button>Add friend</button>
      </form>
    </div>
  );
}

export default Register;
