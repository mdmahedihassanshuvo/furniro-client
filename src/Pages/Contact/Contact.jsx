import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import Swal from "sweetalert2";
import ShopBanner from "../../Components/Shop/ShopBanner";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("http://localhost:5000/contact", data)
      .then((data) => {
        // console.log(data);
        if (data?.data?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Send your message successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <ShopBanner title="Contact" subTitle="Contact" />
      <div className="text-center md:mt-[100px] mt-4 space-y-2">
        <h2 className="md:text-4xl text-xl font-semibold">Get In Touch With Us</h2>
        <p className="md:text-base text-sm">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-evenly items-center md:mb-0 mb-3">
        <div className="flex flex-col md:gap-4">
          <div className="flex md:gap-3">
            <FaLocationDot className="text-2xl md:m-2" />
            <div className="">
              <h3 className="text-2xl font-medium">Address</h3>
              <p className="text-base font-normal">
                236 5th SE Avenue, <br /> New York NY10000, <br /> United States
              </p>
            </div>
          </div>
          <div className="flex md:gap-3">
            <FaPhoneAlt className="text-2xl md:m-2" />
            <div className="">
              <h3 className="text-2xl font-medium">Phone</h3>
              <p className="text-base font-normal">
                Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
              </p>
            </div>
          </div>
          <div className="flex md:gap-3">
            <MdOutlineAccessTimeFilled className="text-2xl md:m-2" />
            <div className="">
              <h3 className="text-2xl font-medium">Working Time</h3>
              <p className="text-base font-normal">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        <div className="md:my-[50px]">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Subject</span>
              </label>
              <input
                name="subject"
                type="text"
                placeholder="optional"
                className="input input-bordered"
                {...register("subject", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Message</span>
              </label>
              <textarea
                name="message"
                placeholder="Hi, I'd like to ask about..."
                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                {...register("message", { required: true })}
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-[#E89F72] text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
