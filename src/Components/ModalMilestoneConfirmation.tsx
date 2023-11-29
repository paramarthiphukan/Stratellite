import React from "react";
import cx from "classnames";
import { icons } from "../utils/icons";

interface milestoneConfirmationProps {
  setSavePrompt: any;
  savePrompt: boolean;
  setSave: any;
}

const ModalMilestoneConfirmation: React.FC<milestoneConfirmationProps> = ({
  setSavePrompt,
  savePrompt,
  setSave,
}) => {
  const handleSave = () => {
    setSavePrompt(false);
    setSave(true);
  };

  const handleCancel = () => {
    setSavePrompt(false);
    setSave(false);
  };
  return (
    <div
      className={cx(
        "absolute left-0 bottom-0 w-screen h-screen bg-gray-700 z-10 flex justify-center items-center",
        {
          hidden: !savePrompt,
        }
      )}
    >
      <div className="bg-white w-11/12 md:w-1/3 md:h-60 flex flex-col justify-center">
        <div className="flex justify-end relative md:bottom-3 right-3">
          <span
            className="border border-gray-500 p-2 rounded cursor-pointer"
            onClick={handleCancel}
          >
            {icons.Projects.crosBlack}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
            Save Milestones
          </div>
          <div className="text-xs md:text-sm text-gray-600 w-4/5 mx-auto text-center">
            You cannot edit milestones once you have saved them, therefore we
            advice you to review milestones before saving it
          </div>
          <div className="flex md:w-2/5 justify-between my-3">
            <button
              className="p-3 px-4 bg-sky-400 text-white rounded mx-2 md:mx-0"
              onClick={handleSave}
            >
              Save Milestones
            </button>
            <button
              className="p-3 px-4 border border-sky-400 text-sky-400 rounded mx-2 md:mx-0"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMilestoneConfirmation;
