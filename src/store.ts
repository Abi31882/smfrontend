import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/auth.reducer";
import { discussionReducer } from "./reducers/discussion.reducer";
import { SagaMiddleware } from "./sagas";
import { watchAll } from "./sagas/user.sagas";

const reducer = combineReducers({
  auth: authReducer,
  discussions: discussionReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(SagaMiddleware))
);

SagaMiddleware.run(watchAll);

export type AppState = ReturnType<typeof reducer>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
