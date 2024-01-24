import React, { useState } from "react";
import useProducts from "../../Hooks/useProducts";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = ({ product }) => {
  
  return (
    <div key={product?.id} className="md:mx-auto bg-[#f4f5f7] relative">
      <img src={product?.image} alt="" />
      <div className="p-2">
        <h2 className="text-2xl font-semibold">{product?.name}</h2>
        <p className="text-xs font-mono">{product?.category}</p>
        <p className="text-base font-semibold">${product?.price}</p>
      </div>
      <div
        id="hover"
        className="absolute flex items-center justify-center top-0 w-[285px] h-[389px] text-white bg-black opacity-0 hover:opacity-80 transition-transform hover:scale-105 "
      >
        <Link
        to={`/details/${product?._id}`}
          className="text-[#e89f72] bg-white p-2 hover:text-black font-medium"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default Cart;
