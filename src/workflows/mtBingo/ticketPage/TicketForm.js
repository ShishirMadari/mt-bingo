import React from 'react';
import PropTypes from 'prop-types';
import pieContestants from './../utils/pieContestants'

// material-uis
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";



const theme = createMuiTheme({
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
});

const styles = theme => ({
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
    },
});


const TicketForm = ({ classes, saveChange, pie }) => {

    return (
        <React.Fragment>
            <MuiThemeProvider theme={theme}>
                <Grid item xs={12} sm={5}>
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
                            name="name"
                            onChange={saveChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <FormControl className={classes.formWidth}>
                        <InputLabel
                            FormLabelClasses={{
                                root: classes.cssLabel,
                                focused: classes.cssFocused,
                            }}
                            required
                        >
                            {"# of Tickets"}
                        </InputLabel>
                        <Input
                            classes={{
                                underline: classes.cssUnderline,
                            }}
                            id="tickets"
                            name="tickets"
                            onChange={saveChange}
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
                            {"Select MT to Pie"}
                        </InputLabel>
                        <Select
                            value={pie}
                            onChange={saveChange}
                            inputProps={{
                                name: "pie",
                                id: "pie"
                            }}
                        >
                            {pieContestants.map(contestant => {
                                return (<MenuItem key={contestant} value={contestant}>{contestant}</MenuItem>)
                            })}
                        </Select>
                    </FormControl>
                </Grid>
            </MuiThemeProvider>
        </React.Fragment>
    );
}


TicketForm.propTypes = {
    classes: PropTypes.object.isRequired,
    saveChange: PropTypes.func.isRequired,
    pie: PropTypes.string.isRequired,
};

export default withStyles(styles)(TicketForm);