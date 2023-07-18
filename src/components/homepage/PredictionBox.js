import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { fetchPricePrediction } from "@/pages/features/propertySlice";

const PredictionBox = () => {
  const [mobile, setMobile] = useState(false);
  const [details, setDetails] = useState({
    bedrooms: "",
    floors: "",
    sqft_lot: "",
  });
  const { price, isLoading } = useSelector((state) => state.propertyPrediction);
  const dispatch = useDispatch();

  console.log(price);

  const handleResize = () => {
    if (window.innerWidth < 800) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="prediction-box">
      <span className="prediction-heading">Predict House Price!</span>
      <div className="prediction-input_container">
        <div className="prediction-input_container--details">
          <div className="prediction-room_box">
            <Image
              src="/beds.png"
              alt="My Image"
              width={mobile ? 35 : 65}
              height={mobile ? 25 : 35}
            />
            <input
              className="prediction-input"
              type="number"
              placeholder="rooms"
              onChange={(e) =>
                setDetails({ ...details, bedrooms: e.target.value })
              }
            />
          </div>
          <div className="prediction-room_box">
            <Image
              src="/stair.png"
              alt="My Image"
              width={mobile ? 35 : 65}
              height={mobile ? 25 : 35}
            />
            <input
              className="prediction-input"
              type="number"
              placeholder="floors"
              onChange={(e) =>
                setDetails({ ...details, floors: e.target.value })
              }
            />
          </div>
          <div className="prediction-room_box">
            <Image
              src="/area.png"
              alt="My Image"
              width={mobile ? 35 : 65}
              height={mobile ? 25 : 35}
            />
            <input
              className="prediction-input"
              type="number"
              placeholder="sqft area"
              onChange={(e) =>
                setDetails({ ...details, sqft_lot: e.target.value })
              }
            />
          </div>
        </div>
        <div className="prediction-input_container--result">
          <p className="prediction-result-text">
            {!isLoading ? "$" + price : <>loading...</>}
          </p>
        </div>
      </div>
      <div className="prediction-btn">
        <button
          href="/"
          className="primary-btn"
          onClick={() => dispatch(fetchPricePrediction(details))}
        >
          Predict Price
        </button>
      </div>
    </div>
  );
};

export default PredictionBox;
