import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';

class DonorModal extends React.Component {
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
        const styleTop = {
            borderTop: '5px solid #40c4ff',
            borderRight: '5px solid #40c4ff',
            borderLeft: '5px solid #40c4ff',
            backgroundColor: 'white',
            textAlign: 'center'
        }

        const styleBottom = {
            borderBottom: '5px solid #40c4ff',
            borderRight: '5px solid #40c4ff',
            borderLeft: '5px solid #40c4ff',
            backgroundColor: 'white'
        }

        return (
            <div>
                <Button onClick={this.handleClickOpen}>Log In / Sign Up</Button>
                
                <Dialog
                    open={this.state.open}
                    
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth={true}
                >
                    <DialogTitle style={styleTop}>Welcome to SevaFund</DialogTitle>
                    <DialogContent style={styleBottom}>
                        <form ref={(input) => this.loginForm = input} className="login-edit" onSubmit={(e) => this.createLogin(e)}>
                            <input ref={(input) => this.email = input} type="text" placeholder="email"/>
                            <input ref={(input) => this.username = input} type="text" placeholder="username"/>
                            <select ref={(input) => this.status = input}>
                                <option value="Login">Login</option>
                                <option value="Sign-Up">Sign Up</option>
                            </select>
                            <input ref={(input) => this.password = input} type="text" placeholder="password"/>
                            <br/><br/>
                            <button type="submit">Login</button>
                        </form>
                    </DialogContent>
                </Dialog>
                
            </div>
        );
    } 
}

// SignUpModal.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// const SimpleModalWrapped = withStyles(styles)(SignUpModal);

export default DonorModal;
