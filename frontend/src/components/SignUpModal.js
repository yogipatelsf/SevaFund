import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

class SignUpModal extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}>Log In / Sign Up</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Log In</DialogTitle>
                    <DialogContent>
                        <TextField 
                            autoFocus
                            ref="email"
                            margin="dense"
                            id="login-email"
                            label="email address"
                            type="email"
                        />
                        <br/>
                        <TextField 
                            autoFocus
                            ref="username"
                            margin="dense"
                            id="login-email"
                            label="username"
                            type="username"
                        />
                        <br/>
                        <TextField
                            autoFocus
                            ref="login-password"
                            margin="dense"
                            label="password"
                            hintText="Password Field"
                            floatingLabelText="Password"
                            type="password"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="secondary">
                            Login
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    } 
}

export default SignUpModal;