import React from 'react';
import {Modal} from 'react-bootstrap';
import { Input, FormBtn } from '../../components/Form';


class SignUp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = { 
            show: false 
        };
    }
    
    handleClose(){
        this.setState({show:false});
    }
    
    handleShow(){
        this.setState({show:true});
    }
    
    handleFormSubmit = event =>{
        event.preventDefault();
    };

    render(){
        return(
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                <div>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-center">
                            Sign up
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <p><strong>Username</strong></p>
                            <Input
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Enter your username"
                            />
                            <p><strong>Password</strong></p>
                            <Input
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                name="author"
                                placeholder="Enter your password"
                            />
                            <p><strong>Email</strong></p>
                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="author"
                                placeholder="Enter a valid email"
                            />                                
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <FormBtn
                            // disabled={!(this.state.username && this.state.password && this.state.email)}
                            onClick={this.handleFormSubmit}
                        >
                            Create Account
                        </FormBtn>
                    </Modal.Footer>
                </div>
            </Modal>
            </div>
        )
    }
    
};

export default SignUp