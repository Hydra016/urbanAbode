import React from "react";

const OfferHeader = () => {
  return (
    <div className="offer-header">
      <div className="offer-header-text">
        <span className="text-primary">Top offers</span>
        <p className="text-secondary offer-text">
          Fulfill your career dreams, enjoy all the achievements of the city
          center and luxury housing to the fullest.
        </p>
      </div>
      <div className="offer-header-btn">
        <button className="offers-btn secondary-btn">Show all offers</button>
      </div>
    </div>
  );
};

export default OfferHeader;
