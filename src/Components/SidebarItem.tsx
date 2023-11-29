import cx from "classnames";
import { useGlobalContext } from "../Contexts/GlobalContext";
export interface SidebarItemProps {
  id: number;
  text: string;
  icon: JSX.Element;
  badgeValue: any;
  link: string;
  selectedItem: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  text,
  icon,
  badgeValue,
  selectedItem,
  id,
}) => {
  const [state, dispatch] = useGlobalContext();
  return (
    <div
      className={cx(
        "flex py-4 items-center pr-7 md:bg-transparent cursor-pointer rounded-md md:rounded-none",
        {
          "bg-sky-400": id === selectedItem,
        }
      )}
      onClick={() => dispatch({ setState: { showSidebar: false } })}
    >
      <div
        className={cx(
          "invisible md:visible bg-sky-400 w-2.125 mr-5 md:mr-10 rounded-r-md",
          {
            "md:invisible": id !== selectedItem,
          }
        )}
      ></div>
      <div
        className={cx("icon mr-6", {
          "md:text-sky-400": id === selectedItem,
          "text-graymain": id !== selectedItem,
          "text-white": id === selectedItem,
        })}
      >
        {icon}
      </div>
      <div
        className={cx("flex-grow text-lg", {
          "font-medium": id === selectedItem,
          "md:text-sky-400": id === selectedItem,
          "text-graymain": id !== selectedItem,
          "text-white": id === selectedItem,
        })}
      >
        {text}
      </div>
      {badgeValue && (
        <div className="bg-sky-400 text-white text-xs w-8 h-6 flex items-center justify-center rounded-md">
          {badgeValue}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
