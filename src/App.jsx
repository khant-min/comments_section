import Comments from "./Comments";
import AddComment from "./AddComment";
import api from "./api/posts";
// import { DataProvider } from "./context/DataContext";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  console.log(data)
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
    // (async () => await fetchPosts())();
  }, []);

  return (
    <div className="flex flex-col items-center justify-between my-14">
      {data.length > 0 ?  (
        <>
          <Comments
          name={data[0].user.username}
          postDate={data[0].createdAt}
          content={data[0].content}
          vote={data[0].score}
          />
          
          <AddComment />
        </>
      ): (
        <p>data is fetching ...</p>
      )}
    </div>
  );
};

export default App;
