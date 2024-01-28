import React from "react";
import ShopBanner from "../../Components/Shop/ShopBanner";
import blog1 from "../../assets/images/Blog/blog1.png";
import blog2 from "../../assets/images/Blog/blog2.png";
import blog3 from "../../assets/images/Blog/blog3.png";
import post1 from "../../assets/images/Blog/post1.png";
import post2 from "../../assets/images/Blog/post2.png";
import post3 from "../../assets/images/Blog/post3.png";
import post4 from "../../assets/images/Blog/post4.png";
import post5 from "../../assets/images/Blog/post5.png";
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaTag } from "react-icons/fa6";
import FooterTitle from "../../Components/Shared/FooterTitle";

const About = () => {
  return (
    <div className="">
      <ShopBanner title="About" subTitle="Blogs" />
      <div className="md:mt-[80px] md:mx-[50px] grid grid-cols-5 md:gap-10">
        <div className="col-span-3">
          <div className="md:mb-3">
            <img className="md:w-[817px] md:h-[500px] " src={blog1} alt="" />
            <div className="flex items-center md:gap-10 md:mt-3">
              <p className="flex items-center md:gap-3 text-slate-400">
                <FaUser /> Admin
              </p>
              <p className="flex items-center md:gap-3 text-slate-400">
                <SlCalender /> 14 Jan 2024
              </p>
              <p className="flex items-center md:gap-3 text-slate-400">
                <FaTag /> wood
              </p>
            </div>
            <div className="md:mt-3 space-y-3">
              <h2 className="text-3xl font-medium">
                Going all-in with millennial design
              </h2>
              <p className="text-justify md:text-base text-[#9F9F9F]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
            </div>
          </div>
          <div className="md:mb-3">
            <img src={blog2} alt="" />
            <div className="flex items-center md:gap-10 md:mt-3">
              <p className="flex items-center md:gap-3 text-slate-400">
                <FaUser /> Admin
              </p>
              <p className="flex items-center md:gap-3 text-slate-400">
                <SlCalender /> 14 Jan 2024
              </p>
              <p className="flex items-center md:gap-3 text-slate-400">
                <FaTag /> wood
              </p>
            </div>
            <div className="md:mt-3 space-y-3">
              <h2 className="text-3xl font-medium">
                Exploring new ways of decorating
              </h2>
              <p className="text-justify md:text-base text-[#9F9F9F]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
            </div>
          </div>
          <div className="md:mb-3">
            <img src={blog3} alt="" />
            <div className="flex items-center md:gap-10 md:mt-3">
              <p className="flex items-center md:gap-3 text-slate-400">
                <FaUser /> Admin
              </p>
              <p className="flex items-center md:gap-3 text-slate-400">
                <SlCalender /> 14 Jan 2024
              </p>
              <p className="flex items-center md:gap-3 text-slate-400">
                <FaTag /> wood
              </p>
            </div>
            <div className="md:mt-3 space-y-3">
              <h2 className="text-3xl font-medium">
                Handmade pieces that took time to make
              </h2>
              <p className="text-justify md:text-base text-[#9F9F9F]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
            </div>
          </div>
        </div>
        <div className="md:mx-auto col-span-2">
          <p className="text-xl font-medium md:mb-5">Recent Post</p>
          <div className="flex md:gap-2 md:mb-4">
            <img src={post1} alt="" />
            <div>
              <p className="font-medium text-sm">
                Going all-in with <br /> millennial design
              </p>
              <p className="text-sm text-slate-400">03 Aug 2022</p>
            </div>
          </div>
          <div className="flex md:gap-2 md:mb-4">
            <img src={post2} alt="" />
            <div>
              <p className="font-medium text-sm">
                Exploring new ways <br /> of decorating
              </p>
              <p className="text-sm text-slate-400">03 Aug 2022</p>
            </div>
          </div>
          <div className="flex md:gap-2 md:mb-4">
            <img src={post3} alt="" />
            <div>
              <p className="font-medium text-sm">
                Handmade pieces <br /> that took time to make
              </p>
              <p className="text-sm text-slate-400">03 Aug 2022</p>
            </div>
          </div>
          <div className="flex md:gap-2 md:mb-4">
            <img src={post4} alt="" />
            <div>
              <p className="font-medium text-sm">Modern home in Milan</p>
              <p className="text-sm text-slate-400">03 Aug 2022</p>
            </div>
          </div>
          <div className="flex md:gap-2 md:mb-4">
            <img src={post5} alt="" />
            <div>
              <p className="font-medium text-sm">Colorful office redesign</p>
              <p className="text-sm text-slate-400">03 Aug 2022</p>
            </div>
          </div>
        </div>
      </div>
      <FooterTitle />
    </div>
  );
};

export default About;
