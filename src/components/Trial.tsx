import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';

function Trial() {
  return (
     <main className="bg-tertiary p-3 md:p-5 lg:p-36">
          <section className="max-w-[1440px] mx-auto text-center text-white">
            <div>
              <h1 className="text-2xl leading-[77.5px] lg:text-[64px] font-bold">
              Try Whitepace<br/> today
              </h1>
              <p className='mt-3 lg:mt-8'>
              Get started for free.<br/>
              Add your whole team as your needs grow.
              </p>
    
              <div className="justify-center items-center">
                <button className="bg-[#4F9CF9] mt-3 lg:mt-8 text-secondary justify center items-center rounded-md px-5 lg:px-16 py-2 gap-2 lg:gap-3 lg:mt-3">
                  Try Taskey free<FaArrowRight />
                </button>
                <p className='mt-3 lg:mt-8'>On a big team? Contact sales</p>
              </div>
              <div className='flex mt-3 lg:mt-8 justify-center items-center text-center'>
                <Image src={"/images/socials.png"} alt='Socials' width={150} height={150}/>
              </div>
            </div>
          </section>
        </main>
  )
}

export default Trial
