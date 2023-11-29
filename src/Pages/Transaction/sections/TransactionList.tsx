import React from "react";
import TransactionItem from "../../../Components/TransactionItem";
import { icons } from "../../../utils/icons";

const transactionList = [
  {
    date: "01/07/2021",
    project: "Construction work at Delhi Site",
    vendor: "Mark Jones",
    total: "20,000,000",
    status: "Paid",
  },
  {
    date: "01/07/2021",
    project: "Construction work at Delhi Site",
    vendor: "Mark Jones",
    total: "20,000,000",
    status: "Unpaid",
  },
  {
    date: "01/07/2021",
    project: "Construction work at Delhi Site",
    vendor: "Mark Jones",
    total: "20,000,000",
    status: "Paid",
  },
  {
    date: "01/07/2021",
    project: "Construction work at Delhi Site",
    vendor: "Mark Jones",
    total: "20,000,000",
    status: "Paid",
  },
  {
    date: "01/07/2021",
    project: "Construction work at Delhi Site",
    vendor: "Mark Jones",
    total: "20,000,000",
    status: "Paid",
  },
  {
    date: "01/07/2021",
    project: "Construction work at Delhi Site",
    vendor: "Mark Jones",
    total: "20,000,000",
    status: "Paid",
  },
];

const TransactionList = () => {
  return (
    <div className="mx-6 md:mx-12 my-6">
      <div className="flex items-center justify-end">
        <div className="w-20 flex items-center justify-between">
          <span className="text-gray-100">Show</span> 10 {icons.arrowDown}
        </div>
      </div>

      {/* table headers */}
      <div className="bg-gray-500">
        <div className="w-full bg-gray-500 rounded border border-gray-500 flex p-3 top-4 font-medium">
          <div className="w-60">Date</div>
          <div className="w-[30rem]">Project</div>
          <div className="w-60">Vendor</div>
          <div className="w-60">Total</div>
          <div className="w-60">Status</div>
        </div>

        {transactionList.map((listItem) => {
          return (
            <TransactionItem
              date={listItem.date}
              project={listItem.project}
              vendor={listItem.vendor}
              total={listItem.total}
              status={listItem.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TransactionList;
