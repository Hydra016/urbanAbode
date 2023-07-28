import React from "react";

const PropertyListing = ({ house }) => {
  console.log(house)
  return (
    <div className="listing">
      <div className="listing-img-container">
        <img
          src={house.primary_photo.href}
          alt="listing"
          className="offer-img"
        />
      </div>
      <div className="listing-details">
        <span className="listing-text">
          Large 4-room apartment with a beautiful terrace
        </span>
        <div>
          <p className="offer-price">
            <b>{house.list_price}$</b>
          </p>
          <p className="offer-address">{house.location.address.city}</p>
          <p className="offer-address">{house.location.address.line}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
