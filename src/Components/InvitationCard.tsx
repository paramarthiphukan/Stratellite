import React from "react";

const InvitationCard = () => {
  return (
    <div className="border-b border-gray-500 rounded w-full h-fit p-2 pt-4">
      <div className="flex items-end md:items-start justify-between">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
            alt=""
          ></img>
          <div className="flex w-4/5 md:w-4/5 items-center flex-wrap text-sm ml-3">
            <div>
              <span className="mr-1">Meeting with</span>
              <span className="font-semibold text-sky-400">Mr. Arun Sahsi</span>
              <span className="mx-1">
                Vender no. 138 scheduled for tomorrow eveing at 5 p.m.
              </span>
            </div>
          </div>
        </div>

        <div className="text-xs hidden md:block md:w-28">Today, 9:42 am</div>
      </div>

      <div className="flex justify-between items-end my-6">
        <div className="flex mx-3 text-sm">
          <button className="w-24 md:w-32 border border-sky-400 rounded text-sky-400 py-3 mr-2">
            Reject
          </button>
          <button className="w-24 md:w-32 border border-sky-400 rounded text-white bg-sky-400 py-3">
            Accept
          </button>
        </div>
        <div className="block md:hidden w-28 text-right">Today, 9:42 am</div>
      </div>
    </div>
  );
};

export default InvitationCard;
