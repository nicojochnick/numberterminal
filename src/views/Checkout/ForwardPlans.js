import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { BsPhone} from "react-icons/bs";
import Button from "@material-ui/core/Button";

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

export default function ForwardPlans () {
    const classes = useStyles();

    return (
            <div>
                <Grid container spacing={3}>

                <Grid item xs={6}>
                    <Paper style = {{boxShadow: "0px 1px 6px #919191", padding: 20}} className={classes.paper}>
                        <BsPhone color={"black"} size = "60" />
                        <Typography component="h3" variant="h5" align="center" style={{fontFamily:'Rubik', fontWeight: 500, color:'black', margin: 20}}>
                            Forward to 1 Cell Phone
                        </Typography>
                        <Typography component="h3" variant="h6" align="center" style={{fontFamily:'Rubik', fontWeight: 500, color:'black', margin: 20}}>
                            $12/month
                        </Typography>
                        <Typography component="h3" variant="h8" align="center" style={{fontFamily:'Rubik', fontWeight: 300, color:'black', margin: 20}}>
                            Replaces Your Current Landline Service
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                        > Continue
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style = {{boxShadow: "0px 1px 6px #919191",padding: 20}} className={classes.paper}>
                        <BsPhone color={"black"} size = "60" />
                        <BsPhone color={"black"} size = "60" />
                        <Typography component="h3" variant="h5" align="center" style={{fontFamily:'Rubik', fontWeight: 500, color:'black',margin: 20}}>
                            Forward to 2 Cell Phone
                        </Typography>
                        <Typography component="h3" variant="h6" align="center" style={{fontFamily:'Rubik', fontWeight: 500, color:'black', margin: 20}}>
                            $17/month
                        </Typography>
                        <Typography component="h3" variant="h8" align="center" style={{fontFamily:'Rubik', fontWeight: 300, color:'black', margin: 20}}>
                            Replaces Your Current Landline Service
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                        > Continue
                        </Button>
                    </Paper>
                </Grid>
                </Grid>

            </div>
        );
    }


ForwardPlans.propTypes = {};

