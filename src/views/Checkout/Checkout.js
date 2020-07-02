import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import ForwardPlans from "./ForwardPlans";
import PortingForm from "./PortingForm";



const steps = ['Choose a Plan', 'Account Information', 'Porting Information', 'Place Order'];


class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            forwardPlanID: null,
            landlineNumber: null,
            cellPhoneNumber: null,
            email: null,
            firstName: null,
            lastName: null,
            address: null,
            city: null,
            state: null,
            zip: null,
            country: null,
            accountNumber: null,
            pinNumber: null,
            errorMessage: null,
        };
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.addInfo = this.addInfo.bind(this);
    }

    getStepContent(step) {
        switch (step) {
            case 0:
                return <ForwardPlans
                    forwardPlanID =  {this.state.forwardPlanID}
                    addInfo={this.addInfo}
                />
            case 1:
                return <AddressForm
                    firstName = {this.state.firstName}
                    lastName = {this.state.firstName}
                    address = {this.state.address}
                    city = {this.state.city}
                    state = {this.state.state}
                    zip = {this.state.zip}
                    country = {this.state.country}
                    email = {this.state.email}
                    addInfo={this.addInfo}
                    cellPhoneNumber = {this.state.cellPhoneNumber}
                />;
            case 2:
                return<PortingForm
                    accountNumber = {this.state.accountNumber}
                    addInfo={this.addInfo}
                    pinNumber = {this.state.pinNumber}
                />;
            case 3:
                return <PaymentForm
                    addInfo={this.addInfo}
                />;
            case 4:
                return<Review
                    addInfo={this.addInfo}
                />;
            default:
                throw new Error('Unknown step');
        }
    };

    addInfo(text, type) {
        text = text.target.value;
        console.log(text, type);
        if (type === 'firstName') {
            this.setState({firstName: text})
        }
        if (type === 'lastName') {
            this.setState({lastName: text})
        }
        if (type === 'email') {
            this.setState({email: text})
        }
        if (type === 'cellPhoneNumber') {
            console.log(text);
            this.setState({cellPhoneNumber: text})
        }

        if (type === 'accountNumber') {
            console.log(text);
            this.setState({accountNumber: text})
        }
        if (type === 'pinNumber') {
            console.log(text);
            this.setState({pinNumber: text})
        }
        if (type === 'forwardPlanID') {
            console.log(text);
            this.setState({forwardPlanID: text})
        }
        if (type === 'address') {
            console.log(text);
            this.setState({address: text})
        }
        if (type === 'state') {
            console.log(text);
            this.setState({state: text})
        }
        if (type === 'country') {
            console.log(text);
            this.setState({country: text})
        }
        if (type === 'zip') {
            console.log(text);
            this.setState({zip: text})
        }
        if (type === 'city') {
            console.log(text);
            this.setState({city: text})
        }


    }

    handleNext(){
        this.setState({
           activeStep: this.state.activeStep + 1,
        });
    };

    handleBack(){
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment style={{background: 'white'}}>
                <CssBaseline/>
                <AppBar position="absolute" color="white" className={classes.appBar}>
                    <Toolbar>
                        <Typography style={{fontFamily: 'Rubik', fontWeight: 500}} variant="h6" color="inherit" noWrap>
                            Community Phone
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main className={classes.layout}>
                    <Paper style={{boxShadow: "0px 0px 0px #919191",}} className={classes.paper}>
                        <Typography style={{fontFamily: 'Rubik', fontWeight: 500}} component="h1" variant="h4"
                                    align="center">
                            Self-Transfer
                        </Typography>
                        {(this.state.errorMessage)
                            ? <p style = {{color:'red', fontSize: 20, margin: 10}}> {this.state.errorMessage}</p>
                            : null
                        }
                        <Stepper activeStep={this.state.activeStep} className={classes.stepper}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel style={{fontFamily: 'Rubik', fontWeight: 400}}> {label}</StepLabel>
                                </Step>))}
                        </Stepper>
                        <React.Fragment>
                            {this.state.activeStep === steps.length-1? (
                                <React.Fragment>
                                    <PaymentForm/>
                                    <Typography variant="h5" gutterBottom>
                                        Thank you for your order.
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Your order number is {this.state.orderNumber} We have emailed your order confirmation, and will
                                        send you an update when your order has shipped.
                                    </Typography>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {this.getStepContent(this.state.activeStep)}

                                    <div className={classes.buttons}>
                                        {this.state.activeStep !== 0 && (
                                            <Button onClick={this.handleBack} className={classes.button}>
                                                Back
                                            </Button>
                                        )}
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleNext}
                                            className={classes.button}
                                        >
                                            {this.state.activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                        </Button>
                                    </div>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    </Paper>
                    <Copyright/>
                </main>
            </React.Fragment>
        );
    }
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

const useStyles = theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        background: '#F4F4F4 ',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        background:'#F4F4F4',
        marginBottom: theme.spacing(3),
        padding: theme.spacing(5),
        [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(10),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
        background: '#F4F4F4 ',

    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
});


export default withStyles(useStyles)(Checkout);



