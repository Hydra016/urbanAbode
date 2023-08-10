import React from "react";

const OfferListing = ({ house }) => {
  return (
    <div className="listing offer-listing">
      <div className="listing-img-container">
        <img
          src={house.primary_photo ? house.primary_photo.href : null}
          alt="listing"
          className="offer-img"
        />
        <img
          className="offer-img"
          src={
            house.primary_photo ? (
              house.primary_photo.href
            ) : (
              <Image src="/no-house.png" alt="My Image" />
            )
          }
        />
      </div>
      <div className="listing-details">
        <span className="listing-text">
          {/* Large 4-room apartment with a beautiful terrace */}
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

export default OfferListing;
