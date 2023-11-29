import React, { useState } from "react";
import { icons } from "../../utils/icons";
import Events from "./sections/Events";
import Invites from "./sections/Invites";
import RequestStatus from "./sections/RequestStatus";

const sectionOptions = [
  {
    name: "Events",
    id: 1,
  },
  {
    name: "Invites",
    id: 2,
  },
  {
    name: "Request Status",
    id: 3,
  },
];

interface CreateSectionProps {
  setsidebarActive: any;
}

const CreateSection: React.FC<CreateSectionProps> = ({ setsidebarActive }) => {
  const [section, setSection] = useState(1);
  return (
    <div className="border rounded border-gray-500 px-3">
      <div className="flex justify-between w-full">
        <div className="auto-cols-33% md:auto-cols-20% grid grid-flow-col grid-cols overflow-y-hidden overflow-x-auto scrollbar-hide mb-5 w-full h-fit border-b border-gray-500">
          {sectionOptions.map((option) => {
            return (
              <a
                className={`ml-3 text-gray-600 text-center py-3 pt-5 text-base font-semibold md:text-sm rounded-t-lg cursor-pointer ${
                  section === option.id
                    ? "border-b-6 border-sky-400 text-black bg-neutral-50"
                    : ""
                }`}
                onClick={() => setSection(option.id)}
              >
                {option.name}
              </a>
            );
          })}
        </div>
        <span
          className="border border-gray-500 p-1 rounded cursor-pointer h-fit m-2"
          onClick={() => setsidebarActive(true)}
        >
          {icons.Projects.crosBlack}
        </span>
      </div>

      {section === 1 && <Events />}
      {section === 2 && <Invites />}
      {section === 3 && <RequestStatus />}
    </div>
  );
};

export default CreateSection;
