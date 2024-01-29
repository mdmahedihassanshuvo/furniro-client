import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";

const usePaymentDetails = () => {
  const { user } = useContext(AuthContext);
  const { data: paymentDetails, refetch } = useQuery({
    queryKey: ["paymentDetails", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://furniro-server.vercel.app/payment/${user?.email}`
      );
      return res.data;
    },
  });
  return [paymentDetails, refetch];
};

export default usePaymentDetails;
