import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  // console.log(user);
  

  const hangleLogout = () => {
    logout();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Log out successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const navLists = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => isActive && "bg-[#ffe2d0] text-white"}
        >
          <span className="text-[#000000]">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) => isActive && "bg-[#ffe2d0] text-white"}
        >
          <span className="text-[#000000]">Shop</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive && "bg-[#ffe2d0]"}
        >
          <span className="text-[#000000]">About</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive && "bg-[#ffe2d0] text-white"}
        >
          <span className="text-[#000000]">Contact</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="md:mx-[50px]">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 spa"
            >
              {navLists}
            </ul>
          </div>
          <Link to="/" className="">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-5 text-base font-medium">
            {navLists}
          </ul>
        </div>

        {user ? (
          <div className="navbar-end flex items-center md:gap-10 ">
            <Link to="/profile" className="avatar">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img title={user?.displayName} src={user?.photoURL} />
              </div>
            </Link>
            <div className="indicator hidden md:block">
              {/* <span className="indicator-item badge badge-secondary">99+</span> */}
              <Link to="/cartItem" className="">
                <FaShoppingCart className="text-lg" />
              </Link>
            </div>
            <button onClick={hangleLogout}>
              <Link
                to="/login"
                className="btn hover:bg-[#ffe2d0] hover:border-none"
              >
                Logout
              </Link>
            </button>
          </div>
        ) : (
          <div className="navbar-end">
            <Link
              to="/login"
              className="btn hover:bg-[#ffe2d0] hover:border-none"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
