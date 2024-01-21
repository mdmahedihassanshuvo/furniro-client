import React, { useEffect, useState } from "react";
import ShopBanner from "../../Components/Shop/ShopBanner";
import FilterBar from "../../Components/Shop/FilterBar";
import useProducts from "../../Hooks/useProducts";
import Cart from "../../Components/Shared/Cart";
import Pagination from "../../Components/Shop/Pagination";
import { TfiCup } from "react-icons/tfi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineTransferWithinAStation } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

const Shop = () => {
  const [products, refetch] = useProducts();
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = allProducts.slice(firstItemIndex, lastItemIndex);
  console.log(allProducts, currentItems);
  useEffect(() => {
    setAllProducts([...products]);
  }, [products]);

  return (
    <div className="">
      <ShopBanner title="Shop" subTitle="Shop" />
      <FilterBar
        allProducts={allProducts}
        setProducts={setAllProducts}
        refetch={refetch}
        lastItemIndex={lastItemIndex}
        firstItemIndex={firstItemIndex}
        cartStyle={"cartStyle"}
      />
      <div id="cartStyle" className="grid grid-cols-4 md:gap-5 md:mt-[65px]">
        {currentItems?.map((product) => (
          <Cart product={product} key={product?._id} />
        ))}
      </div>
      <Pagination
        totalItems={allProducts?.length}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="md:px-[50px] bg-[#ffe2d0] md:h-[270px] md:mt-[85px] flex justify-around items-center md:gap-3">
        <div className="flex justify-center items-center md:gap-2">
          <TfiCup className="text-5xl" />
          <div>
            <h4 className="text-lg font-semibold">High Quality</h4>
            <p className="text-sm md:mt-1 font-light text-[#898989]">
              crafted from top materials
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center md:gap-2">
          <IoIosCheckmarkCircleOutline className="text-5xl" />
          <div>
            <h4 className="text-lg font-semibold">Warranty Protection</h4>
            <p className="text-sm md:mt-1 font-light text-[#898989]">
              Over 2 years
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center md:gap-2">
          <MdOutlineTransferWithinAStation className="text-5xl" />
          <div>
            <h4 className="text-lg font-semibold">Free Shipping</h4>
            <p className="text-sm md:mt-1 font-light text-[#898989]">
              Order over $150{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center md:gap-2">
        <MdOutlineSupportAgent className="text-5xl" />
          <div>
            <h4 className="text-lg font-semibold">24 / 7 Support</h4>
            <p className="text-sm md:mt-1 font-light text-[#898989]">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
