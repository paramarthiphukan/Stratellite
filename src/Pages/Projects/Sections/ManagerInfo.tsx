import { icons } from "../../../utils/icons";
import PreviousAssociates from "../../../Components/PreviousAssociates";

const ManagerInfo = () => {
  return (
    <div className="flex flex-col w-11/12 md:w-10/12 mt-6 md:mt-0 ml-4 md:ml-12 overflow-y-auto">
      {/* manager profile */}
      <div className="flex flex-col md:flex-row md:items-center w-full md:my-3 justify-between">
        {/* image and details */}
        <div className="flex items-center">
          <img
            className="h-32 w-32 rounded-full mr-5"
            src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
            alt=""
          ></img>
          <div className="flex flex-col">
            <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
              Manager's Name
            </div>
            <div className="text-xs md:text-base text-gray-600">
              ABCD Company Pvt. Ltd.
            </div>
            <div className="flex items-center justify-evenly my-2 py-2 rounded-sm cursor-pointer h-fit text-sm w-24  text-center font-semibold md:text-xssm  bg-yellow-300 text-white">
              {icons.managers.star}
              4.3 Stars
            </div>
          </div>
        </div>

        {/* access controls */}
        <div className="grid grid-cols-3 md:grid-cols-2 auto-cols-max gap-2 md:w-52 md:mr-4 my-4 md:my-0">
          <div className="flex items-center justify-center py-3  text-sky-400 border-sky-400 border rounded-md text-white cursor-pointer px-7 text-sm text-center">
            {icons.managers.calender}
          </div>
          <div className="flex items-center justify-center py-3  text-sky-400 border-sky-400 border rounded-md text-white cursor-pointer px-7 text-sm text-center">
            {icons.managers.inBox}
          </div>
          <div className="md:col-span-2 flex items-center justify-center md:justify-between py-3 text-sky-400 border-sky-400 border rounded-md text-sky-400 cursor-pointer px-7 text-sm text-center">
            <div className="w-[1.5rem]">{icons.managers.messages}</div>
            <div className="font-semibold hidden md:block">Send Message</div>
          </div>
        </div>
      </div>

      {/* About company */}
      <div className="flex flex-col w-full md:px-0 mt-3 md:mt-6">
        <div className="text-sm my-3 font-semibold">About Company</div>
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

      <div className="flex flex-col w-full md:px-0 mt-3 md:mt-6">
        <div className="text-sm my-3 font-semibold">Contact No.</div>
        <div className="w-full">+91 9541XXXXXX</div>
      </div>

      {/* Previous Associates */}
      <div className="flex flex-col w-full md:px-0 my-3 md:my-6">
        <div className="text-sm my-3 font-semibold">Previous Associates</div>
        <PreviousAssociates />
        <PreviousAssociates />
        <PreviousAssociates />
        <PreviousAssociates />
      </div>
    </div>
  );
};

export default ManagerInfo;
