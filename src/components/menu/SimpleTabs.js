import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "../../views/Home";
import Plans from "../../views/Plans";
import AboutUs from "../../views/AboutUs";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
export default function ButtonAppBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <BrowserRouter>
            <AppBar
                style={{ background: 'white', padding: 20 }}
                position="relative">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon style = {{color:'black'}} />
                    </IconButton>
                    <img src="logo.png" alt="logo" className={classes.logo} />
                    <Button  component={ Link } to="/plans" style={{ marginRight: 16, fontSize: 20 }} color="black">Plans</Button>
                    <Button component={ Link } to="/aboutus" style={{ marginRight: 16, fontSize: 20}} color="black">About Us</Button>
                </Toolbar>
            </AppBar>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/plans">
                        <Plans />
                    </Route>
                    <Route path="/aboutus">
                        <AboutUs/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
        </div>
    );
}
