import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className='bg-tertiary text-white lg:p-24'>
      <div className='max-w-[1440px] mx-auto gap-2 grid grid-cols-1 lg:grid-cols-5 border-b-2'>
        <div>
          <Image className='mb-0 lg:mb-5' src={"/images/logo.png"} alt='Logo' width={191} height={34} />
          <p>Whitespace was created for<br/> the new ways we live <br/>and work. We make a better<br/> workspace around the world</p>
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
            <li>Careers</li>
            <li>Media kit</li>
          </ul>
        </div>
        <div>
          <h1 className='text-[28px] mb-0 lg:mb-5'>Try It Today</h1>
          <p className='mb-0 lg:mb-5'>Get started for free. Add your <br/>whole team as your needs grow.</p>
          <button className="flex bg-[#4F9CF9] justify-center items-center text-secondary rounded-md px-4 py-2 lg:gap-3 lg:mt-3 lg:mb-3">
            Start Today <FaArrowRight />
          </button>
        </div>
      </div>
      <div className='max-w-[1440px] mx-auto mt-2 lg:mt-5 flex flex-col lg:flex-row justify-between items-center'>
        <ul className='flex flex-wrap justify-start items-center gap-5 mb-5 lg:mb-0'>
          <li className='flex items-center gap-1'>
            <IoGlobeOutline /> English <IoIosArrowDown />
          </li>
          <li>Terms & Privacy</li>
          <li>Security</li>
          <li>Status</li>
          <li>©2021 Whitespace LLC.</li>
        </ul>
        <div className='flex justify-center lg:justify-end items-center lg:gap-5'>
          <FaFacebook size={25} />
          <FaTwitter size={25} />
          <FaLinkedin size={25} />
        </div>
      </div>
    </div>
  )
}

export default Footer;
