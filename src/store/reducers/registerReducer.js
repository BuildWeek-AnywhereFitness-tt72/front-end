import { REGISTER_SUCCESS, REGISTER_REQUEST } from "../actions";

const initialState = { registering: false }

export function registration(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { registering: true };
    case REGISTER_SUCCESS:
      //return {};
    default:
      return state;
  }
  
}
