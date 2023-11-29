import cx from "classnames";

interface TransactionItemProps {
  date: string;
  project: string;
  vendor: string;
  total: string;
  status: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  date,
  project,
  vendor,
  total,
  status,
}) => {
  return (
    <div className="w-full rounded border border-gray-500 flex p-3 py-5 top-4 bg-white font-medium">
      <div className="w-60">{date}</div>
      <div className="w-[30rem]">{project}</div>
      <div className="w-60">{vendor}</div>
      <div className="w-60 font-bold">{total}</div>
      <div
        className={cx("w-60 text-green-400", {
          "text-red-400": status === "Unpaid",
        })}
      >
        {status}
      </div>
    </div>
  );
};

export default TransactionItem;
