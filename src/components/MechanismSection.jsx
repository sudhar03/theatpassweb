const MechanismSection = () => {
  return (
    <section className="py-section bg-hero-bg">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta-blue/10 border border-cta-blue/20 rounded-full mb-6">
            <span className="text-cta-blue text-sm font-bold uppercase tracking-wider">
              BUYER-INTENT CLIENT ACQUISITION™
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">A different approach</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gold-highlight mb-8">Buyer-Intent Client Acquisition™</h3>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We watch the market and spot the founders and decision-makers who are already looking for help. Then we reach them directly, for you, primarily through personalized cold email.
            <br /><br />
            So when you get on a call, you're not talking anyone into it. They already want what you do. Your job is just to show up and help.
          </p>
        </div>

        {/* Visual - Market Signal Engine */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-hero-secondary/50 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              {/* Market Signals */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 bg-cta-blue/20 rounded-2xl flex items-center justify-center border border-cta-blue/30 pulse-glow">
                  <svg className="w-12 h-12 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <span className="text-white font-medium text-center">Market signals</span>
              </div>

              {/* Connector */}
              <div className="hidden md:flex items-center">
                <div className="w-16 h-0.5 bg-gradient-to-r from-cta-blue to-gold-highlight"></div>
                <svg className="w-8 h-8 text-gold-highlight mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Mobile connector */}
              <div className="md:hidden flex items-center">
                <svg className="w-6 h-6 text-gold-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Qualified Calls */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 bg-gold-highlight/20 rounded-2xl flex items-center justify-center border border-gold-highlight/30 pulse-glow">
                  <svg className="w-12 h-12 text-gold-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white font-medium text-center">Qualified calls</span>
              </div>
            </div>

            {/* Additional info */}
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400 text-sm">
                Signals flow from market activity → qualification → personalized outreach → booked calls on your calendar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MechanismSection;
