import { icons } from "../../../utils/icons";
import { colorPalete } from "../../../data/calender";
import { useState } from "react";
import CalenderDatePicker from "../../../Components/CalendarDatePicker";
import { format, startOfToday } from "date-fns";
import TimeDropDown from "../../../Components/TimeDropDown";
import AddPeopleModal from "../../../Components/AddPeopleModal";

const Meeting = () => {
  const today = startOfToday();
  const [selectedColor, setSelectedColor] = useState(colorPalete[0]);
  const [datePickerActive, setDatePickerActive] = useState(false);
  const [startTime, setStartTime] = useState(today);
  const [endTime, setEndTime] = useState(today);
  const [addPeopleModalActive, setAddPeopleModalActive] = useState(false);

  const [datePickerValue, setDatePickerValue] = useState(startOfToday());
  return (
    <>
      <div className="border border-slate-300 flex items-center my-3 mx-3">
        <input
          type="text"
          className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
          placeholder={`Add Title`}
        />
      </div>
      <div className="my-6 flex flex-col md:flex-row justify-between md:items-center font-semibold mx-3">
        <div className="text-xs md:text-sm mb-6 md:mb-0">
          Date and time of event{" "}
        </div>
        <div
          className="border p-3 border-gray-500 rounded flex justify-between items-center cursor-pointer"
          onClick={() => setDatePickerActive(true)}
        >
          <div className="text-xssm mr-3">
            {format(datePickerValue, "do MMMM yyyy")}
          </div>
          {icons.Calender.calender}
        </div>
      </div>

      {/* color picker, etc */}
      <div className="flex flex-wrap mx-3 justify-between items-center">
        <TimeDropDown
          value={startTime}
          setValue={setStartTime}
          startTime={startTime}
        />
        To
        <TimeDropDown
          value={endTime}
          setValue={setEndTime}
          startTime={startTime}
        />
        <div className="border p-5 md:p-3 border-gray-500 rounded flex md:justify-between items-center w-full md:w-fit my-3 md:my-0">
          <div className="text-gray-700 mr-3 w-fit">{icons.Calender.plus}</div>
          <span className="text-xs md:text-sm">Add Tag</span>
        </div>
        <div className="flex flex-wrap justify-between md:grid grid-cols-3 grid-rows-2 gap-1">
          {colorPalete.map((color) => {
            return (
              <div
                className="h-8 w-12 rounded cursor-pointer mx-1 md:mx-0 flex items-center justify-center"
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              >
                {selectedColor === color && icons.Calender.tick}
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-6 mx-3">
        <textarea
          name=""
          id=""
          cols={30}
          rows={8}
          className="border border-slate-300 focus:outline-none rounded my-3 p-5 text-sm  placeholder-gray-700 text-gray-700 w-full"
          placeholder="Add a description"
        ></textarea>
      </div>
      <div className="my-6 flex justify-between items-center font-semibold mx-3 text-xs md:text-sm">
        <div>Add people</div>
        <div
          className="border p-3 border-gray-500 rounded flex justify-between items-center cursor-pointer"
          onClick={() => setAddPeopleModalActive(true)}
        >
          <div className="text-sky-400 mr-3">{icons.Calender.plus}</div>
          <span>ADD</span>
        </div>
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
          color={selectedColor}
        />
      )}
      {addPeopleModalActive && (
        <AddPeopleModal setActive={setAddPeopleModalActive} />
      )}
    </>
  );
};

export default Meeting;
