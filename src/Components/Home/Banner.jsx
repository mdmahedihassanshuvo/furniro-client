import React from "react";
import banner from "../../assets/images/imagecompressor/banner1-min.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner relative">
      {/* <img className="md:h-[600px] w-full" src={banner} alt="" /> */}
      <div className="absolute left-[100px] top-[120px] text-justify bg-[#fcfaf8] md:py-14 md:px-10 rounded-lg md:w-[700px] space-y-[30px]">
        <h2 className="text-4xl font-bold text-[#E89F72]">
          Bring Quality, Comfort, <br /> and Style to Your Home
        </h2>
        <p className="text-[#E89F72] font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="btn text-white text-lg uppercase tracking-wider bg-[#E89F72]">Buy now</button>
      </div>
    </div>
  );
};

export default Banner;
