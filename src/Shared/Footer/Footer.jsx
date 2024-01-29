import React from "react";

const Footer = () => {
  return (
    <div className="border-t-2  text-center w-full relative bottom-0">
      <div className="md:mx-[50px] md:mt-[50px] grid grid-cols-1 md:grid-cols-3 md:gap-3 gap-2 border-b-2 md:pb-5">
        <div className="md:text-start py-4 md:space-y-[50px]">
          <h4 className="md:text-2xl text-3xl font-bold">Funiro.</h4>
          <p className="text-slate-400">
            400 University Drive Suite 200 Coral <br />
            Gables, <br />
            FL 33134 USA
          </p>
        </div>
        <div className="flex md:justify-evenly justify-around ">
          <div className="space-y-[20px] text-start">
            <p className="text-slate-400">Link</p>
            <p className="font-bold text-sm">Home</p>
            <p className="font-bold text-sm">Shop</p>
            <p className="font-bold text-sm">About</p>
            <p className="font-bold text-sm">Contact</p>
          </div>
          <div className="space-y-[20px] md:text-start md:px-0 px-5">
            <p className="text-slate-400">Help</p>
            <p className="font-bold text-sm">Payment option</p>
            <p className="font-bold text-sm">Return</p>
            <p className="font-bold text-sm">Privacy Policy</p>
          </div>
        </div>
        <div className="text-start space-y-4 md:px-0 px-5">
          <p className="text-slate-400">Newsletter</p>
          <div className="flex gap-2">
            <input
              className="p-2 rounded"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="md:text-start text-center text-xs md:text-base py-3 md:py-[35px] md:mx-[50px]">
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
        {/* <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  
</footer> */}
      </div>
    </div>
  );
};

export default Footer;
