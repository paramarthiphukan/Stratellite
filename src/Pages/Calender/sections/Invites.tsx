import React from "react";
import InvitationCard from "../../../Components/InvitationCard";

const Invites = () => {
  return (
    <div className="mx-3 md:max-h-[60vh] overflow-auto">
      <InvitationCard />
      <InvitationCard />
      <InvitationCard />
      <InvitationCard />
      <InvitationCard />
      <InvitationCard />
    </div>
  );
};

export default Invites;
