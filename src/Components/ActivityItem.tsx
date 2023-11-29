export interface ActivityItemProps {
   text: string;
   img: string;
   name: string;
   date: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ text, img, name, date }) => {
   return (
      <div className="flex gap-4 py-4 border-b border-gray-300">
         <div className="h-2.125 w-2.125 aspect-square bg-sky-400 rounded-full"></div>
         <div className="flex flex-col">
            <div className="text-sm text-gray-800 font-bold mb-5">{text}</div>
            <div className="text-sm text-gray-800 font-bold mb-2.5">{name}</div>
            <div className="text-sm text-gray-100">{date}</div>
         </div>
         <img src={img} className="object-cover aspect-square h-14 w-14 rounded-full" alt="" />
      </div>
   );
};

export default ActivityItem;
