import { LOGIN_SUCCESS } from "../actions";

const initialState = {
  userData: {},
  token: "",
  loggedIn: true, // TODO: default should be false
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        // user: action.user
      };
    default:
      return state;
  }
};

export default loginReducer;
