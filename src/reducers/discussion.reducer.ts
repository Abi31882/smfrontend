import { Reducer } from "redux";
import {
  GET_ME_COMPLETE,
  LOGIN_COMPLETE,
  SIGNUP_COMPLETE,
} from "../actions/auth.actions";
import {
  CREATING_REPLY_COMPLETED,
  GET_ALL_DISCUSSIONS_COMPLETED,
  GET_SINGLE_DISCUSSION_COMPLETE,
} from "../actions/discussion.actions";
import { Discussion, singleDiscussion } from "../apis/interfaces";

export interface DiscussionState {
  Discussions: Discussion[];
  singleDiscussion: singleDiscussion;
  newReply: string;
}

const initialState: DiscussionState = {
  Discussions: [],
  singleDiscussion: {
    discussion: {
      _id: "",
      topic: "",
      description: "",
      creator: { _id: "", userName: "" },
    },
    reply: [{ _id: "", reply: "", discussion: "", replier: "" }],
  },
  newReply: "",
};

export const discussionReducer: Reducer<DiscussionState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_ALL_DISCUSSIONS_COMPLETED:
      return { ...state, Discussions: action.payload };
    case GET_SINGLE_DISCUSSION_COMPLETE:
      return { ...state, singleDiscussion: action.payload };
    case CREATING_REPLY_COMPLETED:
      return { ...state, newReply: action.payload.reply };
    default:
      return state;
  }
};
