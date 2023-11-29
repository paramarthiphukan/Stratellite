import { icons } from "../../utils/icons";

export interface OverviewCardProps {
   value: number;
   showViewAll?: boolean;
   title: string;
   icon: JSX.Element;
   description: string;
   color: string;
   image: string;
   shadowColor: string;
   aspectRatio: string;
}

const OverviewCard: React.FC<OverviewCardProps> = (props) => {
   return (
      <div
         style={{
            backgroundColor: props.color,
            backgroundImage: `url(${props.image})`,
            filter: `drop-shadow(0px 25px 60px ${props.shadowColor})`,
            aspectRatio: props.aspectRatio,
         }}
         className="flex flex-col text-white font-serif justify-between p-4 lg:p-4  xl:p-4 2xl:p-5 rounded-lg md:rounded-xl bg-cover"
      >
         <div className="flex justify-between w-full">
            <div className="flex gap-3 bg-gray-75 rounded-md p-3 items-center">
               {props.icon}
               <div className="text-xxs md:text-sm font-medium">{props.title}</div>
            </div>
            {props.showViewAll && (
               <div className="bg-gray-75 text-xxs md:text-sm   cursor-pointer rounded-md py-2.5 px-4 font-medium flex items-center">
                  View All
               </div>
            )}
         </div>
         <div>
            <div className="font-bold mb-2 text-4xl xl:text-5xl xl:mb-3 2xl:text-64 2xl:mb-3">{props.value}</div>
            <div className="font-medium text-xs xl:text-sm">{props.description}</div>
         </div>
      </div>
   );
};

export default OverviewCard;
