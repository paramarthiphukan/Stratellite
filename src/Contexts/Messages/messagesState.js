import MessagesContext from "./messagesContext";
import { useState } from "react";

const MessagesState = (props) => {
  const initialState = {
    name: null,
    lastMessage: null,
    isSelected: false,
    id: 0,
  };
  const [state, setState] = useState(initialState);
  const update = (newUser) => {
    setState(newUser);
  };
  return (
    <MessagesContext.Provider value={{ state, update }}>
      {props.children}
    </MessagesContext.Provider>
  );
};

export default MessagesState;
