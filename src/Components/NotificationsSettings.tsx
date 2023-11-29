import React, { useState } from "react";
import cx from "classnames";
import { icons } from "../utils/icons";
import ToggleSwitch from "./ToggleSwitch";

interface NotificationsSettingsProps {
  settingsActive: boolean;
  setSettingsActive: any;
}

const NotificationsSettings: React.FC<NotificationsSettingsProps> = ({
  settingsActive,
  setSettingsActive,
}) => {
  const handleCancel = () => {
    setSettingsActive(false);
  };

  const [muteAll, setMuteAll] = useState(false);
  const [muteNew, setMuteNew] = useState(false);
  const [mutePromotional, setMutePromotional] = useState(false);
  const [muteReminder, setMuteReminder] = useState(false);
  return (
    <div
      className={cx(
        "absolute left-0 bottom-0 w-screen h-screen bg-gray-700 z-10 flex justify-center items-center",
        {
          hidden: !settingsActive,
        }
      )}
    >
      <div
        className={cx(
          "bg-white w-11/12 md:w-1/3 p-4 px-8 flex flex-col justify-center rounded"
        )}
      >
        <div className="pb-4 flex justify-between items-center border-b border-gray-500">
          <div className="text-base text-gray-900 font-semibold w-4/5 ">
            Notification Settings
          </div>
          <span
            className="border border-gray-500 p-1 rounded cursor-pointer h-fit"
            onClick={handleCancel}
          >
            {icons.Projects.crosBlack}
          </span>
        </div>

        <div className="flex flex-col">
          <div className="flex py-6 justify-between items-center border-b border-gray-500">
            <div className="text-sm text-gray-900 font-semibold w-4/5 ">
              Mute all notifications
            </div>
            <ToggleSwitch setMuteField={setMuteAll} fieldValue={muteAll} />
          </div>
          <div className="flex py-6 justify-between items-center border-b border-gray-500">
            <div className="text-sm text-gray-900 font-semibold w-4/5 ">
              Mute new projects related notifications
            </div>
            <ToggleSwitch setMuteField={setMuteNew} fieldValue={muteNew} />
          </div>
          <div className="flex py-6 justify-between items-center border-b border-gray-500">
            <div className="text-sm text-gray-900 font-semibold w-4/5 ">
              Mute promotional notifications
            </div>
            <ToggleSwitch
              setMuteField={setMutePromotional}
              fieldValue={mutePromotional}
            />
          </div>
          <div className="flex py-6 justify-between items-center">
            <div className="text-sm text-gray-900 font-semibold w-4/5 ">
              Mute reminder notifications
            </div>
            <ToggleSwitch
              setMuteField={setMuteReminder}
              fieldValue={muteReminder}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsSettings;
