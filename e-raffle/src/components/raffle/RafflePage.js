import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


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
        marginBottom: theme.spacing.unit * 3,
        color: "#FBD541",
    }
});


const RafflePage = ({ classes }) => {
    return (
        <React.Fragment>
            <div className={classes.layout} >
                <main>
                    <Paper className={classes.paper}>
                        <div className={classes.title}>
                            <Typography className={classes.title}>{"Raffle"}</Typography>
                        </div>
                        <Grid container spacing={16}>
                            <Grid item sm={12}>
                                <Button variant="outlined" className={classes.buttons}>
                                    {"draw raffle"}
                                </Button>
                            </Grid>
                            <Grid item sm={12} className={classes.grid}>
                                <Divider className={classes.topDivider} />
                                <Typography variant="headline">{"click on the 'draw raffle' button to select a winner"}</Typography>
                                <Divider className={classes.bottomDivider} />
                            </Grid>
                            <Grid item sm={12}>
                                <Button variant="outlined" className={classes.buttons}>
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


RafflePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RafflePage);