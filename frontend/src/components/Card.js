import React, { Component } from "react";
// import CharityList from "./CharityList";
import "./Card.css";

class Card extends Component {
    render(){
        const {title, img, content, website} = this.props;
        
        return(
            <div>
                <div className="container">
                    <div className="card border-success mb-3">
                        <div className="card-header text-center">
                            <h2>{title}</h2>
                        </div>
                        <div className="card-img-top">
                            <img src={img} alt={title}/>
                        </div> 
                        <div className="card-body">
                            <div className="card-title">
                                <h3>What we are about:</h3>
                            </div>
                            <p className="card-text">{content}</p>
                            <p className="card-text">Please come visit our <a href={website} target="_blank">site</a></p>
                            <button className="btn btn-md btn-outline-success card-text">Fund Project</button>  
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default Card;