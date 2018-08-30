import React                                                from 'react';
import PropTypes                                            from 'prop-types';
import { components }                                       from '../../redux/actions/uiActions';

// material-uis
import { withStyles, MuiThemeProvider, createMuiTheme }     from '@material-ui/core/styles';
import Button                                               from '@material-ui/core/Button';
import Paper                                                from '@material-ui/core/Paper';
import Typography                                           from '@material-ui/core/Typography';
import Grid                                                 from '@material-ui/core/Grid';
import Divider                                              from '@material-ui/core/Divider';
import Table                                                from '@material-ui/core/Table';
import TableBody                                            from '@material-ui/core/TableBody';
import TableCell                                            from '@material-ui/core/TableCell';
import TableHead                                            from '@material-ui/core/TableHead';
import TableRow                                             from '@material-ui/core/TableRow';



const theme = createMuiTheme({
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
});

const styles = theme => ({
    root: {
    },
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
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
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
        fontSize: "8vw",
        fontFamily: "Riesling",
        textAlign: 'center',
        color: "#FBD541",
    },
    result: {
        fontSize: "5vw",
        fontFamily: "Riesling",
        textAlign: 'center',
        color: "#FBD541",
    }
});

const sortEntries = (a, b) => (b.tickets - a.tickets);

const getSortedList = pieEntries => {
    const names = Object.keys(pieEntries);
    let arr = [];
    names.forEach(name => {
        let obj = {
            name: name,
            tickets: pieEntries[name],
        };
        arr.push(obj);
    })

    return arr.sort(sortEntries);
}

const PieLeaderboard = ({ classes, showComponent, pieEntries }) => {

    const leaderboardList = getSortedList(pieEntries);

    return (
        <React.Fragment>
            <div className={classes.layout} >
                <main>
                    <Paper className={classes.paper}>
                        <div className={classes.title}>
                            <Typography className={classes.title}>{"Pie Leaderboard"}</Typography>
                        </div>
                        <Grid container spacing={16}>
                            <Grid item sm={12} className={classes.grid}>
                                <MuiThemeProvider theme={theme}>
                                    <Divider />
                                    <Table className={classes.table}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>{"Name"}</TableCell>
                                                <TableCell numeric>{"Number of Tickets"}</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {leaderboardList.map(row => {
                                                return (
                                                    <TableRow key={row.name}>
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell numeric>{row.tickets}</TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
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



PieLeaderboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PieLeaderboard);