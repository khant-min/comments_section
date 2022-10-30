import CommentBox from "./CMD Section/CommentBox";
import sideLine from "./styles/styles";

const Reply = ({ ...props }) => {
  return (
    <div className="relative overflow-hidden min-w-full flex justify-end">
      <div className="absolute" style={sideLine}></div>
      <div className="max-w-screen-sm m-4">
        <CommentBox {...props} />
      </div>
    </div>
  );
};

export default Reply;
