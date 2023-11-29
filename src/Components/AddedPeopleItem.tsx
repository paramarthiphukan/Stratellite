import React from "react";
import { icons } from "../utils/icons";

interface AddedPeopleProps {
  name: string;
  setList: any;
  list: any;
}

const AddedPeopleItem: React.FC<AddedPeopleProps> = ({
  name,
  setList,
  list,
}) => {
  const handleDelete = () => {
    const filterdList = list.filter((item: any) => {
      return item !== name;
    });
    setList(filterdList);
  };
  return (
    <div className="flex justify-between items-center py-2">
      <div className="w-2/5 text-center">{name}</div>
      <div className="flex justify-between items-center w-1/5">
        <span className="text-gray-500">Added</span>
        <span className="cursor-pointer" onClick={handleDelete}>
          {icons.Calender.delete}
        </span>
      </div>
    </div>
  );
};

export default AddedPeopleItem;
