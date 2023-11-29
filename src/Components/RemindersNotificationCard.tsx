import { icons } from "../utils/icons";
import cx from "classnames";

interface RemindersNotificationCardProps {
  type: string;
}

const RemindersNotificationCard: React.FC<RemindersNotificationCardProps> = ({
  type,
}) => {
  return (
    <div className="w-full py-4 px-2 md:p-4 my-3 border border-gray-500 rounded">
      <div className="flex items-start md:items-center justify-between ">
        <div
          className={cx(
            "hidden md:block h-2.125 w-2.125 aspect-square bg-sky-400 rounded-full mr-2 md:mr-0"
          )}
        ></div>
        <div>
          {type === "meeting" && icons.notifications.meetings}
          {type === "progress" && icons.notifications.progress}
        </div>
        <div className="flex w-4/5 md:w-4/5 items-center flex-wrap text-sm">
          <div className="w-11/12 md:w-1/2">
            <span className="mr-1">
              {type === "meeting" && "Meeting with"}
              {type === "progress" && "Progress report status for"}
            </span>
            <span className="font-semibold text-sky-400">
              {type === "meeting" && "Mr. Arun Sahsi"}
              {type === "progress" && "project no. 739"}
            </span>
            <span className="mx-1">
              {type === "meeting" &&
                ", Vendor no. 138 scheduled for tomorrow evening at 5 pm"}
              {type === "progress" && "pending"}
            </span>
          </div>
        </div>
        <div className="flex items-center flex-col-reverse md:flex-row">
          <div className="hidden md:block md:mr-4">Today, 9:42 am</div>
        </div>
      </div>
      <div className="flex justify-start text-sm text-gray-600 mt-5 mb-2 w-4/5 ml-16 md:ml-20">
        {type === "meeting" && "Reschedule Meeting"}
        {type === "progress" && "Update Status"}
      </div>
      <div className="md:hidden flex justify-end text-sm text-gray-600 mt-3">
        Today, 9:42 am
      </div>
    </div>
  );
};

export default RemindersNotificationCard;
