import { useEffect, useRef } from "react";
import ReceivedMessageItem from "./ReceivedMessageItem";
import SentMessageItem from "./SentMessageItem";

interface ChatContainerProps {
  messageList: {
    text: string;
    time: string;
    type: string;
  }[];
}

const ChatContainer: React.FC<ChatContainerProps> = ({ messageList }) => {
  const divRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (divRef.current && containerRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messageList]);
  return (
    <div
      className="overflow-y-scroll md:overflow-y-auto scrollbar-hide flex flex-col absolute bottom-20 min-h-[40vh] max-h-[51vh] md:max-h-[62vh]"
      ref={divRef}
    >
      <div
        className="overflow-y-scroll md:overflow-y-auto scrollbar-hide"
        ref={containerRef}
      >
        {messageList.map((item) => {
          return item.type === "sent" ? (
            <SentMessageItem text={item.text} time={item.time} />
          ) : (
            <ReceivedMessageItem text={item.text} time={item.time} />
          );
        })}
      </div>
    </div>
  );
};

export default ChatContainer;
