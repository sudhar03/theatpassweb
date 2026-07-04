import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How is this different from a normal lead agency?',
      answer: 'Most lead agencies start with a list and try to force demand. theAtpass starts with buying intent. We look for people already showing signs they need what you sell, then reach them with personalized outreach.'
    },
    {
      question: 'What does "qualified" actually mean?',
      answer: 'Qualified means the prospect matches the criteria we agree on before outreach starts — usually niche, company type, budget fit, role, and relevant buying signal.'
    },
    {
      question: 'Do I pay if no one books or shows?',
      answer: 'No. Your first 3 qualified calls are free. After that, you only pay when a qualified prospect actually shows up. No-shows are not charged.'
    },
    {
      question: 'Am I locked into a contract?',
      answer: 'No. There are no long-term contracts. You can cancel anytime.'
    },
    {
      question: 'Is this really built for coaches and consultants like me?',
      answer: 'Yes. The system is specifically built for founder-led B2B coaches, consultants, and service businesses selling high-ticket services.'
    }
  ];

  return (
    <section id="faq" className="py-section bg-white">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6 font-display">Questions</h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">Straight answers.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-light-pale rounded-2xl border border-border overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/50 transition-colors"
            >
              <span className="font-semibold text-text-dark text-lg">{faq.question}</span>
              <div className="flex items-center gap-2">
                {openIndex === index ? (
                  <svg 
                    className="w-6 h-6 text-cta-blue transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/>
                  </svg>
                ) : (
                  <svg 
                    className="w-6 h-6 text-cta-blue transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                  </svg>
                )}
              </div>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6">
                <p className="text-text-muted leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
