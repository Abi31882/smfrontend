import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signupBeginAction } from "../actions/auth.actions";

const SignupPage = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(signupBeginAction({ userName, password }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-2xl font-bold text-center">Join us</h3>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="UserName">
                UserName
              </label>
              <input
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                type="text"
                placeholder="UserName"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="mt-4">
              <label className="block">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="flex justify-center items-center mt-6">
              <button
                className={`bg-green-500 hover:bg-green-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
              >
                Create account
              </button>
            </div>
            <div className="mt-6 text-grey-dark text-center">
              Already have an account?
              <Link className="hover:text-red-500 underline" to={"/login"}>
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
