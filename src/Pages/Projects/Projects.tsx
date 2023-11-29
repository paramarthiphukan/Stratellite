import { icons } from "../../utils/icons";
import { useState } from "react";
import cx from "classnames";
import NewProjects from "./Sections/NewProjects";
import ActiveProjects from "./Sections/ActiveProjects";
import InProgress from "./Sections/InProgress";
import Completed from "./Sections/Completed";
import Rejected from "./Sections/Rejected";
import DisputedProjects from "./Sections/DisputedProjects";
import ProjectsSearchBar from "../../Components/ProjectsSearchBar";

const sectionOptions = [
  {
    name: "New Project",
    id: 1,
  },
  {
    name: "Active",
    id: 2,
  },
  {
    name: "In Progress",
    id: 3,
  },
  {
    name: "Completed",
    id: 4,
  },
  {
    name: "Rejected",
    id: 5,
  },
  {
    name: "Disputed",
    id: 6,
  },
];

const Projects = () => {
  const [section, setSection] = useState(1);
  return (
    <div className="project overflow-y-auto overflow-x-hidden mx-auto">
      <div className="flex flex-col overflow-x-hidden w-full">
        <ProjectsSearchBar />

        <div className="flex items-center justify-between mx-6 md:mx-12">
          <div>
            <div className="text-2xl md:text-28 font-medium">Your Projects</div>
            <div className="hidden md:block text-base md:text-lg text-gray-600 mb-6">
              Here is a list of all the projects you have been working on.
            </div>
          </div>
          <div className={`hidden gap-4 ${section === 1 ? "" : "md:flex"}`}>
            <div className="h-10 items-center gap-3 px-6 flex border border-gray-300 rounded-md cursor-pointer">
              <div className="text-black text-sm">Filter</div>
              {icons.filter}
            </div>
            <div className="h-10 w-10 justify-center items-center flex border border-gray-300 rounded-md cursor-pointer">
              {icons.threeDots}
            </div>
          </div>
        </div>

        <div className="auto-cols-33% md:auto-cols-15% grid grid-flow-col grid-cols overflow-y-hidden overflow-x-auto scrollbar-hide mb-5 ml-5 md:mx-12 h-fit border-b border-gray-500">
          {sectionOptions.map((option) => {
            return (
              <a
                className={`ml-3 flex justify-center items-center text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg cursor-pointer ${
                  section === option.id
                    ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                    : ""
                }`}
                onClick={() => setSection(option.id)}
              >
                {option.name}
                <div
                  className={cx(
                    "hidden ml-2 font-semibold text-xs w-8 h-6 md:flex items-center justify-center rounded-md",
                    { "bg-sky-400 text-white": option.id === section },
                    { "bg-sky-100 text-sky-400 ": section !== option.id }
                  )}
                >
                  3
                </div>
              </a>
            );
          })}
        </div>
        {section === 1 && <NewProjects />}
        {section === 2 && <ActiveProjects />}
        {section === 3 && <InProgress />}
        {section === 4 && <Completed />}
        {section === 5 && <Rejected />}
        {section === 6 && <DisputedProjects />}
      </div>
    </div>
  );
};

export default Projects;
