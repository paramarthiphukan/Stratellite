import React from "react";
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
];

const RecentEvents = () => {
  return (
    <div className="border border-gray-500 rounded w-11/12 mx-auto md:w-fit flex flex-col p-3 my-3 mb-6">
      <div className="flex flex-col p-4 border-b border-gray-500">
        <div className="text-1.5xl text-gray-800 font-medium mb-3">
          Recent Events
        </div>
        <div className="text-sm text-gray-600">
          Reminders that have been added recently will be displayed here.
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

export default RecentEvents;
