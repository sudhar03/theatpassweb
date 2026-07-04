const CTASection = () => {
  return (
    <section className="py-section bg-hero-bg relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cta-blue/10 rounded-full filter blur-[120px] gradient-shift"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gold-highlight/5 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-content mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display leading-tight">
            Stop convincing strangers. Start talking to <span className="text-gold-highlight italic">buyers</span>.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            10+ qualified sales conversations a month with prospects already in buying mode. Your first 3 are on us.
          </p>
          
          <a 
            href="https://calendly.com/chandru-ink7/intro-call" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cta-blue text-white font-bold text-lg rounded-full hover:bg-cta-hover transition-all hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-cta-blue/30 mb-8 group"
          >
            Book Your Free Strategy Call
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          
          <p className="text-gray-400 text-sm">
            You only pay when a prospect actually shows up.
          </p>

          {/* Trust chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm">
              First 3 calls free
            </div>
            <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm">
              No no-show fees
            </div>
            <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm">
              Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
