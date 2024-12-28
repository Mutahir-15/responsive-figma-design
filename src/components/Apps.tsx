import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";

function Apps() {
  return (
     <main className="bg-tertiary text-white lg:p-24 mb-5">
                  <section className="max-w-[1440px] mx-auto">
                    <div className=" grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
                      <div>
                        <Image
                          src="/images/apps.png"
                          alt="Hero Section Image Container"
                          width={824}
                          height={549}
                        />
                      </div>
                      <div className='lg:ml-5'>
                        <h1 className="text-2xl leading-[77.5px] lg:text-[64px] font-bold">
                        Work with Your<br/> Favorite Apps Using<br/> whitepace
                        </h1>
                        <p>
                        Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to<br/>
                         have all the tools you need for your project success.
                        </p>
                        <button className="flex mt-5 lg:mt-10 mb-6  bg-[#4F9CF9] text-secondary rounded-md px-4 py-2 gap-2 lg:gap-">
                          Read more <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </section>
                </main>
  )
}

export default Apps
