import React, { useState } from "react";
import PhoneNumberField from "../../../Components/PhoneNumberField";
import StandardInputField from "../../../Components/StandardInputField";
import { icons } from "../../../utils/icons";

const CompanyInfo = () => {
  const [companyName, setCompanyName] = useState("");
  const [businessNo, setBusinessNo] = useState("");
  const [tradesProvided, setTradesProvided] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [about, setAbout] = useState("");
  const [postal, setPostal] = useState("");
  const [website, setWebsite] = useState("");
  const [noOfEmployees, setNoOfEmployees] = useState("");
  const [falink, setFalink] = useState("");
  const [linkdlink, setLinkdlink] = useState("");
  const [instalink, setInstalink] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form className="absolute z-20" onSubmit={handleSubmit}>
      <StandardInputField
        field={companyName}
        setField={setCompanyName}
        placeholder={"Company Name"}
        type="text"
      />
      <StandardInputField
        field={businessNo}
        setField={setBusinessNo}
        placeholder={"Business No"}
        type="text"
      />
      <div className="border border-slate-300 flex items-center my-3 mx-auto w-[90vw] md:w-[35vw] md:mx-0 bg-white">
        <input
          type="text"
          className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
          placeholder="Country"
          value={tradesProvided}
          onChange={(e) => setTradesProvided(e.target.value)}
        />
      </div>

      <PhoneNumberField val={contactNo} setValue={setContactNo} />
      <StandardInputField
        field={email}
        setField={setEmail}
        placeholder={"Email"}
        type="email"
      />
      <StandardInputField
        field={address1}
        setField={setAddress1}
        placeholder={"Company Address Line 1"}
        type="text"
      />
      <StandardInputField
        field={address2}
        setField={setAddress2}
        placeholder={"Company Address Line 2"}
        type="text"
      />
      <StandardInputField
        field={city}
        setField={setCity}
        placeholder={"City Name"}
        type="text"
      />
      <div className="border border-slate-300 flex items-center my-3 mx-auto w-[90vw] md:w-[35vw] md:mx-0 bg-white">
        <input
          type="text"
          className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
          placeholder="Province"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
        />
      </div>
      <div className="my-3 mx-auto w-[90vw] md:w-[35vw] md:mx-0 bg-white h-40">
        <textarea
          name="about"
          cols={30}
          rows={8}
          className="border border-slate-300 focus:outline-none rounded p-5 text-sm  placeholder-gray-700 text-gray-700 w-full h-full"
          placeholder="About Your Company"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
      </div>
      <StandardInputField
        field={postal}
        setField={setPostal}
        placeholder={"Postal Code"}
        type="text"
      />
      <StandardInputField
        field={website}
        setField={setWebsite}
        placeholder={"Website Link"}
        type="text"
      />
      <div className="border border-slate-300 flex items-center my-3 mx-auto w-[90vw] md:w-[35vw] md:mx-0 bg-white">
        <input
          type="text"
          className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
          placeholder="Number of Employees"
          value={noOfEmployees}
          onChange={(e) => setNoOfEmployees(e.target.value)}
        />
      </div>

      <div className="border border-slate-300 flex items-center my-3 mx-auto w-[90vw] md:w-[35vw] md:mx-0 bg-white">
        <label htmlFor="email" className="w-10 p-3 text-gray-100">
          {icons.Auth.faceb}
        </label>
        <input
          type="url"
          className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
          placeholder="Link to your Facebook"
          value={falink}
          onChange={(e) => setFalink(e.target.value)}
        />
      </div>

      <div className="border border-slate-300 flex items-center my-3 mx-auto w-[90vw] md:w-[35vw] md:mx-0 bg-white">
        <label htmlFor="email" className="w-10 p-3 text-gray-100">
          {icons.Auth.linkd}
        </label>
        <input
          type="url"
          className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
          placeholder="Link to your LinkedIn"
          value={linkdlink}
          onChange={(e) => setLinkdlink(e.target.value)}
        />
      </div>

      <div className="border border-slate-300 flex items-center my-3 mx-auto w-[90vw] md:w-[35vw] md:mx-0 bg-white">
        <label htmlFor="email" className="w-10 p-3 text-gray-100">
          {icons.Auth.insta}
        </label>
        <input
          type="url"
          className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
          placeholder="Link to your Instagram"
          value={instalink}
          onChange={(e) => setInstalink(e.target.value)}
        />
      </div>

      <div className="my-12 flex items-center justify-between text-sm">
        <button className="bg-sky-400 text-white p-3 w-28 text-center rounded">
          Save
        </button>
        <div className="text-sky-400 flex items-center cursor-pointer">
          <div className="w-40">Skip to Dashboard</div>
          <div>{icons.Auth.arrowRight}</div>
        </div>
      </div>
    </form>
  );
};

export default CompanyInfo;
