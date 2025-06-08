import React from "react";
import { faqData } from "../../data/faq";
import FAQItem from "./FAQItem";

function FAQList() {
  return (
    <div className="space-y-4">
      {faqData.map((item) => (
        <FAQItem
          key={item.id || item.question}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}

export default FAQList;
