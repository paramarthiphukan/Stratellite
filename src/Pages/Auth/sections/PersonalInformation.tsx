import React, { useState } from "react";
import { icons } from "../../../utils/icons";

interface PersonalInformationProps {
  stage: number;
  setStage: any;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({
  stage,
  setStage,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState<any>(null);
  const [gender, setGender] = useState("");

  const [dateOnFocus, setDateOnFocus] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setStage(1);
  };
  return (
    <form className="absolute z-20" onSubmit={handleSubmit}>
      <div className="border border-slate-300 flex items-center my-3 mx-auto w-[90vw] md:w-[35vw] md:mx-0 bg-white">
        <label htmlFor="name" className="w-10 p-3 text-gray-100">
          {icons.Auth.name}
        </label>
        <input
          type="text"
          className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="border border-slate-300 flex items-center my-3 mx-auto w-[90vw] md:w-[35vw] md:mx-0 bg-white">
        <label htmlFor="email" className="w-10 p-3 text-gray-100">
          {icons.Auth.email}
        </label>
        <input
          type="email"
          className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="border border-slate-300 h-16 flex items-center my-3 mx-auto w-[90vw] md:w-[35vw] md:mx-0 bg-white">
        <input
          type={dateOnFocus ? "date" : "text"}
          className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-full"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          onFocus={() => setDateOnFocus(true)}
          onBlur={() => setDateOnFocus(false)}
        />
      </div>
      <div className="border border-slate-300 flex items-center my-3 mx-auto w-[90vw] md:w-[35vw] md:mx-0 bg-white">
        <input
          type="text"
          className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <button className="bg-sky-400 text-white p-3 w-28 text-center rounded ">
          Continue
        </button>
        <div className="text-sky-400 flex items-center cursor-pointer">
          <div className="w-40">Skip to Dashboard</div>
          <div>{icons.Auth.arrowRight}</div>
        </div>
      </div>
    </form>
  );
};

export default PersonalInformation;
