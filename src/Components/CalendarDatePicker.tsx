import { useState, useEffect, useContext } from "react";
import { icons } from "../utils/icons";
import cx from "classnames";
import buildCalender from "../utils/buildCalender";
import { add, format, isSameMonth, startOfToday, sub } from "date-fns";
import { isSameDay } from "date-fns/esm";
import calendarContext from "../Contexts/Calendar/calendarContext";

interface calenderProps {
  setActive: any;
  value: any;
  setValue: any;
  color?: any;
}

const CalenderDatePicker: React.FC<calenderProps> = ({
  setActive,
  value,
  setValue,
  color,
}) => {
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

  const handleCancel = () => {
    setValue(today);
    setActive(false);
  };

  const eventDays = useContext(calendarContext);

  const handleSubmit = () => {
    const newEvent = {
      day: value,
      color: color ? color : "#14A9F9",
    };
    eventDays.update(newEvent);
    setActive(false);
  };

  return (
    <div
      className={cx(
        "absolute left-0 bottom-0 w-screen h-screen bg-gray-700 z-10 flex justify-center items-center"
      )}
    >
      <div
        className={cx(
          "bg-white w-11/12 md:w-[30%] p-4 px-2 md:px-8 flex flex-col justify-center rounded"
        )}
      >
        <div className="pb-4 flex justify-between items-center px-3">
          <div className="text-base text-gray-900 font-semibold">
            Choose your date
          </div>
          <span
            className="border border-gray-500 p-1 rounded cursor-pointer h-fit"
            onClick={handleCancel}
          >
            {icons.Projects.crosBlack}
          </span>
        </div>
        <div className="border w-11/12 mx-auto h-fit border-gray-500 rounded flex flex-col md:p-3">
          {/* top section */}
          <div className="flex items-center justify-between">
            <div className="flex text-1.5xl items-center font-semibold p-3">
              <span className="w-32 md:w-48">{format(value, "MMMM yyyy")}</span>
              <div className="flex flex-col ml-4 justify-between h-[1.5rem]">
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
            <div className="flex flex-row justify-between text-center my-1 w-full">
              {weeks.map((weekday) => {
                return (
                  <div className="flex justify-center items-center w-4 md:w-8 py-2 px-5 font-semibold rounded">
                    {weekday}
                  </div>
                );
              })}
            </div>
            {/* calender */}
            {calender.map((week: any) => {
              return (
                <div className="flex flex-row justify-between text-center my-1 w-full">
                  {week.map((day: any) => {
                    return (
                      <div
                        className={cx(
                          "flex justify-center items-center w-4 md:w-8 py-2 px-5 border border-gray-500 cursor-pointer",
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

          {/* bottom section */}
          <div className="flex p-3 ">
            <div className="flex items-center font-semibold">
              <div className="h-2.125 w-2.125 aspect-square bg-sky-400 rounded-full mr-2 md:mr-0"></div>
              <div className="ml-3">Selected date</div>
            </div>
          </div>
        </div>

        <div className="flex my-6 mx-3 text-sm">
          <button
            className="w-28 border border-sky-400 rounded text-sky-400 py-3 mr-3"
            onClick={handleCancel}
          >
            Close
          </button>
          <button
            className="w-28 border border-sky-400 rounded text-white bg-sky-400 py-3"
            onClick={handleSubmit}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalenderDatePicker;
