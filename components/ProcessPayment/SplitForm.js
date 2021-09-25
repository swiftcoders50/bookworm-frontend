import React, { useMemo, useContext } from "react";
import Link from "next/link";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";

// import useResponsiveFontSize from "../../useResponsiveFontSize";
import { CartContext } from './../../pages/_app';
import { useRouter } from 'next/router';

const useOptions = () => {
//   const fontSize = useResponsiveFontSize();
const fontSize = 16;
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    [fontSize]
  );

  return options;
};

const SplitForm = () => {
  const [cartData, setCartData, cartTotal ,setCartTotal, orderData, setOrderData] = useContext(CartContext);
  const router = useRouter()
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", payload);
    if (payload.error) {
      alert("Please Provide valid Information")
    }
    else {

      const url = `https://bookworm-backend.vercel.app/orders/addOrders`;

      fetch(url, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(orderData)
      })
      .then(response => response.json())
      .then(data =>console.log(data))

      router.push("/orderComplete");

    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span className="text-lg font-medium text-center text-gray-800">Card number</span>
        <CardNumberElement className="py-1"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label>
      <span className="text-lg font-medium text-center text-gray-800"> Expiration date</span>

        <CardExpiryElement className="py-1"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label>
      <span className="text-lg font-medium text-center text-gray-800"> CVC</span>

        <CardCvcElement className="py-3"
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <button className="px-12 py-2 mt-8 text-gray-200 rounded-full bg-indigo-900" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default SplitForm;
