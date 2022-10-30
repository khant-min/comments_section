import Votes from "./Votes";
import Section from "./Section";

const CommentBox = ({ name, postDate, content, vote, img }) => {
  return (
    <div className="flex justify-between items-center p-1 bg-white max-w-4xl rounded-md">
      <Votes vote={vote} />
      <Section name={name} postDate={postDate} content={content} img={img} />
    </div>
  );
};

export default CommentBox;
