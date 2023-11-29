import MeetingItem, { MeetingItemProps } from "./MeetingItem";

const meetings: MeetingItemProps[] = [
  {
    callWithClient: "30 mintue",
    due: "09:20 am",
    title: "Project Discovery call",
    images: [
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
    ],
  },
  {
    callWithClient: "30 mintue",
    due: "09:20 am",
    title: "Project Discovery call",
    images: [
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
    ],
  },
  {
    callWithClient: "30 mintue",
    due: "09:20 am",
    title: "Project Discovery call",
    images: [
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
    ],
  },
  {
    callWithClient: "30 mintue",
    due: "09:20 am",
    title: "Project Discovery call",
    images: [
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
      "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
    ],
  },
];

const Reminders = () => {
  return (
    <div className="border w-11/12 mx-auto md:w-[23rem] my-3 md:my-0 border-gray-500 rounded flex flex-col p-3">
      <div className="flex flex-col p-4 border-b border-gray-500">
        <div className="text-1.5xl text-gray-800 font-medium mb-3">
          Reminders
        </div>
        <div className="text-sm text-gray-600">
          This is where you will see reminders of the selected date.
        </div>
      </div>

      <div className="flex flex-col gap-12 py-4">
        {meetings.map((meeting) => (
          <MeetingItem {...meeting}></MeetingItem>
        ))}
      </div>
    </div>
  );
};

export default Reminders;
