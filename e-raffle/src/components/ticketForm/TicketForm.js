import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const styles = theme => ({
    root: {
        backgroundColor: "transparent"
    },
    layout: {
        width: 'auto',
        backgroundColor: "transparent",
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 20,
        [theme.breakpoints.up(600 + theme.spacing.unit * 4)]: {
            width: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.grey[800],
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    formGrid: {
        marginBottom: theme.spacing.unit * 2,
    },
    buttons: {
        width: "100%",
    },
    title: {
        padding: theme.spacing.unit * 6,
    }
});


const TicketForm = ({ classes }) => {
    return (
        <React.Fragment>
            <div className={classes.layout} >
                <main>
                    <Paper className={classes.paper}>
                        <div className={classes.title}>
                            <Typography variant="display3">{"ticket submission"}</Typography>
                        </div>
                        <Grid container spacing={24} className={classes.formGrid}>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    required
                                    id="name"
                                    name="name"
                                    label="Name"
                                    fullWidth
                                    autoComplete="name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    id="numTickets"
                                    name="numTickets"
                                    label="Number of tickets"
                                    fullWidth
                                    autoComplete="tickets"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={16}>
                            <Grid item xs={12} sm={6}>
                                <Button variant="outlined" className={classes.buttons}>
                                    {"back"}
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="outlined" className={classes.buttons}>
                                    {"submit"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </main>
            </div>
        </React.Fragment >
    );
}


TicketForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TicketForm);