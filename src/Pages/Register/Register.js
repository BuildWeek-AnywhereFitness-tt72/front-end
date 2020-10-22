import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { StyledLink } from "../../reusable-components/reusableComponents";
import { register } from "../../store/actions";
import { MainHeader } from "../../reusable-components/reusableComponents";

const StyledSignUp = styled.div`
  display: flex;
  #hero-img {
    display: inline-block;
    width: 60%;
    background-image: url("https://s3-alpha-sig.figma.com/img/9adf/3259/6e5496fba2de53fa2ad308e1607bae4b?Expires=1603670400&Signature=aXc3ptln6GHEwJfJhkE3VvPI0lk772EyadQgWoe0sqIqNtc5HrkUBNVVNWbNduvI5EN1pM~23vtZIXQDGtJqrXVTR1eZsljoCGCCUqHtETHPvyp5Nq5czwym3CLL-I0GXx1m5aYGbh-oY-nTeTrGaQIiaFbOBhLdQjr9BBiWQRIIujOi87yW6C81ZPfxJ1AvkwrAzWcs50aaY3wojabWg6JiMwfRl24~ryCblh5vGkDrAsrAYQp5RJTZClH~V2LyMyScK6o8bkHZxLrIpNnWfH8cETjag96V1qV2itgWsgo-FW940~Fjn~avYGJODdv5Yihipv-tg1f7-CdtACY7Cg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 25%;
    height: 800px;
  }
`;

const StyledContainer = styled.div`
  padding: 5% 4%;
  h1 {
    margin: 0 0 3rem 15%;
    font-size: 4.5rem;
  }
`;

const StyledForm = styled.form`
  background-color: ${(pr) => pr.theme.white};
  padding: 2%;
  margin-left: 4rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-size: 1.3rem;
  }

  label > span {
    color: ${(pr) => pr.theme.primaryOrange};
  }

  input {
    display: block;
    width: 80%;
    line-height: 2.1rem;
    margin: 6px 0 0;
  }

  select {
    width: 80%;
    height: 3rem;
  }
`;

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    // email: "",
    role: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitAccount = (e) => {
    e.preventDefault();
    dispatch(register(user));
    history.push('/login');
  };

  return (
    <div>
      <MainHeader>
        <h1>Anywhere Fitness</h1>
      </MainHeader>
      <StyledSignUp>
        <div className="hero-image" id="hero-img"></div>
        <StyledContainer>
          <h1 className="signup_header">Sign Up</h1>
          <StyledForm onSubmit={submitAccount}>
            <label>
              Username:
              <input
                type="string"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
            </label>
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
              Account type:
              <select onChange={handleChange} value={user.role} name="role">
                <option value="">--Select account type--</option>
                <option value="client">Student</option>
                <option value="instructor">Instructor</option>
              </select>
            </label>
            <button>Sign Up</button>
          </StyledForm>
        </StyledContainer>
      </StyledSignUp>
    </div>
  );
};

export default Register;
