import { StringMappingType } from "typescript";
import { icons } from "../../utils/icons";

export interface ProjectCardProps {
   title: string;
   subtitle: string;
   minPrice: number;
   maxPrice: number;
   deadline: string;
   progress: number;
   vendorName: string;
   img: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
   deadline,
   title,
   img,
   maxPrice,
   minPrice,
   vendorName,
   progress,
   subtitle,
}) => {
   return (
      <div className="project-card flex flex-col rounded-lg border border-gray-60 py-5 px-6">
         <div className="text-1.5xl text-gray-900 font-semibold mb-2">{title}</div>
         <div className="text-xssm text-gray-800 mb-4">{subtitle}</div>
         <div className="flex items-center mb-4">
            {icons.dollar}
            <div className="text-gray-900 font-serif ml-1 mr-6 text-sm">
               {minPrice} - {maxPrice}
            </div>
            <div className="text-gray-900 mr-2">{icons.sidebarIcons.calendar}</div>
            <div className="text-gray-900 text-sm">Deadline - {deadline}</div>
         </div>
         <div className="d-flex rounded-sm bg-gray-300 w-full h-2.5 mb-2.5">
            <div className="d-flex rounded-sm bg-sky-400 h-2.5" style={{ width: progress + "%" }}></div>
         </div>
         <div className="flex items-center justify-between w-full mb-2.5">
            <div className="text-gray-100 text-xs">Progress Bar</div>
            <div className="text-gray-100 font-semibold text-xs">{progress} %</div>
         </div>
         <div className="flex items-center justify-between w-full">
            <div className="flex gap-4 items-center">
               <img src={img} alt="" className="h-8 w-8 rounded-full" />
               <div className="text-sm">{vendorName}</div>
            </div>
            <div className="py-4 bg-sky-400 rounded-md text-white cursor-pointer px-5.5">View</div>
         </div>
      </div>
   );
};

export default ProjectCard;
