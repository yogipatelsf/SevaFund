import React from "react";
import "./About.css";

const About = () => (
  <div className="container">
    <h4 className="title">What is SevaFund?</h4>
    <div className="container-a">
      <div className="first-img">
        <img
          className="z-depth-5"
          src="https://images.unsplash.com/photo-1457601893031-bfb36abc37c4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=87313f88e5f7d0b20369772cd910ddac&auto=format&fit=crop&w=1351&q=80"
          alt="view into the distance"
        />
      </div>
      <div className="first-text">
        <p>
          Before we begin to answer that question, we would like to ask a few of
          our own. How do you serve your community? Do you volunteer? Are you a
          community organizer; someone who tries to bring people together in
          order to serve a philanthropic or meaningful purpose? From the simple
          act of giving to a loved one, to clothing, feeding, and providing
          medical services to the poor, we have all tried to make the world a
          better place. If you're coming to this site, you already practice
          "Seva," a Sanskrit word that embodies the act of selfless service or
          sacrifice without the want or need of reward or repayment.
        </p>
      </div>
      <div className="second-text">
        <p>
          Seva happens all over the world, everyday. In Sikh gurudwaras,
          Buddhist and Hindu temples, Islamic mosques, Jewish synagogues and
          Christian churches, Seva is prevalent in everyone's lives. We at
          SevaFund are just that: a diverse group of JavaScript Full Stack Web
          Developers with various cultural backgrounds just trying to make an
          impact in the world with the use of technology.
        </p>
      </div>
    </div>

    <h4 className="title">How Does SevaFund Work?</h4>
    <div className="container-c">
      <div className="third-text">
        <p>
          Our goal was to bring transparency to the world of nonprofits. The way
          in which we do this is via the Ethereum blockchain network. As a
          decentralized application (hereafter referred to as a Dapp), SevaFund
          requires IRS verified charities to not only sign up with us using a
          Passport authentication system, but to provide a purchase order (PO)
          to us with their supplier's name. When a donor logs in (after
          authentication of signup using a similar Passport system) they will
          see the current POs listed by the charities, and be able to enter an
          amount of fiat money they would like to donate.
        </p>
      </div>
      <div className="second-img">
        <img
          className="z-depth-5"
          src="https://images.unsplash.com/photo-1468421870903-4df1664ac249?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3aa575e67b51bc49d1d37949b2189938&auto=format&fit=crop&w=800&q=60"
        />
      </div>
      <div className="fourth-text">
        <p>
          Upon submission of donation, the information communicates with, and
          updates, a Solidity powered smart contract via a Web3 library. After
          multiple donations, and a 100% target-reach, a project will then be
          disabled, and the collected funds will go straight to the supplier. It
          is then the supplier's responsibility to fulfill their commitment to
          the charity, thus taking money out of the charity's hands. This
          undeniably brings transparency, and furthers a campaign of
          anti-corruption, to the world of nonprofits via the permanent general
          ledger of the Etherum blockchain.
        </p>
      </div>
    </div>
    <div className="row">
      <h4 className="title">Looking Forward</h4>
      <p>Our vision moving forward is quite simple:</p>
      <ul>
        <li>Deploy to the Ethereum network</li>
        <li>Incorporate the use of cryptocurrencies as a form of payment</li>
        <li>
          Continue to network and reach out to willing charities for new POs
        </li>
      </ul>
    </div>

    <h4 className="title">Meet The Team</h4>
    <div className="container-b">
      <div className="pic1">
        <a
          href="https://www.linkedin.com/in/sofiane-guerfi-0338a574"
          target="_blank"
        >
          <img
            className="image-border z-depth-5"
            src="https://media.licdn.com/dms/image/C4E03AQFdOyiFCPGKwQ/profile-displayphoto-shrink_800_800/0?e=1529006400&v=beta&t=ZhiKlTTDOLduAfk_2fmFDVNmBAMv07lVP_tz5LeTSOs"
          />
        </a>
        <p>Sofiane Guerfi</p>
      </div>
      <div className="pic2">
        <a
          href="https://www.linkedin.com/in/gerardo-fernandez-webdev/"
          target="_blank"
        >
          <img
            className="image-border z-depth-5"
            src="https://pbs.twimg.com/profile_images/924868643707432961/o_7HHI7G_400x400.jpg"
          />
        </a>
        <p>Gerardo Fernandez</p>
      </div>
      <div className="pic3">
        <a href="https://www.linkedin.com/in/yogipatel" target="_blank">
          <img
            className="image-border z-depth-5"
            src="https://media.licdn.com/dms/image/C4E03AQH1mGQPM0xxug/profile-displayphoto-shrink_800_800/0?e=1529006400&v=beta&t=XEoPekiQ6dwEdZInAEaAiJ8u1JCP_J4kIw0EUWYkKAw"
          />
        </a>
        <p>Yogi Patel</p>
      </div>
      <div className="pic4">
        <a href="https://www.linkedin.com/in/sandon-du-eit/" target="_blank">
          <img
            className="image-border z-depth-5"
            src="https://media.licdn.com/dms/image/C5103AQEuTm2vBPU4Dw/profile-displayphoto-shrink_800_800/0?e=1529006400&v=beta&t=-x49hMLKvZbPLOeZ6GIgpuCL8Zbw9XalGRwpU-Of4Bk"
          />
        </a>
        <p>Sandon Du</p>
      </div>
      <div className="pic5">
        <a
          href="https://www.linkedin.com/in/sushant-srikrish-1b166752"
          target="_blank"
        >
          <img
            className="image-border z-depth-5"
            src="https://media.licdn.com/dms/image/C5103AQEoDyxUuDELjw/profile-displayphoto-shrink_800_800/0?e=1529006400&v=beta&t=HmX3tMiZFtoiZzysxYSggp9FgVlPOluZAauio61pA9c"
          />
        </a>
        <p>Sushant Srikrish</p>
      </div>
      <div className="pic6">
        <a href="https://www.linkedin.com/in/bahadurghataorhe/" target="_blank">
          <img
            className="image-border z-depth-5"
            src="https://media.licdn.com/dms/image/C5103AQGu1IZSZf0UxQ/profile-displayphoto-shrink_800_800/0?e=1529024400&v=beta&t=-LzmurIhAI9-8NTW5ce0vYqYnSjKV-qKvA5EyYRE4bU"
          />
        </a>
        <p>Bahadur Ghataorhe</p>
      </div>
    </div>
  </div>
);

export default About;
