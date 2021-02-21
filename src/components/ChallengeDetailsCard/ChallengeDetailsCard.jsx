import React from "react";
import "./ChallengeDetailsCard.css";

const ChallengeDetailsCard = ({ cardName, cardValue }) => {
    return (
        <div className="details-card-container">
            <div className="card-name">{cardName}</div>
            <div className="card-value">{cardValue}</div>
        </div>
    );
};

export default ChallengeDetailsCard;
