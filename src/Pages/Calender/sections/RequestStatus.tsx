import React from "react";
import RequestStatusCard from "../../../Components/RequestStatusCard";

const RequestStatus = () => {
  return (
    <div className="mx-3 md:max-h-[60vh] overflow-auto">
      <RequestStatusCard status={"Pending"} />
      <RequestStatusCard status={"Approved"} />
      <RequestStatusCard status={"Pending"} />
      <RequestStatusCard status={"Approved"} />
      <RequestStatusCard status={"Pending"} />
      <RequestStatusCard status={"Pending"} />
    </div>
  );
};

export default RequestStatus;
