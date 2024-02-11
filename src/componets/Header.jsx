import React, { Fragment } from "react";
import { FLAG, HEROIMG, LOGO, MAP, TOGGLE } from "./images";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <div className="border-b-4 border-slate-950 flex items-center px-[10px] mobileMedium:px-[70px] py-[2px]">
        <div className="w-[65%]">
          <img src={LOGO} alt="kk" className="mobileSmall:h-[50px]" />
        </div>
        <div className="gap-2 flex justify-between items-center w-full">
          <button className="hidden md:flex gap-2 align-middle justify-center rounded-md  border-2 border-sky-500 px-[14px] py-[8px]  border-none bg-[#ECECEC] text-sm">
            Choose your location
            <span>
              <img src={MAP} />
            </span>
          </button>
          <button className="md:hidden flex gap-2 align-middle justify-center rounded-md  border-2 border-sky-500 px-[14px] py-[8px]  border-none bg-[#ECECEC] text-sm">
            Choose location
            <span>
              <img src={MAP} />
            </span>
          </button>

          <div className="p-4 bg-[#ECECEC]">
            <IoMenuSharp />
          </div>

          <nav className="hidden">
            <ul className="flex items-center gap-x-4 ">
              <li className="hover:underline hover:cursor-pointer hover:underline-offset-2">
                About Us
              </li>
              <li className="hover:underline hover:cursor-pointer hover:underline-offset-2">
                Contact
              </li>
              <li className="hover:underline hover:cursor-pointer hover:underline-offset-2">
                Help
              </li>
              <li className="hover:underline hover:cursor-pointer hover:underline-offset-2">
                My Basecamp
              </li>
              <div className="flex align-center gap-x-2">
                <img src={FLAG} />
                <li className="hover:underline hover:cursor-pointer hover:underline-offset-2">
                  ENG
                </li>

                <img src={TOGGLE} />
              </div>
            </ul>
          </nav>
        </div>
      </div>
      {/* <div className="flex justify-between items-center  w-full px-[70px] py-[2px] mt-3">
        <nav>
          <ul className="flex items-center gap-x-3 font-bold text-xs">
            <li className="">STUDENT</li>
            <li>STUDENT</li>
            <li>STUDENT</li>
            <div className="flex gap-x-2">
              <li>STUDENT</li> <img className="w-4" src={TOGGLE} />
            </div>
          </ul>
        </nav>
        <button className="font-bold rounded-md   border-sky-500 px-[14px] py-[8px]  border-none bg-[#000]  text-white	text-xs	">
          BOOK NOW
        </button>
      </div> */}
    </div>
  );
};

export default Header;
