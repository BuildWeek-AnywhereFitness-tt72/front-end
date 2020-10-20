<<<<<<< HEAD
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialValue = {
	credentials: {
		username: '',
		email: '',
		password: '',
	},
};

const Register = () => {
	const [state, setState] = useState(initialValue);
	const history = useHistory();

	const handleChange = (e) => {
		setState({
			credentials: {
				...state.credentials,
				[e.target.name]: e.target.value,
			},
		});
	};

	const register = (e) => {
		e.preventDefault();
		axios
			.post('http://tt72-anyfit.herokuapp.com/login', state.credentials)

			.then((res) => {
				// console.log(res)
				localStorage.setItem('token', res.data.access_token);
				history.push('/login');
			})
			.catch((err) => {
				console.log(err);
			});
		setState(initialValue);
	};

	const routeToSignIn = () => {
		history.push('/login');
	};

	return (
		<div className="container-wrapper">
			<div className="image-container">
				<h1 className="signUp-header">Welcome to Water My Plants</h1>
			</div>
			<div className="form-container">
				<form className="form" onSubmit={register}>
					<label className="form-label">
						Username:
						<input
							className="input-field"
							placeholder="Enter user name"
							type="text"
							name="username"
							value={state.credentials.username}
							onChange={handleChange}
						/>
					</label>
					<label className="form-label">
						Email:
						<input
							className="input-field"
							placeholder="Enter email address"
							type="email"
							name="email"
							value={state.credentials.email}
							onChange={handleChange}
						/>
					</label>
					<label className="form-label">
						Password:
						<input
							className="input-field"
							placeholder="Enter password"
							type="password"
							name="password"
							value={state.credentials.password}
							onChange={handleChange}
						/>
					</label>
					<button className="button">Create Account</button>
				</form>
				<p className="link-to-sign">
					Already have an account?{' '}
					<span onClick={routeToSignIn}>Sign in</span> here
				</p>
			</div>
		</div>
	);
};
=======
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
>>>>>>> 1c3c82ce4addc68875da515df23e362c67fb04a1

export default Register;
