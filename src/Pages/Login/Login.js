import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
// styling
import { login } from '../../store/actions/index.js';

import img from '../../../src/assets/loginbox.jpg';

const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
	width: 80vw;
	margin: 0 auto;
	h2 {
		text-shadow: 3px 3px 3px white;
		display: inline-block;
		font-size: 4rem;
		padding: 2%;
		margin: 10% auto;
	}
	div.login-container {
		box-shadow: -4px 4px 4px gray;
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		justify-content: center;
		background-color: tan;
		border: 8px double #41a95e;
		height: 80vh;
		width: 40vw;
		border-radius: 10px;
		input {
			box-shadow: -3px 3px 5px black;
			padding: 2%;
			width: 80%;
			height: 30%;
		}
		div.register-link {
			margin-top: 10px;
			padding-top: 5%;
		}
	}
`;
const Button = styled.button`
	display: ${(pr) => (pr.isDisabled ? 'none' : 'flex')};
	background-color: ${(pr) => pr.theme.charcoal};
	color: ${(pr) => pr.theme.eggshell};
	width: 10rem;
	height: 2.5rem;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	font-weight: 600;
	border-radius: 10px;
	margin-top: 10px;
	&:hover {
		cursor: pointer;
		color: ${(pr) => pr.theme.eggshell};
	}
`;

// end of styling
const initialValues = {
	username: '',
	password: '',
	OAuth: '',
	email: '',
};
const initialErrors = {
	username: '',
	password: '',
	OAuth: '',
	email: '',
};

const Login = (props) => {
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState(initialErrors);
	// const [disabled, setDisabled] = useState(true);
	const history = useHistory();

	const onInputChange = (evt) => {
		const { name, value } = evt.target;

		setValues({ ...values, [name]: value });
	};
	// const submitForm = () => {
	// 	console.log(values);
	// 	console.log(errors);
	// };
	// if we are loggedin successfully, we should go to the dash
	useEffect(() => {
		if (props.isLoggedIn === true) {
			history.push('/Dash');
		}
	}, [props.isLoggedIn]);

	const handleOnClick = (evt) => {
		evt.preventDefault();
		props.login(values.username, values.password);
	};

	return (
		<StyledDiv>
			<form className="form container">
				<div className="login-container">
					<div className="errors">
						<div>{errors.username}</div>
						<div>{errors.email}</div>
						<div>{errors.phone}</div>
						<div>{errors.plants}</div>
					</div>
					<h2>Username</h2>
					<input
						name="username"
						type="text"
						placeholder="Username"
						value={values.name}
						onChange={onInputChange}
					/>
					<h2>Password</h2>
					<input
						name="password"
						type="password"
						placeholder="Password"
						value={values.password}
						onChange={onInputChange}
					/>

					<Button onClick={handleOnClick}>Login</Button>
					<div className="register-link">
						<Link to="../Register/Register.js">
							New? Register here
						</Link>
					</div>
				</div>
			</form>
		</StyledDiv>
	);
};
const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.loginReducer.isLoggedIn,
	};
};
export default connect(mapStateToProps, { login })(Login);
