import React, {Component} from 'react';
import Home from '../views/Home.js'
import ButtonAppBar from "../components/menu/SimpleTabs";
import Checkout from "../views/Checkout/Checkout";
class AppRoot extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#F4F4F4 ', flex: 1, minHeight: 1200}}>
                <Checkout/>
            </div>
        );
    }
}

export default AppRoot;
