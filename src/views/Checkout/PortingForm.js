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

export default function PortingForm() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Paper style = {{boxShadow: "0px 1px 6px #919191", padding: 20}} className={classes.paper}>
                <Typography variant="h6" gutterBottom>
                Porting Information
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="accountNumber"
                            label="Account Number"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="pinNumber"
                            label="PIN Number"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <div style = {{margin: 20}}>
                <Typography style={{fontFamily: 'Rubik', fontWieght: 300, margin: 25, fontSize: 17}} variant="h7" gutterBottom>
                    It looks like you're transferring a landline number. Your carrier will ask us for your account number and PIN. You can skip this step for now, but we've found that in most cases, we'll need this information in order to complete your transfer request.
                </Typography>
                </div>
            </Paper>
        </React.Fragment>
    );
}
