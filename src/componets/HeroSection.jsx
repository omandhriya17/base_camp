import React, { Fragment } from "react";
import { HEROIMG, SEARCH } from "./images";

const HeroSection = () => {
  return (
    <Fragment>
      <div className="flex justify-between items-center  px-[70px] py-[2px] ">
        <div className="w-[55%] pr-[55px] flex flex-col ">
          <h1 className=" text-[62px] font-[700] leading-[85px]">
            Living Spaces for Dreamsers, Thinkers and Go-Getter
          </h1>
          <p className="font-normal text-lg mt-4  leading-8 w-[480px] tracking-tight">
            At BaseCamp, we offer more than rooms and great amenities. We build
            a global community with a focus on creating lifelong memories and
            enhancing your stay to its fullest potential.
          </p>
          <div className="flex items-center shadow-shadow border-solid border-[3px] rounded-md w-fit px-4 py-2 gap-x-2 border-slate-900 mt-[30px] ">
            <div className="border-e-2 pe-2 border-slate-400">
              <lable className="">Locatioon</lable>
            </div>

            <div className="border-e-2 pe-2 border-slate-400">
              <lable>Duration</lable>
            </div>
            <div className="border-e-2 pe-2 border-slate-400">
              <lable>Experience</lable>
            </div>
            <div className="flex items-center gap-x-1">
              <lable>People</lable>

              <img src={SEARCH} className="h-[20px] w-[20px]" />
            </div>
          </div>
        </div>
        <div className="w-[45%]">
          <img
            src={HEROIMG}
            alt="Image Not Found"
            className="w-[600px] h-[600px]"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSection;
