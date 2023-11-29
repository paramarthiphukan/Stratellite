import cx from "classnames";
import { add, endOfDay, format, startOfDay } from "date-fns";
import { isBefore, startOfToday } from "date-fns/esm";
import { useState } from "react";
import { icons } from "../utils/icons";

interface TimeDropDownProps {
  value: any;
  setValue: any;
  startTime: any;
}

const TimeDropDown: React.FC<TimeDropDownProps> = ({
  value,
  setValue,
  startTime,
}) => {
  const today = startTime;
  const [active, setActive] = useState(false);
  //   const [value, setValue] = useState(startOfDay(today));
  const dropDownList: any = [];
  let day = value;

  while (isBefore(day, endOfDay(today))) {
    dropDownList.push(day);
    day = add(day, { minutes: 30 });
  }
  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div className="relative bg-white text-center w-32 md:w-36 text-xs md:text-sm">
      <div
        className={cx(
          "py-3 px-3 flex justify-center items-center border-gray-500 rounded mb-2",
          { "border border-sky-400": active },
          { border: !active }
        )}
      >
        <span>{format(value, "hh:mm aaa")}</span>
        <div className="ml-3 cursor-pointer" onClick={handleToggle}>
          {icons.arrowDown}
        </div>
      </div>
      <div
        className={cx(
          "absolute w-full top-[100%] left-0 border-b border-l border-r rounded border-gray-500 z-10 bg-white h-48 overflow-y-auto scrollbar-hide shadow-[4px_10px_25px_rgba(0,0,0,0.25)]",
          { hidden: !active }
        )}
      >
        {dropDownList.map((item: any) => {
          return (
            <div
              className="py-3 px-3 mx-3 border-t border-gray-500 cursor-pointer text-black"
              onClick={() => {
                setValue(item);
                setActive(false);
              }}
            >
              {format(item, "hh:mm aaa")}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeDropDown;
