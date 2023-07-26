import React from "react";
import Image from "next/image";

const PropertyListing = ({ house }) => {
  console.log(house)
  return (
    <div className="listing">
      <div className="listing-img-container">
        <img
          src={house.primary_photo.href}
          alt="listing"
          // layout="responsive"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="listing-details">
        <span className="listing-text">
          Large 4-room apartment with a beautiful terrace
        </span>
        <div>
          <p>
            <b>{house.list_price}$</b>
          </p>
          <p>{house.location.address.city}, {house.location.address.line}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
