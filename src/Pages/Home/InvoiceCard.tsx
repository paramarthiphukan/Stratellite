import cx from "classnames";
export interface InvoiceCardProps {
   amount: number;
   status: "approved" | "pending";
   userName: string;
   img: string;
   invoiceNo: string;
   date: string;
}

const InvoiceCard: React.FC<InvoiceCardProps> = ({ amount, date, invoiceNo, status, userName, img }) => {
   return (
      <div className="invoice-card rounded-md flexflex-col py-6 px-5.5 border border-gray-60">
         <div className="font-medium text-28 text-gray-850 mb-3">${amount.toFixed(2)}</div>
         <div className="flex justify-between items-center w-full mb-6">
            <div className="text-base text-gray-700">Amount</div>
            <div
               className={cx("py-1.5 px-2.5 rounded-sm text-white", {
                  "bg-green-500": status === "approved",
                  "bg-sky-400": status === "pending",
               })}
            >
               {status[0].toUpperCase() + status.slice(1)}
            </div>
         </div>
         <div className="flex gap-5 items-center">
            <img src={img} alt="" className="h-14 w-14 object-cover rounded-full" />
            <div className="flex flex-col">
               <div className="text-base font-medium text-gray-850 mb-2">{userName}</div>
               <div className="flex gap-2.5">
                  <div className="text-xssm text-gray-800">#{invoiceNo}</div>
                  <div className="text-xssm text-gray-100">Date: {date}</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default InvoiceCard;
