import { useMobileDetection } from "@/hooks/useMobile";
import Image from "next/image";
import React from "react";

const HouseDetails = ({ house }) => {
  const mobile = useMobileDetection();

  const houseTypeImages = {
    condos: "/condo.png",
    land: "/land.png",
    apartment: "/apartment.png",
    duplex_triplex: "/duplex.png",
    single_family: "/singlefamily.png",
    multi_family: "/multifamily.png",
    townhomes: "/townhome.png",
  };

  const checkHouseType = (type) => {
    const imageUrl = houseTypeImages[type] || "/unknown.png";
    return (
      <Image
        src={imageUrl}
        alt="listing"
        width={mobile ? 35 : 50}
        height={mobile ? 35 : 50}
      />
    );
  };

  return (
    <div className="houseDetailContainer">
      <div className="houseDetailsubContainer">
        <div className="detailSub">
          {checkHouseType(house.description.type)}
          <p>
            {house.description.type
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </p>
        </div>
        <div className="detailSub">
          <Image
            src="/area.png"
            alt="listing"
            width={mobile ? 35 : 50}
            height={mobile ? 35 : 50}
          />
          <p>{house.description.sqft} m2</p>
        </div>
        <div className="detailSub">
          <Image
            src="/location.png"
            alt="listing"
            width={mobile ? 35 : 50}
            height={mobile ? 35 : 50}
          />
          <p>{house.location.address.line}</p>
        </div>
      </div>

      <div className="mortgageContainer">
        <div>
          <span>Motgage since:</span>
          <p>{house.mortgage.estimate.total_payment}$/ month</p>
        </div>
        <button className="primary-btn contact-btn showmore-btn">
          Get a mortgage
        </button>
      </div>

      <div className="details-description">
        <p>
          {house.description.text
            ? house.description.text
            : "Welcome to a haven of modern luxury and timeless charm. This exquisite home boasts an open and airy design, adorned with the finest details that capture both sophistication and comfort. The expansive windows flood the interior with natural light, illuminating the high-end finishes and thoughtfully curated spaces. The heart of the home, the gourmet kitchen, stands as a masterpiece with top-tier appliances and sleek surfaces, a dream come true for culinary enthusiasts. Step outdoors into a picturesque oasis – a meticulously landscaped backyard that invites relaxation and is primed for unforgettable gatherings. Upstairs, the bedrooms offer spacious sanctuaries, each accompanied by a uniquely designed en-suite bathroom, ensuring privacy and individuality. "}
        </p>
      </div>
    </div>
  );
};

export default HouseDetails;
