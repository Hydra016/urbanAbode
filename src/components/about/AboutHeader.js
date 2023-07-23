import React, { useEffect, useState } from "react";
import Image from "next/image";

const AboutHeader = () => {
  const [mobile, setMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 800) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    // Handle initial window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="about-header">
      <Image
        src="/about.png"
        alt="listing"
        width={mobile ? 0 : 488}
        height={mobile ? 0 : 316}
      />
      <div className="about-text-container">
        <span className="text-primary">About us</span>
        <span className="text-secondary text-about">
          <p>
            <b>Urban Abode</b> is a place where dreams find a home. We are a
            forward-thinking real estate company, committed to simplifying your
            property journey. Our user-friendly approach and reliable data
            empower buyers to discover their dream homes effortlessly. With
            UrbanAbode, your satisfaction is our top priority, and we take
            pride in guiding you towards your perfect place to call home.
          </p>
        </span>
      </div>
    </div>
  );
};

export default AboutHeader;