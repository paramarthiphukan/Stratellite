import TransactionInvoiceItem from "../../../Components/TransactionInvoiceItem";
import { icons } from "../../../utils/icons";

const invoiceList = [
  {
    invoice_id: "#12340",
    start_date: "01/07/2021",
    end_date: "01/07/2021",
    projects: 2,
    invoice_amt: "20,000",
    status: "Paid",
  },
  {
    invoice_id: "#12340",
    start_date: "01/07/2021",
    end_date: "01/07/2021",
    projects: 2,
    invoice_amt: "20,000",
    status: "Unpaid",
  },
  {
    invoice_id: "#12340",
    start_date: "01/07/2021",
    end_date: "01/07/2021",
    projects: 2,
    invoice_amt: "20,000",
    status: "Paid",
  },
  {
    invoice_id: "#12340",
    start_date: "01/07/2021",
    end_date: "01/07/2021",
    projects: 2,
    invoice_amt: "20,000",
    status: "Paid",
  },
  {
    invoice_id: "#12340",
    start_date: "01/07/2021",
    end_date: "01/07/2021",
    projects: 2,
    invoice_amt: "20,000",
    status: "Paid",
  },
  {
    invoice_id: "#12340",
    start_date: "01/07/2021",
    end_date: "01/07/2021",
    projects: 2,
    invoice_amt: "20,000",
    status: "Paid",
  },
  {
    invoice_id: "#12340",
    start_date: "01/07/2021",
    end_date: "01/07/2021",
    projects: 2,
    invoice_amt: "20,000",
    status: "Paid",
  },
  {
    invoice_id: "#12340",
    start_date: "01/07/2021",
    end_date: "01/07/2021",
    projects: 2,
    invoice_amt: "20,000",
    status: "Paid",
  },
];

const InvoicesList = () => {
  return (
    <div className="mx-6 md:mx-12 my-6 mt-12">
      <div className="flex items-center justify-end">
        <div className="w-20 flex items-center justify-between">
          <span className="text-gray-100">Show</span> 10 {icons.arrowDown}
        </div>
      </div>

      {/* table headers */}
      <div className="bg-gray-500">
        <div className="w-full bg-gray-500 rounded border border-gray-500 flex p-3 top-4 font-medium w-full">
          <div className="w-[16.5%]">Invoice ID</div>
          <div className="w-[16.5%]">Start Date</div>
          <div className="w-[16.5%]">End Date</div>
          <div className="w-[16.5%]">Projects</div>
          <div className="w-[16.5%]">Invoice amount</div>
          <div className="w-[16.5%]">Status</div>
        </div>

        {invoiceList.map((item) => {
          return (
            <TransactionInvoiceItem
              invoice_id={item.invoice_id}
              start_date={item.start_date}
              end_date={item.end_date}
              projects={item.projects}
              invoice_amt={item.invoice_amt}
              status={item.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InvoicesList;
