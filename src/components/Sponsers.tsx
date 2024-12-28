import React from 'react'
import Image from 'next/image'

function Sponsers() {
  return (
     <main className="bg-quaternary p-3 md:p-5 lg:p-16">
          <section className="max-w-[1440px] mx-auto text-center text-tertiary">
            <div>
              <h1 className="text-2xl leading-[77.5px] lg:text-[64px] font-bold">
                Our Sponsers
              </h1>
              </div>
              <div>
              </div>
              <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center">
                <Image src={'/images/sponser1.png'} alt="sponser1" className="w-full h-full" />
                <Image src={'/images/sponser2.png'} alt="sponser2" className="w-full h-full" />
                <Image src={'/images/sponser3.png'} alt="sponser3" className="w-full h-full" />
                <Image src={'/images/sponser4.png'} alt="sponser4" className="w-full h-full" />
              </div>
          </section>
        </main>
  )
}

export default Sponsers
