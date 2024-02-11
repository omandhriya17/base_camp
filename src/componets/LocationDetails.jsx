import React, { Fragment } from "react";
import { TOGGLE } from "./images";

const LocationDetails = (props) => {
  return (
    <Fragment>
      <div className="flex flex-col">
        <img src={props.imgLocation} />

        <div className="flex flex-col grow">
          <p className="font-[600] text-[35px]">{props.title}</p>

          <div className="w-[450px] leading-[25px] text-[16px] pt-4 grow">
            {props.details}
          </div>

          <div className="flex item-center pt-4 gap-x-2">
            <p className="leading-[20px] text-[14px]  font-[700] tracking-[2]">
              VIEW LOCATION
            </p>

            <img src={TOGGLE} className="-rotate-90" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LocationDetails;
