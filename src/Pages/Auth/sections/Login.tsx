import React, { useContext, useState } from "react";
import authPageContext from "../../../Contexts/Auth/authPageContext";
import { icons } from "../../../utils/icons";

interface LoginProps {
  pageState: number;
  setPageState: any;
}

const Login: React.FC<LoginProps> = ({ pageState, setPageState }) => {
  const page = useContext(authPageContext);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };

  const handleClick = () => {
    setPageState(1);
  };
  return (
    <div className="md:mx-20 px-6 absolute z-[5]">
      <div className="font-semibold text-28 my-6">Log into Stratalite</div>
      <div className="font-semibold text-gray-200 my-6 text-sm">
        Enter your details below
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

        <div
          className="my-6 font-medium text-sky-400 text-sm cursor-pointer"
          onClick={handleClick}
        >
          Forgot your password?
        </div>

        <div className="my-6 flex items-center">
          <input type="checkbox" name="remember-me" />
          <div className="text-gray-600 mx-4 text-sm">Remember me</div>
        </div>

        <div className="my-6 flex items-center text-sm">
          <button className="bg-sky-400 rounded border border-sky-400 text-white p-3 w-28 flex justify-center mr-4">
            Log In
          </button>
          <div
            className="rounded border border-sky-400 text-sky-400 p-3 w-44 flex justify-center bg-white cursor-pointer"
            onClick={() => setPageState(2)}
          >
            Create an account
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
