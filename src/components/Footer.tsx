import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-tertiary text-white lg:p-16'>
      <div className='max-w-[1440px] mx-auto gap-2 grid grid-cols-1 lg:grid-cols-5 border-b-2'>
        <div>
          <Image className='mb-0 lg:mb-5' src={"/images/logo.png"} alt='Logo' width={191} height={34} />
          <p>whitepace was created for<br/> the new ways we live <br/>and work. We make a better<br/> workspace around the world</p>
        </div>
        <div>
          <h1 className='font-bold mb-0 lg:mb-5'>Product</h1>
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Customer stories</li>
          </ul>
        </div>
        <div>
          <h1 className='font-bold mb-0 lg:mb-5'>Resources</h1>
          <ul>
            <li>Blog</li>
            <li>Guides & tutorials</li>
            <li>Help center</li>
          </ul>
        </div>
        <div>
          <h1 className='font-bold mb-0 lg:mb-5'>Company</h1>
          <ul>
            <li>About us</li>
            <li>Career</li>
            <li>Media kit</li>
          </ul>
        </div>
        <div>
          <h1 className='text-[28px] mb-0 lg:mb-5'>Try It Today</h1>
          <p className='mb-0 lg:mb-5'>Get started for free.
          Add your <br/>whole team as your needs grow.</p>
          <div className=' flex'>
           <button className="flex bg-[#4F9CF9] justify-center items-center text-secondary rounded-md px-4 py-2 gap-2 lg:gap-3 lg:mt-3 lg:mb-3">
                        Start today <FaArrowRight />
                      </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
