import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { components } from './../../redux/actions/uiActions';

const theme = createMuiTheme({
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
});

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
        background: 'linear-gradient(45deg, #FFC107 30%, #FFEE58 90%)',
    },
    title: {
        fontSize: "8vw",
        fontFamily: "Riesling",
        textAlign: 'center',
        color: "#FBD541",
    },
    cssLabel: {
        '&$cssFocused': {
            color: "#FBD541"
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: "#FBD541"
        },
    },
    formWidth: {
        width: "95%"
    }
});


class TicketForm extends Component {

    updateNameEntry = (event) => {
        this.setState({ name: event.target.value });
    }

    updateTicketEntry = (event) => {
        this.setState({ tickets: event.target.value });
    }

    render() {
        const { classes, showComponent } = this.props;

        return (
            <React.Fragment>
                <div className={classes.layout} >
                    <main>
                        <Paper className={classes.paper}>
                            <div className={classes.title}>
                                <Typography className={classes.title}>{"Ticket Submission"}</Typography>
                            </div>
                            <Grid container spacing={12} className={classes.formGrid}>
                                <MuiThemeProvider theme={theme}>
                                    <Grid item xs={12} sm={8}>
                                        <FormControl className={classes.formWidth}>
                                            <InputLabel
                                                FormLabelClasses={{
                                                    root: classes.cssLabel,
                                                    focused: classes.cssFocused,
                                                }}
                                                required
                                            >
                                                {"Name"}
                                            </InputLabel>
                                            <Input
                                                classes={{
                                                    underline: classes.cssUnderline,
                                                }}
                                                id="name"
                                                onChange={this.updateNameEntry}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <FormControl className={classes.formWidth}>
                                            <InputLabel
                                                FormLabelClasses={{
                                                    root: classes.cssLabel,
                                                    focused: classes.cssFocused,
                                                }}
                                                required
                                            >
                                                {"Number of Tickets"}
                                            </InputLabel>
                                            <Input
                                                classes={{
                                                    underline: classes.cssUnderline,
                                                }}
                                                id="tickets"
                                                onChange={this.updateTicketEntry}
                                            />
                                        </FormControl>
                                    </Grid>
                                </MuiThemeProvider>
                            </Grid>
                            <Grid container spacing={16}>
                                <Grid item xs={12} sm={6}>
                                    <Button variant="outlined" className={classes.buttons} onClick={() => { showComponent(components.HOMEPAGE) }}>
                                        {"back"}
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant="outlined" className={classes.buttons} onClick={this.submitTickets}>
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


TicketForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TicketForm);