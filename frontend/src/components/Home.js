import React from "react";
import SignUpModal from "./SignUpModal.js";
import "./Home.css";

const Home = () => (
<div className="container">
    <h1>Welcome to Seva Fund!</h1>
    
    <div className="container new-user">
        <h5 className="white-text">New user? Click on the link below to get started.</h5>
    </div>

    <div className="home">
        <div className="donor">
            <div className="message">
                <h3>Donor</h3>
                <DonorModal/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quam soluta consectetur voluptas eveniet inventore! Quae nam veniam commodi fugit.</p>
            </div>
        </div>

        <div className="charity">
            <div className="message">
                <h3>Charity</h3>
                <CharityModal />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quam soluta consectetur voluptas eveniet inventore! Quae nam veniam commodi fugit.</p>
            </div>
        </div>

    </div>
</div>
);

export default Home;
