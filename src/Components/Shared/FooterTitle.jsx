import React from "react";
import { TfiCup } from "react-icons/tfi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineTransferWithinAStation } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

const FooterTitle = () => {
  return (
    <div className="md:px-[50px] px-3 md:py-0 py-3 bg-[#ffe2d0] md:h-[270px] md:mt-[85px] grid md:grid-cols-4 grid-cols-2 gap-3 md:gap-3">
      <div className="flex justify-center items-center text-center md:gap-2">
        <TfiCup className="md:text-5xl text-3xl" />
        <div>
          <h4 className="text-lg font-semibold">High Quality</h4>
          <p className="text-sm md:mt-1 font-light text-[#898989]">
            crafted from top materials
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center text-center md:gap-2">
        <IoIosCheckmarkCircleOutline className="md:text-5xl text-3xl" />
        <div>
          <h4 className="text-lg font-semibold">Warranty Protection</h4>
          <p className="text-sm md:mt-1 font-light text-[#898989]">
            Over 2 years
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center text-center md:gap-2">
        <MdOutlineTransferWithinAStation className="md:text-5xl text-3xl" />
        <div>
          <h4 className="text-lg font-semibold">Free Shipping</h4>
          <p className="text-sm md:mt-1 font-light text-[#898989]">
            Order over $150{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center text-center md:gap-2">
        <MdOutlineSupportAgent className="md:text-5xl text-3xl" />
        <div>
          <h4 className="text-lg font-semibold">24 / 7 Support</h4>
          <p className="text-sm md:mt-1 font-light text-[#898989]">
            Dedicated support
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTitle;
