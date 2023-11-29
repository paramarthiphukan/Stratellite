import { icons } from "../utils/icons";
import ActivityItem, { ActivityItemProps } from "./ActivityItem";
import ImageGroup from "./ImageGroup";
import MeetingItem, { MeetingItemProps } from "./MeetingItem";

interface RightSidebarProps {}
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
const activityItems: ActivityItemProps[] = [
  {
    name: "Kevin Dukkon",
    date: "Jun 14, 2021 at 5:31 PM",
    text: "Thanks you for booking a meeting with JJ.",
    img: "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
  },
  {
    name: "Kevin Dukkon",
    date: "Jun 14, 2021 at 5:31 PM",
    text: "Thanks you for booking a meeting with JJ.",
    img: "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
  },
  {
    name: "Kevin Dukkon",
    date: "Jun 14, 2021 at 5:31 PM",
    text: "Thanks you for booking a meeting with JJ.",
    img: "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
  },
];
const RightSidebar: React.FC<RightSidebarProps> = () => {
  return (
    <div className="md:flex flex-col w-full bg-gray-50 overflow-y-auto hidden">
      <div className="flex w-full h-32.5 items-center p-9">
        <img
          className="h-16 w-16 rounded-full object-cover mr-5"
          src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
        ></img>
        <div className="flex flex-col justify-between">
          <div className="font-medium text-1.5xl mb-2">Oliver Smith</div>
          <div className="text-xssm">Vendor</div>
        </div>
        <div className="ml-12">{icons.arrowRight}</div>
      </div>
      <div className="flex flex-col pl-9 pr-12">
        <div className="flex justify-between items-center border-b border-gray-300 pb-6 mb-5">
          <div className="font-medium text-1.5xl mb-2">Upcoming Meeting</div>
          <div className="cursor-pointer">{icons.threeDots}</div>
        </div>
        <div className="flex justify-between items-center mb-8 pr-1.5i cursor-pointer">
          <div className="text-base">Today’s Meetings</div>
          <div className="cursor-pointer">{icons.arrowDown}</div>
        </div>

        <div className="flex flex-col gap-12">
          {meetings.map((meeting) => (
            <MeetingItem {...meeting}></MeetingItem>
          ))}
        </div>
        <div className="flex border-b border-gray-300 justify-between items-center mb-6 pr-1.5 cursor-pointer pb-5 mt-11">
          <div className="text-base">Scheudle Meetings </div>
          <div className="cursor-pointer">{icons.arrowUp}</div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="font-medium text-1.5xl mb-2">Recent Activity</div>
          <div className="cursor-pointer">{icons.threeDots}</div>
        </div>
        <div className="flex flex-col">
          {activityItems.map((x) => (
            <ActivityItem {...x}></ActivityItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
