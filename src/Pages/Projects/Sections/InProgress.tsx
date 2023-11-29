import StatusCard from "../Cards/StatusCard";

const InProgress = () => {
  return (
    <div className="mx-6 md:mx-12 w-100">
      <StatusCard status="In-Progress" />
      <StatusCard status="In-Progress" />
      <StatusCard status="In-Progress" />
      <StatusCard status="In-Progress" />
      <StatusCard status="In-Progress" />
    </div>
  );
};

export default InProgress;
