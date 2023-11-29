import cx from "classnames";

interface ProjectsSectionTogglerProps {
  subsection: number;
  setMore: any;
  more: boolean;
  setSubsection: any;
  setDispute: any;
  toggleOptions: {
    name: string;
    icon: any;
    subSectionId: number;
  }[];
}

const ProjectsSectionToggler: React.FC<ProjectsSectionTogglerProps> = ({
  subsection,
  setSubsection,
  setMore,
  more,
  setDispute,
  toggleOptions,
}) => {
  return (
    <>
      {/* toggles laptop view*/}
      <div className="hidden md:flex md:flex-col w-20 items-center ml-12">
        {toggleOptions.map((option) => {
          return (
            <>
              <div
                className={cx(
                  "p-3 mb-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer",
                  {
                    "text-gray-100 border border-gray-500":
                      subsection !== option.subSectionId,
                    "text-white bg-sky-400": subsection === option.subSectionId,
                    "": subsection === option.subSectionId,
                  }
                )}
                onClick={() => {
                  option.subSectionId === 7
                    ? setMore(!more)
                    : setSubsection(option.subSectionId);
                }}
              >
                {option.icon}
              </div>
              <div
                className={cx(
                  "flex flex-col rounded border items-center border-gray-500 h-fit w-32 shadow-[0_4px_30px_rgba(0,0,0,0.25)] relative right-16 bg-white bottom-8",
                  {
                    hidden: option.subSectionId !== 7 || more === false,
                  }
                )}
              >
                <a className="font-semibold py-2 border-b border-gray-500 w-4/5 text-center cursor-pointer">
                  Report
                </a>
                <a
                  className="text-red-500 py-2 cursor-pointer"
                  onClick={() => setDispute(true)}
                >
                  Arise Dispute
                </a>
              </div>
            </>
          );
        })}
      </div>

      {/* toggles mobile view */}
      <div className="auto-cols-33% md:auto-cols-15% grid grid-flow-col grid-cols overflow-y-hidden overflow-x-auto scrollbar-hide mb-0 ml-5 md:mx-12 h-fit md:hidden border-b border-gray-500">
        {toggleOptions.map((option) => {
          return (
            <>
              <a
                className={`ml-3 text-gray-800 text-center py-5 text-base md:text-sm rounded-t-lg ${
                  subsection === option.subSectionId
                    ? "border-b-6 border-sky-400 text-black font-semibold bg-neutral-50"
                    : ""
                }`}
                onClick={() => {
                  option.subSectionId === 7
                    ? setMore(!more)
                    : setSubsection(option.subSectionId);
                }}
              >
                {option.name}
              </a>
              <div
                className={cx(
                  "flex flex-col rounded border items-center border-gray-500 h-fit w-32 shadow-[0_4px_30px_rgba(0,0,0,0.25)] relative right-52 bg-white",
                  {
                    hidden: option.subSectionId !== 7 || more === false,
                  }
                )}
              >
                <a className="font-semibold py-2 border-b border-gray-500 w-4/5 text-center cursor-pointer">
                  Report
                </a>
                <a
                  className="text-red-500 py-2 cursor-pointer"
                  onClick={() => setDispute(true)}
                >
                  Arise Dispute
                </a>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProjectsSectionToggler;
