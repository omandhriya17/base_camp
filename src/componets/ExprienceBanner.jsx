import React, { Fragment } from "react";
import { EXPERINCE, HOTEL, STAY, TOGGLE } from "./images";
import ExperienceDetails from "./ExperienceDetails";

const ExprienceBanner = () => {
  return (
    <Fragment>
      <div className="px-[70px] py-[2px] my-[120px]">
        <div>
          <h1 className="text-fontSize font-fontWeight">
            Explore Our Locations
          </h1>

          <div className="flex gap-x-8 mt-5">
            <ExperienceDetails
              imgStudent={EXPERINCE}
              title="Student"
              heading=" Long term stays"
              details="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />

            <ExperienceDetails
              imgStudent={STAY}
              title="Short term stays"
              heading=" 2-4 Weeks"
              details="libero et velit interdum, aliquet mattis."
            />

            <ExperienceDetails
              imgStudent={HOTEL}
              title="Hotel"
              heading=" Open dates"
              details="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExprienceBanner;
