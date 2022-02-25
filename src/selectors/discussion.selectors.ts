import { createSelector } from "reselect";
import { Discussion } from "../apis/interfaces";
import { discussionStateSelector } from "./app.selectors";

export const discussionListSelector = createSelector(
  [discussionStateSelector],
  (discussionState) => {
    return discussionState.Discussions;
  }
);

export const singleDiscussionSelector = createSelector(
  [discussionStateSelector],
  (discussionState) => {
    return discussionState.singleDiscussion;
  }
);
