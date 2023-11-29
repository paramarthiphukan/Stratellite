import { icons } from "../../utils/icons";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import RightSidebar from "../../Components/RightSidebar";
import ChatBox from "../../Components/ChatBox";
import MessagesState from "../../Contexts/Messages/messagesState";
import ChatList from "./ChatList";
import { useState } from "react";
import MessagesSettings from "../../Components/MessagesSettings";
import CustomBackButton from "./BackButton";

const Main = () => {
  const [state, dispatch] = useGlobalContext();
  const [settingsActive, setSettingsActive] = useState(false);
  return (
    <MessagesState>
      <div className="messages">
        <div className="flex flex-col overflow-auto">
          <div className="flex gap-4 mt-6 md:mt-0 md:min-h-[8.5rem] w-100 items-center md:mx-0 mx-5">
            <CustomBackButton />
            <div className="md:mx-15 h-4 md:h-6 cursor-pointer hover:text-sky-600">
              {icons.search}
            </div>
            <div
              onClick={() =>
                dispatch({ setState: { showSidebar: !state.showSidebar } })
              }
              className="h-14 cursor-pointer rounded md:hidden aspect-square flex items-center justify-center border border-gray-300"
            >
              {icons.threeBars}
            </div>
          </div>
          <div className="md:hidden flex mx-6 justify-between items-center">
            <div className="text-2xl md:text-28 font-medium mb-4 my-6">
              Messages
            </div>
            <div className=" md:flex" onClick={() => setSettingsActive(true)}>
              <div className="h-10 items-center gap-4 px-6 flex border border-gray-300 rounded-md cursor-pointer">
                <div className="text-black text-sm">Settings</div>
                <div className="w-6">{icons.notifications.settings}</div>
              </div>
            </div>
          </div>

          <div className="md:mx-12 md:flex max-h-[82vh] md:mt-0">
            <ChatList />
            <ChatBox />
          </div>
        </div>
        <MessagesSettings
          settingsActive={settingsActive}
          setSettingsActive={setSettingsActive}
        />
        <RightSidebar />
      </div>
    </MessagesState>
  );
};

export default Main;
