const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'We listen',
      description: 'We map your competitors and niche influencers, then track who\'s engaging with their content, ads, lead magnets, and webinars, plus signals like hiring, funding, and growth announcements.',
      icon: (
        <svg className="w-8 h-8 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'We qualify',
      description: 'We check each one first: company size, budget fit, and buying signal. You only ever talk to people who genuinely fit and genuinely might buy.',
      icon: (
        <svg className="w-8 h-8 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'We reach out',
      description: 'Personalized cold email, written in your voice, sent when the timing is right — backed up with LinkedIn touchpoints when it strengthens the signal.',
      icon: (
        <svg className="w-8 h-8 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'You show up',
      description: 'To 10+ calls a month with prospects already in buying mode. You just bring your offer and help.',
      icon: (
        <svg className="w-8 h-8 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how" className="py-section bg-light-bg">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6 font-display">How it works</h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto mb-4">Four moves between you and a full calendar.</p>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">No volume games. No spray-and-pray. A deliberate system tuned for one outcome: calls with people already in buying mode.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-6 md:p-8 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-cta-blue/10 rounded-2xl flex items-center justify-center group-hover:bg-cta-blue/20 transition-colors">
                  {step.icon}
                </div>
                <div className="text-3xl font-bold text-cta-blue">{step.number}</div>
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">{step.title}</h3>
              <p className="text-text-muted leading-relaxed text-sm md:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
