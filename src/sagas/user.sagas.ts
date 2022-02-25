import { call, put, all, takeEvery } from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import {
  getMeCompleteAction,
  GET_ME_BEGIN,
  loginCompleteAction,
  LOGIN_BEGIN,
  signupCompleteAction,
  SIGNUP_BEGIN,
} from "../actions/auth.actions";
import {
  createDiscussionCompleteAction,
  createReplyCompleteAction,
  CREATING_DISCUSSION_BEGIN,
  CREATING_REPLY_BEGIN,
  getAllDiscussionsCompletedAction,
  getSingleDiscussionCompleteAction,
  GET_ALL_DISCUSSIONS_BEGIN,
  GET_SINGLE_DISCUSSION_BEGIN,
} from "../actions/discussion.actions";
import {
  AUTH_TOKEN,
  createDiscussion,
  getAllDiscussions,
  getSingleDiscussion,
  login,
  me,
  reply,
  signup,
} from "../apis/auth";

function* Login(action: AnyAction): Generator<any> {
  try {
    const res: any = yield call(login, {
      userName: action.payload.userName,
      password: action.payload.password,
    });
    // console.log(res);
    {
      res.data.token &&
        localStorage.setItem(AUTH_TOKEN, "Bearer " + res.data.token);
    }
    {
      !res.data.token && alert(res.data.message);
    }
    yield put(loginCompleteAction(res.data.doc));
    window.location.href = "/discussion-all";
  } catch (e: any) {
    // console.log(e);
    // alert(e);
  }
}

function* Signup(action: AnyAction): Generator<any> {
  try {
    const res: any = yield call(signup, {
      userName: action.payload.userName,
      password: action.payload.password,
    });
    // console.log(res);
    {
      res.data.token &&
        localStorage.setItem(AUTH_TOKEN, "Bearer " + res.data.token);
    }
    {
      !res.data.token && alert(res.data);
    }
    yield put(signupCompleteAction(res.data.doc));
    alert(
      `welcome ${res.data.doc.userName}, account has been created successfully, we are logging you in`
    );
    window.location.href = "/discussion-all";
  } catch (e: any) {
    // alert(e);
  }
}

function* GetMe(action: AnyAction): Generator<any> {
  try {
    const res: any = yield call(me);
    // console.log(res);
    yield put(getMeCompleteAction(res.data.doc));
  } catch (e: any) {
    alert(e);
  }
}

function* GetAllDiscussions(action: AnyAction): Generator<any> {
  try {
    const res: any = yield call(getAllDiscussions);
    // console.log(res);
    yield put(getAllDiscussionsCompletedAction(res.data));
  } catch (e: any) {
    alert(e);
  }
}

function* GetSingleDiscussion(action: AnyAction): Generator<any> {
  try {
    const res: any = yield call(getSingleDiscussion, action.payload);
    console.log(res.data);
    yield put(getSingleDiscussionCompleteAction(res.data));
  } catch (e: any) {
    alert(e);
  }
}

function* CreateReply(action: AnyAction): Generator<any> {
  try {
    const res: any = yield call(reply, {
      discussionID: action.payload.discussionID,
      userID: action.payload.userID,
      reply: action.payload.reply,
    });
    console.log(res.data);
    yield put(createReplyCompleteAction(res.data));
    window.location.href = window.location.href;
  } catch (e: any) {
    alert(e);
  }
}

function* CreateDiscussion(action: AnyAction): Generator<any> {
  try {
    const res: any = yield call(createDiscussion, {
      topic: action.payload.topic,
      description: action.payload.description,
      id: action.payload.id,
    });
    console.log(res.data);
    yield put(createDiscussionCompleteAction(res.data));
    alert("discussion created successfully");
    window.location.href = "/discussion-all";
  } catch (e: any) {
    alert(e);
  }
}
export function* watchAll() {
  yield all([takeEvery(LOGIN_BEGIN, Login)]);
  yield all([takeEvery(SIGNUP_BEGIN, Signup)]);
  yield all([takeEvery(GET_ME_BEGIN, GetMe)]);
  yield all([takeEvery(GET_ALL_DISCUSSIONS_BEGIN, GetAllDiscussions)]);
  yield all([takeEvery(GET_SINGLE_DISCUSSION_BEGIN, GetSingleDiscussion)]);
  yield all([takeEvery(CREATING_REPLY_BEGIN, CreateReply)]);
  yield all([takeEvery(CREATING_DISCUSSION_BEGIN, CreateDiscussion)]);
}
