import plus from "../../images/icon-plus.svg";
import minus from "../../images/icon-minus.svg";
import { useState } from "react";

const Votes = ({ vote }) => {
  const [count, setCount] = useState(0);
  console.log(vote);

  const decrement = () => setCount(previousCount => previousCount - 1);
  const increment = () => setCount(previousCount => previousCount + 1);
  return (
    <div className="bg-gray-100 rounded flex flex-col items-center justify-between">
      <button>
        <img
          src={plus}
          onClick={increment}
          className="cursor-pointer rounded hover:bg-gray-200 p-2"
        />
      </button>
      <span className="px-4 text-blue-500">{vote}</span>
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
