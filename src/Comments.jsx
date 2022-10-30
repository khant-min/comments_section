import CommentBox from "./CMD Section/CommentBox";
import Delete from "./Delete";

const Comments = ({ ...props }) => {
  return (
    <div className="m-4">
      <CommentBox {...props} />
    </div>
  );
};

export default Comments;
