import cx from "classnames";
import { Link } from "react-router-dom";
export interface ActiveProjectCardsProps {
  status: string;
}

const StatusCard: React.FC<ActiveProjectCardsProps> = ({ status }) => {
  return (
    <div className="md:w-full py-5 px-0 md:px-5 my-2 flex flex-col justify-between items-center rounded-lg border border-gray-60 md:flex-row mx-auto md:mx-0">
      {/* section 1 */}
      <div className="flex flex-col w-full md:w-fit px-4 md:px-0">
        <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
          Construction work in Delhi
        </div>
        <div className="text-xs md:text-sm text-gray-900">
          Adarsh Group is venturing in homes inspired by millenial generation.
        </div>
      </div>
      {/* section 2 */}
      <div className="flex w-11/12 md:w-fit justify-between border-y border-y-gray-60 md:border-y-0 my-5 md:my-0 py-4">
        <div className="flex flex-col md:mx-6">
          <div className="text-gray-900 font-semibold mb-2 text-sm md:text-base">
            $250
          </div>
          <div className="text-gray-900 md:w-4/5">Budget</div>
        </div>
        <div className="flex flex-col md:mx-6">
          <div className="text-gray-900 font-semibold mb-2 text-sm md:text-base">
            22nd Dec, 2021
          </div>
          <div className="text-gray-900 md:w-4/5">Start Date</div>
        </div>
        <div className="flex flex-col md:mx-6">
          <div className="text-gray-900 font-semibold mb-2 text-sm md:text-base">
            22nd Dec, 2022
          </div>
          <div className="text-gray-900 md:w-4/5">End Date</div>
        </div>
      </div>

      {/* section 3 */}
      <Link
        to={`/projects/${status.toLowerCase()}`}
        className={cx(
          "py-4 rounded-md text-white cursor-pointer text-sm w-11/12 md:w-72 md:ml-3 text-center my-3 mx-3 md:mx-0",
          {
            "bg-green-500": status === "Approved" || status === "Completed",
            "bg-sky-400": status === "Under-Review" || status === "In-Progress",
            "bg-red-500": status === "Rejected",
          }
        )}
      >
        {status}
      </Link>
    </div>
  );
};

export default StatusCard;
