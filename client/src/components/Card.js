import React, { Component } from "react";
import NumberFormat from "react-number-format";
import Checkout from "../Checkout";
import "./Card.css";
import Moment from "react-moment";

class Card extends Component {
  //Needs State to capture the user input
  constructor(props) {
    super(props);
    this.state = {
      donation: 0,
      funded: 0,
    };
  }

  //Needs hadleChange() method
  handleChange = event => {
    const { donation, value } = event.target;
    this.setState({ donation: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      donation: 0,
      funded:
        parseInt(this.state.funded, 10) + parseInt(this.state.donation, 10)
    });
  };

  render() {
    const { title, image, project, website, Amount, targetDate } = this.props;
    const { donation, funded} = this.state;
    //code for creating todays date as a string instead of object
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth()+1; //January is 0!
    let yyyy = date.getFullYear();
    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 
    const today = mm + '/' + dd + '/' + yyyy; //to create todays date as a string
    console.log(today)
    let todayDate = <Moment parse="MM/DD/YYYY" format="YYYY/MM/DD">{today}</Moment>
    let todayDateUnix = <Moment format="x">{today}</Moment>
    let targetDateUnix = <Moment format="x">{targetDate}</Moment>

    return (
      <div className="container">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={image} alt={title} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4 center-align">
              {title}
              <i className="material-icons right">more_vert</i>
            </span>
            <div className="container">
              <div className="row">
                <form onSubmit={this.handleSubmit}>
                  <div className="col s6">
                    <label htmlFor="donate">Enter Amount</label>
                    <input
                      id="donate"
                      placeholder="$"
                      type="number"
                      className= "input-field disabled"
                      name="amount"
                      value={donation}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col s4">
                    <Checkout
                      className="waves-effect waves-light btn light-blue accent-2"
                      name={"SevaFund"}
                      description={title}
                      amount={donation * 100}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {title}
              <i className="material-icons right">close</i>
            </span>
            <p>{project}</p>
            <p>
              Target Funding:{" "}
              <NumberFormat
                value={Amount}
                displayType="text"
                thousandSeparator={true}
                prefix={"$"}
              />{" "}
              -- Funded: {parseInt(funded, 10) / parseInt(Amount, 10) * 100}%
            </p>
            <p className="left-align">
              Target Fulfillment: <Moment format="YYYY/MM/DD" add={{ hours: 7 }}>{targetDate}</Moment> 
            </p>
            <p>
              <a href={website} target="_blank">
                Please Visit Us!
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
