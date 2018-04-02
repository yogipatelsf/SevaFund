import React from 'react';
// import {Modal} from 'react-bootstrap';
// import { Input, FormBtn } from '../../components/Form';
import SignUp from './SignUp.js'

class Wrapper extends React.Component {
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
            <div className="row">
                <div className="col-sm-6">
                    <SignUp/>
                </div>
                <div className="col-sm-6">
                    {/* <LogIn/> */}
                </div>
            </div>
        )
    }
};

export default Wrapper