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
                    Project <br/>Management
                    </h1>
                    <p>
                    Images, videos, PDFs and audio files are supported. Create math expressions and <br/>diagrams directly from the app. Take photos with the mobile app and save them<br/> to a note.
                    </p>
                    <button className="flex bg-[#4F9CF9] text-secondary rounded-md px-4 py-2 gap-2 lg:gap-3 lg:mt-3">
                      Get Started <FaArrowRight />
                    </button>
                  </div>
                </div>
              </section>
            </main>
  )
}

export default WorkManagement2
