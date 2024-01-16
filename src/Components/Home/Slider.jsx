import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className=" md:mt-[70px] md:p-[45px] bg-[#ffe2d0]">
      <div className="flex justify-center items-center md:gap-4 ">
        <div className="md:w-2/5">
          <h2 className="text-4xl font-bold">
            50+ Beautiful rooms <br /> inspiration
          </h2>
          <p className="text-sm font-thin">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper md:w-3/5"
        >
          <SwiperSlide>
            <img
              src="https://i.ibb.co/nwDKddj/wooden-table-with-glass-vase-min.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/qybP6Sj/wooden-table-with-four-chairs-min.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/NLvrKcF/pillow-sofa-min.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/hBvfmLs/pillow-sofa-1-min.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/7Gcnvgb/hotel-room-with-comfortable-couch-min.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
