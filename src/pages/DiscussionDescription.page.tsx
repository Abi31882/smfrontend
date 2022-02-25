import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  createReplyBeginAction,
  getSingleDiscussionBeginAction,
} from "../actions/discussion.actions";
import { reply } from "../apis/auth";
import { userIdSelector } from "../selectors/auth.selectors";
import { singleDiscussionSelector } from "../selectors/discussion.selectors";
import { useAppSelector } from "../store";

const DiscussionDescriptionpage = () => {
  const userId = useAppSelector(userIdSelector);
  const [repli, setRepli] = useState("");
  const { id } = useParams<{ id: string }>();
  const singleDiscussion = useAppSelector(singleDiscussionSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleDiscussionBeginAction(id!));
  }, []);

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      createReplyBeginAction({ userID: userId, discussionID: id, reply: repli })
    );
  };

  return (
    <div className="space-y-10 m-10 border-4 border-black rounded-lg">
      <div className="text-right p-3">
        {singleDiscussion.discussion.creator.userName}
      </div>
      <div className="p-10">
        <div className="text-center">
          <div className="flex justify-center items-center">
            <span className="text-xl font-extrabold ">Topic:</span>
            {singleDiscussion.discussion.topic}
          </div>
          <div className="w-96 m-auto">
            {" "}
            <span className="text-xl flex justify-center font-extrabold">
              Description:{" "}
            </span>
            <div className="flex justify-center">
              {singleDiscussion.discussion.description}
            </div>
          </div>

          {/* <div>Created By:{singleDiscussion.discussion.creator.userName}</div> */}
        </div>
        <div className="space-y-4">
          {singleDiscussion.reply && singleDiscussion.reply.length !== 0 ? (
            <span className="font-bold">Replies:</span>
          ) : (
            ""
          )}
          {singleDiscussion.reply?.map((r) => (
            <div>
              <div className="border-2 space-y-2 border-green-500 rounded-lg">
                <div>{r.reply}</div>
                <div>
                  <span className="font-bold">By:</span> {r.replier}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <input
          required
          className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
          onChange={(e) => {
            setRepli(e.target.value);
          }}
        />
        {userId ? (
          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-green-500 hover:bg-green-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
              type="submit"
            >
              Reply
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center mt-6">
            <Link
              className={`bg-green-500 hover:bg-green-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
              to={"/login"}
            >
              Reply
            </Link>
          </div>
        )}
      </form>
    </div>
  );
};

export default DiscussionDescriptionpage;
