import React, { useState } from "react";
import cx from "classnames";
import { icons } from "../utils/icons";
import ToggleSwitch from "./ToggleSwitch";

interface MessagesSettingsProps {
  settingsActive: boolean;
  setSettingsActive: any;
}

const MessagesSettings: React.FC<MessagesSettingsProps> = ({
  settingsActive,
  setSettingsActive,
}) => {
  const handleCancel = () => {
    setSettingsActive(false);
  };

  const [openNewMessages, setOpenNewMessages] = useState(true);
  const [playSound, setPlaySound] = useState(true);
  const [storeDeleted, setStoreDeleted] = useState(true);
  const [muteReminder, setMuteReminder] = useState(true);
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
          <div className="text-1.5xl text-gray-900 font-semibold w-4/5 ">
            Messages Settings
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
              Always open new messages
            </div>
            <ToggleSwitch
              setMuteField={setOpenNewMessages}
              fieldValue={openNewMessages}
            />
          </div>
          <div className="flex py-6 justify-between items-center border-b border-gray-500">
            <div className="text-sm text-gray-900 font-semibold w-4/5 ">
              Play sound for new messages
            </div>
            <ToggleSwitch setMuteField={setPlaySound} fieldValue={playSound} />
          </div>
          <div className=" py-6  border-b border-gray-500">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-900 font-semibold w-4/5 ">
                Store deleted messages
              </div>
              <ToggleSwitch
                setMuteField={setStoreDeleted}
                fieldValue={storeDeleted}
              />
            </div>
            <div className="border rounded border-sky-400 p-3 md:px-9 text-sky-400 font-semibold w-1/2 my-2 text-center text-xs md:text-sm">
              View deleted messages
            </div>
          </div>
          <div className="flex flex-col md:flex-row py-6 justify-between md:items-center border-b border-gray-500">
            <div className="text-sm text-gray-900 font-semibold w-1/2">
              Blocked Contacts
            </div>
            <div className="border rounded border-sky-400 p-3 md:px-9 text-sky-400 font-semibold text-center text-xs md:text-sm w-1/2 my-2 md:my-0">
              View blocked contacts
            </div>
          </div>
          <div className="flex py-6 justify-between items-center border-b border-gray-500">
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

export default MessagesSettings;
