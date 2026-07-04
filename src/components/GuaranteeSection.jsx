const GuaranteeSection = () => {
  return (
    <section className="py-section bg-cream-bg">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-gold-pill/20 border border-gold-pill/30 text-text-dark text-sm font-semibold rounded-full uppercase tracking-wider">
              First 3 calls free · Never pay a no-show
            </span>
          </div>

          {/* Main guarantee card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 border border-cta-blue/20 shadow-xl shadow-cta-blue/10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cta-blue/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-highlight/5 rounded-full filter blur-2xl"></div>

            <div className="relative z-10 text-center">
              {/* Shield icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-cta-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark mb-6 font-display">Our guarantee</h2>
              
              <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto mb-8">
                The first 3 qualified calls are free, and you never pay for a no-show.
                <br /><br />
                If a prospect doesn't attend, you don't get charged. Simple as that. We carry the risk, not you.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-success-green/10 border border-success-green/20 rounded-full">
                  <svg className="w-5 h-5 text-success-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-success-green font-semibold text-sm">First 3 calls free</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-success-green/10 border border-success-green/20 rounded-full">
                  <svg className="w-5 h-5 text-success-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-success-green font-semibold text-sm">No no-show fees</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-success-green/10 border border-success-green/20 rounded-full">
                  <svg className="w-5 h-5 text-success-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-success-green font-semibold text-sm">Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
