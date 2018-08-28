import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
            width: 1000,
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
    buttons: {
        width: "100%",
    },
    title: {
        padding: theme.spacing.unit * 6,
    }
});


const Home = ({ classes }) => {
    return (
        <React.Fragment>
            <div className={classes.layout} >
                <main>
                    <Paper className={classes.paper}>
                        <div className={classes.title}>
                            <Typography variant="display4">{"casino night"}</Typography>
                        </div>
                        <Grid container spacing={16}>
                            <Grid item xs={12} sm={6}>
                                <Button variant="outlined" className={classes.buttons}>
                                    {"submit tickets"}
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="outlined" className={classes.buttons}>
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


Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);