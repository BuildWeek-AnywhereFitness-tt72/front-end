import { REGISTER_SUCCESS, REGISTER_REQUEST } from "../actions";

export function registration(state, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { registering: true };
    case REGISTER_SUCCESS:
      return {};
    default:
      return state;
  }
}
