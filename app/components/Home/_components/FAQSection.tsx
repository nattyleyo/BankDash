import { useState } from "react";

// FAQ Section
export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How secure is the platform?",
      answer:
        "We use the latest encryption standards and security measures to ensure your data is always safe.",
    },
    {
      question: "Can I try the platform for free?",
      answer:
        "Yes! We offer a free Basic Plan for individuals with basic financial needs.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards and PayPal.",
    },
    {
      question: "How do I upgrade my plan?",
      answer:
        "You can upgrade your plan at any time through your account settings.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl font-extrabold text-[#343C6A] dark:text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#2C2C33] shadow-md rounded-lg p-6"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-[#343C6A] dark:text-white">
                  {faq.question}
                </h3>
                <span className="text-[#1814f6] text-2xl">
                  {openFAQ === index ? "-" : "+"}
                </span>
              </div>
              {openFAQ === index && (
                <p className="text-gray-600 dark:text-gray-400 mt-4">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
