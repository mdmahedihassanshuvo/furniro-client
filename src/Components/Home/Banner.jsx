import React from "react";
import banner from "../../assets/images/imagecompressor/banner1-min.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner md:relative">
      {/* <img className="md:h-[600px] w-full" src={banner} alt="" /> */}
      <div className="md:absolute left-[100px] top-[120px] md:text-justify text-center md:bg-[#fcfaf8] md:py-14 py-3 md:px-10 rounded-lg md:w-[700px] md:space-y-[30px] space-y-4 ">
        <h2 className="md:text-4xl text-xl font-medium md:font-bold text-black md:text-[#E89F72]">
          Bring Quality, Comfort, <br /> and Style to Your Home
        </h2>
        <p className="text-black md:text-[#E89F72] text-sm md:font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="btn  text-white md:text-lg uppercase md:tracking-wider bg-[#E89F72]">Buy now</button>
      </div>
    </div>
  );
};

export default Banner;
