import Votes from "./Votes";
import sideLine from "../styles/styles";
import Edit from "../optional_box/Edit";
import { useState } from "react";

const UserReply = ({ vote, content, img, name, postDate }) => {
  const handleEdit = () => {
    return <div className="z-20"></div>;
  };

  /////////////// I'm stucking here...

  const handleDelete = () => {};
  return (
    <div className="relative overflow-hidden min-w-full flex justify-end">
      <div className="absolute" style={sideLine}></div>
      <div className="max-w-screen-sm m-4 flex justify-between items-center p-1 bg-white max-w-4xl rounded-md">
        <Votes vote={vote} />
        <section className="max-w-2xl p-6">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center justify-evenly">
              <img src={img} className="w-8" />
              <span className="px-4">{name}</span>
              <span className="bg-blue-800 px-2 font-bold text-white rounded-sm">
                you
              </span>
              <span className="px-4">{postDate}</span>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleDelete}
                className="px-4 py-2 mx-2 rounded-md bg-red-600 hover:bg-red-400 text-white"
              >
                Delete
              </button>
              <button
                onClick={handleEdit}
                className="px-4 py-2 mx-2 rounded-md bg-green-600 hover:bg-green-400 text-white"
              >
                Edit
              </button>
            </div>
          </div>
          <div>{content}</div>
        </section>
      </div>
    </div>
  );
};

export default UserReply;

/**
 
   <section className="max-w-2xl p-6">
      <div className="flex items-center justify-between pb-3">
        <div className="flex items-center justify-evenly">
          <img src={img} className="w-8" />
          <span className="px-4">{name}</span>
          <span className="px-4">{postDate}</span>
        </div>
        <button className="flex text-lg font-bold text-blue-700 hover:opacity-50">
          <img className="pt-2 mr-2" src={reply} /> Reply
        </button>
      </div>
      <div>{content}</div>
    </section>

 */
