import React, { Fragment } from "react";
import { LOCATION, LOCATION1, TOGGLE } from "./images";
import LocationDetails from "./LocationDetails";

const LocationBanner = () => {
  return (
    <Fragment>
      <div className="px-[70px] py-[2px] my-[120px]">
        <div className="">
          <h1 className="text-fontSize font-fontWeight">
            Explore Our Locations
          </h1>

          <div className="flex items-stretch gap-x-8 mt-5">
            <LocationDetails
              imgLocation={LOCATION}
              title="Cape Town"
              details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. "
            />

            <LocationDetails
              imgLocation={LOCATION1}
              title="Johannesburg"
              details="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LocationBanner;
