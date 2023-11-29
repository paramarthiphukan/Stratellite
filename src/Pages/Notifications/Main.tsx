import { icons } from "../../utils/icons";
import { useState } from "react";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import BackButton from "../../Components/BackButton";
import Updates from "./sections/Updates";
import Reminders from "./sections/Reminders";
import NotificationsSettings from "../../Components/NotificationsSettings";
// import NewProjects from "./sections/NewProjects";

const sectionOptions = [
  {
    name: "Updates",
    id: 1,
  },
  {
    name: "Reminders",
    id: 2,
  },
  {
    name: "New Project",
    id: 3,
  },
];

const Main = () => {
  const [state, dispatch] = useGlobalContext();
  const [section, setSection] = useState(1);
  const [settingsActive, setSettingsActive] = useState(false);
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
        <div className="flex items-center justify-between mx-6 md:mx-12">
          <div>
            <div className="text-2xl md:text-28 font-medium mb-4 my-6">
              Notifications
            </div>
            <div className="hidden md:block text-base md:text-lg text-gray-600 mb-6">
              All property bid updates, meetings, new project announcements, and
              other important notifications will be displayed here.
            </div>
          </div>
          <div className=" md:flex" onClick={() => setSettingsActive(true)}>
            <div className="h-10 items-center gap-4 px-6 flex border border-gray-300 rounded-md cursor-pointer">
              <div className="text-black text-sm">Settings</div>
              <div className="w-6">{icons.notifications.settings}</div>
            </div>
          </div>
        </div>

        <div className="auto-cols-33% md:auto-cols-15% grid grid-flow-col grid-cols overflow-y-hidden overflow-x-auto scrollbar-hide mb-5 ml-5 md:mx-12 h-fit border-b border-gray-500">
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

        {section === 1 && <Updates />}
        {section === 2 && <Reminders />}
        {section === 3 && <Reminders />}
      </div>

      <NotificationsSettings
        settingsActive={settingsActive}
        setSettingsActive={setSettingsActive}
      />
    </div>
  );
};

export default Main;
