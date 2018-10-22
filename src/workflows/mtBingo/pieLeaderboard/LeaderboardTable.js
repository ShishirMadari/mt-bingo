import React from 'react';
import PropTypes from 'prop-types';

// material-uis
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const theme = createMuiTheme({
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
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

const LeaderboardTable = ({ pieEntries }) => {

    const leaderboardList = getSortedList(pieEntries);

    return (
        <React.Fragment>
            <MuiThemeProvider theme={theme}>
                <Divider />
                <Table>
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
        </React.Fragment>
    )
}

LeaderboardTable.propTypes = {
    pieEntries: PropTypes.object.isRequired,
};

export default (LeaderboardTable);