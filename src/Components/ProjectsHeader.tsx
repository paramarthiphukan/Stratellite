import { useNavigate } from "react-router-dom";
import { icons } from "../utils/icons";

interface ProjectsHeaderProps {
  subsection: number;
  toggleName: string;
  section: number;
}

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

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({
  subsection,
  toggleName,
  section,
}) => {
  let selectedSection = null;
  sectionOptions.forEach((option) => {
    if (option.id === section) selectedSection = option.name;
  });
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between mx-6 md:mx-12">
      <div>
        <div className="text-2xl md:text-28 font-medium mb-4 my-6">
          <span className={`${subsection === 6 ? "hidden" : ""}`}>
            Your Projects
          </span>
          <span
            className={`flex items-center ${subsection === 6 ? "" : "hidden"}`}
          >
            <span className="p-3 cursor-pointer" onClick={() => navigate(-1)}>
              {icons.gallery.back}
            </span>
            Photo Gallery
          </span>
          <span
            className={`text-gray-600 font-normal md:hidden ${
              subsection === 6 ? "hidden" : ""
            }`}
          >
            /{selectedSection}
          </span>
        </div>
        <div
          className={`hidden md:block text-base text-gray-600 mb-6 ${
            subsection === 6 ? "md:hidden" : ""
          }`}
        >
          Projects / {selectedSection} / Construction Work/
          <span className="font-semibold text-black"> {toggleName} </span>
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
  );
};

export default ProjectsHeader;
