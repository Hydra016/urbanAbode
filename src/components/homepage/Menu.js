import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Link onClick={() => setOpen(true)} className="mobile-menu" href="/">
        <Image src="/menu.png" alt="Menu" width={25} height={25} />
      </Link>
      <div className={open ? "menu-opened" : "menu-opened-out"}>
        <Link onClick={() => setOpen(false)} className="mobile-menu" href="/">
          <Image src="/cancel.png" alt="Menu" width={25} height={25} />
        </Link>
        <div className="menu-links-container">
          <Link className="menu-link" href="/">
            Top offers
          </Link>
          <Link className="menu-link" href="/">
            Search in offers
          </Link>
          <Link className="menu-link" href="/">
            References
          </Link>
          <Link className="menu-link" href="/">
            About us
          </Link>
          <Link className="menu-link" href="/">
            Our team
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
