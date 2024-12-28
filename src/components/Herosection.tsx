import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Herosection() {
  return (
    <main className="bg-tertiary text-white p-3 lg:p-24">
      <section className="max-w-[1440px] mx-auto">
        <div className=" grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
          <div>
            <h1 className="text-2xl leading-[77.5px] lg:text-[64px] font-bold">
              Get More Done with whitepace
            </h1>
            <p>
              Project management software that enables your teams to
              collaborate, plan,
              <br /> analyze and manage everyday tasks
            </p>
            <button className="flex bg-[#4F9CF9] text-secondary rounded-md px-4 py-2 gap-2 lg:gap-3 lg:mt-3">
              Try Whitespace Free <FaArrowRight />
            </button>
          </div>
          <div>
            <Image
              src="/images/hs-image.png"
              alt="Hero Section Image Container"
              width={824}
              height={549}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Herosection;
