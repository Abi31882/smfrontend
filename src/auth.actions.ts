import { LoginRequest, SignupRequest, User } from "./apis/interfaces";

export const LOGIN_BEGIN = "login/begin";
export const LOGIN_COMPLETE = "login/complete";

export const SIGNUP_BEGIN = "signup/begin";
export const SIGNUP_COMPLETE = "signup/complete";

export const GET_ME_BEGIN = "get/me_begin";
export const GET_ME_COMPLETE = "get/me_complete";

export const loginBeginAction = (data: LoginRequest) => ({
  type: LOGIN_BEGIN,
  payload: data,
});

export const loginCompleteAction = (user: User) => ({
  type: LOGIN_COMPLETE,
  payload: user,
});

export const signupBeginAction = (data: SignupRequest) => ({
  type: SIGNUP_BEGIN,
  payload: data,
});

export const signupCompleteAction = (user: User) => ({
  type: SIGNUP_COMPLETE,
  payload: user,
});

export const getMeBeginAction = () => ({
  type: GET_ME_BEGIN,
});

export const getMeCompleteAction = (user: User) => ({
  type: GET_ME_COMPLETE,
  payload: user,
});
