import React, { useState } from "react";
import ToggleSwitch from "../../../Components/ToggleSwitch";
import { icons } from "../../../utils/icons";
import { add, endOfDay, format, startOfDay } from "date-fns";
import { isBefore, startOfToday } from "date-fns/esm";
import CalenderDatePicker from "../../../Components/CalendarDatePicker";
import TimeDropDown from "../../../Components/TimeDropDown";

const Reminder = () => {
  const [toggleFieldAllDays, setToggleFieldAllDays] = useState(false);
  const [toggleFieldRepeat, setToggleFieldRepeat] = useState(true);

  const today = startOfToday();
  const [datePickerActive, setDatePickerActive] = useState(false);
  const [startTime, setStartTime] = useState(today);
  const [endTime, setEndTime] = useState(today);

  const [datePickerValue, setDatePickerValue] = useState(startOfToday());
  return (
    <>
      <div className="border border-slate-300 flex items-center my-3 mx-3">
        <input
          type="text"
          className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
          placeholder={`Reminder me to`}
        />
      </div>
      <div className="my-6 flex justify-between items-center font-semibold mx-3">
        <div className="text-xs md:text-sm">All Days </div>
        <ToggleSwitch
          setMuteField={setToggleFieldAllDays}
          fieldValue={toggleFieldAllDays}
        />
      </div>

      <div className="flex mx-3 my-6 items-center">
        <div
          className="border p-3 border-gray-500 rounded flex justify-between items-center mr-3 relative bottom-1"
          onClick={() => setDatePickerActive(true)}
        >
          <div className="text-xs md:text-sm mr-3">
            {format(datePickerValue, "do MMMM yyyy")}
          </div>
          {icons.Calender.calender}
        </div>
        <TimeDropDown
          value={startTime}
          setValue={setStartTime}
          startTime={startTime}
        />
      </div>

      <div className="my-6 flex justify-between items-center font-semibold mx-3">
        <div className="text-xs md:text-sm">Repeat </div>
        <ToggleSwitch
          setMuteField={setToggleFieldRepeat}
          fieldValue={toggleFieldRepeat}
        />
      </div>

      <div className="flex my-6 mx-3 text-sm">
        <button className="w-32 border border-sky-400 rounded text-sky-400 py-3 mr-3">
          Discard
        </button>
        <button className="w-32 border border-sky-400 rounded text-white bg-sky-400 py-3">
          Save
        </button>
      </div>
      {datePickerActive && (
        <CalenderDatePicker
          setActive={setDatePickerActive}
          value={datePickerValue}
          setValue={setDatePickerValue}
        />
      )}
    </>
  );
};

export default Reminder;
