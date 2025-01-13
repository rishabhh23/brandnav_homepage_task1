"use client";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is the purpose of email verifier?",
    answer:
      "An email verifier checks the validity and deliverability of an email address.",
  },
  {
    question: "How do you find email addresses?",
    answer:
      "Email addresses can be found using tools like LinkedIn, email scraping, or email-finding services.",
  },
  {
    question: "What is the purpose of email verifier?",
    answer:
      "An email verifier checks the validity and deliverability of an email address.",
  },
  {
    question: "How do you find email addresses?",
    answer:
      "Email addresses can be found using tools like LinkedIn, email scraping, or email-finding services.",
  },
  {
    question: "What is the purpose of email verifier?",
    answer:
      "An email verifier checks the validity and deliverability of an email address.",
  },
  {
    question: "How do you find email addresses?",
    answer:
      "Email addresses can be found using tools like LinkedIn, email scraping, or email-finding services.",
  },
];

const FAQArea: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="text-[#616161] max-w-4xl mx-auto m-5 p-4 shadow-lg rounded-lg bg-white">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left py-4 px-2 flex justify-between items-center focus:outline-none"
          >
            <span className="text-lg font-medium">{faq.question}</span>
            <span className="text-xl">
              {openIndex === index ? <FiMinus /> : <FiPlus />}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-2 pb-4 text-gray-600">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQArea;
