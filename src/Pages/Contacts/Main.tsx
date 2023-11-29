import { icons } from "../../utils/icons";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import BackButton from "../../Components/BackButton";
import ContactCard from "../../Components/ContactCard";
import { contactList } from "../../data/contact";

const Main = () => {
  const [state, dispatch] = useGlobalContext();
  return (
    <div className="project overflow-y-auto overflow-x-hidden mx-auto">
      <div className="flex flex-col overflow-x-hidden w-full">
        <div className="flex justify-between gap-4 mt-6 md:mt-0 md:min-h-[8.5rem] items-center mx-6 md:mx-12">
          <BackButton />
          <div className="h-4 md:h-6 cursor-pointer hover:text-sky-600">
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
          <div className="hidden md:flex w-1/3 h-32.5 items-center p-9 ml-5 ">
            <img
              className="h-16 w-16 rounded-full object-cover mr-5"
              src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
              alt=""
            ></img>
            <div className="flex flex-col justify-between">
              <div className="font-medium text-1.5xl mb-2">Oliver Smith</div>
              <div className="text-xssm">Vendor</div>
            </div>
            <div className="ml-12">{icons.arrowRight}</div>
          </div>
        </div>
        <div className="flex items-center justify-between mx-6 md:mx-12">
          <div>
            <div className="text-2xl md:text-28 font-medium mb-4 my-6">
              Contacts({contactList.length})
            </div>
            <div className="hidden md:block text-base md:text-lg text-gray-600 mb-6">
              Your Added Contacts will be displayed here
            </div>
          </div>
          <div className={`hidden md:flex gap-4`}>
            <div className="h-10 items-center gap-3 px-6 flex border border-gray-300 rounded-md cursor-pointer">
              <div className="text-black text-sm">Filter</div>
              {icons.filter}
            </div>
            <div className="h-10 w-10 justify-center items-center flex border border-gray-300 rounded-md cursor-pointer">
              {icons.threeDots}
            </div>
          </div>
        </div>
      </div>

      <div className="my-6 mb-5 ml-5 md:mx-12 h-fit">
        {contactList.map((contact) => {
          return (
            <ContactCard
              contactName={contact.contactName}
              companyName={contact.companyName}
              email={contact.email}
              phoneNo={contact.phoneNo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
