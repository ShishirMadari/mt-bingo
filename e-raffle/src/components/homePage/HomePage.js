import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { components } from './../../redux/actions/uiActions';



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
        [theme.breakpoints.up(1000 + theme.spacing.unit * 4)]: {
            width: 1000,
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
    buttons: {
        width: "100%",
        background: 'linear-gradient(45deg, #FFC107 30%, #FFEE58 90%)',
    },
    titleSVG: {
        width: "100%",
        height: "100%",
    },
    title: {
        fontSize: "15vw",
        fontFamily: "Riesling",
        textAlign: 'center',
        marginBottom: theme.spacing.unit * 3,
        color: "#FBD541",
    }
});

// background: 'linear-gradient(45deg, #FFC107 30%, #FFEE58 90%)',
// background: 'radial-gradient(circle at 50% 0,#FFBF00,#FFDC73)',

const HomePage = ({ classes, showComponent }) => {
    return (
        <React.Fragment>
            <div className={classes.layout} >
                <main>
                    <Paper className={classes.paper}>
                        <div className={classes.title}>
                            {'Casino Night'}
                        </div>
                        <Grid container spacing={16}>
                            <Grid item xs={12} sm={6}>
                                <Button variant="outlined" className={classes.buttons} onClick={() => { showComponent(components.TICKETFORM) }}>
                                    {"submit tickets"}
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="outlined" className={classes.buttons} onClick={() => { showComponent(components.RAFFLE) }}>
                                    {"raffle"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </main>
            </div>
        </React.Fragment >
    );
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

// const mapStateToProps = (state) => {
//     return {
//         currentComponent: state.ui.app.currentComponent
//     };
// };

// const mapDispatchToProps = {
//     showComponent
// };

export default
    withStyles(styles)
        // connect(mapStateToProps, mapDispatchToProps)
        (HomePage);