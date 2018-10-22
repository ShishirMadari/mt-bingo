import React from 'react';
import PropTypes from 'prop-types';
import { components } from './../../../redux/actions/uiActions';
import CONSTANTS from './../../../assets/constants'


//material-ui
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 20,
        [theme.breakpoints.up(1000 + theme.spacing.unit * 4)]: {
            width: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        ...theme.mixins.gutters(),
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.grey[100],
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    buttons: {
        width: "100%",
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    },
    title: {
        fontSize: "12vw",
        fontFamily: "Riesling",
        textAlign: 'center',
        marginBottom: theme.spacing.unit * 3,
        color: "#4F6396",
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    }
});



class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            passwordField: ''
        };
    }

    updatePasswordEntry = event => {
        this.setState({
            passwordField: event.target.value
        })
    }

    componentDidUpdate() {
        const { showComponent } = this.props;

        if (this.state.passwordField === CONSTANTS.PASSWORD) {
            showComponent(components.HOMEPAGE);
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={classes.layout} >
                    <main>
                        <Paper className={classes.paper}>
                            <Typography className={classes.title}>
                                {'M.T. Bingo'}
                            </Typography>
                            <div className="center">
                                <FormControl>
                                    <TextField
                                        id="filled-password-input"
                                        label="Please enter password"
                                        name="password"
                                        className={classes.textField}
                                        type="password"
                                        autoComplete="current-password"
                                        margin="normal"
                                        variant="filled"
                                        onChange={this.updatePasswordEntry}
                                    />
                                </FormControl>
                            </div>
                        </Paper>
                    </main>
                </div>
            </React.Fragment >
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
