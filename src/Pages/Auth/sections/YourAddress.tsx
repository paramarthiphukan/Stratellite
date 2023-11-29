import React, { useState } from "react";
import StandardInputField from "../../../Components/StandardInputField";
import { icons } from "../../../utils/icons";

interface YourAddressProps {
  stage: number;
  setStage: any;
}

const YourAddress: React.FC<YourAddressProps> = ({ stage, setStage }) => {
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setStage(2);
  };
  return (
    <form className="absolute z-20" onSubmit={handleSubmit}>
      <StandardInputField
        field={address}
        setField={setAddress}
        placeholder={"Address"}
        type="text"
      />
      <div className="border border-slate-300 flex items-center my-3 mx-auto w-[90vw] md:w-[35vw] md:mx-0 bg-white">
        <input
          type="text"
          className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-full"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <StandardInputField
        field={province}
        setField={setProvince}
        placeholder={"Province Name"}
        type="text"
      />
      <StandardInputField
        field={postal}
        setField={setPostal}
        placeholder={"Postal Code"}
        type="text"
      />

      <div className="flex items-center justify-between text-sm">
        <button className="bg-sky-400 text-white p-3 w-28 text-center rounded">
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

export default YourAddress;
