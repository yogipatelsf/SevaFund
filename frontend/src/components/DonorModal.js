import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
// import Select from 'material-ui/Select';
import './DonorModal.css';

class DonorModal extends React.Component {
    state = {
        open: false,
        signUp: false,
        logIn: false,
        status: ''
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleSignUpOpen = () => {
        this.setState({ signUp: true });
    }

    handleLogInOpen = () => {
        this.setState({ logIn: true });
    }

    handleClose = () => {
        this.setState({ open: false, signUp: false, logIn: false});
    };

    handleChange = (event) => {
        console.log('name & event', event.target.value);
        const {name, value} = event.target;
        this.setState({ [name]: value });
    };

    handleLogs = event => {
        const {name, value} = event.target;
        
    }

    //to pass the Login data
    logIn(event){
        event.preventDefault();
        console.log("This is a donor logging in");
        const login = {
            email: this.email.value,
            password: this.password.value,
        }
        console.log(login);
        this.loginForm.reset();
    }

    //to pass the SignUp data
    createSignUp(event){
        event.preventDefault();
        console.log("This is a donor signing up");
        const signUp = {
            email: this.email.value,
            password: this.password.value,
            confirmPassword: this.password.value,
        }
        console.log(signUp);
        this.signUpForm.reset();
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
        
        const margin = {
            margin: 10,
        };

        return (
            <div>
                <div className="donor-login-signup-buttons">
                    <Button
                        native
                        onClick={this.handleLogInOpen}
                        variant="raised"
                        color="primary"
                        className="login-button light-blue accent-2"
                        style={margin}
                    >
                        Log In
                    </Button>
                    
                    <Button
                        native
                        onClick={this.handleSignUpOpen}
                        variant="raised"
                        color="default"
                        className="signup-button light-blue accent-2"
                        style={margin}
                    >
                        Sign Up
                    </Button>
                </div>

                {/* TO LOG IN */}
                <Dialog
                    open={this.state.logIn}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth={true}
                    className="donor-log-in"
                >
                <DialogTitle style={styleTop}>Log In</DialogTitle>
                <DialogContent style={styleBottom}>
                    <form ref={(input) => this.loginForm = input} className="login-edit" onSubmit={(e) => this.logIn(e)}>
                        <input ref={(input) => this.email = input} type="text" placeholder="Email"/>
                        <input ref={(input) => this.password = input} type="password" placeholder="Password"/>
                        <br/><br/>
                        <button type="submit" className="login-submit">Log In</button>
                    </form>
                </DialogContent>
                </Dialog>

                {/* TO SIGN UP */}
                <Dialog
                    open={this.state.signUp}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    fullWidth={true}
                    className="donor-sign-up"
                >
                    <DialogTitle style={styleTop}>Sign Up</DialogTitle>
                    <DialogContent style={styleBottom}>
                        <form ref={(input) => this.signUpForm = input} className="signUp-edit" onSubmit={(e) => this.createSignUp(e)}>
                           
                            <input 
                                ref={(input) => this.email = input} 
                                type="text" placeholder="Email" 
                            />
                            <input ref={(input) => this.password = input} type="password" placeholder="Password"/>
                            <input ref={(input) => this.password = input} type="password" placeholder="Confirm password"/>
                            
                            <br/><br/>
                            <p>By creating an account you agree to our <a href="/about">Terms & Privacy</a></p>
                            <button type="submit" className="signup-submit">Sign Up</button>
                        </form>
                    </DialogContent>
                </Dialog>
                
            </div>
        );
    } 
}

export default DonorModal;
