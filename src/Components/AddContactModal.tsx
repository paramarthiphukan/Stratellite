import React, { useState } from "react";
import { icons } from "../utils/icons";
import cx from "classnames";

interface AddContactModalProps {
  setActive: any;
}

const data = [
  {
    name: "Ashish kumar",
    email: "ashishkumar12@gmail.com",
  },
  {
    name: "Ashish kumar",
    email: "ashishkumar006@gmail.com",
  },
];

const AddContactModal: React.FC<AddContactModalProps> = ({ setActive }) => {
  const [input, setInput] = useState("");
  const [filteredContacts, setFilteredContacts] = useState<any>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  const handleCancel = () => {
    setActive(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!contactSelected) return;

    setInput("");
    setContactSelected(false);
    setShowSuggestions(true);
  };

  const handleChange = (e: any) => {
    setInput(e.target.value);
    setShowSuggestions(true);
    setContactSelected(false);

    const arr = data.filter((ele) => {
      return (
        ele.name.toLowerCase().includes(input) ||
        ele.email.toLowerCase().includes(input)
      );
    });

    setFilteredContacts(arr);
  };

  const handleSelect = (item: any) => {
    setInput(item.email);
    setShowSuggestions(false);
    setContactSelected(true);
  };
  return (
    <div
      className={
        "absolute left-0 bottom-0 w-screen h-screen bg-gray-700 z-10 flex justify-center items-center"
      }
    >
      <div className="bg-white w-11/12 md:w-1/3 md:max-h-[20%] flex flex-col justify-center p-8 py-4 relative">
        <div className="flex justify-between items-center border-b border-gray-500 pb-3">
          <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-2">
            Add Contact
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
              onChange={handleChange}
            />
          </div>

          <button
            className={cx(
              "text-white rounded p-4 px-6 w-36 flex justify-center",
              {
                "bg-sky-400 cursor-pointer": contactSelected,
                "bg-gray-500 cursor-not-allowed": !contactSelected,
              }
            )}
          >
            Add
          </button>
        </form>

        <div
          className={cx(
            "absolute top-[90%] right-[34%] bg-white md:w-[60%] max-h-[12rem] overflow-y-auto border border-gray-500 rounded scrollbar-hide p-2",
            {
              hidden: input.length === 0 || !showSuggestions,
            }
          )}
        >
          {filteredContacts.length === 0 && (
            <div className="text-red-400">Email not found</div>
          )}
          {filteredContacts.length > 0 && (
            <div className="text-sm">Suggestions</div>
          )}

          {filteredContacts.map((item: any) => {
            return (
              <div
                className="p-2 rounded border border-gray-500 my-2 flex items-center justify-between cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                <img
                  src="https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"
                  alt=""
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex flex-col w-4/5">
                  <div className="text-sm font-medium mb-2">{item.name}</div>
                  <div className="text-xs">{item.email}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AddContactModal;
