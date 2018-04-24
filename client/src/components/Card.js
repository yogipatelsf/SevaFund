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

  expired = (date1,date2) => {
    if (Moment(date1) > Moment(date2)) {
      return true
    }
  }

  convert = (date) => {
    let targetDatePST = ""
    return targetDatePST = <Moment format="YYYY/MM/DD" subtract={{ hours: 7 }}>date</Moment> 
  }

  render() {
    const { title, image, project, website, Amount, targetDate } = this.props;
    const { donation, funded, today } = this.state;
    const newDate = new Date();
    const todayDate = <Moment format="YYYY/MM/DD">{newDate}</Moment>
    const test = <Moment format="X"> {newDate} </Moment>
    // test = JSON.stringify(test)
    console.log("todays date" + todayDate.props.children) 
    console.log("unix time" + test)
// (expired(todayDate.props.children, (converter({targetDate}) ? 'show' : 'disabled'))


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
                      className= "input-field"
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
