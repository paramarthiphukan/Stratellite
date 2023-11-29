import BackButton from "../../Components/BackButton";
import { icons } from "../../utils/icons";
import { useContext } from "react";
import messagesContext from "../../Contexts/Messages/messagesContext";

// cutom button for navigating back to chat list state from chat box
const CustomBackButton = () => {
  const chat = useContext(messagesContext);
  const handleClick = () => {
    const newState = {
      name: null,
      lastMessage: null,
      isSelected: false,
      id: 0,
    };
    chat.update(newState);
  };

  return (
    <>
      {!chat.state.isSelected && <BackButton />}
      {chat.state.isSelected && (
        <div
          className="p-4 px-5 border border-gray-300 rounded-lg md:hidden"
          onClick={handleClick}
        >
          {icons.Projects.back}
        </div>
      )}
    </>
  );
};

export default CustomBackButton;
