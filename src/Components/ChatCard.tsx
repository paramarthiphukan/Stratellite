import { useState, useContext } from "react";
import messagesContext from "../Contexts/Messages/messagesContext";
import { icons } from "../utils/icons";
import cx from "classnames";
import ChatDropDown from "./ChatDropDown";

interface ChatCardProps {
  name: string;
  lastMessage: string;
  time: string;
  id: number;
}

const cardDropDown = [
  {
    item: "Archive Chat",
  },
  {
    item: "Delete Chat",
  },
  {
    item: "Mark as unread",
  },
  {
    item: "Mute Notification",
  },
];

const ChatCard: React.FC<ChatCardProps> = ({ name, lastMessage, time, id }) => {
  const [message, setMessage] = useState(lastMessage.slice(0, 30));
  const [showOptions, setShowOptions] = useState(false);
  const user = useContext(messagesContext);

  const handleClick = () => {
    const newUser = {
      name: name,
      lastMessage: lastMessage,
      isSelected: true,
      id: id,
    };

    user.update(newUser);
  };

  return (
    <div
      className={cx(
        "border border-gray-500 rounded p-2 flex items-center justify-between my-2 cursor-pointer relative",
        {
          "border-sky-400": user.state.id === id,
        }
      )}
      onClick={handleClick}
    >
      <div className="flex">
        <div className="relative">
          <img
            className="h-9 w-9 rounded-full object-cover mr-2"
            src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
            alt=""
          ></img>
          <div className="h-3 w-3 aspect-square bg-white rounded-full absolute left-6 bottom-[0.1rem]">
            <div className="h-2 w-2 aspect-square bg-sky-500 rounded-full absolute ml-[0.125rem] mt-[0.125rem]"></div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="font-semibold text-sm">{name}</div>
          <div className="text-[0.6rem] text-gray-700">{`${message}...`}</div>
        </div>
      </div>

      <div className="flex flex-col items-end relative">
        <div className="text-gray-700 text-[0.6rem] my-1 absolute bottom-0">
          {time}
        </div>
        <div
          className="my-1 absolute z-10 p-2 top-[-0.5rem] right-[-0.2rem]"
          onClick={() => {
            setShowOptions(!showOptions);
          }}
        >
          {icons.arrowDown}
        </div>
      </div>

      <ChatDropDown
        list={cardDropDown}
        showList={showOptions}
        setShowList={setShowOptions}
      />
    </div>
  );
};

export default ChatCard;
