import React, { useState } from "react";

interface EmailVerificationProps {
  pageState: number;
  setPageState: any;
}

const EmailVerification: React.FC<EmailVerificationProps> = ({
  pageState,
  setPageState,
}) => {
  const [otp, setotp] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setotp("");

    setPageState(4);
  };
  return (
    <div className="md:mx-20 px-6 absolute z-[5] py-10">
      <div className="font-semibold text-28 my-6">
        Firstly Verify your email
      </div>
      <div className="font-semibold text-gray-200 my-6 text-sm w-2/3">
        Hi name, your verification code has been sent to{" "}
        <span className="text-sky-400">username@gmail.com</span>, please enter
        your verification code below
      </div>
      <form onSubmit={handleSubmit}>
        <div className="border border-slate-300 flex items-center my-3 mx-auto w-[90vw] md:w-[35vw] md:mx-0 bg-white">
          <input
            type="text"
            className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
            placeholder="OTP Code"
            value={otp}
            onChange={(e) => setotp(e.target.value)}
          />
        </div>

        <div className="my-6 flex items-center text-sm">
          <button className="bg-sky-400 rounded border border-sky-400 text-white p-3 w-28 flex justify-center mr-4">
            Verify Email
          </button>
          <div className="rounded border border-sky-400 font-semibold p-3 w-44 flex justify-center bg-white cursor-pointer">
            Wrong Email?
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailVerification;
