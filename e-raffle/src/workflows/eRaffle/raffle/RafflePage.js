import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { components } from './../../../redux/actions/uiActions';

// material-ui
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';



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
        [theme.breakpoints.up(500 + theme.spacing.unit * 4)]: {
            width: 500,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        ...theme.mixins.gutters(),
        backgroundColor: theme.palette.grey[900],
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(500 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    grid: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    topDivider: {
        marginBottom: theme.spacing.unit * 3,
    },
    bottomDivider: {
        marginTop: theme.spacing.unit * 3,
    },
    buttons: {
        width: "100%",
        background: 'linear-gradient(45deg, #FFC107 30%, #FFEE58 90%)',
    },
    title: {
        fontSize: "10vw",
        fontFamily: "Riesling",
        textAlign: 'center',
        color: "#FBD541",
    },
    result: {
        fontSize: "4vw",
        fontFamily: "Riesling",
        textAlign: 'center',
        color: "#FBD541",
    }
});

class RafflePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            winner: null,
        };
    }

    drawRaffle(runRaffle) {
        const result = runRaffle();
        this.setState({
            winner: result
        })
    }

    render() {
        const { classes, showComponent, runRaffle } = this.props;

        const result = this.state.winner ? this.state.winner : "click on the 'draw raffle' button to select a winner";

        return (
            <React.Fragment>
                <div className={classes.layout} >
                    <main>
                        <Paper className={classes.paper}>
                            <Typography className={classes.title}>
                                {"Raffle"}
                            </Typography>
                            <Grid container spacing={16}>
                                <Grid item xs={12}>
                                    <Button variant="outlined" className={classes.buttons} onClick={() => { this.drawRaffle(runRaffle) }}>
                                        {"draw raffle"}
                                    </Button>
                                </Grid>
                                <Grid item sm={12} className={classes.grid}>
                                    <MuiThemeProvider theme={theme}>
                                        <Divider className={classes.topDivider} />
                                        <Typography className={classes.result}>{result}</Typography>
                                        <Divider className={classes.bottomDivider} />
                                    </MuiThemeProvider>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined" className={classes.buttons} onClick={() => { showComponent(components.HOMEPAGE) }}>
                                        {"back"}
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


RafflePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RafflePage);