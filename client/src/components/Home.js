import React from "react";
import DonorModal from "./DonorModal.js";
import CharityModal from "./CharityModal.js";
import "./Home.css";

const Home = () => (
  <div className="container">
    <h1>Welcome to SevaFund</h1>

    <div className="container new-user">
      <h5>
        How can we help you? Please choose from the options below
      </h5>
    </div>

    <div className="home">
      <div className="donor">
        <div className="message">
          <h4>Donor</h4>
          <DonorModal />
          <p className="donor-message">
            Donate to the charities and projects of your choice and witness the
            difference you can make in an easy, open, and transparent way. Sign
            up here!
          </p>
        </div>
      </div>
    

      <div className="charity">
        <div className="message">
          <h4>Charity</h4>
          <CharityModal />
          <p className="charity-message">
            Would you like your company to join the esteemed list of nonprofits
            that are experiencing the untapped well of investors and donors who
            want to see a new age of transparency? Sign up here!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
