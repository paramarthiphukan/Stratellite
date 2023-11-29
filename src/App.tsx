import "./App.css";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Notifications from "./Pages/Notifications/Main";
import Calender from "./Pages/Calender/Main";
import Contacts from "./Pages/Contacts/Main";
import Messages from "./Pages/Messages/Main";
import Transaction from "./Pages/Transaction/Main";
import ProjectsLandingPage from "./Pages/Projects/LandingPages/NewProjects";
import ActiveProjectsLandingPage from "./Pages/Projects/LandingPages/ActiveProjects";
import InProgressProjects from "./Pages/Projects/LandingPages/InProgressProjects";
import { Routes, Route, useLocation } from "react-router-dom";
import CompletedProjects from "./Pages/Projects/LandingPages/Completed";
import RejectedProjects from "./Pages/Projects/LandingPages/Rejected";
import { useGlobalContext } from "./Contexts/GlobalContext";
import Login from "./Pages/Auth/Main";
import { useEffect } from "react";
import Onboarding from "./Pages/Auth/Onboarding";

function App() {
  const [state, dispatch] = useGlobalContext();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") {
      dispatch({ setState: { showSidebar: false } });
    }
  }, [location]);

  return (
    <>
        {location.pathname !== "/login" &&
          location.pathname !== "/login/onboarding" && <Sidebar />}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/login/onboarding" element={<Onboarding />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/notifications" element={<Notifications />}></Route>
          <Route path="/calender" element={<Calender />}></Route>
          <Route path="/contact" element={<Contacts />}></Route>
          <Route path="/messages" element={<Messages />}></Route>
          <Route path="/transactions" element={<Transaction />}></Route>
          <Route
            path="/projects/new-projects"
            element={<ProjectsLandingPage status="new" />}
          ></Route>
          <Route
            path="/projects/active/approved"
            element={<ActiveProjectsLandingPage status="approved" />}
          ></Route>
          <Route
            path="/projects/active/under-review"
            element={<ActiveProjectsLandingPage status="under-review" />}
          ></Route>
          <Route
            path="/projects/active/in-progress"
            element={<ActiveProjectsLandingPage status="in-progress" />}
          ></Route>
          <Route
            path="/projects/active/rejected"
            element={<ActiveProjectsLandingPage status="rejected" />}
          ></Route>
          <Route
            path="/projects/in-progress"
            element={<InProgressProjects />}
          ></Route>
          <Route
            path="/projects/completed"
            element={<CompletedProjects />}
          ></Route>
          <Route
            path="/projects/rejected"
            element={<RejectedProjects />}
          ></Route>
          {/* <Home></Home> */}
          {/* <Projects></Projects> */}
        </Routes>
    </>
  );
}

export default App;
