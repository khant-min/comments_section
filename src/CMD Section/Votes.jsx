import plus from "../../images/icon-plus.svg";
import minus from "../../images/icon-minus.svg";
import { useState } from "react";

const Votes = ({ vote }) => {
  const [newVote, setNewVote] = useState(vote);

  const decrement = () => newVote > vote && setNewVote(newVote - 1);
  const increment = () => setNewVote(vote + 1);

  return (
    <div className="bg-gray-100 rounded flex flex-col items-center justify-between py-4 px-2">
      <button>
        <img
          src={plus}
          onClick={increment}
          className="cursor-pointer rounded hover:bg-gray-200 p-2"
        />
      </button>
      <span>{newVote}</span>
      <button>
        <img
          src={minus}
          onClick={decrement}
          className="cursor-pointer rounded hover:bg-gray-200 px-2 py-3"
        />
      </button>
    </div>
  );
};

export default Votes;
