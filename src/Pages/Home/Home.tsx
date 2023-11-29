import { icons } from "../../utils/icons";
import OverviewCard, { OverviewCardProps } from "./OverviewCard";
import backgroundImage1 from "../../assets/home/Vector 1-2.png";
import backgroundImage2 from "../../assets/home/Vector 1.png";
import backgroundImage3 from "../../assets/home/Vector 1-1.png";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import InvoiceCard, { InvoiceCardProps } from "./InvoiceCard";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import RightSidebar from "../../Components/RightSidebar";

interface HomeProps {}
const overviewCards: OverviewCardProps[] = [
  {
    color: "rgba(122, 159, 255, 1)",
    description: "Currently, the projects is in progress.",
    value: 56,
    title: "Live projects",
    icon: icons.overviewCard.live,
    image: backgroundImage1,
    showViewAll: true,
    shadowColor: "rgba(2, 140, 213, 0.15)",
    aspectRatio: "397 / 240",
  },
  {
    color: "rgba(122, 209, 255, 1)",
    description: "Projects in progress",
    value: 124,
    title: "In Progress",
    icon: icons.overviewCard.isProgress,
    image: backgroundImage2,
    shadowColor: "rgba(101, 202, 255, 0.2)",
    aspectRatio: "280 / 240",
  },
  {
    color: "rgba(185, 122, 255, 1)",
    description: "Completed projects",
    value: 24,
    title: "Completed",
    icon: icons.overviewCard.completed,
    image: backgroundImage3,
    shadowColor: "rgba(173, 101, 255, 0.3)",
    aspectRatio: "280 / 240",
  },
];

const projectCards: ProjectCardProps[] = [
  {
    deadline: "25 may",
    title: "Construction Project",
    subtitle: "Property name",
    minPrice: 100,
    maxPrice: 800,
    progress: 75,
    vendorName: "Vendor's name",
    img: "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
  },
  {
    deadline: "25 may",
    title: "Construction Project",
    subtitle: "Property name",
    minPrice: 100,
    maxPrice: 800,
    progress: 75,
    vendorName: "Vendor's name",
    img: "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
  },
  {
    deadline: "25 may",
    title: "Construction Project",
    subtitle: "Property name",
    minPrice: 100,
    maxPrice: 800,
    progress: 75,
    vendorName: "Vendor's name",
    img: "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
  },
  {
    deadline: "25 may",
    title: "Construction Project",
    subtitle: "Property name",
    minPrice: 100,
    maxPrice: 800,
    progress: 75,
    vendorName: "Vendor's name",
    img: "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
  },
  {
    deadline: "25 may",
    title: "Construction Project",
    subtitle: "Property name",
    minPrice: 100,
    maxPrice: 800,
    progress: 75,
    vendorName: "Vendor's name",
    img: "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
  },
];

const invoiceCards: InvoiceCardProps[] = [
  {
    amount: 137,
    status: "approved",
    userName: "Erin Gonzales",
    invoiceNo: "5331",
    date: "25 May",
    img: "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
  },
  {
    amount: 137,
    status: "approved",
    userName: "Erin Gonzales",
    invoiceNo: "5331",
    date: "25 May",
    img: "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
  },
  {
    amount: 137,
    status: "approved",
    userName: "Erin Gonzales",
    invoiceNo: "5331",
    date: "25 May",
    img: "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
  },
];
const Home: React.FC<HomeProps> = () => {
  const [state, dispatch] = useGlobalContext();
  return (
    <div className="home">
      <div className="flex flex-col overflow-auto">
        <div className="flex gap-4 mt-6 md:mt-0 md:min-h-[6rem] mb-8 w-100 items-center md:mx-0 mx-5">
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
        <div className="d-flex flex-col md:px-15 md:pl-15 pl-5 px-0 ">
          <div className="text-2xl md:text-28 font-medium mb-4">
            Welcome back, Andrew!
          </div>
          <div className="text-base md:text-lg text-gray-600 mb-6">
            Have a look at the Quick Progress Bar.
          </div>
          <div className="grid gap-4 grid-cols-[70%_50%_50%] md:grid-cols-[1.4fr_1fr_1fr] mb-10 overflow-auto md:overflow-visible pb-3">
            {overviewCards.map((x) => (
              <OverviewCard {...x}></OverviewCard>
            ))}{" "}
          </div>
          <div className="flex items-start justify-between w-full mb-6">
            <div>
              <div className="text-28 text-gray-800 font-medium mb-4">
                Current Projects
              </div>
              <div className="text-lg text-gray-600 ">
                Projects that are currently in progress
              </div>
            </div>
            <div className="md:flex gap-4 hidden">
              <div className="font-semibold text-sky-400 cursor-pointer">
                View All
              </div>
            </div>
          </div>
          <div className="auto-cols-80% md:auto-cols-40% grid gap-2.5 grid-flow-col grid-cols overflow-auto pb-4 mb-10">
            {projectCards.map((x) => (
              <ProjectCard {...x}></ProjectCard>
            ))}
          </div>

          <div className="flex items-start justify-between w-full mb-6">
            <div>
              <div className="text-28 text-gray-800 font-medium mb-4">
                Pending Invoice
              </div>
              <div className="text-lg text-gray-600 ">
                Projects that are currently in progress
              </div>
            </div>

            <div className="font-semibold text-sky-400 cursor-pointer">
              View All
            </div>
          </div>
          <div className="grid relative gap-2.5 grid-flow-col overflow-auto pb-4 mb-10">
            {invoiceCards.map((x) => (
              <InvoiceCard {...x}></InvoiceCard>
            ))}
            {/* <div
                  style={{ boxShadow: "0px 10px 60px rgba(0, 0, 0, 0.15)", zIndex: 2 }}
                  className="bg-white rounded-md  h-14 w-14 flex items-center justify-center absolute top-1/2 right-0 -translate-y-1/2"
               ></div> */}
          </div>
        </div>
      </div>
      <RightSidebar></RightSidebar>
    </div>
  );
};

export default Home;
