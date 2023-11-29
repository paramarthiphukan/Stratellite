import cx from "classnames";

interface TransactionInvoiceItemProps {
  invoice_id: string;
  start_date: string;
  end_date: string;
  projects: number;
  invoice_amt: string;
  status: string;
}

const TransactionInvoiceItem: React.FC<TransactionInvoiceItemProps> = ({
  invoice_id,
  start_date,
  end_date,
  projects,
  invoice_amt,
  status,
}) => {
  return (
    <div className="w-full rounded border border-gray-500 flex p-3 py-5 top-4 bg-white font-medium">
      <div className="w-[16.5%]">{invoice_id}</div>
      <div className="w-[16.5%]">{start_date}</div>
      <div className="w-[16.5%]">{end_date} </div>
      <div className="w-[16.5%]">{projects}</div>
      <div className="w-[16.5%] font-bold">{invoice_amt}</div>
      <div
        className={cx("w-[16.5%] text-green-400", {
          "text-red-400": status === "Unpaid",
        })}
      >
        {status}
      </div>
    </div>
  );
};

export default TransactionInvoiceItem;
