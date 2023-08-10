import React, { useState } from "react";
import OfferListing from "./OfferListing";

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
        house.branding[0].name === filters.branding) &&
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
        {houses && newHouses.slice(0, pages).map((house) => {
              return <OfferListing house={house} />;
            })}
      </div>
      <div className="showmore-btn-container">
        <button
          className={
            disabled
              ? "disabled primary-btn showmore-btn"
              : "primary-btn showmore-btn contact-btn"
          }
          smooth={true}
          duration={500}
          onClick={() => handlePages(pages)}
          disabled={disabled}
        >
          Show More {pages}
        </button>
      </div>
    </div>
  );
};

export default OffersPageResults;
