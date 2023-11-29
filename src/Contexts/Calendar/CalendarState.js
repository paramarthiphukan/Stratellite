import CalendarContext from "./calendarContext";
import { useState } from "react";
import { add, startOfToday } from "date-fns";

const EventsDaysState = (props) => {
  const today = startOfToday();
  const initialDay = add(new Date(), { days: 5 });
  const initialState = [
    {
      day: initialDay,
      color: "#8014F9",
    },
  ];
  const [state, setState] = useState(initialState);
  const update = (newEvent) => {
    const newEventList = [...state, newEvent];
    setState(newEventList);
  };
  return (
    <CalendarContext.Provider value={{ state, update }}>
      {props.children}
    </CalendarContext.Provider>
  );
};

export default EventsDaysState;
