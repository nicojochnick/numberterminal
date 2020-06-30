import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },

}));
export default function EC() {
    const classes = useStyles();
        return (
            <div>
                <Paper
                    style={{boxShadow: "0px 1px 25px #E0E0E0", minWidth: 150, marginTop: 30, borderRadius: 7,  display: 'flex', flexDirection: 'row'}}
                    variant="outlined">
                    <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Landline Numbers" />
                    </form>
                    <Button variant="contained" color="primary">
                        Check
                    </Button>
                </Paper>
            </div>
        );
    }


