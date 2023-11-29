import cx from "classnames";

interface DropDownProps {
  list: {
    item: string;
  }[];
  showList: boolean;
  setShowList: any;
}

const ChatDropDown: React.FC<DropDownProps> = ({
  list,
  showList,
  setShowList,
}) => {
  return (
    <div
      className={cx(
        "absolute border border-gray-500 rounded-md z-20 bg-white top-12 left-[50%] shadow-[4px_10px_25px_rgba(0,0,0,0.25)] w-36 flex flex-col p-3 text-black font-medium",
        {
          hidden: !showList,
        }
      )}
      onClick={() => setShowList(false)}
    >
      <div>
        {list.map((listItem, index) => {
          {
            return index < list.length - 1 ? (
              <div className="py-2 border-b border-gray-500 text-xs cursor-pointer">
                {listItem.item}
              </div>
            ) : (
              <div className="pt-2 border-gray-500 text-xs cursor-pointer">
                {listItem.item}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ChatDropDown;
