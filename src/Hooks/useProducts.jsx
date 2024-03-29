import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";

const useProducts = () => {
  const {loading} = useContext(AuthContext)
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get("https://furniro-server.vercel.app/products");
      return res.data;
    },
  });
  return [products, refetch];
};

export default useProducts;
