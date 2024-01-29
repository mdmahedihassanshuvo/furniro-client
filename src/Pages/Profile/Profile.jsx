import React, { useContext } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import usePaymentDetails from "../../Hooks/usePaymentDetails";
import { IoWalletSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import useCart from "../../Hooks/useCart";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [cartItems] = useCart()
  const [paymentDetails, refetch] = usePaymentDetails();
  //   console.log(paymentDetails);
  const totalCost = paymentDetails?.reduce((acc, price) => acc + price?.price, 0);
  return (
    <div className="md:h-[300px] md:mx-[50px] md:py-10 grid grid-cols-2 md:gap-5">
      <div className="bg-emerald-500 w-full flex flex-col justify-center items-center rounded-lg">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL} />
          </div>
        </div>
        <h2 className="text-2xl font-medium md:mt-4 text-white">{user?.displayName}</h2>
      </div>
      <div className="grid grid-cols-2 gap-2 md:gap-4 mx-2 md:mx-0 text-white">
        <div className="bg-gradient-to-r from-[#bf3ff6] to-[#f3c4fe] md:p-4 rounded-md flex justify-center items-center md:gap-3">
          <p className="md:text-3xl font-medium">
            <IoWalletSharp />
          </p>

          <div>
            <h2 className="md:text-xl font-medium">${totalCost.toFixed(2)}</h2>
            <p className="md:text-xl font-medium">Payment</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#d6a75e] to-[#f9e2b7] md:p-4 rounded-md flex justify-center items-center md:gap-3">
          <p className="md:text-3xl font-medium">
            <FaShoppingCart />
          </p>
          <div>
            <h2 className="md:text-xl font-medium">{cartItems?.length}</h2>
            <p className="md:text-xl font-medium">Shop</p>
          </div>
        </div>
        {/* <div className="bg-gradient-to-r from-[#fe568b] to-[#febada] md:p-4 rounded-md flex justify-center items-center md:gap-3">
          <p className="md:text-3xl font-medium">
            <MdProductionQuantityLimits />
          </p>
          <div>
            <h2 className="md:text-xl font-medium">{userBookings?.length}</h2>
            <p className="md:text-xl font-medium">Bookings</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
