const CalendarShowcase = () => {
  const statusChips = ['Qualified', 'Booked', 'Showed up', 'Ready to buy'];
  const stats = [
    { number: '10+', label: 'Qualified calls a month' },
    { number: '3', label: 'Free qualified calls to start, on us' },
    { number: '100%', label: 'Pay-on-show, never for a no-show' },
    { number: '0', label: 'Long-term contracts, cancel anytime' },
  ];

  return (
    <section className="py-section bg-light-pale">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6 font-display">From intent signals to booked calls on your calendar</h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">Clear booked calls, qualified prospects, and zero payment for no-shows.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Status chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {statusChips.map((chip, index) => (
              <div key={index} className="px-4 py-2 bg-cta-blue/10 border border-cta-blue/20 text-cta-blue rounded-full text-sm font-medium">
                {chip}
              </div>
            ))}
          </div>

          {/* Calendar container */}
          <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 border border-border relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-5 dotted-grid"></div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/Screenshot 2026-07-02 164449.png" 
                  alt="Calendar showing booked calls" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Floating stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-4xl font-bold text-cta-blue mb-2">{stat.number}</div>
                <div className="text-text-muted text-sm leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarShowcase;
