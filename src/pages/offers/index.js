import React, { useState, useEffect } from "react";
import Navbar from "@/components/homepage/Navbar";
import OffersPageSettings from "@/components/offersPage/OffersPageSettings";
import Footer from "@/components/footer";
import OffersPageResults from "@/components/offersPage/OffersPageResults";
import { fetchProperties } from "@/features/propertySlice";
import { useDispatch, useSelector } from "react-redux";
import animationData from "../../../public/splash.json";
import Lottie from "lottie-react";

const Header = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    houseType: "all",
    streetName: "all",
    status: "all",
    branding: "all",
  });
  let { houses, isLoading } = useSelector((state) => state.propertyPrediction);

  const prices = houses.map((house) => parseFloat(house.list_price));
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const [sliderValue, setSliderValue] = useState(699000);

  useEffect(() => {
    dispatch(fetchProperties());
  }, []);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div id="home">
      <div className="secondary-navbar">
        <Navbar />
      </div>
      <div className="offersPageMain">
        <div className="offersPageMain-header">
          <span className="header-description_heading">
            Search for an offer
          </span>
          <p className="header-description_text">
            Choose from the most advantageous offers
          </p>
        </div>
        <div className="offersPageSettings">
          <OffersPageSettings
            houses={houses}
            filters={filters}
            setFilters={setFilters}
          />

          <div className="offersPageSettings-slider--container">
            <div className="offersPageSettings-slider--container--sub">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                value={sliderValue}
                onChange={handleSliderChange}
                className="offersPageSettings-slider"
                id="myRange"
              />
              <div className="offersPageSettings-slider-indicators">
                <div className="offersPageSettings-slider-indicator offersPageSettings-slider-indicator-start">
                  ${sliderValue}
                </div>
                <div className="offersPageSettings-slider-indicator offersPageSettings-slider-indicator-end">
                  ${maxPrice}
                </div>
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="loading-container">
            <Lottie animationData={animationData} />
          </div>
        ) : (
          houses && (
            <OffersPageResults
              filters={filters}
              houses={houses}
              sliderValue={sliderValue}
            />
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Header;
