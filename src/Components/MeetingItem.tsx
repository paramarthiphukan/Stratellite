import { icons } from "../utils/icons";
import ImageGroup from "./ImageGroup";

export interface MeetingItemProps {
   title: string;
   due: string;
   callWithClient: string;
   images: string[];
}

const MeetingItem: React.FC<MeetingItemProps> = ({ title, images, due, callWithClient }) => {
   return (
      <div className="flex flex-col ">
         <div className="flex justify-between items-center mb-3 pr-1.5">
            <div className="text-xs text-sky-500">{callWithClient} call with clients </div>
            <div className="cursor-pointer">{icons.threeDots}</div>
         </div>
         <div className="text-lg font-medium mb-4.5">{title}</div>
         <div className="mb-4">
            <span className="text-gray-100 text-xs mr-2">Due Soon</span>
            <span className="text-xs font-medium">{due}</span>
         </div>
         <div className="flex justify-between align-center">
            <ImageGroup images={images}></ImageGroup>
            <div className="rounded-md text-white bg-sky-400 py-3 px-3 flex cursor-pointer items-center">
               <div className="mr-4">{icons.plusWhite}</div>
               <div className="text-white text-sm font-semibold">Invite</div>
            </div>
         </div>
      </div>
   );
};

export default MeetingItem;
