import { icons } from "../utils/icons";
import Property1 from "../assets/project/property1.png";
import Property2 from "../assets/project/property2.png";
import { Link } from "react-router-dom";

interface ProjectPreviewProps {
  setExpand: any;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ setExpand }) => {
  return (
    <div className="absolute left-0 bottom-0 w-screen h-screen bg-gray-700 z-10">
      <div
        className="absolute right-3 cursor-pointer"
        onClick={() => setExpand(false)}
      >
        {icons.Projects.cross}
      </div>
      <div className="absolute left-0 bottom-0 w-screen h-[90%] bg-white overflow-x-hidden">
        <div className="flex flex-col md:w-4/5 ml-3 md:mx-auto">
          <div className="flex items-center my-3 mt-5 md:w-11/12 md:mx-auto">
            <img
              className="h-16 w-16 rounded-full mr-5"
              src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
            ></img>
            <div>
              <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
                Construction work in Delhi
              </div>
              <div className="text-xs md:text-sm text-gray-900">
                Delhi, India
              </div>
            </div>
          </div>
          <div className="auto-cols-55% md:auto-cols-33% gap-2 md:gap-0 grid grid-flow-col overflow-x-scroll grid-cols pb-4 md:w-11/12 mx-auto">
            <img src={Property1} alt="" className="md:h-72" />
            <img src={Property2} alt="" className="md:h-72" />
            <img src={Property1} alt="" className="md:h-72" />
            <img src={Property2} alt="" className="md:h-72" />
          </div>

          <div className="flex flex-col md:w-11/12 mx-auto md:px-0 mt-3 md:mt-6">
            <div className="text-sm my-3 font-semibold">Description</div>
            <div className="w-full text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit itaque, officia recusandae non assumenda inventore
              sunt soluta! Nulla odit quis omnis explicabo odio ab quas ratione
              vel officiis eius cupiditate veritatis ea et maiores sunt facere
              rerum nesciunt, quasi necessitatibus illum repellat debitis!
              Praesentium id a aperiam maiores eligendi modi quo nisi dolore
              ipsum deleniti quam harum enim voluptatum velit ut sequi pariatur
              nemo, numquam aliquid expedita placeat quae aspernatur odit. Quis
              dolore voluptas necessitatibus, quam enim dolor error suscipit
              repudiandae cumque, velit quaerat iusto? Dolores a modi maxime
              unde, repellendus expedita nemo, ex veniam autem obcaecati
              voluptates. Voluptatibus, quisquam.
            </div>
          </div>

          <div className="flex flex-col md:w-11/12 mx-auto md:px-0 mt-3 md:mt-6">
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
            </div>
          </div>

          <div className="flex md:w-11/12 md:mx-auto flex-row my-3">
            <a className="border border-gray-500 text-gray-500 p-3 rounded w-28 text-center text-sm">
              Chat
            </a>
            <Link
              to="/projects/new-projects"
              className="text-white bg-sky-400 p-3 rounded mx-4 w-28 text-center cursor-pointer text-sm"
            >
              <a>View Details</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
