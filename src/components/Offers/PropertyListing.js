import React from "react";
import Image from "next/image";

const PropertyListing = () => {
  return (
    <div className="listing">
      <div className="listing-img-container">
        <Image
          src="/temp.png"
          alt="listing"
          layout="responsive"
          width={100}
          height={100}
          objectFit="cover"
        />
      </div>
      <div className="listing-details">
        <span className="listing-text">
          Large 4-room apartment with a beautiful terrace
        </span>
        <div>
          <p>
            <b>320 000€</b>
          </p>
          <p>Barcelona IX.</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
