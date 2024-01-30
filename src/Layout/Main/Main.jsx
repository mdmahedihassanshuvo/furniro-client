import React, { useContext } from "react";
import Header from "../../Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import { AuthContext } from "../../Components/Provider/AuthProvider";

const Main = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="mx-auto">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
