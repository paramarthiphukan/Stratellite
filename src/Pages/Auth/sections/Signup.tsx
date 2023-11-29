import React, { useState } from "react";
import cx from "classnames";
import { icons } from "../../../utils/icons";

interface SignupProps {
  pageState: number;
  setPageState: any;
}

const Signup: React.FC<SignupProps> = ({ pageState, setPageState }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Vendor");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("http://localhost:1337/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        role,
      }),
    });

    const data = await response.json();

    console.log(data);

    setEmail("");
    setPassword("");
    setPageState(3);
  };

  return (
    <div className="md:mx-20 px-6 absolute z-[5]">
      <div className="font-semibold text-28 my-6">Create an account</div>
      <div className="font-semibold text-gray-200 my-6 text-sm">
        Enter your login details below
      </div>
      <form onSubmit={handleSubmit}>
        <div className="border border-slate-300 flex items-center my-3 mx-auto w-[90vw] md:w-[35vw] md:mx-0 bg-white">
          <label htmlFor="email" className="w-10 p-3 text-gray-100">
            {icons.Auth.email}
          </label>
          <input
            type="email"
            className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="border border-slate-300 flex items-center my-3 mx-auto w-[90vw] md:w-[35vw] md:mx-0 bg-white">
          <label htmlFor="password" className="w-10 p-3 text-gray-100">
            {icons.Auth.password}
          </label>
          <input
            type={passwordVisibility ? "text" : "password"}
            className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-[80%]"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label
            htmlFor="hidden"
            className="w-10 p-3 text-gray-100 cursor-pointer"
            onClick={() => setPasswordVisibility(!passwordVisibility)}
          >
            {icons.Auth.hide}
          </label>
        </div>

        <div className="my-6">
          <div className="text-gray-200 font-medium">Choose your role</div>

          <div className="flex items-center my-3">
            <div
              className={cx(
                "border border-gray-500 rounded p-3 w-24 flex justify-center mr-3 cursor-pointer",
                {
                  "border-sky-400 bg-sky-400 text-white": role === "Manager",
                }
              )}
              onClick={() => setRole("Manager")}
            >
              Manager
            </div>
            <div
              className={cx(
                "border border-gray-500 rounded p-3 w-24 flex justify-center mr-3 cursor-pointer",
                {
                  "border-sky-400 bg-sky-400 text-white": role === "Vendor",
                }
              )}
              onClick={() => setRole("Vendor")}
            >
              Vendor
            </div>
          </div>
        </div>

        <div className="my-6 flex items-center mb-3">
          <input type="checkbox" name="remember-me" />
          <div className="text-gray-600 mx-4 text-sm">Remember me</div>
        </div>

        <div className="my-6 flex items-center mt-3">
          <input type="checkbox" name="privacy-policy" />
          <div className="text-gray-600 mx-4 text-sm">
            I accept the{" "}
            <span className="text-sky-400 font-medium">privacy policy</span>
          </div>
        </div>

        <div className="my-6 flex items-center text-sm">
          <button className="bg-sky-400 rounded border border-sky-400 text-white p-3 w-44 flex justify-center mr-4">
            Create an account
          </button>
          <div
            className="rounded border border-sky-400 text-sky-400 p-3 w-28 flex justify-center bg-white cursor-pointer"
            onClick={() => setPageState(0)}
          >
            Log in
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
