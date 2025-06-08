import React, { useState } from "react";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="faq-item" className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-heading text-h4 text-gray-900 focus:outline-none"
        onClick={toggleOpen}
      >
        <span>{question}</span>
        <span
          className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          {/* Иконка стрелки или плюс/минус */}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </span>
      </button>
      {isOpen && <div className="mt-2 text-body text-gray-700">{answer}</div>}
    </div>
  );
}

export default FAQItem;
