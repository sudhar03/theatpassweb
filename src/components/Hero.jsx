const Hero = () => {
  return (
    <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-40 bg-hero-bg overflow-hidden noise dotted-grid">
      {/* Background gradient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cta-blue/10 rounded-full filter blur-[120px] gradient-shift"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gold-highlight/5 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-content mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success-green/10 border border-success-green/20 rounded-full mb-8">
            <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
            <span className="text-success-green text-sm font-medium tracking-wide">
              FOR FOUNDER-LED B2B COACHES, CONSULTANTS & SERVICE BUSINESSES
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] font-bold text-white leading-[0.95] mb-8 font-display tracking-tight">
            Get <span className="text-gold-highlight italic">10+ qualified sales calls</span> a month, and pay only when they actually show up.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            We use our High-Intent System™ to find the ones already looking for what you sell, and put your offer in front of them first, before anyone else.
          </p>

          {/* CTA */}
          <a 
            href="https://calendly.com/chandru-ink7/intro-call" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cta-blue text-white font-bold text-lg rounded-full hover:bg-cta-hover transition-all hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-cta-blue/30 mb-6 group"
          >
            Book Your Free Strategy Call
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>

          {/* Trust line */}
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <svg className="w-5 h-5 text-success-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Your first 3 qualified calls are on us. You only pay when a prospect actually shows up.</span>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8FBFF"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
