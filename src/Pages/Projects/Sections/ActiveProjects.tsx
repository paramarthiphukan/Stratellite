import ActiveProjectCard from "../Cards/ActiveProjectCard";

const ActiveProjects = () => {
  return (
    <div className="mx-6 md:mx-12 w-100">
      <ActiveProjectCard status="Under-Review" />
      <ActiveProjectCard status="In-Progress" />
      <ActiveProjectCard status="Approved" />
      <ActiveProjectCard status="Rejected" />
      <ActiveProjectCard status="Approved" />
    </div>
  );
};

export default ActiveProjects;
