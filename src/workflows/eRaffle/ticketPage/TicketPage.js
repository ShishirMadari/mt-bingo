import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { components } from './../../../redux/actions/uiActions';
import TicketForm from './TicketForm';

// material-uis
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 20,
        [theme.breakpoints.up(700 + theme.spacing.unit * 4)]: {
            width: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.grey[900],
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
        background: 'linear-gradient(45deg, #FFC107 30%, #FFEE58 90%)',
    },
    title: {
        fontSize: "8vw",
        fontFamily: "Riesling",
        textAlign: 'center',
        color: "#FBD541",
    },
});


class TicketPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pie: "None",
        };
    }

    submitTickets = (submitEntry, showComponent) => {
        if (this.state.name && this.state.tickets) {
            submitEntry(this.state.name, this.state.tickets, this.state.pie);
            alert("Entry made!");
            showComponent(components.HOMEPAGE);
        } else {
            alert("Please enter a name and number of tickets");
        }

    }

    handleChange = event => {
        if (event.target.name === "tickets") {
            this.setState({ tickets: parseInt(event.target.value, 10) });
        } else {
            this.setState({ [event.target.name]: event.target.value });
        }
    };

    render() {
        const { classes, showComponent, submitEntry } = this.props;

        return (
            <React.Fragment>
                <div className={classes.layout} >
                    <main>
                        <Paper className={classes.paper}>
                            <Typography className={classes.title}>
                                {"Ticket Submission"}
                            </Typography>
                            <Grid container spacing={16} className={classes.formGrid}>
                                <TicketForm saveChange={this.handleChange} pie={this.state.pie} />
                            </Grid>
                            <Grid container spacing={16}>
                                <Grid item xs={12} sm={6}>
                                    <Button variant="outlined" className={classes.buttons} onClick={() => { showComponent(components.HOMEPAGE) }}>
                                        {"back"}
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant="outlined" className={classes.buttons} onClick={() => this.submitTickets(submitEntry, showComponent)}>
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
}


TicketPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TicketPage);