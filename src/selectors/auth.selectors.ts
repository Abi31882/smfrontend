import { createSelector } from "reselect";
import { authStateSelector } from "./app.selectors";

export const userIdSelector = createSelector(
  [authStateSelector],
  (authState) => {
    return authState._id;
  }
);
