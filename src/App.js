import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";
import Checkout from "./views/Checkout/Checkout";
import CheckoutForm from "./views/Checkout/CheckoutForm";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_tIEdSm1lY91AQEATwrXJL9lC00dEs7orSR");
export default function App() {
  return (
      <div className="App">
        <Elements stripe={promise}>
          <CheckoutForm/>
        </Elements>
      </div>
  );
}
