import React from 'react'
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function WorkManagement2() {
  return (
    <main className="bg-quaternary text-[#212529] lg:p-24">
              <section className="max-w-[1440px] mx-auto">
                <div className=" grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
                  <div>
                    <Image
                      src="/images/wm2.png"
                      alt="Hero Section Image Container"
                      width={824}
                      height={549}
                    />
                  </div>
                  <div className='lg:ml-5'>
                    <h1 className="text-2xl leading-[77.5px] lg:text-[64px] font-bold">
                    Work together
                    </h1>
                    <p className='mt-5 lg:mt-10'>
                    With whitepace, share your notes with your colleagues and collaborate on them.<br/>
You can also publish a note to the internet and share the URL with others.

                    </p>
                    <button className="flex mt-5 lg:mt-10 mb-5 bg-[#4F9CF9] text-secondary rounded-md px-4 py-2 gap-2 lg:gap-3">
                      Try it now <FaArrowRight />
                    </button>
                  </div>
                </div>
              </section>
            </main>
  )
}

export default WorkManagement2
