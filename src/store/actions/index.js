import axios from "axios";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

const role = {
  1: "client",
  2: "instructor",
};

export const login = (username, password) => (dispatch) => {
  //   dispatch({ type: LOGIN_REQUEST });
  axios
    .get("") // TODO: Add login url
    .then((res) => {
      console.log(res.data);
      //   dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const register = (user) => (dispatch) => {
  //   dispatch({ type: REGISTER_REQUEST });
  let data = {
    username: user.username,
    password: user.password,
    role: user.instructor ? role[2] : role[1],
  };
  console.log(data);
  axios
    .post("http://tt72-anyfit.herokuapp.com/createnewuser", {
      data: JSON.stringify(data),
    })
    .then((res) => {
      console.log(res);
      //   history.push("/login");
      //   dispatch({ type: REGISTER_SUCCESS });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REGISTER_FAILURE });
    });
};
