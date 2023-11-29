import { useState } from "react";
import cx from "classnames";
import StarRating from "../../../Components/StarRating";

const Feedback = () => {
  const [feedback, setFeedback] = useState<any>(null);
  return (
    <div className="flex flex-col w-11/12 md:w-10/12 mt-6 md:mt-0 ml-4 md:ml-12 overflow-y-auto">
      <div className="text-base md:text-1.5xl text-gray-900 font-semibold mb-3">
        Rate Your Experience
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-center md:w-2/5 my-3">
          <div className="text-gray-700 my-3 text-base">Project Scope</div>
          <StarRating />
        </div>
        <div className="flex justify-between items-center md:w-2/5 my-3">
          <div className="text-gray-700 my-3 text-base">Communication</div>
          <StarRating />
        </div>
        <div className="flex justify-between items-center md:w-2/5 my-3">
          <div className="text-gray-700 my-3 text-base">Payment</div>
          <StarRating />
        </div>
        <div className="flex justify-between items-center md:w-2/5 my-3">
          <div className="text-gray-700 my-3 text-base">Time Management</div>
          <StarRating />
        </div>
      </div>

      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        className="border border-slate-300 focus:outline-none rounded my-3 p-5 text-base  placeholder-gray-700 text-gray-700"
        placeholder="Write a feedback......"
      ></textarea>

      <div className="text-gray-700 mt-3 text-base">
        Your Overall Experience
        <div className="my-6 md:my-3">
          <StarRating />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 my-3 md:flex justify-between font-semibold text-base w-100 md:w-1/4">
        <div
          className={cx(
            "p-4 border rounded border-sky-400 cursor-pointer text-center md:w-20",
            {
              "bg-sky-400 text-white": feedback === "Good",
              "text-sky-400": feedback !== "Good",
            }
          )}
          onClick={() => setFeedback("Good")}
        >
          Good
        </div>
        <div
          className={cx(
            "p-4 border rounded border-sky-400 cursor-pointer text-center md:w-28",
            {
              "bg-sky-400 text-white": feedback === "Neutral",
              "text-sky-400": feedback !== "Neutral",
            }
          )}
          onClick={() => setFeedback("Neutral")}
        >
          Neutral
        </div>
        <div
          className={cx(
            "p-4 border rounded border-sky-400 cursor-pointer text-center md:w-20",
            {
              "bg-sky-400 text-white": feedback === "Bad",
              "text-sky-400": feedback !== "Bad",
            }
          )}
          onClick={() => setFeedback("Bad")}
        >
          Bad
        </div>
      </div>

      <div className="p-4 bg-sky-400 text-white text-base rounded text-center md:w-24 my-6 cursor-pointer">
        Submit
      </div>
    </div>
  );
};

export default Feedback;
