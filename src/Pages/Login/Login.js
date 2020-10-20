import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

// styling
const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
	width: 80vw;
	margin: 0 auto;
	h2 {
		display: inline-block;
		font-size: 2rem;
		padding: 2%;
		margin: 10% auto;
	}
	div.login-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		justify-content: center;
		background-color: white;
		border: 4px solid #41a95e;
		height: 50vh;
		width: 25vw;
		border-radius: 10px;
		input {
			padding: 2%;
			width: 80%;
		}
	}
`;
const StyledSubmit = styled.button`
	padding: 1%;
	margin: 5% auto;
	/* width: 60%; */
`;
const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* width: 50%; */
	text-align: center;
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
// { inputChange, submit, values, disabled, errors }
const Login = (props) => {
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState(initialErrors);
	const [disabled, setDisabled] = useState(false);
	const history = useHistory();
	const onInputChange = (evt) => {
		const { name, value } = evt.target;

		setValues({ ...values, [name]: value });
	};
	const submitForm = () => {
		console.log(values);
		console.log(errors);
	};
	const onSubmit = (evt) => {
		evt.preventDefault();
		submitForm();

		history.push('/Dash');
	};
	return (
		<StyledDiv>
			<form className="form container" onSubmit={onSubmit}>
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
					<ButtonContainer>

						<StyledSubmit disabled={disabled}>Login</StyledSubmit>
						{/* </motion.div> */}
					</ButtonContainer>
					<Link
						to="/"
						style={{ textDecoration: 'none', color: '#41a95e' }}>
						New? Register here
					</Link>
				</div>
			</form>
		</StyledDiv>
	);
};
export default Login;
