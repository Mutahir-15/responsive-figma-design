import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-primary lg:p-5">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center">
        {/* Logo section */}
        <div>
          <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
        </div>
        {/* Navigation links */}
        <div className="flex">
          <ul className="flex justify-center items-center text-secondary gap-2">
            <li>Products</li> <IoIosArrowDown />
            <li>Solutions</li> <IoIosArrowDown />
            <li>Resources</li> <IoIosArrowDown />
            <li>Pricing</li> <IoIosArrowDown />
          </ul>
          {/* Buttons Here */}
          <button className="bg-[#FFE492] text-primary lg:p-3 lg:px-5 rounded-md lg:ml-4">Login</button>
          <button className="flex bg-[#4F9CF9] text-secondary justify-center items-center rounded-md lg:px-3 lg:ml-4">Try Whitespace Free <FaArrowRight /></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
