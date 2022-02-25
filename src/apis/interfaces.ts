export interface LoginRequest {
  userName: string;
  password: string;
}

export interface LoginResponse {
  status: string;
  token: string;
  doc: User;
}

export interface User {
  _id: string;
  userName: string;
}

export interface SignupRequest {
  userName: string;
  password: string;
}

export interface SignupResponse {
  status: string;
  token: string;
  doc: User;
}

export interface MeResponse {
  status: string;
  doc: User;
}

export interface Discussion {
  _id: string;
  topic: string;
  description: string;
  creator: User;
}

export interface singleDiscussion {
  discussion: Discussion;
  reply?: {
    _id: string;
    reply: string;
    discussion: string;
    replier: string;
  }[];
}

export interface replyRequest {
  discussionID: string | undefined;
  userID: string;
  reply: string;
}

export interface replyResponse {
  reply: string;
  discussion: string;
  replier: string;
  _id: string;
}

export interface discussionRequest {
  topic: string;
  description: string;
  id: string;
}
