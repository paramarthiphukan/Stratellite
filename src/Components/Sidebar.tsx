import { useEffect, useState } from "react";
import sidebarLogo from "../assets/images/sidebar-logo.png";
import sidebarLogoMob from "../assets/images/sidebar-logo-mobile.png";
import { useGlobalContext } from "../Contexts/GlobalContext";
import { icons } from "../utils/icons";
import SidebarItem from "./SidebarItem";
import cx from "classnames";
import { Link, useLocation } from "react-router-dom";
interface SidebarProps {}

const sidebarItems = [
  {
    icon: icons.sidebarIcons.dashboard,
    text: "Dashboard",
    link: "/",
    badgeValue: null,
    id: 1,
  },
  {
    icon: icons.sidebarIcons.project,
    text: "Project",
    link: "/projects",
    badgeValue: null,
    id: 2,
  },
  {
    icon: icons.sidebarIcons.calendar,
    text: "Calendar",
    link: "/calender",
    badgeValue: null,
    id: 3,
  },
  {
    icon: icons.sidebarIcons.messages,
    text: "Messages",
    link: "/messages",
    badgeValue: 5,
    id: 4,
  },
  {
    icon: icons.sidebarIcons.notifications,
    text: "Notifications",
    link: "/notifications",
    badgeValue: 5,
    id: 5,
  },
  {
    icon: icons.sidebarIcons.contacts,
    text: "Contact",
    link: "/contact",
    badgeValue: null,
    id: 6,
  },
  {
    icon: icons.sidebarIcons.transactions,
    text: "Transactions",
    link: "/transactions",
    badgeValue: null,
    id: 7,
  },
];

const sidebarItems2 = [
  {
    icon: icons.sidebarIcons.promotions,
    text: "Promotions",
    link: "/promotions",
    badgeValue: null,
    id: 8,
  },
];
const sidebarItems3 = [
  {
    icon: icons.sidebarIcons.settings,
    text: "Settings",
    link: "/settings ",
    badgeValue: null,
    id: 9,
  },
];
const Sidebar: React.FC<SidebarProps> = () => {
  const [state, dispatch] = useGlobalContext();
  const [selectedItem, setSelectedItem] = useState(1);

  const location = useLocation();
  useEffect(() => {
    sidebarItems.forEach((item) => {
      if (item.link === location.pathname) {
        setSelectedItem(item.id);
      }
    });
    sidebarItems2.forEach((item) => {
      if (item.link === location.pathname) {
        setSelectedItem(item.id);
      }
    });
    sidebarItems3.forEach((item) => {
      if (item.link === location.pathname) {
        setSelectedItem(item.id);
      }
    });
  }, [location]);

  return (
    <div
      className={cx(
            "fixed  transition-all flex  ease-in-out delay-150 w-9/12 overflow-x-hidden shadow-[0_4px_60px_rgba(0,0,0,0.25)] md:shadow-none right-0 md:static md:flex bg-white z-10 sidebar flex-col h-full md:w-full md:bg-gray-50 border-r border-sidebarBorder overflow-auto",
            { "w-0": !state.showSidebar }
      )}
    >
      <div className="bg-white p-5 flex items-center gap-3">
        <div
          onClick={() => dispatch({ setState: { showSidebar: false } })}
          className="flex border border-gray-300 cursor-pointer rounded md:hidden h-11 w-11 items-center justify-center"
        >
          {icons.close}
        </div>
        <img className="bg-white hidden md:block w-64" src={sidebarLogo}></img>
        <img className="bg-white md:hidden w-32" src={sidebarLogoMob}></img>
      </div>
      <div className="flex bg-inherit flex-col pt-10 px-5 md:px-0">
        {sidebarItems.map((x) => (
          <Link to={x.link}>
            <SidebarItem
              id={x.id}
              text={x.text}
              icon={x.icon}
              link={x.link}
              selectedItem={selectedItem}
              badgeValue={x.badgeValue}
            ></SidebarItem>
          </Link>
        ))}
      </div>
      <div className="text-sm font-medium my-4 mt-7 ml-12 ">Promotions</div>
      <div className="flex flex-col px-5 md:px-0">
        {sidebarItems2.map((x) => (
          <Link to={x.link}>
            <SidebarItem
              id={x.id}
              text={x.text}
              icon={x.icon}
              link={x.link}
              selectedItem={selectedItem}
              badgeValue={x.badgeValue}
            ></SidebarItem>
          </Link>
        ))}
      </div>
      <div className="md:hidden text-sm font-medium my-4 mt-7 ml-12 ">
        Settings
      </div>
      <div className="flex flex-col px-5 md:px-0 md:absolute md:bottom-0">
        {sidebarItems3.map((x) => (
          <Link to={x.link}>
            <SidebarItem
              id={x.id}
              text={x.text}
              icon={x.icon}
              link={x.link}
              selectedItem={selectedItem}
              badgeValue={x.badgeValue}
            ></SidebarItem>
          </Link>
        ))}
      </div>

      <div className="items-end flex-grow flex md:hidden">
        <div className="flex w-full h-32.5 items-center mx-6  border-t border-gray-500">
          <img
            className="h-16 w-16 rounded-full object-cover mr-5"
            src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
          ></img>
          <div className="flex flex-col justify-between">
            <div className="font-medium text-xl md:text-1.5xl mb-2">
              Oliver Smith
            </div>
            <div className="text-xssm">Vendor</div>
          </div>
          <div className="ml-12">{icons.arrowRight}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
