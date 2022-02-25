import {
  Discussion,
  discussionRequest,
  replyRequest,
  replyResponse,
  singleDiscussion,
} from "./apis/interfaces";

export const GET_ALL_DISCUSSIONS_BEGIN = "get/all_discussions_begin";
export const GET_ALL_DISCUSSIONS_COMPLETED = "get/all_discussions_completed";

export const GET_SINGLE_DISCUSSION_BEGIN = "get/single_discussion_begin";
export const GET_SINGLE_DISCUSSION_COMPLETE = "get/single_discussion_complete";

export const CREATING_REPLY_BEGIN = "creating/reply_begin";
export const CREATING_REPLY_COMPLETED = "creating/reply_completed";

export const CREATING_DISCUSSION_BEGIN = "creating/discussion_begin";
export const CREATING_DISCUSSION_COMPLETE = "creating/discussion_complete";

export const getAllDiscussionsBeginAction = () => ({
  type: GET_ALL_DISCUSSIONS_BEGIN,
});

export const getAllDiscussionsCompletedAction = (
  discussions: Discussion[]
) => ({
  type: GET_ALL_DISCUSSIONS_COMPLETED,
  payload: discussions,
});

export const getSingleDiscussionBeginAction = (id: string) => ({
  type: GET_SINGLE_DISCUSSION_BEGIN,
  payload: id,
});

export const getSingleDiscussionCompleteAction = (d: singleDiscussion) => ({
  type: GET_SINGLE_DISCUSSION_COMPLETE,
  payload: d,
});

export const createReplyBeginAction = (data: replyRequest) => ({
  type: CREATING_REPLY_BEGIN,
  payload: data,
});

export const createReplyCompleteAction = (reply: replyResponse) => ({
  type: CREATING_REPLY_COMPLETED,
  payload: reply,
});

export const createDiscussionBeginAction = (data: discussionRequest) => ({
  type: CREATING_DISCUSSION_BEGIN,
  payload: data,
});

export const createDiscussionCompleteAction = (discussion: Discussion) => ({
  type: CREATING_DISCUSSION_COMPLETE,
  payload: discussion,
});
