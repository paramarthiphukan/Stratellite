import cx from "classnames";
export interface DisputedProjectCardsProps {
  status: string;
}

const DisputedProjectCard: React.FC<DisputedProjectCardsProps> = ({
  status,
}) => {
  return (
    <div className="md:w-full py-5 px-0 md:px-5 my-2 flex flex-col justify-between items-center rounded-lg border border-gray-60 md:flex-row mx-auto md:mx-auto">
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
      <div className="flex w-11/12 md:w-fit justify-between">
        <a
          href="#"
          className={cx(
            "py-4 border-gray-60 border rounded-md cursor-pointer px-7 text-sm w-44 text-center my-3",
            {
              "md:w-36": status === "Resolved",
              "md:w-28": status === "Un-Resolved",
            }
          )}
        >
          {status === "Resolved" && "In Progress"}
          {status === "Un-Resolved" && "On Hold"}
        </a>
        <a
          href="#"
          className={cx(
            "py-4 rounded-md text-white cursor-pointer px-7 text-sm w-44 text-center my-3 ml-3",
            {
              "bg-sky-400 md:w-36": status === "Resolved",
              "bg-gray-100 md:w-44": status === "Un-Resolved",
            }
          )}
        >
          {status}
        </a>
      </div>
    </div>
  );
};

export default DisputedProjectCard;
