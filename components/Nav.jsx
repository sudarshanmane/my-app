import Link from "next/link.js";
import React from "react";

const Nav = () => {
  return (
    <header className="flex justify-between border p-3 ">
      <div>Next</div>
      <div className="flex gap-2">
        <Link href="/about">About</Link>
        <Link href="/service">Service</Link>
        <Link href="/about/teams">Teams</Link>
        <Link href=""></Link>
      </div>
    </header>
  );
};

export default Nav;
