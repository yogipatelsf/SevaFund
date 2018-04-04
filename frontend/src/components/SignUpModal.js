import React from 'react';
import {Modal} from 'react-bootstrap';
import { Input, FormBtn } from "../components/Form";

class SignUpModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        // this.handleShow = this.handleShow.bind(this);
        // this.handleClose = this.handleClose.bind(this);
        this.state = { 
            showModal: true 
        };
    }

    // handleClose(){
    // this.setState({show:false});
    // }

    // handleShow(){
    // this.setState({show:true});
    // }

    handleFormSubmit = event =>{
    event.preventDefault();
    };

    render(){
        // const Login = {
        //     title: "Donor",
        //     id: "donor-btn",
        //     className: "btn btn-primary"
        // }
    
        // const charityBtn = {
        //     title: "Charity",
        //     id: "charity-btn",
        //     className: "btn btn-primary"
        // }
    console.log('props from signup', this.props)
        return(
            <div className="row">
                <Modal 
                show={this.props.showing}
                animation={false}
                backdrop={false}
                >
                    <div className="row">
                        <div className="col-sm-6">
                            <Modal.Header closeButton>
                                <Modal.Title className="text-center">
                                    New Account
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
                        <div className="col-sm-6">
                            <Modal.Header closeButton>
                                <Modal.Title className="text-center">
                                    Sign In
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form>
                                    <p><strong>Email</strong></p>
                                    <Input
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        name="author"
                                        placeholder="Enter a valid email"
                                    />
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
                    </div>
                </Modal>
            </div>
        )
    }
}



export default SignUpModal;