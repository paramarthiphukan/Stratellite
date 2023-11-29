import DisputedProjectCard from "../Cards/DisputedProjectCard";

const DisputedProjects = () => {
  return (
    <div className="mx-6 md:mx-12 w-100">
      <DisputedProjectCard status="Resolved" />
      <DisputedProjectCard status="Un-Resolved" />
      <DisputedProjectCard status="Resolved" />
      <DisputedProjectCard status="Resolved" />
      <DisputedProjectCard status="Un-Resolved" />
    </div>
  );
};

export default DisputedProjects;
