import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types"
import "./CharityList.css";

class CharityList extends Component {
    
    static defaultProps ={
    charities: [{
      title: "SF Marine Food Bank",
      img: "https://media.gettyimages.com/photos/volunteers-sort-fresh-fruit-during-food-drive-picture-id832447874",
      content: "Our mission is to end hunger in San Francisco and Marin. We envision a community where everyone is able to obtain enough nutritious food to support the health and well-being of themselves and their families.",
      website: "https://www.sfmfoodbank.org/",
    },
    {
      title: "Project Open Hand",
      img: "https://www.openhand.org/sites/openhand.org/files/styles/full_width/public/pages/wilshia%20for%20website_0.png?itok=NtcFDKpQ",
      content: "Project Open Hand’s mission is to nourish and engage our community by providing meals with love to the sick and the elderly. Watch our video celebrating Project Open Hand clients Orazgul and Mario and driver, 'Jedi.'",
      website: "https://www.openhand.org/",
    },
    {
      title: "Covenant Food Pantry",
      img: "http://www.covenantpcsf.org/images/foodPantry.jpg",
      content: "With God’s grace, we seek to share Christ through a welcoming and nurturing community of faith, doing God’s work in the world.",
      website: "http://www.covenantpcsf.org/Ministries/food_pantry.php",
      }] 
  }
  
  static propTypes = {
      charities: PropTypes.checkPropTypes(PropTypes.object)
  }
  
  render(){
    const charities = this.props.charities.map((c, index) => (
      <Card key={index} {...c} />
    ));
          
    return(
      <div className="d-flex flex-row">
            {charities}
      </div>
    )
  }  
}


export default CharityList;