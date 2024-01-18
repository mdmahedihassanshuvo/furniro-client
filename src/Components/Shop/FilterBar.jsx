import React, { useContext, useState } from "react";
import { IoFilterCircleOutline } from "react-icons/io5";
import { PiCirclesFourFill } from "react-icons/pi";
import { HiMiniBars3 } from "react-icons/hi2";
import { AuthContext } from "../Provider/AuthProvider";

const FilterBar = ({ products, setProducts, refetch }) => {
  const [sortOrder, setSortOrder] = useState("default");
  const { loading } = useContext(AuthContext);

  // console.log(products);
  if (loading) {
    return <progress className="progress w-56 md:mx-auto"></progress>;
  }
  const handleSortChange = (e) => {
    const newSortOrder = e.target.value;
    console.log("New Sort Order:", newSortOrder);

    setSortOrder(newSortOrder);

    // Sort products based on the selected order
    let sortedProducts = [...products];
    console.log(sortedProducts);

    if (newSortOrder === "lowerPrice") {
      sortedProducts.sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
      refetch();
    } else if (newSortOrder === "higherPrice") {
      sortedProducts.sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
      refetch();
    }

    console.log("Sorted Products:", sortedProducts);
  };

  return (
    <div className="md:w-full md:h-[100px] bg-[#ffe2d0] flex justify-between items-center md:px-[100px]">
      <div className="flex justify-evenly items-center gap-7">
        <button className="flex justify-center items-center gap-2 text-xl">
          <IoFilterCircleOutline /> Filter
        </button>
        <div className="flex justify-center items-center gap-5 text-xl">
          <button>
            <PiCirclesFourFill />
          </button>
          <button>
            <HiMiniBars3 />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center md:gap-3">
        <p className="text-base font-medium">Sort by</p>
        <select
          className="select select-bordered max-w-sm"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="default" disabled>
            Default
          </option>
          <option value="lowerPrice">Lower Price</option>
          <option value="higherPrice">Higher Price</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
