import React, { Fragment } from "react";
import { GROUP, GROUP1 } from "./images";

const LoveBaseBanner = () => {
  return (
    <Fragment>
      <div className="px-[70px] py-[2px] my-[120px]">
        <div>
          <div className="flex items-center">
            <h1 className="text-fontSize font-fontWeight">
              Reasons To Love Basecamp
            </h1>

            <img src={GROUP} />
            <img src={GROUP1} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoveBaseBanner;
