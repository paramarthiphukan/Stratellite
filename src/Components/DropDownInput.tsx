import React, { useState } from "react";
import cx from "classnames";
import { icons } from "../utils/icons";

interface DropDownProps {
  submit: boolean;
}

const DropDownInput: React.FC<DropDownProps> = ({ submit }) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("Milestone Status");

  const handleToggle = () => {
    submit ? setActive(false) : setActive(!active);
  };
  return (
    <div className="relative bg-white text-center w-32 md:w-44">
      <div
        className={cx(
          "py-3 px-3 flex justify-center items-center border-sky-400 rounded-t",
          { "border-t border-l border-r": active },
          { border: !active }
        )}
      >
        <span
          className={cx(
            "text-gray-500 text-gray-500",
            { "text-green-500": value === "Completed" && submit === false },
            { "text-sky-400": value === "Inprogress" && submit === false }
          )}
        >
          {value}
        </span>
        <div className="ml-3 cursor-pointer" onClick={handleToggle}>
          {icons.Projects.down}
        </div>
      </div>
      <div
        className={cx(
          "absolute w-full top-[100%] left-0 border-b border-l border-r border-sky-400 rounded-b z-10 bg-white",
          { hidden: !active }
        )}
      >
        <div
          className="text-green-500 py-3 px-6 border-t border-gray-500 cursor-pointer"
          onClick={() => {
            setValue("Completed");
            setActive(false);
          }}
        >
          Completed
        </div>
        <div
          className="text-sky-400 py-3 px-6 border-t border-gray-500 cursor-pointer"
          onClick={() => {
            setValue("Inprogress");
            setActive(false);
          }}
        >
          Inprogress
        </div>
      </div>
    </div>
  );
};

export default DropDownInput;
