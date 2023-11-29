import { icons } from "../utils/icons";
import cx from "classnames";
import { useState } from "react";

interface NotificationCardProps {
  accessNotif: boolean;
  newNotif: boolean;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  accessNotif,
  newNotif,
}) => {
  const [show, setShow] = useState(false);
  const [seen, setSeen] = useState(!newNotif);

  const handleClick = () => {
    setShow(!show);
    setSeen(true);
  };
  return (
    <div
      className={cx(
        "w-full py-4 px-2 md:px-0 my-3 border border-gray-500 rounded cursor-pointer",
        {
          "md:py-6": accessNotif,
        }
      )}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center">
        <div
          className={cx(
            "hidden md:block h-2.125 w-2.125 aspect-square bg-sky-400 rounded-full mr-2",
            { invisible: seen }
          )}
        ></div>
        <div className="mr-4">
          {accessNotif && icons.notifications.access}
          {!accessNotif && (
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
              alt=""
            ></img>
          )}
        </div>
        <div className="flex w-4/5 md:w-4/5 items-center flex-wrap text-sm">
          <div>
            <span className="font-semibold mr-1">Lex Murphy</span>
            <span className="mx-1">requested access to</span>
            <span className="font-semibold text-sky-400">
              UNIX directory tree hierarchy
            </span>
          </div>
        </div>
        <div className="flex items-center flex-col-reverse md:flex-row">
          <div className="hidden md:block md:mr-4">Today, 9:42 am</div>
        </div>
      </div>
      <div className="flex items-center justify-end text-sm text-gray-600 mt-3 md:hidden">
        <div
          className={cx(
            "md:hidden h-2.125 w-2.125 aspect-square bg-sky-400 rounded-full mr-2",
            { invisible: seen }
          )}
        ></div>
        <span>Today, 9:42 am</span>
      </div>
      <div
        className={cx(
          "text-sm w-4/5 mx-auto md:w-2/3 md:ml-20 duration-100 ease-in-out",
          {
            "h-fit mt-4": show,
            "mt-0 h-0 overflow-hidden": !show,
          }
        )}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem placeat
        vel error. Sint asperiores sit ipsam magni et nesciunt numquam!
      </div>
    </div>
  );
};

export default NotificationCard;
