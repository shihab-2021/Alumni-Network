import React, { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How can I join the alumni network?",
      answer:
        "To join our alumni network, simply click on the Sign Up button on the homepage and fill out the registration form. Once registered, you'll have access to all the features and benefits of our alumni network.",
    },
    {
      question: "Can I update my contact information in the alumni network?",
      answer:
        "Yes, you can easily update your contact information in the alumni network. Simply log in to your account, navigate to the Profile section, and edit your contact details. Make sure to save the changes, and your updated information will be reflected across the network.",
    },
    {
      question: "How can I stay connected with fellow alumni?",
      answer:
        "Our alumni network provides various ways to stay connected with fellow alumni. You can join interest-based groups, participate in discussions on the community forums, and attend alumni events. Additionally, we encourage you to connect with other alumni through our integrated messaging system and explore the alumni directory to find and reach out to your classmates.",
    },
    // Add more FAQs as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 pt-8 pb-16 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border bg-gradient-to-bl from-white  via-white to-sky-100  border-gray-300 rounded-lg p-6"
            >
              <button
                className="flex items-center justify-between w-full focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-2xl font-bold text-gray-800">
                  {faq.question}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition-transform transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <p className="text-gray-600 mt-2 text-lg">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
