import { icons } from "../../../utils/icons";
import cx from "classnames";
import Proprty1 from "../../../assets/project/property1.png";
import Proprty2 from "../../../assets/project/property2.png";
import { useState } from "react";
import ModalSubmitInterest from "../../../Components/ModalSubmitInterest";

interface ActiveProjects {
  status: string;
}

const ProjectInfo: React.FC<ActiveProjects> = ({ status }) => {
  const [preview, setPreview] = useState(false);

  const handleSubmit = () => {
    if (status === "new") setPreview(true);
  };
  return (
    <div className="flex flex-col md:w-10/12 mt-6 md:mt-0 ml-6 md:ml-12 overflow-y-auto">
      <div className="flex items-center md:hidden w-full mb-3 justify-between">
        <div className="flex items-center">
          <img
            className="h-16 w-16 rounded-full mr-5"
            src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
          ></img>
          <div>
            <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
              Construction work in Delhi
            </div>
            <div className="text-xs md:text-sm text-gray-900">Delhi, India</div>
          </div>
        </div>

        {/* status */}
        <div
          className={cx(
            " flex items-center justify-evenly py-2 rounded-md cursor-pointer h-fit text-sm w-32 md:w-36 text-center font-semibold md:text-xssm mx-3 md:mx-0",
            {
              "bg-green-100 text-green-500":
                status === "approved" || status === "completed",
              "bg-blue-100 text-blue-500 w-48": status === "under-review",
              "bg-red-100 text-red-500": status === "rejected",
              "bg-yellow-100 text-yellow-500": status === "in-progress",
            }
          )}
        >
          {status === "approved" && icons.Projects.tick}
          {status === "completed" && icons.Projects.tick}
          {status === "under-review" && icons.Projects.review}
          {status === "in-progress" && icons.Projects.inProgress}
          {status === "rejected" && icons.Projects.rejected}
          <span className={`${status !== "approved" ? "hidden" : ""}`}>
            Approved
          </span>
          <span className={`${status !== "completed" ? "hidden" : ""}`}>
            Completed
          </span>
          <span className={`${status !== "under-review" ? "hidden" : ""}`}>
            Under-Review
          </span>
          <span className={`${status !== "in-progress" ? "hidden" : ""}`}>
            In Progress
          </span>
          <span className={`${status !== "rejected" ? "hidden" : ""}`}>
            Rejected
          </span>
        </div>
      </div>

      {/* image section */}
      <div className="auto-cols-55% md:auto-cols-33% gap-3 grid grid-flow-col grid-cols overflow-auto pb-4 mb-10">
        <img src={Proprty1} alt="" className="md:h-72 md:mx-4" />
        <img src={Proprty2} alt="" className="md:h-72 md:mx-4" />
        <img src={Proprty1} alt="" className="md:h-72 md:mx-4" />
      </div>

      <div
        className={cx("text-green-500 md:mb-8 w-11/12", {
          hidden: status !== "approved",
        })}
      >
        <span className="font-semibold">Note:-</span> A meeting will be set up
        by the manager soon to discuss the project details, and you will be
        notified.
      </div>
      {/* heading */}
      <div className="hidden md:flex w-full justify-between px-4 md:px-0">
        <div>
          <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
            Construction work in Delhi
          </div>
          <div className="text-xs md:text-sm text-gray-900">Property Name</div>
        </div>

        {/* status */}
        <div
          className={cx(
            " flex items-center justify-evenly py-3 rounded-md cursor-pointer text-sm md:w-36 text-center font-semibold my-3 md:mx-0",
            {
              "bg-green-100 text-green-500":
                status === "approved" || status === "completed",
              "bg-blue-100 text-blue-500": status === "under-review",
              "bg-red-100 text-red-500": status === "rejected",
              "bg-yellow-100 text-yellow-500": status === "in-progress",
              hidden: status === "new",
            }
          )}
        >
          {status === "approved" && icons.Projects.tick}
          {status === "completed" && icons.Projects.tick}
          {status === "under-review" && icons.Projects.review}
          {status === "in-progress" && icons.Projects.inProgress}
          {status === "rejected" && icons.Projects.rejected}
          <span className={`${status !== "approved" ? "hidden" : ""}`}>
            Approved
          </span>
          <span className={`${status !== "completed" ? "hidden" : ""}`}>
            Completed
          </span>
          <span className={`${status !== "under-review" ? "hidden" : ""}`}>
            Under-Review
          </span>
          <span className={`${status !== "in-progress" ? "hidden" : ""}`}>
            In Progress
          </span>
          <span className={`${status !== "rejected" ? "hidden" : ""}`}>
            Rejected
          </span>
        </div>

        {/* for new projects */}
        <a
          className={cx(
            "flex items-center justify-evenly p-3 rounded cursor-pointer h-fit text-sm w-32 md:w-36 text-center font-semibold md:text-xssm mx-3 md:mx-0 bg-sky-400 text-white",
            {
              hidden: status !== "new",
            }
          )}
          onClick={handleSubmit}
        >
          Submit Interest
        </a>
      </div>

      {/* project description */}
      <div className="flex flex-col w-full md:px-0 mt-3 md:mt-6">
        <div className="text-sm my-3 font-semibold">About Project</div>
        <div className="w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eius
          officia fugiat quod temporibus pariatur reprehenderit porro, expedita
          sapiente dicta ad adipisci consectetur molestias recusandae
          voluptatibus debitis, accusamus consequatur deleniti. Optio nemo
          vitae, quae doloremque dolores saepe quis molestiae cupiditate atque
          rem architecto numquam. Aliquid veniam quas dicta, repudiandae impedit
          quaerat consequatur accusantium laudantium, odit voluptates non modi!
          Consectetur, eveniet.
        </div>
      </div>

      {/* property info */}
      <div className="flex flex-col w-full md:px-0 mt-3 md:mt-6">
        <div className="text-sm my-3 font-semibold">Property Info</div>
        <div className="auto-cols-max gap-3 grid grid-flow-col grid-cols overflow-auto scrollbar-hide md:flex md:w-fit md:justify-between md:items-center px-6 py-2 border border-gray-300 rounded-lg">
          <div className="w-fit flex items-center justify-between pr-4 border-r border-gray-300">
            <div className="mr-2">{icons.ProjectCard.area}</div>
            <div className="text-gray-900 font-medium">1300 sq.ft</div>
          </div>
          <div className="w-fit flex items-center justify-between px-4 border-r border-gray-300">
            <div className="mr-2 ">{icons.dollar}</div>
            <div className="text-gray-900 font-medium">4500</div>
          </div>
          <div className="w-fit flex items-center justify-between px-4 border-r border-gray-300">
            <div className="mr-2 ">{icons.ProjectCard.calender}</div>
            <div className="text-gray-900 font-medium">
              22-01-22 to 22-01-22
            </div>
          </div>
          <div className="w-fit flex items-center justify-between px-4">
            <div className="mr-2 ">{icons.Projects.units}</div>
            <div className="text-gray-900 font-medium">3 units</div>
          </div>
        </div>
      </div>

      <div className="hidden md:block mr-2 mt-8">{icons.Projects.units}</div>

      {/* scope of work */}
      <div className="flex flex-col w-full md:px-0 mt-3">
        <div className="text-sm my-3 font-semibold">Scope of Work</div>
        <ul className="list-disc mx-5">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, neque?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, neque?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, neque?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, neque?
          </li>
        </ul>
      </div>

      {/* location */}
      <div className="flex flex-col w-full md:px-0 mt-3 md:mt-6">
        <div className="text-sm my-3 font-semibold">Location</div>
        <div className="w-4/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          corrupti.
        </div>
      </div>

      {/* tags */}
      <div className="flex flex-col w-full md:px-0 mt-3 md:mt-6">
        <div className="text-sm my-3 font-semibold">Tags</div>
        <div className="flex">
          <div className=" flex items-center justify-evenly py-2 md:py-3 bg-gray-300 rounded-md cursor-pointer text-sm w-16 text-center my-3 mr-3">
            Tag1
          </div>
          <div className=" flex items-center justify-evenly py-2 md:py-3 bg-gray-300 rounded-md  cursor-pointer text-sm w-16 text-center my-3 mx-3">
            Tag2
          </div>
          <div className=" flex items-center justify-evenly py-2 md:py-3 bg-gray-300 rounded-md  cursor-pointer text-sm w-16 text-center my-3 mx-3">
            Tag3
          </div>
          <div className=" flex items-center justify-evenly py-2 md:py-3 bg-gray-300 rounded-md  cursor-pointer text-sm w-16 text-center my-3 mx-3">
            Tag4
          </div>
        </div>
      </div>

      {/* for new projects */}
      <a
        className={cx(
          "flex items-center justify-evenly p-4 rounded cursor-pointer h-fit text-sm w-11/12 md:w-36 text-center font-semibold md:text-xssm md:mx-0 bg-sky-400 text-white my-3 md:hidden",
          {
            hidden: status !== "new",
          }
        )}
        onClick={handleSubmit}
      >
        Submit Interest
      </a>

      <div>
        <ModalSubmitInterest preview={preview} setPreview={setPreview} />
      </div>
    </div>
  );
};

export default ProjectInfo;
