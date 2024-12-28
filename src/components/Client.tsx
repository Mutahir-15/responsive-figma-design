import React from 'react'
import Image from 'next/image'


function Client() {
  return (
   <main className="bg-quaternary text-[#212529] lg:p-24">
         <div className="text-center mb-16"> {/* Added bottom margin for spacing */}
           <h1 className="text-2xl leading-[77.5px] lg:text-[64px] font-bold">
             What Our Clients Says
           </h1>
         </div>
         <section className="max-w-[1440px] mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-center">
             <div>
                <Image src={"/images/Client1.png"} alt='Client Review' width={550} height={550}/>
             </div>
             <div>
             <div>
                <Image src={"/images/Client2.png"} alt='Client Review' width={500} height={500}/>
             </div>
             </div>
             <div>
             <div>
                <Image src={"/images/Client3.png"} alt='Client Review' width={500} height={500}/>
             </div>
             </div>
           </div>
         </section>
       </main>
  )
}

export default Client
