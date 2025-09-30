import { ArrowRight } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="w-full flex justify-center px-4">
      <div
        className="
          flex flex-col items-center justify-center text-center
          bg-blue-600 text-white rounded-[24px]
          mx-auto
          
          /* Mobile */
          w-[358px] h-[236px] gap-4 p-4
          
          /* Tablet */
          md:w-[688px] md:h-[278px] md:gap-6 md:p-10
          
          /* Desktop */
          lg:w-[1360px] lg:h-[404px] lg:gap-8 lg:p-20
        "
      >
        {/* Heading */}
        <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">
          Get In Touch
        </h2>

        {/* Description */}
        <p className="text-xs md:text-sm lg:text-base max-w-2xl">
          Contact us now to enquire our plumbing services, whether you have a
          commercial project that requires support, or a domestic plumbing task
          that needs the attention of a trusted professional.
        </p>

        {/* CTA Button */}
        <button
          className="
            inline-flex items-center justify-center gap-2
            bg-white text-blue-600 font-semibold
            text-xs md:text-sm lg:text-base
            px-4 md:px-6 lg:px-8 py-2 md:py-3
            rounded-md shadow hover:bg-gray-100 transition
          "
        >
          Book a Professional Plumber
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
