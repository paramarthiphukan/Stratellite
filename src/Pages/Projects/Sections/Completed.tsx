import StatusCard from "../Cards/StatusCard";

const Completed = () => {
  return (
    <div className="mx-6 md:mx-12 w-100">
      <StatusCard status="Completed" />
      <StatusCard status="Completed" />
      <StatusCard status="Completed" />
      <StatusCard status="Completed" />
      <StatusCard status="Completed" />
    </div>
  );
};

export default Completed;
