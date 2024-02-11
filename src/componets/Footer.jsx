import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <div className="px-[70px] py-[2px] ">
        <div className="container">
          <div className="border border-slate-400 border-x-0  border-b-0">
            <div className="my-[50px] flex justify-between ">
              <div className="flex flex-col">
                <p className="leading-[10px] text-[25px]  font-[500]">
                  Our Location
                </p>
              </div>
              <div>
                <p className="leading-[10px] text-[25px]  font-[500]">
                  Cape Town
                </p>
                <div className="flex flex-col pt-[40px]">
                  <label className="leading-[28px] text-[18px] font-[400] font-serif">
                    Rondebosch
                  </label>
                  <label className="leading-[28px] text-[18px] font-[400] font-serif">
                    Claremont
                  </label>
                  <label className="leading-[28px] text-[18px] font-[400] ">
                    Mobray
                  </label>
                </div>
              </div>
              <div>
                <p className="leading-[10px] text-[25px]  font-[500]">
                  Johannesburg
                </p>
                <div className="flex flex-col pt-[40px]">
                  <label className="leading-[28px] text-[18px] font-[400] font-serif">
                    Rosebank
                  </label>
                  <label className="leading-[28px] text-[18px] font-[400] font-serif">
                    Braamfontein
                  </label>
                </div>
              </div>
              <div>
                <p className="leading-[10px] text-[25px]  font-[500]">
                  Contact Us
                </p>
                <div className="flex flex-col pt-[40px]">
                  <label className="leading-[28px] text-[18px] font-[400] font-serif">
                    help@basecamp.com
                  </label>
                  <label className="leading-[28px] text-[18px] font-[400] font-serif">
                    +(27) 99 999 999
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-slate-400 border-x-0  border-b-0 px-[70px] py-[2px]">
        <div className="flex justify-between items-center py-5">
          <div className="flex gap-x-5">
            <label>Copyright</label>
            <label>Ts&Cs</label>
            <label>Partner with us </label>
            <label>Careers</label>
            <label>Blog</label>
          </div>
          <div className="flex gap-x-5">
            <label>Privacy Policy</label>
            <label>Cookies Policy</label>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
