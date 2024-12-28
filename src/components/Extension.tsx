import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa';

function Extension() {
  return (
    <main className="bg-tertiary text-white p-3 lg:p-24">
          <section className="max-w-[1440px] mx-auto">
            <div className=" grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
              <div>
                <h1 className="text-2xl leading-[77.5px] lg:text-[64px] font-bold">
                  Use as Extension
                </h1>
                <p>
                Use the web clipper extension, available on Chrome and Firefox, to save web pages<br/> or take screenshots as notes.

                </p>
                <button className="flex bg-[#4F9CF9] text-secondary rounded-md px-4 py-2 gap-2 lg:gap-3 lg:mt-3">
                  Lets Go <FaArrowRight />
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
  )
}

export default Extension
