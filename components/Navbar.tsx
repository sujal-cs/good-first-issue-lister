import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between h-15 items-center mt-1.5 w-[80vw] text-xl cursor-pointer">
      <nav className="font-bold flex items-center gap-1">
        <div className="flex items-center gap-1">
          <Image 
            src="/code.svg"
            alt="code"
            width="30"
            height="30"
            />
          <div className="text-lg md:text-xl">Good-First-Issue-Lister</div>
        </div>
      </nav>
      <nav>
        <ul className="flex list-none gap-2 font-bold items-center">
          <li>
            <Link
              href="https://github.com"
              className="flex items-center justify-center gap-1"
            >
              <Image
                src="/branch.svg"
                alt="My SVG Image"
                width="21"
                height="21"
                />
              <div className="text-lg md:text-xl">GitHub</div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
