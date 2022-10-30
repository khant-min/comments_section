const User = ({ name, img }) => {
  return (
    <div className="flex items-center justify-between bg-white p-6 rounded-lg mr-4">
      <div className="w-10 mb-14">
        <img src={img} />
      </div>
      <textarea
        onChange={e => e.target.value}
        className="resize-none pl-6 pt-4 mx-6"
        placeholder="Add a comment"
      ></textarea>
      <div className="mb-14">
        <button className=" bg-blue-800 px-6 py-2 rounded-md font-bold text-white hover:bg-blue-400">
          Send
        </button>
      </div>
    </div>
  );
};

export default User;
