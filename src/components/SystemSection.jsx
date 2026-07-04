const SystemSection = () => {
  return (
    <section className="py-24 bg-light-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="text-blue-500 text-sm font-bold uppercase tracking-wider">
              HIGH-INTENT SYSTEM
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6 font-display">
            Find buyers before your competitors even know they exist
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            We track public buying signals, intent keywords, post engagement, job changes, creator audiences, and market activity to identify prospects already closer to needing your offer.
          </p>
        </div>

        {/* Calendar Mockup */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            {/* Mock calendar header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                  </svg>
                </button>
                <h3 className="text-xl font-bold text-text-dark">July 2026</h3>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                <div key={i} className="text-center text-sm font-semibold text-gray-500 py-2">{day}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {/* Example calendar days */}
              {Array.from({ length: 35 }).map((_, i) => {
                const isToday = i === 15;
                const hasEvent1 = i === 16;
                const hasEvent2 = i === 18;
                const hasEvent3 = i === 20;
                
                return (
                  <div 
                    key={i} 
                    className={`aspect-square rounded-xl p-2 ${
                      isToday 
                        ? 'bg-blue-50 border border-blue-200' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`text-sm ${isToday ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>
                      {i > 2 ? i - 2 : ''}
                    </div>
                    {hasEvent1 && (
                      <div className="mt-1 p-1 bg-green-100 text-green-700 text-xs rounded font-medium">
                        Intro Call
                      </div>
                    )}
                    {hasEvent2 && (
                      <div className="mt-1 p-1 bg-purple-100 text-purple-700 text-xs rounded font-medium">
                        Strategy Session
                      </div>
                    )}
                    {hasEvent3 && (
                      <div className="mt-1 p-1 bg-orange-100 text-orange-700 text-xs rounded font-medium">
                        Demo
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: (
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              ),
              title: 'Reach prospects already showing buying intent',
              description: 'No more cold outreach to random lists.'
            },
            {
              icon: (
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              ),
              title: 'Avoid wasting money on cold random lists',
              description: 'Every prospect is pre-qualified by intent.'
            },
            {
              icon: (
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              ),
              title: 'Book qualified calls without paying for no-shows',
              description: 'You only pay when they actually attend.'
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-2">{benefit.title}</h3>
              <p className="text-text-muted">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
