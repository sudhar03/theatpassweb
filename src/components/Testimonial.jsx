const Testimonial = () => {
  return (
    <section className="py-section bg-white">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-16 font-display text-center">What clients say</h2>
          
          <div className="relative bg-light-pale rounded-3xl p-8 md:p-12 lg:p-16">
            {/* Soft accent background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cta-blue/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-highlight/5 rounded-full filter blur-2xl"></div>
            
            <div className="relative z-10 text-center">
              {/* Quote icon */}
              <div className="mb-6">
                <svg className="w-12 h-12 text-cta-blue/20 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark mb-10 leading-relaxed">
                "Working with Chandru has been a total game changer. I ended up closing <span className="text-cta-blue">six clients that month</span>. If Chandru lands in your inbox, give him a shot. Highly recommend him."
              </blockquote>
              
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-cta-blue to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">KZ</span>
                </div>
                <div className="text-center">
                  <div className="font-bold text-text-dark text-xl mb-1">Kalyca Zarich</div>
                  <div className="text-text-muted mb-3">Business coach</div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta-blue/10 border border-cta-blue/20 rounded-full">
                    <svg className="w-4 h-4 text-cta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                    <span className="text-cta-blue font-semibold text-sm">0 clients → 6 clients in a month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
