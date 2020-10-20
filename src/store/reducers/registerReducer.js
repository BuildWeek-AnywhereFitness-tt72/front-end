import { REGISTER_SUCCESS, REGISTER_REQUEST } from "../actions";

const initialState = {
  loggedIn: true, // TODO: default should be false
  error: "",
};

export function registration(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { registering: true };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        token: action["access_token"],
      };
    default:
      return state;
  }
}
