import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: "What documents are required to rent a car?",
    answer: "You need a valid driver's license, an ID proof (like Aadhaar or Passport), and a credit/debit card for payment."
  },
  {
    question: "Is there a minimum age requirement?",
    answer: "Yes, you must be at least 21 years old to rent a car from R&R Cars."
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer: "Yes, you can cancel or reschedule up to 24 hours before your scheduled pick-up time without any charges."
  },
  {
    question: "Do you offer doorstep delivery?",
    answer: "Absolutely! We offer free delivery and pickup within Panipat city limits."
  },
  {
    question: "What happens in case of a breakdown?",
    answer: "We provide 24/7 roadside assistance. Contact our support immediately, and we'll handle the rest."
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-yellow-400 flex justify-center items-center px-4 py-10">
      <div className="max-w-3xl w-full bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 border-b border-yellow-500 pb-2">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-yellow-600 rounded-md p-4 bg-gray-800">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <div className="text-yellow-400">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
              {openIndex === index && (
                <p className="mt-3 text-yellow-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
