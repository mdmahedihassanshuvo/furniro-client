import React, { useContext, useState } from "react";
import ShopBanner from "../../Components/Shop/ShopBanner";
import useCart from "../../Hooks/useCart";
import TableRow from "../../Components/Shared/TableRow";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/Provider/AuthProvider";

const CartItem = () => {
  const [cartItems, refetch] = useCart();
  // const [active, setActive] = useState(true);
  const { loading } = useContext(AuthContext);
  // console.log(cartItems);
  const totalPrice = cartItems?.reduce(
    (acc, crntPrice) => acc + crntPrice?.price,
    0
  );
  console.log(totalPrice);

  if (loading) {
    return (
      <div className="mx-auto">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  // if (totalPrice > 0) {
  //   setActive(false);
  // }

  return (
    <div className="">
      <ShopBanner title="Cart" subTitle="cart" />
      <div className="md:mx-[50px] mt-4 md:py-10 grid grid-cols-1 md:grid-cols-4 md:gap-5 md:h-[300px]">
        <div className="overflow-x-auto md:col-span-3">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-[#ffe2d0] text-black">
                <th>No:</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cartItems?.map((item, index) => (
                <TableRow item={item} index={index} key={item?._id} />
              ))}
              {/* row 2 */}
            </tbody>
          </table>
        </div>
        <div className="bg-[#ffe2d0] md:p-0 p-6 flex flex-col justify-evenly items-center md:gap-0 gap-3">
          <div>
            <h3 className="text-center text-3xl font-semibold md:p-3">
              Cart Total
            </h3>
            <p className="text-center">
              <span className="font-medium">Total</span> = $
              {totalPrice?.toFixed(2)}
            </p>
          </div>
          <div>
            {cartItems?.length > 0 && <Link
              to={`/payment/${totalPrice?.toFixed(2)}`}
              // hidden={active}
              className="py-2 px-4 rounded-md hover:bg-slate-400 hover:text-white font-medium text-black border border-black"
            >
              Check Out
            </Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
