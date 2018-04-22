import React from "react";
import Button from "material-ui/Button";
import Dialog, { DialogContent, DialogTitle } from "material-ui/Dialog";
// import Select from 'material-ui/Select';
import "./DonorModal.css";
import API from "../utils/API";

class DonorModal extends React.Component {
  state = {
    open: false,
    signUp: false,
    logIn: false,
    status: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleSignUpOpen = () => {
    this.setState({ signUp: true });
  };

  handleLogInOpen = () => {
    this.setState({ logIn: true });
  };

  handleClose = () => {
    this.setState({ open: false, signUp: false, logIn: false });
  };

  handleChange = event => {
    console.log("name & event", event.target.value);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //to pass the Login data
  logIn(event) {
    event.preventDefault();

    const login = {
      email: this.email.value,
      password: this.password.value
    };
    API.donorAuth(login)
      .then(res => {
        console.log("donor", res.data.error);
        if (res.data.error) {
          alert(res.data.error);
          window.location.href = "/";
        } else if (res.data.isLoggedIn === "success") {
          window.location.href = "/projects";
        } else if (res.data.isLoggedIn === "fail") {
          alert("You have entered an invalid email or the wrong password");
        }
      })
      .catch(err => console.log(err));

    this.loginForm.reset();
  }

  //to pass the SignUp data
  createSignUp(event) {
    event.preventDefault();

    let signUpData = {
      email: this.email.value,
      password: this.password.value,
      confirmPassword: this.password.value
    };
    API.registerDonor(signUpData)
      .then(res => console.log("donor: ", res.data.message))
      .catch(err => console.log(err));
    window.location.href = "/";
    this.signUpForm.reset();
  }

  render() {
    const styleTop = {
      borderTop: "5px solid #40c4ff",
      borderRight: "5px solid #40c4ff",
      borderLeft: "5px solid #40c4ff",
      backgroundColor: "white",
      textAlign: "center"
    };

    const styleBottom = {
      borderBottom: "5px solid #40c4ff",
      borderRight: "5px solid #40c4ff",
      borderLeft: "5px solid #40c4ff",
      backgroundColor: "white"
    };

    const margin = {
      margin: 10,
      borderRadius: "50px",
      letterSpacing: "0.09375rem",
      backgroundColor: "#9E9B8D",
      color: "#FFFFFF"
    };

    return (
      <div>
        <div className="donor-login-signup-buttons">
          <Button
            onClick={this.handleLogInOpen}
            variant="raised"
            color="primary"
            className="login-button"
            style={margin}
          >
            Log In
          </Button>

          <Button
            onClick={this.handleSignUpOpen}
            variant="raised"
            color="default"
            className="signup-button"
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
            <form
              ref={input => (this.loginForm = input)}
              className="login-edit"
              onSubmit={e => this.logIn(e)}
            >
              <input
                ref={input => (this.email = input)}
                type="text"
                placeholder="Email"
              />
              <input
                ref={input => (this.password = input)}
                type="password"
                placeholder="Password"
              />
              <br />
              <br />
              <button type="submit" className="login-submit">
                Log In
              </button>
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
            <form
              ref={input => (this.signUpForm = input)}
              className="signUp-edit"
              onSubmit={e => this.createSignUp(e)}
            >
              <input
                ref={input => (this.email = input)}
                type="text"
                placeholder="Email"
              />
              <input
                ref={input => (this.password = input)}
                type="password"
                placeholder="Password"
              />
              <input
                ref={input => (this.password = input)}
                type="password"
                placeholder="Confirm password"
              />

              <br />
              <br />
              <p>
                By creating an account you agree to our{" "}
                <a href="/about">Terms & Privacy</a>
              </p>
              <button type="submit" className="signup-submit">
                Sign Up
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default DonorModal;
