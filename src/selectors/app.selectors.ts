import { AppState } from "../store";

export const discussionStateSelector = (state: AppState) => state.discussions;
export const authStateSelector = (state: AppState) => state.auth;
