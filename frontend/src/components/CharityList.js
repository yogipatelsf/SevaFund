import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import "./CharityList.css";

class CharList extends Component {
  static defaultProps = {
    charities: [
      {
        title: "SF Marine Food Bank",
        img: "https://farm3.staticflickr.com/2789/4115935787_9065bde73d.jpg",
        content:
          "Our mission is to end hunger in San Francisco and Marin. We envision a community where everyone is able to obtain enough nutritious food to support the health and well-being of themselves and their families.",
        website: "https://www.sfmfoodbank.org/",
        amount: 10000
      },
      {
        title: "Project Open Hand",
        img: "https://farm3.staticflickr.com/2391/2535419178_17da93473f.jpg",
        content:
          "Project Open Hand’s mission is to nourish and engage our community by providing meals with love to the sick and the elderly. Watch our video celebrating Project Open Hand clients Orazgul and Mario and driver, 'Jedi.'",
        website: "https://www.openhand.org/",
        amount: 9000
      },
      {
        title: "Covenant Food Pantry",
        img: "https://farm6.staticflickr.com/5554/15071821931_9106dfb10b.jpg",
        content:
          "With God’s grace, we seek to share Christ through a welcoming and nurturing community of faith, doing God’s work in the world.",
        website: "http://www.covenantpcsf.org/Ministries/food_pantry.php",
        amount: 12500
      }
    ]
  };

  //   static propTypes = {
  //       charities: PropTypes.checkPropTypes(PropTypes.object)
  //   }

  render() {
    const charities = this.props.charities.map((c, index) => (
      <Card key={index} {...c} />
    ));

    return (
      <div className="container">
        <div className="charity-cards">{charities}</div>
      </div>
    );
  }
}

export default CharList;
