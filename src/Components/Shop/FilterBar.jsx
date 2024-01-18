import React, { useContext, useEffect, useState } from "react";
import { IoFilterCircleOutline } from "react-icons/io5";
import { PiCirclesFourFill } from "react-icons/pi";
import { HiMiniBars3 } from "react-icons/hi2";
import { AuthContext } from "../Provider/AuthProvider";
import useProducts from "../../Hooks/useProducts";

const FilterBar = ({
  allProducts,
  setProducts,
  refetch,
  lastItemIndex,
  firstItemIndex,
  cartStyle
}) => {
  const [products] = useProducts();
  const [sortOrder, setSortOrder] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { loading } = useContext(AuthContext);

  // console.log(products);

  const handleAll = (e) => {
    // console.log(e.target.innerText);
    setProducts(products);
    setSortOrder("default");
    document.getElementById("showProductsNumber").style.display = "block";
  };
  const handleHome = (e) => {
    // console.log(e.target.innerText);
    const selectCategory = e.target.innerText;
    const filter = products?.filter(
      (product) => product?.category == selectCategory
    );
    console.log(filter);
    setProducts(filter);
    setSortOrder("default");
    document.getElementById("showProductsNumber").style.display = "none";
  };
  const handleDining = (e) => {
    // console.log(e.target.innerText);
    const selectCategory = e.target.innerText;
    const filter = products?.filter(
      (product) => product?.category == selectCategory
    );
    console.log(filter);
    setProducts(filter);
    setSortOrder("default");
    document.getElementById("showProductsNumber").style.display = "none";
  };
  const handleLiving = (e) => {
    // console.log(e.target.innerText);
    const selectCategory = e.target.innerText;
    const filter = products?.filter(
      (product) => product?.category == selectCategory
    );
    console.log(filter);
    setProducts(filter);
    setSortOrder("default");
    document.getElementById("showProductsNumber").style.display = "none";
  };
  const handleBedRoom = (e) => {
    // console.log(e.target.innerText);
    const selectCategory = e.target.innerText;
    const filter = products?.filter(
      (product) => product?.category == selectCategory
    );
    console.log(filter);
    setProducts(filter);
    setSortOrder("default");
    document.getElementById("showProductsNumber").style.display = "none";
  };

  const handleFourTab = () => {
    const styleCart = document.getElementById(cartStyle);
    styleCart.style.display = "grid";
    // styleCart.style.gridTemplateRows = '400px 500px';
    styleCart.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
  }
  const handleTwoTab = () => {
    const styleCart = document.getElementById(cartStyle);
    styleCart.style.display = "grid";
    // styleCart.style.gridTemplateRows = '400px 500px';
    styleCart.style.gridTemplateColumns = "2fr 2fr"
  }

  const handleSortChange = (e) => {
    const newSortOrder = e.target.value;
    console.log("New Sort Order:", newSortOrder);

    setSortOrder(newSortOrder);

    // Sort products based on the selected order
    let sortedProducts = [...allProducts];
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

  if (loading) {
    return (
      <div className="text-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  return (
    <div className="md:w-full md:h-[100px] bg-[#ffe2d0] flex justify-between items-center md:px-[100px]">
      <div className="flex justify-evenly items-center gap-7">
        <details className="dropdown">
          <summary className="m-1 btn">
            <IoFilterCircleOutline /> Filter
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <p onClick={handleAll} className="font-medium">
                All Categories
              </p>
            </li>
            <li>
              <p onClick={handleHome} className="font-medium">
                Home Office
              </p>
            </li>
            <li>
              <p onClick={handleDining} className="font-medium">
                Dining Room
              </p>
            </li>
            <li>
              <p onClick={handleLiving} className="font-medium">
                Living Room
              </p>
            </li>
            <li>
              <p onClick={handleBedRoom} className="font-medium">
                Bedroom
              </p>
            </li>
          </ul>
        </details>
        {/* <div className="dropdown">
          <button
            tabIndex={0}
            className="flex justify-center items-center gap-2 text-xl"
          >
            <IoFilterCircleOutline /> Filter
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p onClick={handleAll} className="font-medium">
                All Categories
              </p>
            </li>
            <li>
              <p onClick={handleHome} className="font-medium">
                Home Office
              </p>
            </li>
            <li>
              <p onClick={handleDining} className="font-medium">
                Dining Room
              </p>
            </li>
            <li>
              <p onClick={handleLiving} className="font-medium">
                Living Room
              </p>
            </li>
            <li>
              <p onClick={handleBedRoom} className="font-medium">
                Bedroom
              </p>
            </li>
          </ul>
        </div> */}
        <div className="flex justify-center items-center gap-5 text-xl">
          <button onClick={handleFourTab}>
            <PiCirclesFourFill />
          </button>
          <button onClick={handleTwoTab}>
            <HiMiniBars3 />
          </button>
        </div>
        |
        <p id="showProductsNumber">showing {firstItemIndex+1}-{lastItemIndex} of {products?.length} results</p>
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
