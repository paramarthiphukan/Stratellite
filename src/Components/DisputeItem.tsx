import { useState } from "react";
import { icons } from "../utils/icons";
import cx from "classnames";

interface DisputeItemProps {
  name: string;
  date: string;
}

const DisputeItem: React.FC<DisputeItemProps> = ({ name, date }) => {
  const [check, setCheck] = useState(false);

  const handleSelect = () => {
    setCheck(!check);
  };
  return (
    <div className="flex items-center my-3">
      <div
        className={cx(
          "p-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer text-gray-100 border border-slate-300 mr-3",
          { "bg-sky-400": check }
        )}
        onClick={handleSelect}
      >
        <div
          className={cx("border-2 w-5 h-5 rounded-full border-black", {
            hidden: check,
          })}
        ></div>
        <div className={cx({ hidden: !check })}>
          <span className="text-white">{icons.bidding.done}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-semibold md:text-base mb-1">{name}</div>
        <div className="my-1">{date}</div>
      </div>
    </div>
  );
};

export default DisputeItem;
