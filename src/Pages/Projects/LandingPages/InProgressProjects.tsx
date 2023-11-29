import { icons } from "../../../utils/icons";
import { useEffect, useState } from "react";
import cx from "classnames";
import ProjectInfo from "../Sections/ProjectInfo";
import ManagerInfo from "../Sections/ManagerInfo";
import Milestone from "../Sections/Milestone";
import NewProjects from "../Sections/NewProjects";
import ActiveProjects from "../Sections/ActiveProjects";
import Completed from "../Sections/Completed";
import Rejected from "../Sections/Rejected";
import DisputedProjects from "../Sections/DisputedProjects";
import Feedback from "../Sections/Feedback";
import PhotoGallery from "../Sections/PhotoGallery";
import AriseDisputeModal from "../../../Components/AriseDisputeModal";
import ProjectsMenuBar from "../../../Components/ProjectsMenuBar";
import ProjectsHeader from "../../../Components/ProjectsHeader";
import ProjectsSectionToggler from "../../../Components/ProjectsSectionToggler";
import ProjectsSearchBar from "../../../Components/ProjectsSearchBar";

const toggleOptions = [
  {
    name: "Project Details",
    icon: icons.Projects.info,
    subSectionId: 1,
  },
  {
    name: "Manager Info",
    icon: icons.Projects.manager,
    subSectionId: 2,
  },
  {
    name: "Milestone",
    icon: icons.Projects.milestone,
    subSectionId: 3,
  },
  {
    name: "Feedback",
    icon: icons.Projects.feedback,
    subSectionId: 4,
  },
  {
    name: "Share",
    icon: icons.Projects.share,
    subSectionId: 5,
  },
  {
    name: "Photo Gallery",
    icon: icons.Projects.images,
    subSectionId: 6,
  },
  {
    name: "More",
    icon: icons.Projects.more,
    subSectionId: 7,
  },
];

const InProgressProjects = () => {
  const [section, setSection] = useState(3);
  const [subsection, setSubsection] = useState(1);
  const [more, setMore] = useState(false);
  const [dispute, setDispute] = useState(false);
  const [toggleName, setToggleName] = useState("Project Details");
  useEffect(() => {
    toggleOptions.forEach((option) => {
      if (subsection === option.subSectionId) setToggleName(option.name);
    });
  }, [subsection]);

  return (
    <div className="project overflow-y-auto overflow-x-hidden mx-auto">
      <div className="flex flex-col overflow-x-hidden w-full">
        <ProjectsSearchBar />

        <ProjectsHeader
          subsection={subsection}
          toggleName={toggleName}
          section={section}
        />

        <ProjectsMenuBar
          section={section}
          setSection={setSection}
          subsection={subsection}
        />
      </div>

      {section === 1 && <NewProjects />}
      {section === 2 && <ActiveProjects />}
      {section === 4 && <Completed />}
      {section === 5 && <Rejected />}
      {section === 6 && <DisputedProjects />}

      {/* landing section */}
      <div
        className={cx("flex flex-col-reverse md:flex-row", {
          hidden: section !== 3,
        })}
      >
        {/* main section */}
        {subsection === 1 && <ProjectInfo status={"in-progress"} />}
        {subsection === 2 && <ManagerInfo />}
        {subsection === 3 && <Milestone />}
        {subsection === 4 && <Feedback />}
        {subsection === 6 && <PhotoGallery />}

        <ProjectsSectionToggler
          subsection={subsection}
          setSubsection={setSubsection}
          more={more}
          setMore={setMore}
          setDispute={setDispute}
          toggleOptions={toggleOptions}
        />
      </div>
      <div className={cx({ hidden: !dispute })}>
        <AriseDisputeModal setExpand={setDispute} />
      </div>
    </div>
  );
};

export default InProgressProjects;
