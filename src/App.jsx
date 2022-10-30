import Comments from "./Comments";
import User from "./User";
import api from "./api/posts";
import { useState, useEffect } from "react";
import Reply from "./Reply";
import UserCommeUnt from "./CMD Section/UserReply";
import UserReply from "./CMD Section/UserReply";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get("/comments");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-between my-14">
      {data.length ? (
        <main className="flex flex-col items-end ">
          <Comments
            name={data[0].user.username}
            postDate={data[0].createdAt}
            content={data[0].content}
            vote={data[0].score}
            img={data[0].user.image.png}
          />
          <Comments
            name={data[1].user.username}
            postDate={data[1].createdAt}
            content={data[1].content}
            vote={data[1].score}
            img={data[1].user.image.png}
          />
          <Reply
            name={data[1].replies[0].user.username}
            postDate={data[1].replies[0].createdAt}
            content={data[1].replies[0].content}
            vote={data[1].replies[0].score}
            img={data[1].replies[0].user.image.png}
          />
          <UserReply
            name={data[1].replies[1].user.username}
            postDate={data[1].replies[1].createdAt}
            content={data[1].replies[1].content}
            vote={data[1].replies[1].score}
            img={data[1].replies[1].user.image.png}
          />
          <User name="juliusomo" img="./images/avatars/image-juliusomo.png" />
        </main>
      ) : (
        <p>Data is still fetching...</p>
      )}
    </div>
  );
};

export default App;
