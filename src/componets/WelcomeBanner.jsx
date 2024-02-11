import React, { Fragment } from "react";
import { ROUND, WELCOME } from "./images";

const WelcomeBanner = () => {
  return (
    <Fragment>
      <div className="px-[70px] py-[2px] my-[120px]">
        <div className="flex bg-cardBgColor rounded-xl shadow-shadow">
          <div className="">
            <img src={WELCOME} className="w-[600px]" />
          </div>
          <div className="grow flex items-center ">
            <div className="flex flex-col w-[700px] px-12 py-2	">
              <p className=" text-[35px] font-[700] leading-[85px]">
                Welcome to Basecamp.
              </p>
              <p className="font-normal text-md mt-4  leading- tracking-tight">
                Near everything, far from ordinary. All of our centrally-located
                accommodations come equipped with fully furnished rooms and a
                dedicated Basecamp Team to help you settle into your new home –
                whether you’re with us as a Student or Hotel guest.
              </p>
              <p className="font-normal text-md mt-4  leading- tracking-tight">
                Explore our large variety of rooms for every type of person.
                With Basecamp, you can easily find the perfect accomodation for
                you.
              </p>
              <p className="font-normal text-md mt-4  leading- tracking-tight">
                Our 24 hour helpline is always available to assist you in
                finding your perfect base.
              </p>
              <div className=" flex justify-end">
                <img src={ROUND} className="h-[150px] w-[110px] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WelcomeBanner;
