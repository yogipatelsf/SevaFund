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
            name: this.name.value,
            email: this.email.value,
            street: this.street.value,
            city: this.city.value,
            state: this.state.value,
            zipcode: this.zipcode.value,
            phoneNumber: this.phoneNumber.value,
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
                            <input 
                                ref={(input) => this.name = input} 
                                type="text" placeholder="Charity name"
                            />
                            <input 
                                ref={(input) => this.email = input} 
                                type="text" placeholder="Email"
                            />
                            <input ref={(input) => this.password = input} type="text" placeholder="Password"/>
                            <input ref={(input) => this.street = input} type="text" placeholder="Street name"/>
                            <input ref={(input) => this.city = input} type="text" placeholder="City"/>
                            <input ref={(input) => this.zipcode = input} type="text" placeholder="Zipcode"/>
                            <input 
                                ref={(input) => this.phoneNumber = input} 
                                type="text" 
                                placeholder="Phone number"
                            />
                            <select
                                ref={(input) => this.status = input}
                            >
                                <option value={1} primaryText="Login" />
                                <option value={2} primatyText="Signup" />
                            </select>
                            <br/><br/>
                            <button type="submit">Login</button>
                        </form>
                    </DialogContent>
                </Dialog>
                
            </div>
        );
    } 
}

export default CharityModal;
