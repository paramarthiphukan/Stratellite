import { useContext, useState } from "react";
import StrataliteL from "../../assets/images/stratalite_large.png";
import StrataliteS from "../../assets/images/sidebar-logo.png";
import { graphics } from "../../utils/graphics";
import { icons } from "../../utils/icons";
import Login from "./sections/Login";
import PasswordReset from "./sections/PasswordReset";
import AuthPageState from "../../Contexts/Auth/authPageState";
import authPageContext from "../../Contexts/Auth/authPageContext";
import Signup from "./sections/Signup";
import EmailVerification from "./sections/EmailVerification";
import NumberVerification from "./sections/NumberVerification";

const Main = () => {
  const page = useContext(authPageContext);

  const [pageState, setPageState] = useState(0);
  const stateArray = [
    <Login pageState={pageState} setPageState={setPageState} />,
    <PasswordReset pageState={pageState} setPageState={setPageState} />,
    <Signup pageState={pageState} setPageState={setPageState} />,
    <EmailVerification pageState={pageState} setPageState={setPageState} />,
    <NumberVerification pageState={pageState} setPageState={setPageState} />,
  ];

  return (
    <AuthPageState>
      <div className="flex h-screen w-screen relative">
        <div className="absolute w-[40vw] right-[-3vw] bottom-0 z-[1] text-gray-600">
          {graphics.Auth.background}
        </div>
        <div className="absolute w-[75vw] right-[12vw] bottom-0 z-[2] text-gray-600">
          {graphics.Auth.background}
        </div>
        <div className="absolute w-[95vw] right-[50vw] bottom-0 z-[-2] text-gray-600">
          {graphics.Auth.background}
        </div>

        <div className="hidden w-[30%] bg-[#192434] md:flex items-center justify-center absolute z-[-3] h-full">
          <div className="w-80 flex flex-col items-center justify-center">
            <img src={StrataliteL} className="w-40" />
            <div className="text-white text-28 my-6 text-center tracking-wider">
              <span className="font-bold">Strata</span>
              <span className="font-light">lite</span>
            </div>
            <div className="text-center text-slate-300 font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              sed esse vitae in, non unde odio explicabo iste placeat dolore
              architecto laudantium doloribus fugiat quas, fugit est, ratione
              molestias ullam.
            </div>

            <div className="text-white absolute bottom-0 left-0 m-12">
              © 2022 Stratalite
            </div>
          </div>
        </div>
        <div className="w-full md:w-[70%] h-full my-auto absolute md:left-[30%] py-40 bg-white">
          <div className="absolute md:hidden top-0 left-0">
            <img src={StrataliteS} className="w-32" />
          </div>
          <div className="absolute top-0 right-0 m-8 font-normal flex items-center justify-between">
            English(UK)
            <span className="ml-3">{icons.Auth.dropdown}</span>
          </div>
          {stateArray[pageState]}
          <div className="absolute bottom-0 right-0 m-8 flex items-center font-normal">
            <div>Legal</div>
            <div className="ml-6">Privacy</div>
          </div>
        </div>
      </div>
    </AuthPageState>
  );
};

export default Main;
