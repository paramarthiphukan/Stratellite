import React, { useState } from "react";
import cx from "classnames";
import { icons } from "../utils/icons";
import SubscriptionModal from "./SubscriptionModal";
import StaticRating from "./StaticRating";

interface ModalProps {
  preview: boolean;
  setPreview: any;
}

const ModalSubmitInterest: React.FC<ModalProps> = ({ preview, setPreview }) => {
  const handleCancel = () => {
    setPreview(false);
  };

  const [submit, setSubmit] = useState(false);
  return (
    <div
      className={cx(
        "absolute left-0 top-0 w-screen min-h-screen md:h-screen bg-gray-700 z-10 flex justify-center items-center",
        { hidden: !preview }
      )}
    >
      <div
        className={cx(
          "bg-white w-11/12 md:w-1/4 h-fit py-10 flex rounded flex-col justify-center",
          { hidden: submit }
        )}
      >
        <div className="flex justify-end relative bottom-3 right-3">
          <div className="text-base text-gray-900 font-semibold pb-3 w-4/5 border-b border-gray-500">
            Submit Interset in Project to view Manager's Contact Details
          </div>
          <span
            className="border border-gray-500 p-2 rounded cursor-pointer h-fit"
            onClick={handleCancel}
          >
            {icons.Projects.crosBlack}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center pb-3 mb-2 md:w-4/5 border-b border-gray-500 mx-auto">
          <div className="flex my-3 justify-between w-full">
            <div className="text-base text-gray-900">Manager's Rating</div>
            <StaticRating rating={4} />
          </div>
          <div className="flex my-3 justify-between w-full">
            <div className="text-base text-gray-900">Manager's Name</div>
            <div className="text-base text-gray-900 font-semibold">
              Available
            </div>
          </div>
          <div className="flex my-3 justify-between w-full">
            <div className="text-base text-gray-900">Company Detail</div>
            <div className="text-base text-gray-900 font-semibold">
              Available
            </div>
          </div>
          <div className="flex my-3 justify-between w-full">
            <div className="text-base text-gray-900">Contact Number</div>
            <div className="text-base text-gray-900 font-semibold">
              Available
            </div>
          </div>
          <div className="flex my-3 justify-between w-full">
            <div className="text-base text-gray-900">Email ID</div>
            <div className="text-base text-gray-900 font-semibold">
              Available
            </div>
          </div>
        </div>

        <div className="text-xssm text-sky-400 font-semibold md:w-4/5 mx-auto my-2">
          Use one Boost to credit interest in this project
        </div>

        <div className="flex flex-wrap w-4/5 items-center justify-between my-3 mx-auto">
          <button
            className="p-3 text-sm px-4 border border-sky-400 text-sky-400 rounded w-28"
            onClick={handleCancel}
          >
            Close
          </button>
          <button
            className="p-3 px-4 text-sm border border-sky-400 bg-sky-400 text-white rounded cursor-pointer"
            onClick={() => setSubmit(true)}
          >
            Submit Interest
          </button>
          <div className="text-xssm text-sky-400 font-semibold mx-3 my-2">
            4 credits
          </div>
        </div>
      </div>
      <SubscriptionModal submit={submit} setSubmit={setSubmit} />
    </div>
  );
};

export default ModalSubmitInterest;
