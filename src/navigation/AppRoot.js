import React, {Component} from 'react';
import Home from '../views/Home.js'
import ButtonAppBar from "../components/menu/SimpleTabs";
import "./AppRoot.css";

import Checkout from "../views/Checkout/Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_tIEdSm1lY91AQEATwrXJL9lC00dEs7orSR");
console.log(promise);

class AppRoot extends Component {
    render() {
        return (
            <div className="AppRoot">
                <Elements stripe={promise}>
                < Checkout/>
                </Elements>
            </div>
        );
    }
}

export default AppRoot;
