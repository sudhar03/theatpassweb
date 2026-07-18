const FeatureSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      ),
      title: 'Qualified sales calls',
      description: 'Booked straight onto your calendar.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      title: 'Booked appointments',
      description: 'Real people, ready to talk.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      ),
      title: 'Buyer-intent prospecting',
      description: 'We find the ones already looking for you.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      title: 'Personalized cold email sequences',
      description: 'Written in your voice, not copy-paste spam.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
        </svg>
      ),
      title: 'CRM updates & tracking',
      description: 'Every lead logged, nothing slips through.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
      title: 'Weekly optimization reports',
      description: 'You see exactly what\'s working.'
    }
  ];

  return (
    <section id="what-you-get" className="py-section bg-white">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6 font-display">What you get</h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto mb-4">Everything, built around one job: calls that close.</p>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">Every month, here's what shows up for you.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-light-pale rounded-3xl p-6 md:p-8 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-cta-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cta-blue/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">You don't lift a finger on outreach. You just show up to the calls.</p>
          <a 
            href="https://calendly.com/chandru-theatpass/discovery-call" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cta-blue text-white font-bold text-lg rounded-full hover:bg-cta-hover transition-all hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-cta-blue/30 group"
          >
            Book your free strategy call
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
