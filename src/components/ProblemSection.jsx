const ProblemSection = () => {
  return (
    <section className="py-section bg-cream-bg">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6 font-display">The old way is broken</h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Everyone is selling to the same list, including your competitors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left: Traditional agency mockup */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-border shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-text-dark">Traditional lead agencies</h3>
            </div>

            {/* Mockup UI */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-border">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-border">
                  <span className="text-sm text-text-muted">Generic lead list</span>
                  <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-2 py-1 rounded-full">10,000+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-border">
                  <span className="text-sm text-text-muted">Cold emails sent</span>
                  <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-2 py-1 rounded-full">50,000</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-border">
                  <span className="text-sm text-text-muted">Reply rate</span>
                  <span className="text-xs font-semibold text-red-500 bg-red-50 px-2 py-1 rounded-full">0.5%</span>
                </div>
              </div>
            </div>

            {/* Warning chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1.5 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">Random timing</span>
              <span className="px-3 py-1.5 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">Same list as competitors</span>
              <span className="px-3 py-1.5 bg-red-100 text-red-700 text-xs font-medium rounded-full">Low reply rate</span>
            </div>

            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              Most agencies do the same thing. Buy a big list, the same list your competitor already bought. Send thousands of cold emails. Wait.
              <br/><br/>
              You've seen it. You've probably paid for it.
              <br/><br/>
              It doesn't work, because those people weren't looking for you in the first place. You're paying to convince strangers who don't care.
            </p>
          </div>

          {/* Right: Transition to shift */}
          <div className="flex items-center justify-center">
            <div className="text-center p-8 md:p-12 bg-gradient-to-br from-light-pale to-white rounded-3xl border border-border w-full">
              <div className="w-20 h-20 bg-cta-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text-dark mb-3">The shift</h3>
              <p className="text-text-muted max-w-sm mx-auto">
                There's a better way to find clients who are already looking for what you sell.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
