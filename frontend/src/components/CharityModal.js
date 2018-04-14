import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class CharityModal extends React.Component {
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
            backgroundColor: 'white'
        }

        const styleBottom = {
            borderBottom: '5px solid #40c4ff',
            borderRight: '5px solid #40c4ff',
            borderLeft: '5px solid #40c4ff',
            backgroundColor: 'white'
        }

        return (
            <div>
                <Button onClick={this.handleClickOpen}>Charity Log In / Sign Up</Button>
                
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
                            <br/>
                            <input ref={(input) => this.username = input} type="text" placeholder="username"/>
                            <br/>
                            {/* <input placeholder="hello"/> */}
                            <SelectField
                                ref={(input) => this.status = input}
                            >
                                <MenuItem value={1} primaryText="Login" />
                                {/* <MenuItem value={2}>Sign Up</MenuItem> */}
                            </SelectField>
                            <br/>
                            <input ref={(input) => this.password = input} type="text" placeholder="password"/>
                            <br/>
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

export default CharityModal;
