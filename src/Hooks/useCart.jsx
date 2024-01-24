import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const useCart = () => {
  const { data: cartItems, refetch } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/cart");
      return res.data;
    },
  });

  return [cartItems, refetch];
};

export default useCart;
