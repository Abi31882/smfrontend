import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginBeginAction } from "../actions/auth.actions";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();

    dispatch(loginBeginAction({ userName, password }));
  };

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Log in to your account 🔐
        </h1>

        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div>
            <label htmlFor="UserName">UserName</label>
            <input
              required
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              type="text"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="UserName"
              placeholder="UserName"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              placeholder="Your Password"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-green-500 hover:bg-green-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Login
            </button>
          </div>
          <div className="mt-6 text-grey-dark text-center">
            New here?{" "}
            <Link className="hover:text-red-500 underline " to={"/signup"}>
              Join now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
