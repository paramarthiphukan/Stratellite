import { useState } from "react";
import { icons } from "../utils/icons";
import AddedPeopleItem from "./AddedPeopleItem";

interface AddPeopleModalProps {
  setActive: any;
}

const AddPeopleModal: React.FC<AddPeopleModalProps> = ({ setActive }) => {
  const handleCancel = () => {
    setActive(false);
  };

  const [input, setInput] = useState("");
  const [addedPeopleList, setAddedPeopleList] = useState<any[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setAddedPeopleList([...addedPeopleList, input]);
    setInput("");
  };
  return (
    <div
      className={
        "absolute left-0 bottom-0 w-screen h-screen bg-gray-700 z-10 flex justify-center items-center"
      }
    >
      <div className="bg-white w-11/12 md:w-1/3 md:max-h-[40%] flex flex-col justify-center p-8 py-4">
        <div className="flex justify-between items-center border-b border-gray-500 pb-3">
          <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
            Add People
          </div>
          <span
            className="border border-gray-500 p-2 rounded cursor-pointer"
            onClick={handleCancel}
          >
            {icons.Projects.crosBlack}
          </span>
        </div>

        <form
          className="mt-4 flex justify-between items-center pb-3 border-b border-gray-500"
          onSubmit={handleSubmit}
        >
          <div className="border border-slate-300 flex items-center rounded w-2/3">
            <input
              type="email"
              className="quoteprice outline-none rounded p-4 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-full"
              placeholder="Enter email address"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <button className="bg-sky-400 text-white rounded p-4 px-6 w-36 flex justify-center">
            Add
          </button>
        </form>

        {/* list of people added */}
        <div className="py-3 max-h-[40%] overflow-y-auto scrollbar-hide">
          {addedPeopleList.map((person) => {
            return (
              <AddedPeopleItem
                name={person}
                setList={setAddedPeopleList}
                list={addedPeopleList}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AddPeopleModal;
