import React, { useState } from "react";
import OfferListing from "./OfferListing";
import Image from "next/image";

const OffersPageResults = ({ houses, filters, sliderValue }) => {
  const [pages, setPages] = useState(9);
  const [disabled, setDisabled] = useState(false);
  let newHouses = houses.filter(
    (house) =>
      (filters.houseType === "all" ||
        house.description.type === filters.houseType) &&
      (filters.streetName === "all" ||
        house.location.address.street_name === filters.streetName) &&
      (filters.status === "all" || house.status === filters.status) &&
      (filters.branding === "all" ||
        (house.branding[0] && house.branding[0].name === filters.branding)) &&
      house.list_price > sliderValue
  );

  const handlePages = (pages) => {
    if (pages >= houses.length - 2) {
      setPages(houses.length);
      setDisabled(true);
    } else {
      setPages(pages + 3);
    }
  };

  return (
    <div className="offerPageResultsContiner-max">
      <div className="offerPageResultsContiner">
        {houses && newHouses.length < 1 ? (
          <div className="no_houses">
            <Image src="/empty.png" alt="My Image" width={80} height={85} />
            <p className="no_houses-text">Change filters to view houses</p>
          </div>
        ) : (
          newHouses.slice(0, pages).map((house, i) => {
            return <OfferListing key={i} house={house} />;
          })
        )}
      </div>
      {newHouses.length > 9 ? (
        <div className="showmore-btn-container">
          <button
            className={
              disabled
                ? "disabled primary-btn showmore-btn"
                : "primary-btn showmore-btn contact-btn"
            }
            onClick={() => handlePages(pages)}
            disabled={disabled}
          >
            Show More
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default OffersPageResults;
