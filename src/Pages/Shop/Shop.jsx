import React, { useEffect, useState } from "react";
import ShopBanner from "../../Components/Shop/ShopBanner";
import FilterBar from "../../Components/Shop/FilterBar";
import ShopItem from "../../Components/Shop/ShopItem";
import useProducts from "../../Hooks/useProducts";
import Cart from "../../Components/Shared/Cart";
import Pagination from "../../Components/Shop/Pagination";

const Shop = () => {
  const [products, refetch] = useProducts();
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = allProducts.slice(firstItemIndex, lastItemIndex);
  //   console.log( allProducts);
  useEffect(() => {
    // Update the state with the fetched products
    setAllProducts([...products]);
  }, [products]);

  return (
    <div className="md:mb-[80px]">
      <ShopBanner />
      <FilterBar
        products={allProducts}
        setProducts={setAllProducts}
        refetch={refetch}
      />
      <div className="grid grid-cols-4 md:gap-5 md:mt-[65px]">
        {currentItems?.map((product) => (
          <Cart product={product} key={product?.id} />
        ))}
      </div>
      <Pagination
        totalItems={allProducts?.length}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Shop;
