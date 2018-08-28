import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
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
});

const theme = createMuiTheme({
    palette: {
        type: 'dark', // Switching the dark mode on is a single property value change.
    },
});

function TestForm(props) {
    const { classes } = props;

    return (
        <Grid container spacing={24} className={classes.formGrid}>
            <MuiThemeProvider theme={theme}>
                <FormControl className={classes.margin}>
                    <Grid item xs={12} sm={8}>
                        <InputLabel
                            FormLabelClasses={{
                                root: classes.cssLabel,
                                focused: classes.cssFocused,
                            }}
                        >
                            Custom CSS
                </InputLabel>
                        <Input
                            classes={{
                                underline: classes.cssUnderline,
                            }}
                        />
                    </Grid>
                </FormControl>
            </MuiThemeProvider>
        </Grid>
    );
}

TestForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TestForm);