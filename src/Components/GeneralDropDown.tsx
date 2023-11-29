import cx from "classnames";
import { useState } from "react";
import { icons } from "../utils/icons";

interface DropDownProps {
  dropDownList: {
    val: any;
    id: number;
  }[];
  setSelected: any;
}

const GeneralDropDown: React.FC<DropDownProps> = ({
  dropDownList,
  setSelected,
}) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(dropDownList[0].val);

  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div className="relative bg-white text-center w-32 md:w-36 text-xs md:text-sm">
      <div
        className={cx(
          "py-3 px-3 flex justify-center items-center border-gray-500 rounded-t",
          { "border-t border-l border-r": active },
          { border: !active }
        )}
      >
        <span>{value}</span>
        <div className="ml-3 cursor-pointer" onClick={handleToggle}>
          {icons.arrowDown}
        </div>
      </div>
      <div
        className={cx(
          "absolute w-full top-[100%] left-0 border-b border-l border-r border-gray-500 rounded-b z-10 bg-white",
          { hidden: !active }
        )}
      >
        {dropDownList.map((item) => {
          return (
            <div
              className="py-3 px-3 border-t border-gray-500 cursor-pointer text-black"
              onClick={() => {
                setValue(item.val);
                setSelected(item.id);
                setActive(false);
              }}
            >
              {item.val}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GeneralDropDown;
