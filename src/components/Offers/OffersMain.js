import React, { useState, useRef, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import PropertyListing from "./PropertyListing";
import Image from "next/image";
import { fetchProperties } from "@/features/propertySlice";
import { useDispatch, useSelector } from "react-redux";

SwiperCore.use([Autoplay, Pagination]);

const OffersMain = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobile, setMobile] = useState(false);
  const totalSlides = 7;
  const slidesPerView = mobile ? 1.5 : 3.5;
  const swiperRef = useRef(null);
  const dispatch = useDispatch();
  const { houses } = useSelector(
    (state) => state.propertyPrediction
  );

  const handleResize = () => {
    if (window.innerWidth < 800) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    dispatch(fetchProperties());
  }, []);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setActiveSlide(swiperRef.current.swiper.realIndex);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  const calculateIndicatorWidth = () => {
    return (
      (100 / totalSlides) * (slidesPerView / Math.floor(slidesPerView)) + "%"
    );
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && activeSlide > 0) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (
      swiperRef.current &&
      activeSlide < totalSlides - Math.floor(slidesPerView)
    ) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div>
      <div className="indicator-container">
        <div className="indication-line">
          <div
            className="indication-progress"
            style={{
              width: calculateIndicatorWidth(),
              transform: `translateX(${
                (activeSlide / (totalSlides - Math.floor(slidesPerView))) * 100
              }%)`,
            }}
          />
        </div>
        <div
          className={`indication-symbol ${activeSlide === 0 ? "disabled" : ""}`}
          onClick={handlePrevSlide}
        >
          <Image
            src="/back.png"
            alt="listing"
            width={mobile ? 15 : 20}
            height={mobile ? 15 : 20}
          />
        </div>
        <div
          className={`indication-symbol ${
            activeSlide >= totalSlides - Math.floor(slidesPerView)
              ? "disabled"
              : ""
          }`}
          onClick={handleNextSlide}
        >
          <Image
            src="/next.png"
            alt="listing"
            width={mobile ? 15 : 20}
            height={mobile ? 15 : 20}
          />
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerView}
        loop={false}
        modules={[Autoplay, Pagination]}
        autoplay={false}
        onSlideChange={handleSlideChange}
        ref={swiperRef}
      >
        {houses &&
          houses.slice(0,7).map((house) => {
            return (
              <SwiperSlide key={house.property_id}>
                <PropertyListing house={house} />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="swiper-pagination-container">
        <div
          className="swiper-pagination-indicator"
          style={{ width: calculateIndicatorWidth() }}
        />
      </div>
    </div>
  );
};

export default OffersMain;
