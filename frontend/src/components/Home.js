import React from "react";
import DonorModal from "./DonorModal.js";
import CharityModal from "./CharityModal.js"
import "./Home.css";

const Home = () => (
<div className="container">
    <h1>Welcome to SevaFund</h1>
    
    <div className="container new-user">
        <h5 className="white-text">How can we help you? Please choose from the options below</h5>
    </div>

    <div className="home">
        <div className="donor">
            <div className="message">
                <h3>Donor</h3>
                <DonorModal/>
                <p>You want to check out our current, open projects and want to see the difference you make in an open, transparent way.</p>
            </div>
        </div>

        <div className="charity">
            <div className="message">
                <h3>Charity</h3>
                <CharityModal />
                <p>You want your company to join the esteemed list of nonprofits that are witnessing the untapped well of investors and donors who want to see a new age of transparency.</p>
            </div>
        </div>

    </div>
</div>
);

export default Home;
