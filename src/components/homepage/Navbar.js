import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 800) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-links">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="My Image"
            width={mobile ? 35 : 100}
            height={mobile ? 25 : 50}
          />
        </Link>
        <div className="navbar-items">
          <Link className="navbar-link" href="/">
            Top offers
          </Link>
          <Link className="navbar-link" href="/">
            Search in offers
          </Link>
          <Link className="navbar-link" href="/">
            References
          </Link>
          <Link className="navbar-link" href="/">
            About us
          </Link>
          <Link className="navbar-link" href="/">
            Our team
          </Link>
        </div>
      </div>
      <div>
        <Link className="primary-btn contact-btn" href="/">
          Contact us
        </Link>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
