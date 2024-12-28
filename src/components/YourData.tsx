import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";

function YourData() {
  return (
     <main className="bg-quaternary text-[#212529] lg:p-24">
              <section className="max-w-[1440px] mx-auto">
                <div className=" grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
                  <div>
                    <h1 className="text-2xl leading-[77.5px] lg:text-[64px] font-bold">
                    100% your data
                    </h1>
                    <p>
                    The app is open source and your notes are saved to an open format, so you'll always have access<br/> to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but<br/>
                     yourself can access them.
                    </p>
                    <button className="flex bg-[#4F9CF9] text-secondary rounded-md px-4 py-2 gap-2 lg:gap-3 lg:mt-3">
                      Read more <FaArrowRight />
                    </button>
                  </div>
                  <div>
                    <Image
                      src="/images/data.png"
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

export default YourData
