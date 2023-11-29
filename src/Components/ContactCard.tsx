import React from "react";
import { icons } from "../utils/icons";

interface ContactCardProps {
  contactName: string;
  companyName: string;
  email: string;
  phoneNo: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  contactName,
  companyName,
  email,
  phoneNo,
}) => {
  return (
    <div className="flex flex-col md:flex-row p-3 py-4 border border-gray-500 rounded w-full my-3">
      <div className="flex justify-between md:w-1/4 md:border-r border-gray-500 p-3">
        <div className="flex">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
            alt=""
          ></img>
          <div className="flex flex-col ml-3">
            <div className="font-semibold text-base">{contactName}</div>
            <div className="text-xs">Owner/Manager</div>
          </div>
        </div>
        <div className="md:hidden px-3">
          <button className="p-3 px-9 bg-sky-400 text-white rounded flex items-center">
            <div className="w-4 mr-2">{icons.managers.messages}</div>
            Chat
          </button>
        </div>
      </div>

      <div className="flex flex-wrap w-full md:w-3/4">
        <div className="flex flex-col w-1/2 md:w-1/3 md:border-r border-gray-500 p-3">
          <div className="font-semibold text-sm md:text-base">
            {companyName}
          </div>
          <div className="text-xs">Company Name</div>
        </div>

        <div className="flex flex-col w-1/2 md:w-1/3 md:border-r border-gray-500 p-3">
          <div className="font-semibold text-sky-400 text-sm md:text-base">
            {email}
          </div>
          <div className="text-xs">Email Address</div>
        </div>

        <div className="flex flex-col w-1/2 md:w-1/3 md:border-r border-gray-500 p-3">
          <div className="font-semibold text-sm md:text-base">{phoneNo}</div>
          <div className="text-xs">Phone Number</div>
        </div>
      </div>

      <div className="hidden md:block border-l border-gray-500 p-3">
        <button className="p-3 bg-sky-400 text-white rounded flex items-center">
          <div className="w-4 mr-2">{icons.managers.messages}</div>
          Chat
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
