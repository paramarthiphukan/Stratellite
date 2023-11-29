import cx from "classnames";

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

interface ProjectsMenuBarProps {
  section: number;
  setSection: any;
  subsection: any;
}

const ProjectsMenuBar: React.FC<ProjectsMenuBarProps> = ({
  section,
  setSection,
  subsection,
}) => {
  return (
    <div
      className={cx(
        "hidden auto-cols-33% md:auto-cols-15% md:grid grid-flow-col grid-cols overflow-y-hidden overflow-x-auto scrollbar-hide mb-5 ml-5 md:mx-12 h-fit border-b border-gray-500",
        {
          "md:hidden": subsection === 6,
        }
      )}
    >
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
  );
};

export default ProjectsMenuBar;
