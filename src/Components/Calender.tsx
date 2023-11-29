import { useState, useEffect, useContext, isValidElement } from "react";
import { icons } from "../utils/icons";
import cx from "classnames";
import buildCalender from "../utils/buildCalender";
import {
  add,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfToday,
  sub,
} from "date-fns";
import calendarContext from "../Contexts/Calendar/calendarContext";

interface calenderProps {
  setSidebarActive: any;
}

const Calender: React.FC<calenderProps> = ({ setSidebarActive }) => {
  let today = startOfToday();
  const weeks = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
  const [calender, setCalendar] = useState<any>([]);
  const [value, setValue] = useState(today);
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

  // is active month === present month
  const isPresentMonth = (day: any) => {
    return isSameMonth(day, new Date());
  };

  // is active month === current month
  const isCurrentMonth = (day: any) => {
    return isSameMonth(day, value);
  };

  const events = useContext(calendarContext);

  const eventDays = events.state;
  console.log(eventDays);

  const isEvent = (day: any) => {
    let found = false;
    eventDays.forEach((eventDay: any) => {
      if (isSameDay(day, eventDay.day)) {
        found = true;
      }
    });
    return found;
  };

  const getColor = (day: any) => {
    let color;
    eventDays.forEach((eventDay: any) => {
      if (isSameDay(day, eventDay.day)) {
        color = eventDay.color;
      }
    });
    return color;
  };

  return (
    <div className="border w-11/12 mx-auto md:w-[30rem] h-fit border-gray-500 rounded flex flex-col p-3">
      {/* top section */}
      <div className="flex items-center justify-between md:mx-5">
        <div className="flex text-1.5xl md:text-28 items-center font-semibold p-3">
          <span className="w-32 md:w-60">{format(value, "MMMM yyyy")}</span>
          <div className="flex flex-col ml-4 justify-between h-[1.5rem]">
            <span className="cursor-pointer" onClick={handleNextClick}>
              {icons.arrowUp}
            </span>
            <span className="cursor-pointer" onClick={handlePreviousClick}>
              {icons.arrowDown}
            </span>
          </div>
        </div>
        <div
          className="rounded-md text-white bg-sky-400 py-3 px-4 flex cursor-pointer items-center"
          onClick={() => setSidebarActive(false)}
        >
          <div className="text-white text-sm font-semibold">Create</div>
          <div className="ml-4">{icons.plusWhite}</div>
        </div>
      </div>

      {/* dates -> main calender*/}
      <div className="flex flex-col items-center justify-between md:mx-5">
        {/* week names */}
        <div className="flex flex-row justify-between text-center my-1 w-full">
          {weeks.map((weekday) => {
            return (
              <div className="flex justify-center items-center w-4 md:w-8 py-2 px-5 font-semibold rounded md:mx-2">
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
                      "flex justify-center items-center w-4 md:w-8 py-2 px-5 border border-gray-500 md:mx-2 cursor-pointer",
                      {
                        "border-sky-400": isToday(day) && isPresentMonth(day),
                        "text-gray-500": !isCurrentMonth(day),
                        "text-white": isEvent(day),
                      }
                    )}
                    style={{
                      backgroundColor: isEvent(day) ? getColor(day) : "",
                      borderColor: isEvent(day) ? getColor(day) : "",
                    }}
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
      <div className="flex p-3 mx-5">
        <div className="flex items-center font-semibold w-32">
          <div className="h-2.125 w-2.125 aspect-square bg-green-400 rounded-full mr-2 md:mr-0"></div>
          <div className="ml-3">Event dates</div>
        </div>
        <div className="flex items-center font-semibold">
          <div className="h-2.125 w-2.125 aspect-square bg-sky-400 rounded-full mr-2 md:mr-0"></div>
          <div className="ml-3">Selected date</div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
