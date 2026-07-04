const ShiftSection = () => {
  const signals = [
    { label: 'Posts/comments', icon: '💬' },
    { label: 'Webinar attendees', icon: '🎯' },
    { label: 'Competitor engagement', icon: '🔍' },
    { label: 'Job changes', icon: '📊' },
    { label: 'Funding/growth', icon: '🚀' },
    { label: 'Pain keywords', icon: '⚡' },
  ];

  return (
    <section className="py-section bg-gradient-to-b from-light-pale to-white">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6 font-display">The shift</h2>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Founders selling high-ticket services are out there looking for exactly what you do. Asking around. Comparing options. Ready.
            <br /><br />
            Most people never notice them. We do. We find the people already looking, and we get you in front of them first.
          </p>
        </div>

        {/* Signal Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-border">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {signals.map((signal, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 bg-light-pale rounded-2xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-4xl">{signal.icon}</span>
                  <span className="text-text-dark font-medium text-center text-sm md:text-base">{signal.label}</span>
                </div>
              ))}
            </div>

            {/* Center message */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-cta-blue/10 border border-cta-blue/20 rounded-full">
                <svg className="w-5 h-5 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-cta-blue font-semibold">We track these signals to find buyers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShiftSection;
