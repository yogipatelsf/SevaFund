import React, { Component } from "react";
import NumberFormat from "react-number-format";
import Checkout from "../Checkout";
import "./Card.css";

class Card extends Component {
  //Needs State to capture the user input
  constructor(props) {
    super(props);
    this.state = {
      donation: 0,
      funded: 0
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
    const { title, image, project, website, Amount } = this.props;
    const { donation, funded } = this.state;

    return (
      <div className="container">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={image} alt={title} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
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
                      className="input-field"
                      name="amount"
                      value={donation}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col s4">
                    <Checkout
                      className="waves-effect waves-light btn light-blue accent-2"
                      name={"The Road to learn React"}
                      description={"Only the Book"}
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
            <a href={website} target="_blank">
              Please Visit Us!
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
