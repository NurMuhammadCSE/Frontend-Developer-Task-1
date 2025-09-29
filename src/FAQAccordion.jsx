import React, { useState } from "react";

const faqs = [
  {
    question: "Do plumbers deal with heating?",
    answer:
      "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
  {
    question: "Do you charge a call out fee?",
    answer: "Yes, depending on the job and location, a call-out fee may apply.",
  },
  {
    question: "How quickly can your company send out an engineer?",
    answer: "We usually send an engineer within 1-2 hours for emergencies.",
  },
  {
    question: "What should I do if I get a water leak?",
    answer: "Turn off the main water supply immediately and call us.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="
        bg-white 
        w-full
        flex justify-center
      "
    >
      <div
        className="
          flex flex-col mx-auto
          w-full
          max-w-[1600px]    /* Desktop width */
          md:max-w-[768px] /* Tablet */
          sm:max-w-[390px] /* Mobile */

          /* Padding per screen size */
          px-4 sm:px-4 sm:pt-8 sm:pb-8
          md:px-10 md:py-10
          lg:px-[120px] lg:pt-[120px] lg:pb-[60px]

          /* Gap per screen size */
          gap-8 sm:gap-8 md:gap-10 lg:gap-20
        "
      >
        <h2
          className="
            text-xl sm:text-xl md:text-2xl lg:text-3xl 
            font-bold text-gray-900 text-center
          "
        >
          Frequently asked questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question Row */}
              <div className="flex justify-between items-center">
                <h3
                  className="
                    text-sm sm:text-sm md:text-base lg:text-lg 
                    font-medium text-gray-900
                  "
                >
                  {faq.question}
                </h3>
                <span className="text-gray-500 text-lg">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </div>

              {/* Answer */}
              {openIndex === index && (
                <p
                  className="
                    mt-2 
                    text-xs sm:text-sm md:text-base 
                    text-gray-600
                  "
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
