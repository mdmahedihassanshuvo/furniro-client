import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const totalPrice = useParams();
  const price = parseFloat(totalPrice?.price);
  //   console.log(typeof price);
  const stripePromise = loadStripe(import.meta.env.VITE_PK_KEY);
  return (
    <div className="h-[400px]">
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
