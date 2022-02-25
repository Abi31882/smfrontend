import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDiscussionsBeginAction } from "../actions/discussion.actions";
import { logout } from "../apis/auth";
import { userIdSelector } from "../selectors/auth.selectors";
import { discussionListSelector } from "../selectors/discussion.selectors";
import { useAppSelector } from "../store";

const DiscussionListpage = () => {
  const userID = useAppSelector(userIdSelector);
  const dispatch = useDispatch();
  const discussionList = useAppSelector(discussionListSelector);
  useEffect(() => {
    dispatch(getAllDiscussionsBeginAction());
  }, []);

  return (
    <div className="space-y-10 m-10 ">
      {userID ? (
        <div className="flex justify-center items-end mt-6">
          <button
            onClick={logout}
            className={`bg-red-500 hover:bg-red-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
          >
            Logout
          </button>
        </div>
      ) : (
        <Link to={"/login"} className="flex justify-center items-end mt-6">
          <button
            className={`bg-green-500 hover:bg-green-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
          >
            Login
          </button>
        </Link>
      )}
      {userID ? (
        <Link
          to={"/discussion-create"}
          className="flex justify-center items-center mt-6"
        >
          <button
            className={`bg-green-500 hover:bg-green-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
          >
            Create Discussion
          </button>
        </Link>
      ) : (
        <Link to={"/login"} className="flex justify-center items-center mt-6">
          <button
            className={`bg-green-500 hover:bg-green-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
          >
            Create Discussion
          </button>
        </Link>
      )}
      {discussionList.map((d) => (
        <Link
          className="flex border-4 rounded-lg hover:bg-blue-50 border-black p-10 items-center justify-center space-x-2 text-base"
          to={`/discussion/${d._id}`}
        >
          <div>
            <div className="flex justify-center items-center">
              <span className="text-xl  font-extrabold ">Topic:</span>
              {d.topic}
            </div>
            <div className="w-96">
              {" "}
              <span className="text-xl flex justify-center font-extrabold">
                Description:{" "}
              </span>
              <div className="flex justify-center">{d.description}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DiscussionListpage;
