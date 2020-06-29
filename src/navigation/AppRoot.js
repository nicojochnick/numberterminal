import React, {Component} from 'react';
import Home from '../views/Home.js'
import ButtonAppBar from "../components/menu/SimpleTabs";
class AppRoot extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar/>
            </div>
        );
    }
}

export default AppRoot;
