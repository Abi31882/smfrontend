import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login.page";
import SignupPage from "./pages/Signup.page";
import { AUTH_TOKEN } from "./apis/auth";
import { useDispatch } from "react-redux";
import { getMeBeginAction } from "./actions/auth.actions";
import DiscussionListpage from "./pages/DiscussionList.page";
import DiscussionDescriptionpage from "./pages/DiscussionDescription.page";
import DicsussionCreatepage from "./pages/DiscussionCreate.page";
import NotFoundpage from "./pages/NotFuund.page";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem(AUTH_TOKEN);

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(getMeBeginAction());
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/discussion-all" element={<DiscussionListpage />} />
        <Route path="/discussion/:id" element={<DiscussionDescriptionpage />} />
        <Route path="/discussion-create" element={<DicsussionCreatepage />} />
        <Route path="/*" element={<NotFoundpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
