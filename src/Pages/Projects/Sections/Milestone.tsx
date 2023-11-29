import { useState } from "react";
import cx from "classnames";
import MilestoneItem from "../../../Components/MilestoneItem";
import ModalMilestoneConfirmation from "../../../Components/ModalMilestoneConfirmation";

const Milestone = () => {
  const [milestone, setMilestone] = useState<any[]>([
    "Contract Order Confirmation",
    "Advance Payment",
    "Project Started",
    "Raw Material Arranged",
    "Task A Completed",
    "Task B Completed",
  ]);
  const [message, setMessage] = useState("");
  const [savePrompt, setSavePrompt] = useState(false);
  const [save, setSave] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const temp = message;
    temp.trim();
    if (temp.replace(/\s/g, "").length)
      setMilestone(() => [...milestone, message]);

    setMessage("");
  };

  const handleUpdateSubmit = () => {
    setSubmit(true);
  };
  return (
    <div className="flex flex-col w-11/12 md:w-10/12 mt-6 md:mt-0 ml-4 md:ml-12 overflow-y-auto">
      <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
        Stages of Project
      </div>
      <div className="text-xs md:text-sm text-gray-900 my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quasi
        voluptate, corrupti nisi consectetur blanditiis. Expedita voluptate
        harum quis distinctio numquam, necessitatibus doloribus at soluta quos,
        nulla est obcaecati ex nobis blanditiis velit officiis. Nobis odio rem
        non exercitationem eos.
      </div>

      <div className="flex flex-col mt-3">
        {milestone.map((task: any) => {
          return (
            <MilestoneItem
              message={task}
              milestone={milestone}
              setMilestone={setMilestone}
              save={save}
              submit={submit}
              setSubmit={setSubmit}
            />
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className={cx({ hidden: save })}>
        <div className="flex my-3 justify-between w-100">
          <div className="p-3 rounded w-12 h-12 flex justify-center items-center cursor-pointer text-black border border-slate-300 mr-3 text-1.5xl font-semibold">
            {milestone.length + 1}
          </div>
          <input
            type="text"
            className="quoteprice outline-none rounded p-2 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 flex-grow border border-slate-300"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button className="w-full bg-sky-400 text-white text-center mb-3 py-4 rounded">
          Add New Stage
        </button>
        <div
          className={cx("w-full border  text-center mb-3 py-4 rounded ", {
            "cursor-pointer border-sky-400 text-sky-400": milestone.length > 0,
            "cursor-not-allowed border-gray-500 text-gray-500":
              milestone.length === 0,
          })}
          onClick={() => setSavePrompt(true)}
        >
          Save Milestones
        </div>
      </form>

      <div
        className={cx("flex my-5 justify-between", {
          hidden: !save,
        })}
      >
        <div className="w-3/5 text-gray-600">
          After updating the milestone, cllick the submit button so that the
          manager dashboard can display the changes.
        </div>
        <div
          className={cx(
            "flex justify-center items-center p-3 px-5 bg-sky-400 text-white rounded cursor-pointer",
            {
              "bg-gray-500 text-gray-500 cursor-not-allowed": submit,
            }
          )}
          onClick={handleUpdateSubmit}
        >
          Submit
        </div>
      </div>

      <div>
        <ModalMilestoneConfirmation
          setSavePrompt={setSavePrompt}
          savePrompt={savePrompt}
          setSave={setSave}
        />
      </div>
    </div>
  );
};

export default Milestone;
