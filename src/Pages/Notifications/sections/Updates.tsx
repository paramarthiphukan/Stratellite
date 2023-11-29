import React from "react";
import NotificationCard from "../../../Components/NotificationCard";

const Updates = () => {
  return (
    <div className="flex flex-col px-4 md:px-12">
      <NotificationCard accessNotif={true} newNotif={false} />
      <NotificationCard accessNotif={false} newNotif={true} />
      <NotificationCard accessNotif={true} newNotif={false} />
      <NotificationCard accessNotif={false} newNotif={true} />
      <NotificationCard accessNotif={false} newNotif={false} />
      <NotificationCard accessNotif={true} newNotif={true} />
    </div>
  );
};

export default Updates;
