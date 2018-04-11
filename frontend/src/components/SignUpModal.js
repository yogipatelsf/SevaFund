import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';

class SignUpModal extends React.Component {
    state = {
        open: false,
        logins: {}
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    //to pass the Login data
    createLogin(event){
        event.preventDefault();
        console.log("This is me logging in");
        const login = {
            email: this.email.value,
            username: this.username.value,
            password: this.password.value,
            status: this.status.value,
        }
        console.log(login);
        this.loginForm.reset();
    }
    
    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}>Log In / Sign Up</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Welcome to SevaFund</DialogTitle>
                    <DialogContent>
                        <form ref={(input) => this.loginForm = input} className="login-edit" onSubmit={(e) => this.createLogin(e)}>
                            <input ref={(input) => this.email = input} type="text" placeholder="email"/>
                            <br/><br/>
                            <input ref={(input) => this.username = input} type="text" placeholder="username"/>
                            <br/><br/>
                            <select ref={(input) => this.status = input}>
                                <option value="Login">Login</option>
                                <option value="Sign-Up">Sign Up</option>
                            </select>
                            <br/><br/>
                            <input ref={(input) => this.password = input} type="text" placeholder="password"/>
                            <br/><br/>
                            <button type="submit">Login</button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        )
    } 
}

export default SignUpModal;
