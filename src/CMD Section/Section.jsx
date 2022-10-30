import reply from "../../images/icon-reply.svg";

const Section = ({ name, content, postDate, img }) => {
  console.log();
  return (
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
  );
};

export default Section;
