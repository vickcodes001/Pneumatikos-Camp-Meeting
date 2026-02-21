import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the purpose of PCM?",
    answer:
      "PCM is a meeting designed to build soldiers for Christ and strengthen young leaders for the work of ministry.",
  },
  {
    question: "Who can attend PCM?",
    answer:
      "PCM is restricted to young people and adults. Recent high school graduates and university students are notable attendees of PCM.",
  },
  {
    question: "What should I bring to the meeting?",
    answer:
      "It is important to bring your personal utilities, a notepad, a Bible, and a heart ready to receive. Kindly ensure you book your accommodation and confirm your spot through registration.",
  },
  {
    question: "Why should I attend PCM 2026?",
    answer:
      "Pneumatikos Camp Meeting has a long history of being a remarkable gathering of believers, a retreat away from daily routines to reflect on God's plan for you, and a time of intimate fellowship with God and the Church.\n\nIt is an opportunity to gain deep insights into doctrinal matters, biblical principles, and scriptural epistemology.\n\nWith sessions of uplifting worship and heartfelt prayers, it is a meeting of appointment, encounters, and repositioning of hearts.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-40 px-4 overflow-hidden">
      {/* Background Color */}
      <div className="absolute inset-0 bg-gray-900 z-0"></div>

      {/* Subtle Background Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="images/gallery-1.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Soft Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900 z-0"></div> */}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mt-4">
            Everything you need to know about PCM 2026
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl overflow-hidden bg-gray-800/80 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left text-white font-semibold text-lg"
              >
                {faq.question}
                <span className="text-amber-500 text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  {faq.answer.split("\n").map((line, i) => (
                    <p key={i} className="mb-3">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
