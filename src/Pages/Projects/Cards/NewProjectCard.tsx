import { icons } from "../../../utils/icons";
import cx from "classnames";
import ProjectPreview from "../../../Components/ProjectPreview";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div
        className={cx(
          "md:w-full py-5 px-3 md:px-5 my-2 flex flex-col rounded-lg border border-gray-60 md:flex-row mx-auto md:mx-0",
          {
            hidden: expand,
          }
        )}
      >
        {/* project details */}
        <div className="w-full flex flex-col md:mx-auto">
          {/* project name */}
          <div className="flex items-center justify-between md:block text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
            Construction work in Delhi
            <div className="md:hidden text-gray-100 text-xxs w-1/3 text-right">
              6 Jan, 2020
            </div>
          </div>
          {/* project subtitle */}
          <div className="text-xs md:text-sm text-gray-800 mb-4">
            Property Name
          </div>
          {/* project description */}
          <div className="text-xs md:text-sm text-gray-900 md:w-4/5">
            Adarsh Group is venturing in homes inspired by millenial generation.
            Adarsh Greens, offering new Lifestyle, with the same Trust, Quality
            & Consistency...
          </div>
          <div className="flex items-center my-4">
            <div className="mr-2">{icons.ProjectCard.area}</div>
            <div className="text-gray-900 ml-1 mr-6 font-medium">
              1300 sq.ft
            </div>
            <div className="mr-2 ">{icons.dollar}</div>
            <div className="text-gray-900 ml-1 mr-6 font-medium">4500</div>
            <div className="mr-2 ">{icons.ProjectCard.calender}</div>
            <div className="text-gray-900 ml-1 mr-6 font-medium">
              22-01-22 to 22-01-22
            </div>
          </div>
          {/* date */}
          <div className="hidden md:block text-gray-100 text-sm">
            6 Jan, 2020
          </div>
        </div>

        {/* button section */}
        <div className="flex flex-col">
          <Link to="/projects/new-projects">
            <a className="hidden md:block py-4 bg-sky-400 rounded-md text-white cursor-pointer px-5.5 text-sm w-80 md:w-72 text-center my-3">
              View Project Details
            </a>
          </Link>

          <a
            className="py-4 text-sky-400 border-sky-400 border rounded-md text-sky-400 cursor-pointer px-7 text-sm w-100 md:w-72 text-center my-3"
            onClick={() => setExpand(true)}
          >
            Submit Interest
          </a>
          <a className="text-gray-100 text-xs text-center my-4 w-full md:w-72 text-center">
            View Manager Profile
          </a>
        </div>
      </div>
      <div className={cx({ hidden: !expand })}>
        <ProjectPreview setExpand={setExpand} />
      </div>
    </>
  );
};

export default ProjectCard;
