interface ReceivedMessageProps {
  text: string;
  time: string;
}

const ReceivedMessageItem: React.FC<ReceivedMessageProps> = ({
  text,
  time,
}) => {
  return (
    <div className="flex items-end my-3 px-3">
      <div className="relative">
        <img
          className="h-9 w-9 rounded-full object-cover mr-2"
          src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
          alt=""
        ></img>
        <div className="h-3 w-3 aspect-square bg-white rounded-full absolute left-6 bottom-[0.1rem]">
          <div className="h-2.125 w-2.125 aspect-square bg-green-400 rounded-full absolute ml-[0.1rem] mt-[0.1rem]"></div>
        </div>
      </div>

      <div className="w-3/5 border rounded-md border-gray-500 p-3">
        <div className="text-xs break-all">{text}</div>
        <div className="text-right text-sky-400 text-[0.6rem]">{time}</div>
      </div>
    </div>
  );
};

export default ReceivedMessageItem;
