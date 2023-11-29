import GeneralDropDown from "../../../Components/GeneralDropDown";
import { eventType } from "../../../data/calender";
import Meeting from "./Meeting";
import { useState } from "react";
import Reminder from "./Reminder";

interface EventsProps {}

const Events: React.FC<EventsProps> = () => {
  const [typeOfEvent, setTypeOfEvent] = useState(1);
  return (
    <div>
      <div className="my-3 text-sm text-gray-800 ml-3">
        Set up the event type
      </div>
      <div className="my-6 flex items-center justify-between mx-3">
        <div className="font-semibold text-xs md:text-sm">Set/Schedule a </div>
        <GeneralDropDown
          dropDownList={eventType}
          setSelected={setTypeOfEvent}
        />
      </div>

      {typeOfEvent === 1 && <Meeting />}
      {typeOfEvent === 2 && <Reminder />}
    </div>
  );
};

export default Events;
