import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function PaymentForm() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Paper style = {{boxShadow: "0px 1px 6px #919191", padding: 20}} className={classes.paper}>

            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Card number"
                        fullWidth
                        autoComplete="cc-number"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                        autoComplete="cc-csc"
                    />
                </Grid>
                <div style = {{margin: 20}}>
                    <Typography style={{ textAlign: 'center', fontFamily: 'Rubik', fontWieght: 300, fontSize: 17}} variant="h7" gutterBottom>
                        All Plans Come Backed with a 30-day Money Back Guarantee.
                    </Typography>
                </div>
            </Grid>
            </Paper>
        </React.Fragment>
    );
}
