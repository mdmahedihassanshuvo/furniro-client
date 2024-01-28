import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const { data: cartItems, refetch } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/cart/${user?.email}`);
      return res.data;
    },
  });

  return [cartItems, refetch];
};

export default useCart;
