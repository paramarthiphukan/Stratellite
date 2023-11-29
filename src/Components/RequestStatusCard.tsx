import cx from "classnames";

interface RequestStatusCardProps {
  status: string;
}

const RequestStatusCard: React.FC<RequestStatusCardProps> = ({ status }) => {
  return (
    <div className="border-b border-gray-500 rounded w-full h-fit p-2 pt-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
            alt=""
          ></img>
          <div className="flex w-4/5 md:w-4/5 items-center flex-wrap text-sm ml-3">
            <div>
              <span className="mr-1">Meeting request sent to</span>
              <span className="font-semibold text-black">Mr. Arun Sahsi,</span>
              <span className="mx-1">
                manager of project ABC for 25th Oct'21
              </span>
            </div>
          </div>
        </div>

        <div className="text-xs hidden md:block md:w-28">Today, 9:42 am</div>
      </div>

      <div className="flex justify-between items-end my-6">
        <div className="flex mx-3">
          <div
            className={cx(
              "w-32 flex items-center text-xs md:text-sm justify-center border border-gray-500 rounded py-3",
              {
                "text-green-500": status === "Approved",
                "text-sky-400": status === "Pending",
              }
            )}
          >
            {status}
          </div>
        </div>
        <div className="text-right block md:hidden w-28">Today, 9:42 am</div>
      </div>
    </div>
  );
};

export default RequestStatusCard;
