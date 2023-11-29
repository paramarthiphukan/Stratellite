import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const NumberVerification = ({ pageState, setPageState }) => {
  const [otp, setotp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setotp("");
    navigate("/login/onboarding");
  };

  const Ref = useRef(null);

  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("00:00:60");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 60);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };
  return (
    <div className="md:mx-20 px-6 absolute z-[5] py-10">
      <div className="font-semibold text-28 my-6">OTP Verification</div>
      <div className="font-semibold text-gray-200 my-6 text-sm w-2/3">
        Enter the verification code we just sent to your phone number +91
        4342411424.
        <span className="text-red-400"> Wrong number?</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="border border-slate-300 flex items-center my-3 mx-auto w-[90vw] md:w-[35vw] md:mx-0 bg-white">
          <input
            type="text"
            className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
            placeholder="OTP Code"
            value={otp}
            onChange={(e) => setotp(e.target.value)}
            required
          />
        </div>

        <div className="my-6 flex items-center text-sm">
          <button className="bg-sky-400 rounded border border-sky-400 text-white p-3 w-28 flex justify-center mr-4">
            Verify Email
          </button>
          <div className="rounded border border-sky-400 font-semibold p-3 w-44 flex justify-center bg-white cursor-pointer">
            Resend OTP ( {timer.slice(6)} sec )
          </div>
        </div>
      </form>
    </div>
  );
};

export default NumberVerification;
