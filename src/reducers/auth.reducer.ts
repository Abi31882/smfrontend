import { Reducer } from "redux";
import {
  GET_ME_COMPLETE,
  LOGIN_COMPLETE,
  SIGNUP_COMPLETE,
} from "../actions/auth.actions";

export interface AuthState {
  _id: string;
  userName: string;
  error: string;
}

const initialState: AuthState = {
  _id: "",
  userName: "",
  error: "",
};

export const authReducer: Reducer<AuthState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SIGNUP_COMPLETE:
    case LOGIN_COMPLETE:
    case GET_ME_COMPLETE:
      return {
        ...state,
        _id: action.payload._id,
        userName: action.payload.userName,
      };
    default:
      return state;
  }
};
