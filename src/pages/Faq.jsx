import React from "react";

const faqs = [
  {
    question: "What is the purpose of this project?",
    answer:
      "This project aims to showcase our team and provide essential information in a structured and visually appealing manner.",
  },
  {
    question: "Who are the team members?",
    answer:
      "Our team consists of talented individuals including Nirajan Acharya, Rakesh Pandey, Sagar Niroula, and Pabitra Rai.",
  },
  {
    question: "How can I contribute to this project?",
    answer:
      "You can contribute by sharing ideas, suggesting improvements, or even participating in development via GitHub.",
  },
  {
    question: "What technologies are used?",
    answer:
      "This project is built using React, Tailwind CSS, and modern frontend development practices.",
  },
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-16 px-4">
      <div className="max-w-5xl mx-auto mt-12">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Find answers to the most common questions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
