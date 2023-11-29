import cx from "classnames";
import { icons } from "../../utils/icons";
import ChatCard from "../../Components/ChatCard";
import { chatList } from "../../data/messages";
import { useContext, useState } from "react";
import messagesContext from "../../Contexts/Messages/messagesContext";
import ChatDropDown from "../../Components/ChatDropDown";
import MessagesSettings from "../../Components/MessagesSettings";
import AddContactModal from "../../Components/AddContactModal";

const filterDropDown = [
  {
    item: "Unread chats",
  },
  {
    item: "Active chats",
  },
  {
    item: "Draft chats",
  },
  {
    item: "Archived chats",
  },
];

const ChatList = () => {
  const item = useContext(messagesContext);

  const [showFilter, setShowFilter] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);

  const [addContactModalActive, setAddContactModalActive] = useState(false);
  return (
    <div
      className={cx(
        "w-100 md:w-[37%] md:h-[82vh] border border-gray-500 rounded mx-2 p-3",
        { "hidden md:block": item.state.isSelected }
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <div
          className="bg-sky-400 text-white rounded p-4 md:p-3 w-4/5 md:w-fit text-sm cursor-pointer"
          onClick={() => setAddContactModalActive(true)}
        >
          Add Contacts
        </div>
        <div className="relative bottom-8 right-32">
          <div
            className="border rounded border-gray-500 p-4 md:p-2 absolute top-2 left-20 md:top-4 md:left-24 cursor-pointer"
            onClick={() => setShowFilter(!showFilter)}
          >
            {icons.filter}
          </div>

          {showFilter && (
            <ChatDropDown
              list={filterDropDown}
              showList={showFilter}
              setShowList={setShowFilter}
            />
          )}
        </div>
      </div>
      <div className="overflow-y-auto scrollbar-hide max-h-[83%]">
        {chatList.map((chat) => {
          return (
            <ChatCard
              name={chat.name}
              lastMessage={chat.lastMessage}
              time={chat.time}
              id={chat.id}
            />
          );
        })}
      </div>
      <div
        className="border border-gray-500 rounded hidden md:flex items-center mt-2 p-3 px-6 cursor-pointer"
        onClick={() => setSettingsActive(true)}
      >
        <div className="text-gray-200 w-[1.5rem] mr-4">
          {icons.notifications.settings}
        </div>
        <div className="text-gray-200">Message setting</div>
      </div>

      <MessagesSettings
        settingsActive={settingsActive}
        setSettingsActive={setSettingsActive}
      />

      {addContactModalActive && (
        <AddContactModal setActive={setAddContactModalActive} />
      )}
    </div>
  );
};

export default ChatList;
