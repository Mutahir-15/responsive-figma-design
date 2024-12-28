import React from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-tertiary p-5 lg:p-5">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
        </div>

        {/* Navigation and Buttons */}
        <div className="hidden lg:flex flex-grow justify-center items-center">
          <ul className="flex justify-center items-center text-quaternary gap-4">
            <li className="hover:text-blue-500 cursor-pointer flex items-center">
              Products <IoIosArrowDown />
            </li>
            <li className="hover:text-blue-500 cursor-pointer flex items-center">
              Solutions <IoIosArrowDown />
            </li>
            <li className="hover:text-blue-500 cursor-pointer flex items-center">
              Resources <IoIosArrowDown />
            </li>
            <li className="hover:text-blue-500 cursor-pointer flex items-center">
              Pricing <IoIosArrowDown />
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="bg-[#FFE492] text-primary lg:p-3 lg:px-5 rounded-md">
            Login
          </button>
          <button className="flex bg-[#4F9CF9] text-secondary justify-center items-center rounded-md px-3 lg:p-3 py-2 gap-2 lg:gap-3">
            Try Whitespace Free <FaArrowRight />
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <Sheet>
          <SheetTrigger className="block lg:hidden">
            <Menu className="text-white" />
          </SheetTrigger>
          <SheetContent className="p-4 lg:p-6">
            <ul className="flex flex-col gap-4 lg:gap-6 text-lg lg:text-base">
              <li className="hover:text-blue-500 cursor-pointer">Products</li>
              <li className="hover:text-blue-500 cursor-pointer">Solutions</li>
              <li className="hover:text-blue-500 cursor-pointer">Resources</li>
              <li className="hover:text-blue-500 cursor-pointer">Pricing</li>
            </ul>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mt-6 lg:mt-0">
              <button className="bg-[#FFE492] text-primary px-4 py-2 rounded-md lg:ml-4">
                Login
              </button>
              <button className="flex bg-[#4F9CF9] text-secondary justify-center items-center rounded-md px-4 py-2 gap-2 lg:gap-3 lg:ml-4">
                Try Whitespace Free <FaArrowRight />
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navbar;
