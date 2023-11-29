import RemindersNotificationCard from "../../../Components/RemindersNotificationCard";

const Reminders = () => {
  return (
    <div className="flex flex-col px-4 md:px-12">
      <RemindersNotificationCard type={"meeting"} />
      <RemindersNotificationCard type={"progress"} />
      <RemindersNotificationCard type={"meeting"} />
      <RemindersNotificationCard type={"progress"} />
      <RemindersNotificationCard type={"meeting"} />
      <RemindersNotificationCard type={"meeting"} />
    </div>
  );
};

export default Reminders;
