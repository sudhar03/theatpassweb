const LogoStrip = () => {
  const logos = [
    { name: 'Stripe' },
    { name: 'Notion' },
    { name: 'Linear' },
    { name: 'Figma' },
    { name: 'Vercel' },
    { name: 'Airbnb' },
  ];

  return (
    <section className="py-12 bg-light-bg">
      <div className="max-w-content mx-auto px-6">
        <div className="hidden md:flex items-center justify-center gap-12 lg:gap-16 flex-wrap">
          {logos.map((logo, index) => (
            <div key={index} className="text-xl lg:text-2xl font-bold text-text-muted opacity-40 hover:opacity-60 transition-opacity">
              {logo.name}
            </div>
          ))}
        </div>
        
        {/* Mobile marquee */}
        <div className="md:hidden overflow-hidden">
          <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="text-lg font-bold text-text-muted opacity-40">
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
