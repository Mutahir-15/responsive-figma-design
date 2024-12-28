import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Pricing() {
  return (
    <main className="bg-quaternary text-[#212529] lg:p-24">
      <div className="text-center mb-16"> {/* Added bottom margin for spacing */}
        <h1 className="text-2xl leading-[77.5px] lg:text-[64px] font-bold">
          Choose your Plan
        </h1>
        <p className="text-lg lg:text-xl">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the
          <br /> right plan for you.
        </p>
      </div>
      <section className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-center">
          <div className="border-yellow-400 border-2 w-full lg:w-[472px] h-auto lg:h-[634px] flex flex-col justify-center items-center p-6 rounded-md text-center bg-white">
            <h4 className="text-xl font-semibold mb-2">Free</h4>
            <h1 className="text-4xl font-bold mb-4">$0</h1>
            <p className="text-base mb-4">Capture ideas and find them quickly</p>
            <ul className="mb-8">
              <li className="flex items-center mb-2">
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Sync unlimited devices
              </li>
              <li className='flex items-center mb-2 text-left'>
                <IoMdCheckmarkCircleOutline className="mr-2" />
                10 GB monthly uploads
              </li>
              <li className='flex items-center mb-2 text-left'>
                <IoMdCheckmarkCircleOutline className="mr-2" />
                200 MB max. note size
              </li>
              <li className='flex items-center mb-2 text-left'>
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Customize Home dashboard and access extra widgets
              </li>
              <li className='flex items-center mb-2 text-left'>
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Connect primary Google Calendar account
              </li>
              <li className='flex items-center text-left'>
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Add due dates, reminders, and notifications to your tasks
              </li>
            </ul>
            <button className="border-yellow-400 border-2 p-2 lg:p-3 rounded-md px-3 hover:bg-yellow-400 transition duration-300">
              Get started
            </button>
          </div>
          <div className="bg-tertiary text-white border-2 w-full lg:w-[472px] h-auto lg:h-[761px] flex flex-col justify-center items-center p-6 rounded-md text-center">
            <h4 className="text-xl font-semibold mb-2">Personal</h4>
            <h1 className="text-4xl font-bold mb-4">$11.99</h1>
            <p className="text-base mb-4">
              Keep home and family on track
            </p>
            <ul className="mb-8">
              <li className="flex items-center mb-2">
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Sync unlimited devices
              </li>
              <li className='flex items-center mb-2 text-left'>
                <IoMdCheckmarkCircleOutline className="mr-2" />
                20 GB monthly uploads
              </li>
              <li className='flex items-center mb-2 text-left'>
                <IoMdCheckmarkCircleOutline className="mr-2" />
                500 MB max. note size
              </li>
              <li className='flex items-center mb-2 text-left'>
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Customize Home dashboard and access extra widgets
              </li>
              <li className='flex items-center mb-2 text-left'>
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Connect primary Google Calendar account
              </li>
              <li className='flex items-center text-left'>
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Add due dates, reminders, and notifications to your tasks
              </li>
            </ul>
           <button className="flex bg-[#4F9CF9] text-secondary rounded-md px-4 py-2 gap-2 lg:gap-3 lg:mt-3">
                         Get started
                       </button>
          </div>
          <div className="border-yellow-400 border-2 w-full lg:w-[472px] h-auto lg:h-[634px] flex flex-col justify-center items-center p-6 rounded-md text-center bg-white">
            <h4 className="text-xl font-semibold mb-2">Organization</h4>
            <h1 className="text-4xl font-bold mb-4">$49.99</h1>
            <p className="text-base mb-4">Capture ideas and find them quickly</p>
            <ul className="mb-8">
              <li className="flex items-center mb-2">
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Sync unlimited devices
              </li>
              <li className='flex items-center mb-2 text-left'>
                <IoMdCheckmarkCircleOutline className="mr-2" />
                50 GB monthly uploads
              </li>
              <li className='flex items-center mb-2 text-left'>
                <IoMdCheckmarkCircleOutline className="mr-2" />
                1 GB max. note size
              </li>
              <li className='flex items-center mb-2 text-left'>
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Customize Home dashboard and access extra widgets
              </li>
              <li className='flex items-center text-left'>
                <IoMdCheckmarkCircleOutline className="mr-2" />
                Add due dates, reminders, and notifications to your tasks
              </li>
            </ul>
            <button className="border-yellow-400 border-2 p-2 lg:p-3 rounded-md px-3 hover:bg-yellow-400 transition duration-300">
              Get started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pricing;
