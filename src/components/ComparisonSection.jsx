const ComparisonSection = () => {
  const comparisons = [
    {
      category: 'Who they target',
      traditional: 'Anyone with an email',
      atpass: 'Founders actively searching'
    },
    {
      category: 'Method',
      traditional: 'Mass cold blasts',
      atpass: 'Intent signals + personalized cold email'
    },
    {
      category: 'Timing',
      traditional: 'Random',
      atpass: 'When demand already exists'
    },
    {
      category: 'You pay for',
      traditional: 'Promises',
      atpass: 'Calls that show up'
    },
    {
      category: 'Contract',
      traditional: 'Locked in',
      atpass: 'Cancel anytime'
    },
    {
      category: 'Built for',
      traditional: 'Everyone',
      atpass: 'B2B coaches, consultants & service-based founders'
    }
  ];

  return (
    <section className="py-section bg-hero-bg">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">The difference</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">This isn't another lead agency.</p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="bg-hero-secondary/50 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-8 py-6 text-left text-gray-400 font-medium text-sm uppercase tracking-wider"></th>
                  <th className="px-8 py-6 text-center text-gray-400 font-medium text-sm uppercase tracking-wider">Traditional agencies</th>
                  <th className="px-8 py-6 text-center text-white font-bold text-sm uppercase tracking-wider bg-cta-blue/20">theAtpass</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr key={index} className="border-t border-white/10">
                    <td className="px-8 py-6 text-gray-300 font-medium">{item.category}</td>
                    <td className="px-8 py-6 text-center text-gray-400">{item.traditional}</td>
                    <td className="px-8 py-6 text-center text-white font-semibold bg-cta-blue/10">{item.atpass}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="md:hidden space-y-4 max-w-2xl mx-auto">
          {comparisons.map((item, index) => (
            <div key={index} className="bg-hero-secondary/50 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
              <div className="text-gray-400 font-medium text-sm uppercase tracking-wider mb-4">{item.category}</div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 shrink-0"></div>
                  <div className="text-gray-400"><span className="font-semibold text-gray-300">Traditional:</span> {item.traditional}</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cta-blue rounded-full mt-2 shrink-0"></div>
                  <div className="text-white"><span className="font-semibold text-cta-blue">theAtpass:</span> {item.atpass}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
