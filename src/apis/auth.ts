import axios from "axios";
import {
  Discussion,
  discussionRequest,
  LoginRequest,
  LoginResponse,
  MeResponse,
  replyRequest,
  replyResponse,
  SignupRequest,
  SignupResponse,
} from "./interfaces";

// export const BASE_URL = "https://dark-3.herokuapp.com";
export const BASE_URL = "http://127.0.0.1:8000";
export const AUTH_TOKEN = "Login Token";

export const login = (data: LoginRequest) => {
  const url = BASE_URL + "/user/login";

  return axios.post<LoginResponse>(url, data);
};

export const signup = (data: SignupRequest) => {
  const url = BASE_URL + "/user/signup";

  return axios.post<SignupResponse>(url, data);
};

const token = localStorage.getItem(AUTH_TOKEN);
export const me = () => {
  const url = BASE_URL + "/user/me";

  // console.log(token);

  return axios.get<MeResponse>(url, { headers: { Authorization: token! } });
};

export const getAllDiscussions = () => {
  const url = BASE_URL + "/discussion/getAll";
  return axios.get<Discussion>(url);
};

export const getSingleDiscussion = (id: string) => {
  const url = BASE_URL + `/discussion/getOne/${id}`;
  return axios.get<Discussion>(url);
};

export const reply = (data: replyRequest) => {
  const url = BASE_URL + "/reply";
  return axios.post<replyResponse>(
    url,
    { discussionID: data.discussionID, userID: data.userID, reply: data.reply },
    { headers: { Authorization: token! } }
  );
};

export const createDiscussion = (data: discussionRequest) => {
  const url = BASE_URL + "/discussion/createDiscussion";
  return axios.post<replyResponse>(
    url,
    { topic: data.topic, description: data.description, id: data.id },
    { headers: { Authorization: token! } }
  );
};

export const logout = () => {
  localStorage.removeItem(AUTH_TOKEN);
  window.location.href = "/discussion-all";
};
