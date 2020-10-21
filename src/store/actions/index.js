import axios from 'axios';
import { axiosWithSecret } from '../../Pages/Login/axiosWithAuth.js';

export const LOGOUT = 'LOGOUT';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
// action creator that is going to do some async stuff

export const login = (username, password) => (dispatch) => {
	dispatch({ type: LOGIN_REQUEST });
	console.log('log me something');
	axiosWithSecret()
		.post(
			'https://tt72-anyfit.herokuapp.com/login',
			`grant_type=password&username=${username}&password=${password}`
		) // TODO: Add login url
		.then((res) => {
			console.log(res.data);
			dispatch({ type: LOGIN_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			console.log(err);
			dispatch({ type: LOGIN_FAILURE });
		});
};

export const register = (user) => (dispatch) => {
  //   dispatch({ type: REGISTER_REQUEST });

  axios({
    method: "post",
    url: "https://tt72-anyfit.herokuapp.com/createnewuser",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(user),
  })
    .then((res) => {
      alert("You are now signed up.");
      dispatch({ type: REGISTER_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REGISTER_FAILURE });
    });
};
