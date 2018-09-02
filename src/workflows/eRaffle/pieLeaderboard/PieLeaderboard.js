import React from 'react';
import PropTypes from 'prop-types';
import { components } from './../../../redux/actions/uiActions';
import LeaderboardTable from './LeaderboardTable';

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
    buttons: {
        width: "100%",
        background: 'linear-gradient(45deg, #FFC107 30%, #FFEE58 90%)',
    },
    title: {
        fontSize: "6vw",
        fontFamily: "Riesling",
        textAlign: 'center',
        color: "#FBD541",
    },
});

const PieLeaderboard = ({ classes, showComponent, pieEntries }) => {
    return (
        <React.Fragment>
            <div className={classes.layout} >
                <main>
                    <Paper className={classes.paper}>
                        <Typography className={classes.title}>
                            {"Pie Leaderboard"}
                        </Typography>
                        <Grid container spacing={16}>
                            <Grid item sm={12} className={classes.grid}>
                                <LeaderboardTable pieEntries={pieEntries} />
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



PieLeaderboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PieLeaderboard);