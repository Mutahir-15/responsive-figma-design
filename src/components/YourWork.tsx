import React from "react";
import { FaArrowRight } from "react-icons/fa";

function YourWork() {
  return (
    <main className="bg-tertiary p-3 md:p-5 lg:p-16">
      <section className="max-w-[1440px] mx-auto text-center text-white">
        <div>
          <h1 className="text-2xl leading-[77.5px] lg:text-[64px] font-bold">
            Your work, everywhere you are
          </h1>
          <p>
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and
            <br />
            OneDrive. The app is available on Windows, macOS, Linux, Android and
            iOS. A terminal app is also available!
          </p>

          <div className="flex justify-center items-center">
            <button className="bg-[#4F9CF9] text-secondary justify center items-center rounded-md px-10 py-2 gap-2 lg:gap-3 lg:mt-3">
              Try Taskey <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default YourWork;
