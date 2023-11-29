import { icons } from "../../../utils/icons";
import cx from "classnames";

interface BiddingProps {
  isMeetingDone: Boolean;
}

const Bidding: React.FC<BiddingProps> = ({ isMeetingDone }) => {
  return (
    <div className="flex flex-col w-11/12 md:w-10/12 mt-6 md:mt-0 ml-4 md:ml-12 overflow-y-auto">
      <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
        Construction Work at Delhi Site
      </div>
      <div className="text-xs md:text-base text-gray-600 flex items-center my-2">
        <div className="mr-3">{icons.bidding.plot}</div>
        Plot No. 123, New Delhi, India, 152546
      </div>
      <div className="flex items-center py-2 rounded-md cursor-pointer text-xs text-center md:text-sm text-red-500">
        <div className="mr-3">{icons.bidding.clock}</div>
        Submit before 22nd June, 2022
      </div>

      <div className="flex flex-col my-3 mt-8">
        <div className="flex items-center mb-5">
          <div className="p-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer text-gray-100 border border-slate-300 mr-3">
            {icons.bidding.done}
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-sm md:text-base mb-1">
              Quote Range - $650 to $830
            </div>
            <div className="text-xssm">10th Nov, 2021</div>
          </div>
        </div>

        <div className="flex items-center mb-5">
          <div className="p-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer text-gray-100 border border-slate-300 mr-3">
            {icons.bidding.done}
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-sm md:text-base mb-1">
              Enter Final Quote Amount
            </div>
            <div className="-xssm">10th Dec, 2021</div>
          </div>
        </div>

        <div className="flex items-center mb-5">
          <div className="p-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer text-gray-100 border border-slate-300 mr-3">
            <div className="border-2 w-5 h-5 rounded-full border-black"></div>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-sm md:text-base mb-1">
              Quote Status
            </div>
          </div>
        </div>
      </div>

      <textarea
        name=""
        id=""
        cols={30}
        rows={8}
        className="border border-slate-300 focus:outline-none rounded my-3 p-5 text-sm  placeholder-gray-700 text-gray-700"
        placeholder="Write a message......"
      ></textarea>

      <div className="border border-slate-300 flex items-center my-3">
        <label htmlFor="quoteprice" className="w-7 p-3 text-gray-100">
          {icons.Projects.price}
        </label>
        <input
          type="text"
          className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
          placeholder={`Quote Amount`}
        />
      </div>

      <div className="border border-slate-300 border-dashed flex items-center justify-between my-3 px-3 py-4">
        <div className="flex items-center justify-between">
          <label htmlFor="quoteprice" className="w-7 text-gray-100">
            {icons.bidding.file}
          </label>
          <div className="text-gray-900 ml-3 text-sm">Attach File</div>
        </div>

        <label htmlFor="file-upload">
          <div className="flex items-center font-semibold justify-between py-3 text-sky-400 border-sky-400 border rounded text-white cursor-pointer w-40 px-5 text-sm text-center">
            {icons.bidding.upload} Upload File
          </div>
        </label>
        <input type="file" id="file-upload" className="hidden" />
      </div>

      <div className="flex flex-col md:flex-row my-5">
        <div className="flex items-center text-sm mr-10 mb-4 md:mb-0">
          <input type="radio" className="h-6 w-6 text-sky-400" />
          <label htmlFor="" className="ml-3">
            I Accept Payment Terms
          </label>
        </div>
        <div className="flex items-center text-sm">
          <input type="radio" className="h-6 w-6 text-sky-400" />
          <label htmlFor="" className="ml-3">
            I Accept Delivery Terms
          </label>
        </div>
      </div>

      <div
        className={cx(
          "p-4 rounded cursor-pointer md:w-20 text-center text-sm my-5 md:p-3",
          {
            "bg-sky-400 text-white": isMeetingDone,
            "bg-neutral-300 text-slate-100 cursor-not-allowed": !isMeetingDone,
          }
        )}
      >
        Submit
      </div>

      <div
        className={cx("text-red-500 md:mb-8 w-11/12 text-sm mb-4", {
          hidden: isMeetingDone,
        })}
      >
        <span className="font-semibold">Note:-</span> A meeting will be set up
        by the manager soon to discuss the project details, and you will be
        notified.
      </div>
    </div>
  );
};

export default Bidding;
