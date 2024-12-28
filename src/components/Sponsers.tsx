import React from 'react'
import Image from 'next/image'

function Sponsers() {
  return (
     <main className="bg-quaternary p-3 md:p-5 lg:p-36">
          <section className="max-w-[1440px] mx-auto text-center text-tertiary">
            <div>
              <h1 className="text-2xl leading-[77.5px] lg:text-[64px] font-bold">
                Our Sponsers
              </h1>
              </div>
              <div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5 lg:mt-16 lg:justify-between lg:items-center">
                <Image src={'/images/sponser1.png'} alt="sponser1" width={50} height={50}/>
                <Image src={'/images/sponser2.png'} alt="sponser2" width={150} height={150}/>
                <Image src={'/images/sponser3.png'} alt="sponser3" width={150} height={150}/>
                <Image src={'/images/sponser4.png'} alt="sponser4" width={150} height={150}/>
              </div>
          </section>
        </main>
  )
}

export default Sponsers
