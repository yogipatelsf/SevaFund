import React from "react";
import "./About.css";

const About = () => (
  <div className="container">
    
    <div className="content">
      
      <div className="row">
        <h5 className="title">What is SevaFund?</h5>
        <p>
          Before we begin to answer that question, we would like to ask a few of our own. How do you serve your community? Do you volunteer? Are you a community organizer; someone who tries to bring people together in order to serve a philanthropic or meaningful purpose? From the simple act of giving to a loved one, to clothing, feeding, and providing medical services to the poor, we have all tried to make the world a better place. If you're coming to this site, you already practice "Seva," a Sanskrit word that embodies the act of selfless service or sacrifice without the want or need of reward or repayment.
        </p>  
        <p>
          Seva happens all over the world, everyday. In Sikh gurudwaras, Buddhist and Hindu temples, Islamic mosques, Jewish synagogues and Christian churches, Seva is prevalent in everyone's lives. We at SevaFund are just that: a diverse group of JavaScript Full Stack Web Developers with various cultural backgrounds just trying to make an impact in the world with the use of technology. 
        </p>
      </div>

      <div className="row">
        <h5 className="title">How Does SevaFund Work?</h5>
        <p>
          Our goal was to bring transparency to the world of nonprofits. The way in which we do this is via the Ethereum blockchain network. As a decentralized application (hereafter referred to as a Dapp), SevaFund requires IRS verified charities to not only sign up with us using a Passport authentication system, but to provide a purchase order (PO) to us with their supplier's name. When a donor logs in (after authentication of signup using a similar Passport system) they will see the current POs listed by the charities, and be able to enter an amount of fiat money they would like to donate.
        </p>
        <p>
          Upon submission of donation, the information would communicate with, and update, a Solidity powered smart contract via a Web3 library. After multiple donations, and a 100% target-reach, a project would then be disabled, and the payment would go straight to the supplier. It is then the supplier's responsibility to fulfill their commitment to the charity, thus taking money out of the charitiy's hands. This undeniably brings transparency, and furthers a campaign of anti-corruption, to the world of nonprofits via the permanent general ledger of the Etherum blockchain. 
        </p>
      </div>

      <div className="row">
        <h5 className="title">Meet The Team</h5>
        <div className="row">
          <div className="col-sm-2">
            <img src="../.././public/Face.jpeg"/>
            <p>Sofiane Guerfi</p>
          </div>
          <div className="col-sm-2">
            <img src="../../public/Face.jpeg"/>
            <p>Gerardo Fernandez</p>
          </div>
          <div className="col-sm-2">
            <img src="../../public/Face.jpeg"/>
            <p>Yogi Patel</p>
          </div>
          <div className="col-sm-2">
            <img src="../../public/Face.jpeg"/>
            <p>Sandon Du</p>
          </div>
          <div className="col-sm-2">
            <img src="../../public/Face.jpeg"/>
            <p>Sushant Srikrish</p>
          </div>
          <div className="col-sm-2">
            <img src="../../public/Face.jpeg"/>
            <p>Bahadur Ghataorhe</p>
          </div>
        </div>
      </div>

      <div className="row">
        <h5 className="title">Looking Forward</h5>
        <p>Our vision moving forward is quite simple:</p>
        <ol>
          <li>Deploy to the Ethereum network</li>
          <li>Incorporate the use of cryptocurrencies as a form of payment</li>
          <li>Continue to network and reach out to willing charities for new POs</li>
        </ol>
      </div>
  
    </div>    
      
  </div>
);

export default About;
