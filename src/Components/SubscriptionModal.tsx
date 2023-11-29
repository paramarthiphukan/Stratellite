import React from "react";
import cx from "classnames";
import { icons } from "../utils/icons";

interface ModalProps {
  submit: boolean;
  setSubmit: any;
}

const models = [
  {
    plan: "Limited Boosters",
    price: "10",
    list: [
      {
        available: true,
        detail: "Get Manager's Contact Details",
      },
      {
        available: false,
        detail: "Get early notification of Projects",
      },
      {
        available: false,
        detail: "Add work related photos",
      },
      {
        available: false,
        detail: "Stratalite Prime membership badge",
      },
    ],
    total: 100,
  },
  {
    plan: "Monthly Plan",
    price: "7",
    list: [
      {
        available: true,
        detail: "50 boosters in a Month",
      },
      {
        available: true,
        detail: "Get Manager's Contact Details",
      },
      {
        available: true,
        detail: "Get early notification of Projects",
      },
      {
        available: true,
        detail: "Add work related photos",
      },
      {
        available: false,
        detail: "Stratalite Prime membership badge",
      },
    ],
    total: 350,
  },
  {
    plan: "Yearly Plan",
    price: "5",
    list: [
      {
        available: true,
        detail: "70 boosters in a Month",
      },
      {
        available: true,
        detail: "Get Manager's Contact Details",
      },
      {
        available: true,
        detail: "Get early notification of Projects",
      },
      {
        available: true,
        detail: "Add work related photos",
      },
      {
        available: false,
        detail: "Stratalite Prime membership badge",
      },
    ],
    total: 4200,
  },
];

const SubscriptionModal: React.FC<ModalProps> = ({ submit, setSubmit }) => {
  const handleCancel = () => {
    setSubmit(false);
  };
  return (
    <div
      className={cx(
        "bg-white w-11/12 md:w-4/5 max-h-5/6 px-5 md:px-0 md:pb-10 flex-col rounded justify-center items-center",
        {
          hidden: !submit,
        }
      )}
    >
      <div className="flex items-center my-3 md:my-6 justify-between">
        <div className="text-sm md:text-28 text-gray-900 font-semibold w-full text-center">
          Subscription Plans
        </div>
        <span
          className="border border-gray-500 p-2 rounded cursor-pointer h-fit relative right-3"
          onClick={handleCancel}
        >
          {icons.Projects.crosBlack}
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly items-center">
        {models.map((model) => {
          return (
            <div className="p-3 border border-gray-500 w-80 md:w-96 flex flex-col justify-between items-center rounded  my-2 md:my-0">
              <div className="text-gray-600 text-center p-2 border-b border-b-gray-500 w-4/5 mx-auto">
                {model.plan}
              </div>
              <div className="text-center my-3">
                <span className="text-28 font-semibold">${model.price}</span>
                <span className="text-gray-600 font-semibold">per boost</span>
              </div>

              <div className="flex flex-col md:mt-6">
                {model.list.map((item) => {
                  return (
                    <div className="flex justify-between items-center  mx-auto w-64 md:w-72 my-0.5 md:my-3">
                      <span>
                        {item.available
                          ? icons.newProjects.tick
                          : icons.newProjects.close}
                      </span>
                      <div className="md:text-sm font-semibold">
                        {item.detail}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="p-3 px-5 bg-sky-400 text-white rounded">
                ${model.total} Buy
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubscriptionModal;
