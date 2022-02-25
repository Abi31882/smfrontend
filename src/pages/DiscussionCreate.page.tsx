import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createDiscussionBeginAction } from "../actions/discussion.actions";
import { userIdSelector } from "../selectors/auth.selectors";
import { useAppSelector } from "../store";

const DicsussionCreatepage = () => {
  const userId = useAppSelector(userIdSelector);

  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(createDiscussionBeginAction({ topic, description, id: userId }));
  };

  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Create a new Discussion Here
        </h1>

        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <div>
            <label htmlFor="UserName">Topic</label>
            <input
              required
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              onChange={(e) => {
                setTopic(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Description</label>
            <input
              required
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>

          {userId ? (
            <div className="flex justify-center items-center mt-6">
              <button
                type="submit"
                className={`bg-green-500 hover:bg-green-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
              >
                Create Discussion
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center mt-6">
              <Link
                to={"/login"}
                type="submit"
                className={`bg-green-500 hover:bg-green-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
              >
                Create Discussion
              </Link>
            </div>
          )}
          <div className="flex justify-center items-center mt-6">
            <Link
              to="/discussion-all"
              type="submit"
              className={`bg-red-500 hover:bg-red-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DicsussionCreatepage;

{
  /* <div>
<form onSubmit={(e) => onSubmit(e)}>


  <button type="submit">Create</button>
</form>
</div> */
}
