import React, {Component} from 'react';
import Home from '../views/Home.js'
import ButtonAppBar from "../components/menu/SimpleTabs";
import Checkout from "../views/Checkout/Checkout";
class AppRoot extends Component {
    render() {
        return (
            <div>
                <Checkout/>
            </div>
        );
    }
}

export default AppRoot;
