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
        <Link onClick={() => setOpen(false)} className="menu-link" href="#home">
            Home
          </Link>
          <Link onClick={() => setOpen(false)} className="menu-link" href="#offers">
            Top offers
          </Link>
          <Link onClick={() => setOpen(false)} className="menu-link" href="#about">
            About us
          </Link>
          <Link onClick={() => setOpen(false)} className="menu-link" href="#">
            Our team
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
