import { useState, useEffect } from "react";
import { icons } from "../utils/icons";
import cx from "classnames";
import buildCalender from "../utils/buildCalender";
import { add, format, isSameMonth, startOfToday, sub } from "date-fns";
import { isSameDay } from "date-fns/esm";

interface calenderProps {
  value: any;
  setValue: any;
}

const DropDownCalendar: React.FC<calenderProps> = ({ value, setValue }) => {
  let today = startOfToday();
  const weeks = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
  const [calender, setCalendar] = useState<any>([]);
  const [monthValue, setMonthValue] = useState(today);

  useEffect(() => {
    setCalendar(buildCalender(value));
  }, [value]);

  // handle month/year change to previous
  const handlePreviousClick = () => {
    setValue(sub(value, { months: 1 }));
    setMonthValue(sub(monthValue, { months: 1 }));
  };

  // handle month/year change to next
  const handleNextClick = () => {
    setValue(add(value, { months: 1 }));
    setMonthValue(add(monthValue, { months: 1 }));
  };

  // is active month === current month
  const isCurrentMonth = (day: any) => {
    return isSameMonth(day, value);
  };

  return (
    <div className="border w-72 mx-auto h-fit border-gray-500 rounded flex flex-col md:p-1 absolute top-12 left-[-1rem] z-10 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.25)] mb-2">
      <div className="flex items-center justify-between">
        <div className="flex justify-between items-center font-semibold p-1">
          <span className="w-32 md:w-48 text-1.5xl">
            {format(value, "MMMM yyyy")}
          </span>
          <div className="flex flex-col ml-16 justify-between h-[1.5rem]">
            <span className="cursor-pointer" onClick={handleNextClick}>
              {icons.arrowUp}
            </span>
            <span className="cursor-pointer" onClick={handlePreviousClick}>
              {icons.arrowDown}
            </span>
          </div>
        </div>
      </div>

      {/* dates -> main calender*/}
      <div className="flex flex-col items-center justify-between mx-2 md:mx-0">
        {/* week names */}
        <div className="flex flex-row justify-between text-center my-1 w-full text-xs px-2">
          {weeks.map((weekday) => {
            return (
              <div className="flex justify-center items-center w-4 md:w-8 p-2 font-semibold rounded">
                {weekday}
              </div>
            );
          })}
        </div>
        {/* calender */}
        {calender.map((week: any) => {
          return (
            <div className="flex flex-row justify-between text-center my-1 w-full px-2 text-xs">
              {week.map((day: any) => {
                return (
                  <div
                    className={cx(
                      "flex justify-center items-center w-4 md:w-8 p-2 border border-gray-500 cursor-pointer",
                      {
                        "bg-sky-400 text-white border-sky-400": isSameDay(
                          value,
                          day
                        ),
                        "text-gray-500": !isCurrentMonth(day),
                      }
                    )}
                    onClick={() => setValue(day)}
                  >
                    {format(day, "d")}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDownCalendar;
