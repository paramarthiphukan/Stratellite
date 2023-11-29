import { useGlobalContext } from "../../Contexts/GlobalContext";
import BackButton from "../../Components/BackButton";
import { icons } from "../../utils/icons";
import { useState } from "react";
import AllTransactions from "./sections/AllTransactions";
import Invoices from "./sections/Invoices";
import DropDownCalendar from "../../Components/DropDownCalendar";
import { startOfToday, sub, format } from "date-fns";
import { startOfMonth } from "date-fns/esm";

const sectionOptions = [
  {
    name: "All Transactions",
    id: 1,
  },
  {
    name: "Invoices",
    id: 2,
  },
];

const Main = () => {
  const start = startOfMonth(startOfToday());
  const end = sub(start, { years: 1 });
  const [state, dispatch] = useGlobalContext();
  const [section, setSection] = useState(1);

  const [startDate, setStartDate] = useState(start);
  const [endDate, setEndDate] = useState(end);
  const [activeCalendar, setActiveCalendar] = useState(0);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setActiveCalendar(0);
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 1000);
  };

  const handleStartDropDown = () => {
    if (activeCalendar === 1) setActiveCalendar(0);
    else setActiveCalendar(1);
  };

  const handleEndDropDown = () => {
    if (activeCalendar === 2) setActiveCalendar(0);
    else setActiveCalendar(2);
  };
  return (
    <div className="project overflow-y-auto overflow-x-hidden mx-auto">
      <div className="flex flex-col overflow-x-hidden w-full">
        <div className="flex justify-between gap-4 mt-6 md:mt-0 md:min-h-[8.5rem] items-center mx-6 md:mx-12">
          <BackButton />
          <div className="h-4 md:h-6 cursor-pointer hover:text-sky-600">
            {icons.search}
          </div>
          <div
            onClick={() =>
              dispatch({ setState: { showSidebar: !state.showSidebar } })
            }
            className="h-14 cursor-pointer rounded md:hidden aspect-square flex items-center justify-center border border-gray-300"
          >
            {icons.threeBars}
          </div>
          <div className="hidden md:flex w-1/3 h-32.5 items-center p-9 ml-5 ">
            <img
              className="h-16 w-16 rounded-full object-cover mr-5"
              src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
              alt=""
            ></img>
            <div className="flex flex-col justify-between">
              <div className="font-medium text-1.5xl mb-2">Oliver Smith</div>
              <div className="text-xssm">Vendor</div>
            </div>
            <div className="ml-12">{icons.arrowRight}</div>
          </div>
        </div>

        <div className="mx-6 md:mx-12">
          <div className="text-2xl md:text-28 font-medium mb-4 my-6">
            Transaction History
          </div>
        </div>

        <div className="auto-cols-33% md:auto-cols-33% grid grid-flow-col grid-cols overflow-y-hidden overflow-x-auto scrollbar-hide mb-5 ml-5 md:mx-12 h-fit border-b border-gray-500 w-1/2">
          {sectionOptions.map((option) => {
            return (
              <a
                className={`ml-3 text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg cursor-pointer ${
                  section === option.id
                    ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                    : ""
                }`}
                onClick={() => setSection(option.id)}
              >
                {option.name}
              </a>
            );
          })}
        </div>

        <div className="flex items-center mx-6 md:mx-12">
          <div className="flex items-center w-3/5">
            <div className="flex flex-col">
              <div className="text-gray-600 font-semibold mb-2">From Date</div>
              <div className="border border-gray-500 rounded p-3 flex items-center justify-between w-44 relative">
                <span>{format(startDate, "MMMM dd yyyy")}</span>
                <span onClick={handleStartDropDown} className="cursor-pointer">
                  {icons.arrowDown}
                </span>
                {activeCalendar === 1 && (
                  <DropDownCalendar value={startDate} setValue={setStartDate} />
                )}
              </div>
            </div>
            <span className="mx-3 relative top-4">-</span>
            <div className="flex flex-col">
              <div className="text-gray-600 font-semibold mb-2">To Date</div>
              <div className="border border-gray-500 rounded p-3 flex items-center justify-between w-44 relative">
                <span>{format(endDate, "MMMM dd yyyy")}</span>
                <span onClick={handleEndDropDown} className="cursor-pointer">
                  {icons.arrowDown}
                </span>
                {activeCalendar === 2 && (
                  <DropDownCalendar value={endDate} setValue={setEndDate} />
                )}
              </div>
            </div>
            <div
              className="bg-sky-400 text-white rounded p-3 w-40 flex items-center justify-center mx-6 relative top-[0.9rem] cursor-pointer"
              onClick={handleSubmit}
            >
              Submit
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-gray-600 font-semibold mb-2">
              Quick Duration
            </div>
            <div className="border border-gray-500 rounded p-3 flex items-center justify-between w-44">
              <span className="text-gray-100">Select</span>
              {icons.arrowDown}
            </div>
          </div>
        </div>

        {section === 1 && (
          <AllTransactions
            startDate={startDate}
            endDate={endDate}
            submit={submit}
          />
        )}
        {section === 2 && <Invoices />}
      </div>
    </div>
  );
};

export default Main;
