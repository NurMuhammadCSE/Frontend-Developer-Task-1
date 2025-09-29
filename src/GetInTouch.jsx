import React from "react";
import { ArrowRight } from "lucide-react"; // icon

const GetInTouch = () => {
  return (
    <section className="w-full flex justify-center bg-white">
      <div
        className="
          flex flex-col items-center justify-center text-center 
          bg-[#0057FF] text-white rounded-xl w-full
          max-w-[1600px]
          
          /* Desktop */
          lg:gap-[120px] lg:p-[120px] lg:h-[644px]

          /* Tablet */
          md:gap-[40px] md:p-10 md:h-[358px]

          /* Mobile */
          sm:px-4 sm:py-8 sm:h-[300px]
        "
      >
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Get In Touch
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg">
          Contact us now to enquire our plumbing services, whether you have a
          commercial project that requires support, or a domestic plumbing task
          that needs the attention of a trusted professional.
        </p>

        {/* CTA Button */}
        <button
          className="
            inline-flex items-center gap-2
            bg-white text-[#0057FF] font-medium
            px-4 sm:px-6 py-2 sm:py-3
            rounded-md shadow-sm
            hover:bg-gray-100 transition
            text-sm sm:text-base
          "
        >
          Book a Professional Plumber
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default GetInTouch;
