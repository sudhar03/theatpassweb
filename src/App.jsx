import { useState, useEffect } from 'react';

// ==========================================
// OPTION B: CUSTOM SVG/CSS INTERACTIVE WIDGETS
// ==========================================

function DashboardMockup() {
  const [activeSignal, setActiveSignal] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const signals = [
    { source: "LinkedIn Comment", text: "Alex Vance: 'Looking for a B2B agency to scale output...'", score: "98/100", time: "Just now", icon: "C", match: "High ICP Match" },
    { source: "Indeed Job Board", text: "NexaGrowth: Hiring B2B Growth Consultant", score: "95/100", time: "2 min ago", icon: "J", match: "Budget Fit" },
    { source: "Crunchbase Alert", text: "Sterling SaaS: Raised $4.2M Seed Round", score: "91/100", time: "5 min ago", icon: "F", match: "Funding Signal" },
    { source: "Competitor Watch", text: "Elena R. registered for 'SaaS Growth' Webinar", score: "89/100", time: "12 min ago", icon: "W", match: "High Intent" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSignal((prev) => (prev + 1) % signals.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#070D18] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden font-sans text-slate-300 flex flex-col md:flex-row aspect-[16/10] min-h-[400px]">
      {/* Sidebar */}
      <div className="w-full md:w-48 bg-[#040810] p-4 flex flex-row md:flex-col justify-between md:justify-start gap-2 border-b md:border-b-0 md:border-r border-slate-900 overflow-x-auto">
        <div className="flex items-center gap-2 mb-0 md:mb-6">
          <span className="w-3 h-3 rounded-full bg-gold-500 animate-pulse"></span>
          <span className="text-sm font-bold text-white uppercase tracking-wider">theAtpass CRM</span>
        </div>
        <div className="flex flex-row md:flex-col gap-1 w-full">
          <div onClick={() => setActiveTab(0)} className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center cursor-pointer transition-colors ${activeTab === 0 ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-white'}`}>
            Active Intent
          </div>
          <div onClick={() => setActiveTab(1)} className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center cursor-pointer transition-colors ${activeTab === 1 ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-white'}`}>
            Meetings Booked
          </div>
          <div onClick={() => setActiveTab(2)} className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center cursor-pointer transition-colors ${activeTab === 2 ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-white'}`}>
            Lead Pipeline
          </div>
          <div onClick={() => setActiveTab(3)} className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center cursor-pointer transition-colors ${activeTab === 3 ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-white'}`}>
            Integrations
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 md:p-6 flex flex-col justify-between gap-4">
        {/* Top Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#0D1527] p-3 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block uppercase font-semibold">Active Signals</span>
            <span className="text-lg md:text-xl font-bold text-white">1,482</span>
          </div>
          <div className="bg-[#0D1527] p-3 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block uppercase font-semibold">Meetings (Mo)</span>
            <span className="text-lg md:text-xl font-bold text-gold-400 flex items-center gap-1">14 <span className="text-[10px] text-green-400 font-normal">↑</span></span>
          </div>
          <div className="bg-[#0D1527] p-3 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 block uppercase font-semibold">Conversion Rate</span>
            <span className="text-lg md:text-xl font-bold text-white">4.8%</span>
          </div>
        </div>

        {/* Dashboard Middle Split */}
        <div className="flex-1 items-stretch flex flex-col">
          {activeTab === 0 && (
            <div className="grid md:grid-cols-2 gap-4 flex-1">
              {/* Live Signal Feed */}
              <div className="bg-[#050B14] p-4 rounded-2xl border border-slate-900 flex flex-col justify-between min-h-[180px] relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-900 pb-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Live Intent Feed</span>
                  <span className="text-[9px] bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded border border-green-500/20 font-mono">Simulating</span>
                </div>
                
                <div className="space-y-3 flex-1 flex flex-col justify-center relative">
                  {signals.map((sig, idx) => (
                    <div 
                      key={idx} 
                      className={`p-3 rounded-xl border transition-all duration-500 flex items-start gap-2.5 ${activeSignal === idx ? 'bg-[#0D1A30] border-gold-500/40 opacity-100 scale-100 shadow-md absolute inset-x-0' : 'bg-transparent border-transparent opacity-0 scale-95 pointer-events-none absolute inset-x-0 hidden'}`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold text-white truncate">{sig.source}</span>
                          <span className="text-[9px] bg-gold-500/20 text-gold-300 font-bold px-1.5 py-0.5 rounded">{sig.score}</span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-normal line-clamp-2">{sig.text}</p>
                        <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-800/40 text-[9px] text-slate-500">
                          <span>{sig.match}</span>
                          <span>{sig.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call Bookings Trend (SVG Line Chart) */}
              <div className="bg-[#050B14] p-4 rounded-2xl border border-slate-900 flex flex-col justify-between min-h-[180px]">
                <div className="flex items-center justify-between border-b border-slate-900 pb-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Calls Booked Growth</span>
                  <span className="text-[9px] text-gold-400 font-mono font-bold">Pay-Per-Show</span>
                </div>
                
                <div className="flex-1 flex items-center justify-center p-1">
                  <svg className="w-full h-full max-h-[120px]" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10" y1="20" x2="190" y2="20" stroke="#102A43" strokeWidth="0.5" strokeDasharray="3 3" />
                    <line x1="10" y1="50" x2="190" y2="50" stroke="#102A43" strokeWidth="0.5" strokeDasharray="3 3" />
                    <line x1="10" y1="80" x2="190" y2="80" stroke="#102A43" strokeWidth="0.5" strokeDasharray="3 3" />
                    
                    <defs>
                      <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#D4A853" stopOpacity="0.35"/>
                        <stop offset="100%" stopColor="#D4A853" stopOpacity="0.0"/>
                      </linearGradient>
                    </defs>
                    <path d="M 10 90 L 10 75 Q 40 70 70 55 T 130 35 T 190 15 L 190 90 Z" fill="url(#chartGlow)" />
                    
                    <path d="M 10 75 Q 40 70 70 55 T 130 35 T 190 15" stroke="#D4A853" strokeWidth="2.5" strokeLinecap="round" />
                    
                    <circle cx="10" cy="75" r="3" fill="#D4A853" stroke="#050B14" strokeWidth="1" />
                    <circle cx="70" cy="55" r="3" fill="#D4A853" stroke="#050B14" strokeWidth="1" />
                    <circle cx="130" cy="35" r="3" fill="#D4A853" stroke="#050B14" strokeWidth="1" />
                    <circle cx="190" cy="15" r="4.5" fill="#D4A853" stroke="#050B14" strokeWidth="1.5" className="animate-pulse" />
                    
                    <text x="10" y="98" fill="#475569" fontSize="6" textAnchor="middle">Wk 1</text>
                    <text x="70" y="98" fill="#475569" fontSize="6" textAnchor="middle">Wk 2</text>
                    <text x="130" y="98" fill="#475569" fontSize="6" textAnchor="middle">Wk 3</text>
                    <text x="190" y="98" fill="#475569" fontSize="6" textAnchor="end">Wk 4</text>
                  </svg>
                </div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="bg-[#050B14] flex-1 rounded-2xl border border-slate-900 flex flex-col p-4 relative overflow-hidden">
               <div className="flex items-center justify-between border-b border-slate-900 pb-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Upcoming Meetings</span>
                  <span className="text-[9px] bg-gold-500/10 text-gold-400 px-1.5 py-0.5 rounded border border-gold-500/20 font-mono">This Week</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-[#0D1527] p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                     <div>
                        <p className="text-sm font-bold text-white">Discovery Call: Sarah M.</p>
                        <p className="text-xs text-slate-500">Marketing CEO - High Intent</p>
                     </div>
                     <span className="text-xs text-gold-400 font-mono">Tomorrow, 10:00 AM</span>
                  </div>
                  <div className="bg-[#0D1527] p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                     <div>
                        <p className="text-sm font-bold text-white">Strategy Session: James R.</p>
                        <p className="text-xs text-slate-500">Sales Coach - Follow up</p>
                     </div>
                     <span className="text-xs text-gold-400 font-mono">Wed, 2:30 PM</span>
                  </div>
                  <div className="bg-[#0D1527] p-3 rounded-lg border border-slate-800 flex items-center justify-between">
                     <div>
                        <p className="text-sm font-bold text-white">Demo: Elena R.</p>
                        <p className="text-xs text-slate-500">SaaS Founder</p>
                     </div>
                     <span className="text-xs text-gold-400 font-mono">Thu, 11:30 AM</span>
                  </div>
                </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="bg-[#050B14] flex-1 rounded-2xl border border-slate-900 flex flex-col p-4 relative overflow-hidden">
               <div className="flex items-center justify-between border-b border-slate-900 pb-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Pipeline Stages</span>
                  <span className="text-[9px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20 font-mono">Active Deals</span>
                </div>
                <div className="flex gap-2 h-full">
                  <div className="flex-1 bg-[#0D1527] rounded-lg border border-slate-800 p-2 flex flex-col">
                    <span className="text-[10px] text-slate-400 mb-2 font-bold uppercase tracking-wide">Identified</span>
                    <div className="bg-slate-900 rounded p-2 mb-2 text-xs text-slate-300 border border-slate-800">42 leads</div>
                  </div>
                  <div className="flex-1 bg-[#0D1527] rounded-lg border border-slate-800 p-2 flex flex-col">
                    <span className="text-[10px] text-slate-400 mb-2 font-bold uppercase tracking-wide">Contacted</span>
                    <div className="bg-slate-900 rounded p-2 mb-2 text-xs text-slate-300 border border-slate-800">28 prospects</div>
                  </div>
                  <div className="flex-1 bg-[#0D1527] rounded-lg border border-slate-800 p-2 flex flex-col">
                    <span className="text-[10px] text-gold-400 mb-2 font-bold uppercase tracking-wide">Meetings</span>
                    <div className="bg-gold-500/10 rounded p-2 mb-2 text-xs text-gold-300 border border-gold-500/20">14 booked</div>
                  </div>
                </div>
            </div>
          )}

          {activeTab === 3 && (
            <div className="bg-[#050B14] flex-1 rounded-2xl border border-slate-900 flex flex-col p-4 relative overflow-hidden justify-center items-center">
               <div className="flex items-center gap-6">
                 <div className="w-12 h-12 rounded-xl bg-[#0D1527] border border-slate-800 flex items-center justify-center font-bold text-slate-400 text-xs">CRM</div>
                 <div className="w-8 h-px bg-slate-800"></div>
                 <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center font-bold text-gold-400">API</div>
                 <div className="w-8 h-px bg-slate-800"></div>
                 <div className="w-12 h-12 rounded-xl bg-[#0D1527] border border-slate-800 flex items-center justify-center font-bold text-slate-400 text-xs">SLACK</div>
               </div>
               <p className="text-xs text-slate-500 mt-6 font-mono">All systems synced in real-time.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function OldWayChart() {
  return (
    <div className="w-full bg-white rounded-3xl p-6 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
        <div>
          <h4 className="font-bold text-slate-800 text-sm md:text-base">Outreach Performance Trajectory</h4>
          <p className="text-xs text-slate-500">Traditional email campaigns vs inbox filters</p>
        </div>
        <span className="text-xs bg-red-50 text-red-600 px-2.5 py-1 rounded-full font-bold border border-red-200 uppercase tracking-wide">Declining Returns</span>
      </div>

      <div className="h-[220px] flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="20" x2="280" y2="20" stroke="#F1F5F9" strokeWidth="1" />
          <line x1="20" y1="60" x2="280" y2="60" stroke="#F1F5F9" strokeWidth="1" />
          <line x1="20" y1="100" x2="280" y2="100" stroke="#F1F5F9" strokeWidth="1" />
          <line x1="20" y1="130" x2="280" y2="130" stroke="#F1F5F9" strokeWidth="1" />

          <defs>
            <linearGradient id="decliningGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.0"/>
            </linearGradient>
          </defs>
          <path d="M 20 30 C 70 30, 100 80, 150 110 S 220 125, 280 128 L 280 130 L 20 130 Z" fill="url(#decliningGlow)" />

          <path d="M 20 30 C 70 30, 100 80, 150 110 S 220 125, 280 128" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />

          <circle cx="20" cy="30" r="3.5" fill="#EF4444" stroke="#FFF" strokeWidth="1.5" />
          <circle cx="150" cy="110" r="3.5" fill="#EF4444" stroke="#FFF" strokeWidth="1.5" />
          <circle cx="280" cy="128" r="3.5" fill="#EF4444" stroke="#FFF" strokeWidth="1.5" />

          <text x="25" y="25" fill="#EF4444" fontSize="8" fontWeight="bold">2021: 15% Response</text>
          <text x="145" y="100" fill="#64748B" fontSize="8">2024: Inbox Filters Tighten</text>
          <text x="278" y="142" fill="#EF4444" fontSize="8" fontWeight="bold" textAnchor="end">2026: &lt;0.5% (Spam Folders)</text>

          <line x1="20" y1="15" x2="20" y2="135" stroke="#CBD5E1" strokeWidth="1.5" />
          <line x1="15" y1="130" x2="285" y2="130" stroke="#CBD5E1" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px] md:text-xs text-slate-500 border-t border-slate-100 pt-3">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Cold Outreach Decline</span>
        <span className="font-semibold text-slate-700">Source: Industry Benchmarks 2026</span>
      </div>
    </div>
  );
}

function TheShiftDiagram() {
  return (
    <div className="w-full bg-[#050B14] rounded-3xl p-6 border border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden text-slate-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-500/5 rounded-full filter blur-2xl"></div>

      <div className="relative z-10 space-y-6">
        <div className="border-b border-slate-800 pb-3 mb-2 flex items-center justify-between">
          <h4 className="font-bold text-white text-sm md:text-base">Outreach Mechanics Compared</h4>
          <span className="text-[10px] bg-gold-500/10 text-gold-400 px-2 py-0.5 rounded border border-gold-500/20 font-bold uppercase tracking-wider">theAtpass Difference</span>
        </div>

        <div className="space-y-4">
          <div className="bg-[#0C1322]/50 p-4 rounded-2xl border border-slate-900/50 flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-28 text-center md:text-left flex-shrink-0">
              <span className="text-[10px] text-red-500 font-bold tracking-wider uppercase block">The Old Way</span>
              <span className="text-xs font-bold text-white block mt-0.5">Cold Blasting</span>
            </div>
            <div className="flex-1 w-full h-12 flex items-center justify-center p-1 bg-slate-950/40 rounded-lg">
              <svg className="w-full h-full" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="25" fill="#EF4444" fontSize="10" fontWeight="bold">10k Leads</text>
                
                <path d="M 55 20 L 120 20" stroke="#EF4444" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M 120 10 L 120 30" stroke="#EF4444" strokeWidth="2" />
                <circle cx="120" cy="20" r="3" fill="#EF4444" />
                
                <path d="M 120 20 Q 140 10 155 8" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 120 20 Q 140 30 155 32" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
                
                <text x="160" y="12" fill="#94A3B8" fontSize="8">Spam Block</text>
                <text x="160" y="34" fill="#94A3B8" fontSize="8">No Reply</text>
              </svg>
            </div>
          </div>

          <div className="bg-[#0C1322]/50 p-4 rounded-2xl border border-slate-900/50 flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-28 text-center md:text-left flex-shrink-0">
              <span className="text-[10px] text-gold-400 font-bold tracking-wider uppercase block">theAtpass Way</span>
              <span className="text-xs font-bold text-white block mt-0.5">Intent Capture</span>
            </div>
            <div className="flex-1 w-full h-12 flex items-center justify-center p-1 bg-slate-950/40 rounded-lg">
              <svg className="w-full h-full" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="10" y="16" fill="#D4A853" fontSize="9" fontWeight="bold">Intent Signal</text>
                <text x="10" y="28" fill="#64748B" fontSize="7">(Hiring/Funding)</text>
                
                <path d="M 68 20 L 125 20" stroke="#D4A853" strokeWidth="2.5" />
                <polygon points="125,20 119,16 119,24" fill="#D4A853" />
                
                <circle cx="145" cy="20" r="10" fill="rgba(212, 168, 83, 0.15)" stroke="#D4A853" strokeWidth="1.5" />
                <path d="M 141 20 L 144 23 L 149 17" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                
                <text x="160" y="24" fill="#D4A853" fontSize="9" fontWeight="bold">Meeting</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [faqOpen, setFaqOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [inHero, setInHero] = useState(true);
  const [visibleSections, setVisibleSections] = useState({});
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHoveringTestimonials, setIsHoveringTestimonials] = useState(false);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setInHero(heroBottom > 0);
      }
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      if (section.id) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Typing effect for hero text
  const phrases = [
    "convincing cold prospects",
    "chasing people who are not ready",
    "paying for empty promises",
    "guessing who wants your offer",
    "selling to the wrong list"
  ];
  
  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDuration = 2000;

    const type = () => {
      const currentPhrase = phrases[textIndex];
      
      if (isDeleting) {
        setTypedText(prev => prev.slice(0, -1));
        if (typedText === '') {
          setIsDeleting(false);
          setTextIndex(prev => (prev + 1) % phrases.length);
        }
      } else {
        setTypedText(prev => currentPhrase.slice(0, prev.length + 1));
        if (typedText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, textIndex]);

  const testimonials = [
    {
      name: "Austin Reed",
      role: "Founder @ B2B Tech Solutions",
      result: "12+ calls a month",
      text: "We're booking 12+ calls a month with this system. It's the most consistent our pipeline has looked in two years. Wish I'd found this before wasting a quarter on cold LinkedIn DMs myself.",
      rating: 5,
      avatar: "/james.jpeg",
      linkedin: "https://www.linkedin.com/in/automationsexpert/"
    },
    {
      name: "Kalyca Zarich",
      role: "Business Coach",
      result: "0 clients → 6 clients in a month",
      text: "Working with Chandru has been a total game changer. I ended up closing six clients that month. If Chandru lands in your inbox, give him a shot. Highly recommend him.",
      rating: 5,
      avatar: "/kalyca.jpeg",
      linkedin: "https://www.linkedin.com/in/kalyca-zarich-6bb05a168/"
    },
    {
      name: "Sarah Williams",
      role: "Business Performance Coach",
      result: "Conversations tripled",
      text: "Conversations tripled in the first month. My calendar hasn't looked like this since I started coaching. I actually had to block off Fridays just to keep up with replies.",
      rating: 5,
      avatar: "/sarah.jpeg",
      linkedin: "https://www.linkedin.com/in/businessadviceportsmouthandchichester/"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (isHoveringTestimonials) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHoveringTestimonials]);

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-slate-200 text-navy-900' : inHero ? 'bg-[#FAF9F5]/85 backdrop-blur-md border-b border-slate-100 text-navy-900' : 'bg-navy-950/95 backdrop-blur-md shadow-lg border-b border-navy-900 text-white'}`}>
        <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="#hero" className="hover:opacity-80 transition-opacity">
              <img src="/atpasslogogold.png" alt="theAtpass" className="h-10 w-auto" />
            </a>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className={`${scrolled || inHero ? 'text-navy-800 hover:text-gold-600' : 'text-slate-300 hover:text-gold-400'} transition-colors relative group font-semibold`}>
              How it works
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${scrolled || inHero ? 'bg-gold-500' : 'bg-gold-400'} transition-all group-hover:w-full duration-300`}></span>
            </a>
            <a href="#what-you-get" className={`${scrolled || inHero ? 'text-navy-800 hover:text-gold-600' : 'text-slate-300 hover:text-gold-400'} transition-colors relative group font-semibold`}>
              What you get
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${scrolled || inHero ? 'bg-gold-500' : 'bg-gold-400'} transition-all group-hover:w-full duration-300`}></span>
            </a>
            <a href="#guarantee" className={`${scrolled || inHero ? 'text-navy-800 hover:text-gold-600' : 'text-slate-300 hover:text-gold-400'} transition-colors relative group font-semibold`}>
              Guarantee
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${scrolled || inHero ? 'bg-gold-500' : 'bg-gold-400'} transition-all group-hover:w-full duration-300`}></span>
            </a>
            <a href="#faq" className={`${scrolled || inHero ? 'text-navy-800 hover:text-gold-600' : 'text-slate-300 hover:text-gold-400'} transition-colors relative group font-semibold`}>
              FAQ
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${scrolled || inHero ? 'bg-gold-500' : 'bg-gold-400'} transition-all group-hover:w-full duration-300`}></span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://calendly.com/chandru-ink7/intro-call" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-gold-500 hover:bg-gold-600 text-navy-950 px-6 py-2.5 rounded-full font-bold transition-all hover:shadow-lg hover:shadow-gold-500/20 hover:-translate-y-0.5">
              Book a Strategy Call
            </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${scrolled || inHero ? 'hover:bg-slate-100 text-navy-900' : 'hover:bg-navy-900 text-white'} transition-colors`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className={`px-6 py-4 border-t ${scrolled || inHero ? 'bg-white border-slate-200 text-navy-900' : 'bg-navy-950 border-navy-900 text-white'} space-y-4`}>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block font-semibold hover:text-gold-500 transition-colors py-2">How it works</a>
            <a href="#what-you-get" onClick={() => setMobileMenuOpen(false)} className="block font-semibold hover:text-gold-500 transition-colors py-2">What you get</a>
            <a href="#guarantee" onClick={() => setMobileMenuOpen(false)} className="block font-semibold hover:text-gold-500 transition-colors py-2">Guarantee</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block font-semibold hover:text-gold-500 transition-colors py-2">FAQ</a>
            <a href="https://calendly.com/chandru-ink7/intro-call" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="block w-full bg-gold-500 hover:bg-gold-600 text-navy-950 px-6 py-3 rounded-full font-bold transition-all text-center">
              Book a Strategy Call
            </a>
          </div>
        </div>
      </nav>
      {/* 2. Hero Section */}
      <section id="hero" className="pt-32 pb-24 animate-fade-in relative overflow-hidden navy-mesh-bg">
        {/* Soft Blur Glow Layer */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `
            radial-gradient(
              circle at 50% 45%,
              rgba(212, 168, 83, 0.1) 0%,
              rgba(16, 42, 67, 0.05) 32%,
              rgba(255, 255, 255, 0) 70%
            )
          `,
          filter: 'blur(28px)',
          zIndex: 0
        }}></div>
        
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            {/* Eyebrow Text */}
            <p className="text-sm md:text-base font-bold text-gold-600 tracking-widest uppercase mb-6">
              FOR B2B COACHES, CONSULTANTS & SERVICE FOUNDERS
            </p>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-navy-900 max-w-4xl mx-auto mb-8 leading-tight">
              Get 10+ qualified sales calls a month with prospects already in <span className="bg-clip-text text-transparent bg-gradient-to-r from-navy-900 via-gold-600 to-navy-950 font-extrabold">buying mode</span>.
            </h1>
            
            {/* Dynamic Typing Line */}
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-navy-900 mb-8 min-h-[3.5rem]">
              Stop <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-gold-600 to-red-800 animate-gradient-x bg-[length:200%_auto]">
                {typedText}
              </span>
              <span className="animate-pulse">|</span>
            </div>
            
            {/* Supporting Text */}
            <p className="text-lg text-text-muted max-w-2xl mx-auto mb-6">
              Your first 3 qualified calls are on us.
            </p>
            
            {/* CTA Button */}
            <a href="https://calendly.com/chandru-ink7/intro-call" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-950 px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-1 mb-4">
              Book Your Free Strategy Call
            </a>
            
            {/* Trust Text */}
            <p className="text-sm text-text-muted">
              You only pay when a prospect actually shows up.
            </p>
          </div>
 
          {/* Hero Visual (Interactive Option B Widget) */}
          <div className="relative mt-8 md:mt-16 max-w-4xl mx-auto animate-slide-up">
            <div className="hidden md:block rounded-3xl shadow-2xl border border-slate-200 hover:shadow-3xl transition-shadow duration-500 overflow-hidden">
              <DashboardMockup />
            </div>
            {/* New Meeting Booked Notification (replacing herosect2.png) */}
            <div className="hidden md:flex absolute -bottom-6 -right-6 bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gold-500/30 max-w-xs hover:shadow-3xl transition-all duration-500 animate-float p-4 items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500 font-bold text-sm">KZ</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[10px] font-bold text-white">Call Booked!</span>
                  <span className="text-[8px] bg-green-500/20 text-green-400 font-bold px-1.5 py-0.5 rounded font-mono">98/100</span>
                </div>
                <p className="text-[11px] text-slate-300 font-semibold truncate mt-0.5">Kalyca Zarich (Business Coach)</p>
                <p className="text-[9px] text-slate-400 truncate">Signal: LinkedIn Ad Comment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Testimonial Section */}
      <section id="testimonial" className="py-24 bg-white bg-dots-pattern animate-slide-up relative">
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-gold-100 text-gold-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">TESTIMONIALS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-navy-900 mb-4">What clients say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-700 mx-auto rounded-full"></div>
          </div>
          
          {/* Testimonial Carousel */}
          <div 
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsHoveringTestimonials(true)}
            onMouseLeave={() => setIsHoveringTestimonials(false)}
          >
            {/* Left Arrow */}
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gold-50 transition-all duration-300 z-10 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
 
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-4">
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-slate-200 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
                      {/* Large Quote Icon Background */}
                      <div className="absolute top-8 right-8 text-gold-100 opacity-20">
                        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      
                      {/* Avatar */}
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover border-2 border-gold-300 mb-8 mx-auto" />
                      
                      {/* Quote */}
                      <p className="text-navy-900 mb-8 leading-relaxed text-lg md:text-xl text-center">
                        "{testimonial.text}"
                      </p>
                      
                      {/* Name & Role */}
                      <div className="text-center mb-6">
                        <p className="font-bold text-navy-900 text-xl md:text-2xl">{testimonial.name}</p>
                        <p className="text-text-muted text-base">{testimonial.role}</p>
                      </div>
                      
                      {/* Result Badge */}
                      <div className="text-center mb-6">
                        <span className="inline-block bg-gold-100 text-gold-800 border border-gold-200/50 px-6 py-3 rounded-full text-base font-bold">
                          {testimonial.result}
                        </span>
                      </div>
                      
                      {/* Star Rating */}
                      <div className="flex justify-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>

                      {/* LinkedIn Link */}
                      <div className="flex justify-center">
                        <a
                          href={testimonial.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 transition-colors"
                          aria-label={`${testimonial.name} LinkedIn profile`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          <span className="text-sm font-medium">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
 
            {/* Right Arrow */}
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gold-50 transition-all duration-300 z-10 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
 
            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === i ? 'bg-gold-500 w-8' : 'bg-gold-250 hover:bg-gold-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Problem Section */}
      <section id="problem" className="py-32 bg-gradient-to-b from-white to-navy-50 animate-slide-up relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-100 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">THE PROBLEM</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-navy-900 mb-4">The old way is broken</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg text-navy-900 font-medium leading-relaxed">
                    Everyone is selling to the same list, including your competitors.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg text-navy-900 font-medium leading-relaxed">
                    Most agencies do the same thing: buy a list, spam thousands, and hope for a reply.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg text-navy-900 font-medium leading-relaxed">
                    The problem is simple: those people were not looking for you in the first place.
                  </p>
                </div>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <p className="text-lg text-red-900 font-semibold">
                  You end up paying to convince strangers who do not care.
                </p>
              </div>
            </div>
            <div className="relative">
              <OldWayChart />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Shift Section */}
      <section id="shift" className="py-32 bg-gradient-to-br from-navy-100 via-ivory-100 to-navy-50 bg-hero-pattern animate-slide-up relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-35"></div>
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-gold-100 text-gold-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">THE SHIFT</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-navy-900 mb-4">The shift</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-700 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <TheShiftDiagram />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg text-navy-900 font-medium leading-relaxed">
                    Founders selling high-ticket services are already out there looking for exactly what you do. Asking around. Comparing options. Ready.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg text-navy-900 font-medium leading-relaxed">
                    Most people never notice them.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg text-navy-900 font-medium leading-relaxed">
                    We do.
                  </p>
                </div>
              </div>
              <div className="bg-gold-50 border-l-4 border-gold-500 p-6 rounded-r-xl">
                <p className="text-lg text-gold-900 font-semibold">
                  We find the people already looking, and we get you in front of them first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Mechanism Section */}
      <section id="mechanism" className="py-32 bg-white bg-dots-pattern animate-slide-up relative">
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-gold-100 text-gold-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">HOW IT WORKS</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-navy-900 mb-4">Buyer-Intent Client Acquisition™</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-700 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-text-muted mb-6 max-w-3xl mx-auto font-medium">A different approach to booking qualified sales calls.</p>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              We watch the market and spot founders and decision-makers who are already looking for help. Then we reach them directly for you, primarily through personalized cold email.
            </p>
            <p className="text-lg text-navy-900 font-bold mt-4">
              So when you get on a call, you are not talking anyone into it. They already want what you do. Your job is just to show up and help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Intent Signal Tracking */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                {/* Visual Widget */}
                <div className="bg-white rounded-2xl p-4 mb-6 border border-slate-200 text-xs font-mono text-slate-700 shadow-inner h-48 overflow-hidden flex flex-col gap-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-[10px] uppercase text-gold-600 font-bold tracking-wider">
                    <span>Active Intent Signals</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live Tracking</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-navy-900">Comment on Competitor Ads</p>
                        <p className="text-[10px] text-slate-500">"We need to solve this asap..."</p>
                      </div>
                      <span className="bg-green-500/10 text-green-600 border border-green-500/30 px-2 py-0.5 rounded text-[10px] font-bold">HIGH INTENT</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-navy-900">LinkedIn Hiring Alert</p>
                        <p className="text-[10px] text-slate-500">Hiring: B2B Growth Consultant</p>
                      </div>
                      <span className="bg-gold-500/10 text-gold-600 border border-gold-500/30 px-2 py-0.5 rounded text-[10px] font-bold">RELEVANT NEED</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Intent Signal Tracking</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  We track who is engaging with competitors, niche influencers, webinars, lead magnets, ads, and relevant buying signals.
                </p>
              </div>
            </div>

            {/* Card 2: Qualification Before Outreach */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                {/* Visual Widget */}
                <div className="bg-navy-50/50 rounded-2xl p-4 mb-6 border border-navy-100 h-48 flex flex-col justify-center gap-3">
                  <div className="bg-white p-3 rounded-xl border border-navy-100 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">✓</div>
                      <span className="text-xs text-navy-900 font-semibold">Founder-led SaaS or Agency</span>
                    </div>
                    <span className="text-[9px] font-bold text-gold-700 bg-gold-50 px-1.5 py-0.5 rounded">ICP MATCH</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-navy-100 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">✓</div>
                      <span className="text-xs text-navy-900 font-semibold">Company size: 10-50 employees</span>
                    </div>
                    <span className="text-[9px] font-bold text-gold-700 bg-gold-50 px-1.5 py-0.5 rounded">BUDGET FIT</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-navy-100 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs font-bold">✓</div>
                      <span className="text-xs text-navy-900 font-semibold">Active intent signal recorded</span>
                    </div>
                    <span className="text-[9px] font-bold text-green-750 bg-green-100 px-1.5 py-0.5 rounded font-mono">READY</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Qualification Before Outreach</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  We check company size, budget fit, niche fit, and buying signal before anyone is contacted. No random list blasting.
                </p>
              </div>
            </div>

            {/* Card 3: Personalized Outreach */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                {/* Visual Widget */}
                <div className="bg-white rounded-2xl mb-6 border border-navy-100 shadow-sm overflow-hidden h-48 text-[11px] flex flex-col">
                  {/* Browser Bar */}
                  <div className="bg-navy-50 px-3 py-2 border-b border-navy-100 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-gold-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                    <span className="ml-2 bg-white px-2 py-0.5 rounded text-[9px] text-navy-700 border border-slate-200/50 font-mono">New Outreach Template</span>
                  </div>
                  {/* Email Draft */}
                  <div className="p-3 space-y-1 text-slate-600 font-sans flex-1 overflow-y-auto">
                    <p><span className="font-semibold text-navy-900">Subject:</span> Quick question regarding your B2B growth targets</p>
                    <hr className="border-slate-100 my-1"/>
                    <p className="text-gold-700 font-bold mt-2">Hey Alex,</p>
                    <p className="leading-normal mt-1">Saw your comment on LinkedIn asking about high-intent lead gen. Since you are scaling SaaS Co...</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Personalized Outreach</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  We write personalized cold email in your voice and reach out when the timing is right. Backed with multi-channel touchpoints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. How It Works Section */}
      <section id="how-it-works" className="py-32 bg-gradient-to-br from-navy-150 via-ivory-100 to-navy-50 bg-hero-pattern animate-slide-up relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-gold-100 text-gold-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">THE PROCESS</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-navy-900 mb-4">Four moves between you and a full calendar</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-700 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-text-muted max-w-3xl mx-auto font-medium">
              No volume games. No spray-and-pray. A deliberate system tuned for one outcome: calls with people already in buying mode.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                step: "01",
                title: "We listen",
                text: "We map your competitors and niche influencers, then track who is engaging with their content, ads, lead magnets, and webinars, plus signals like hiring, funding, and growth announcements."
              },
              {
                step: "02",
                title: "We qualify",
                text: "We check each prospect first: company size, budget fit, and buying signal. You only ever talk to people who genuinely fit and genuinely might buy."
              },
              {
                step: "03",
                title: "We reach out",
                text: <p className="text-text-muted mt-4 font-medium max-w-lg mx-auto">
                <span className="text-gold-600 font-bold">The Atpass Shift:</span> We reach out <span className="font-bold text-navy-900">only when someone is looking for help</span>. Personalized cold email, written in your voice, sent when the timing is right, backed up with LinkedIn touchpoints when it strengthens the signal.
              </p>
              },
              {
                step: "04",
                title: "You show up",
                text: "You show up to 10+ calls a month with prospects already in buying mode. You just bring your offer and help."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <span className="text-gold-500 font-bold text-2xl mb-4 block group-hover:scale-110 transition-transform">{item.step}</span>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. Metrics Section */}
      <section id="metrics" className="py-24 bg-white animate-fade-in relative z-20 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)]">
        <div className="max-w-content mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "10+", label: "Qualified calls a month" },
              { value: "3", label: "Free qualified calls to start, on us" },
              { value: "100%", label: "Pay-on-show, never for a no-show" },
              { value: "0", label: "Long-term contracts, cancel anytime" }
            ].map((metric, i) => (
              <div key={i} className="text-center group p-6 rounded-2xl hover:bg-ivory-100/50 transition-colors">
                <div className="text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-navy-800 to-gold-600 mb-3 group-hover:scale-110 transition-transform duration-300">{metric.value}</div>
                <p className="text-text-muted font-medium text-sm px-4">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. What You Get Section */}
      <section id="what-you-get" className="py-32 bg-gradient-to-b from-ivory-100 to-white bg-dots-pattern animate-slide-up relative">
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-gold-100 text-gold-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">WHAT YOU GET</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-navy-900 mb-4">Everything, built around one job: calls that close.</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-700 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-text-muted font-medium">Every month, here is what shows up for you.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {[
              "Qualified sales calls: Booked straight onto your calendar.",
              "Booked appointments: Real people, ready to talk.",
              "Buyer-intent prospecting: We find the ones already looking for you.",
              "Personalized cold email sequences: Written in your voice, not copy-paste spam.",
              "CRM updates & tracking: Every lead logged, nothing slips through.",
              "Weekly optimization reports: You see exactly what is working."
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="bg-navy-900 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-gold-500 transition-colors">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-navy-900 font-medium text-sm md:text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>


          <div className="text-center">
            <p className="text-lg text-navy-900 font-bold mb-8">You do not lift a finger on outreach. You just show up to the calls.</p>
            <a href="https://calendly.com/chandru-ink7/intro-call" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-navy-800 to-navy-900 hover:from-navy-900 hover:to-navy-950 text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_20px_rgba(15,23,42,0.4)] hover:-translate-y-1">
              Book your free strategy call
            </a>
          </div>
        </div>
      </section>


      {/* 13. Difference Section */}
      <section id="difference" className="py-24 bg-gradient-to-b from-white to-navy-50 animate-slide-up relative overflow-hidden">
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-gold-100 text-gold-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">THE DIFFERENCE</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-navy-900 mb-4">This is not another lead agency.</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-700 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-text-muted max-w-2xl mx-auto font-medium">Most agencies sell volume. We focus on timing, intent, and booked conversations.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Comparison Table */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-6 py-5 text-left font-bold text-slate-700 text-base">Feature</th>
                      <th className="px-6 py-5 text-center font-bold text-slate-500 text-base">Traditional Agencies</th>
                      <th className="px-6 py-5 text-center font-bold text-navy-900 text-base bg-ivory-100">theAtpass</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Who they target", traditional: "Anyone with an email", atpass: "Founders actively searching" },
                      { feature: "Method", traditional: "Mass cold blasts", atpass: "Intent signals + personalized outreach" },
                      { feature: "Timing", traditional: "Random timing", atpass: "When demand already exists" },
                      { feature: "You pay for", traditional: "Promises", atpass: "Calls that actually show up" },
                      { feature: "Contract", traditional: "Locked into long contracts", atpass: "Cancel anytime" },
                      { feature: "Built for", traditional: "Everyone", atpass: "B2B coaches, consultants & service founders" }
                    ].map((row, i) => (
                      <tr key={i} className="border-t border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-slate-700 text-base">{row.feature}</td>
                        <td className="px-6 py-5 text-center text-slate-500 text-base font-medium">
                          <div className="flex items-center justify-center gap-2">
                            <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span>{row.traditional}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-center font-bold text-navy-900 text-base bg-ivory-100/50">
                          <div className="flex items-center justify-center gap-2">
                            <svg className="w-5 h-5 text-gold-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{row.atpass}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Below Comparison */}
            <div className="text-center mt-12">
              <p className="text-lg text-navy-900 font-bold mb-6">Want prospects who are already looking?</p>
              <a href="https://calendly.com/chandru-ink7/intro-call" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-navy-800 to-navy-900 hover:from-navy-900 hover:to-navy-950 text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_20px_rgba(15,23,42,0.4)] hover:-translate-y-1">
                Book Your Free Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Guarantee Section */}
      <section id="guarantee" className="py-32 bg-gradient-to-br from-navy-50 via-ivory-100 to-navy-50 bg-hero-pattern animate-slide-up relative overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-gold-100 text-gold-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">OUR GUARANTEE</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-navy-900 mb-4">First 3 calls free. Never pay for a no-show.</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-700 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-br from-navy-900 to-[#0C1322] rounded-2xl p-8 mb-8 text-center border border-slate-800 shadow-lg relative overflow-hidden flex flex-col items-center justify-center">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,168,83,0.15),transparent_70%)]"></div>
              {/* Gold Ribbon / Seal */}
              <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center border border-gold-400/30 mb-4 z-10 animate-pulse">
                <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-2 z-10">Pay-On-Show™ Guarantee</h3>
              <p className="text-gold-400 text-xs font-mono tracking-wider uppercase z-10 font-bold">100% Risk-Free Alignment</p>
            </div>
            <p className="text-lg text-text-muted mb-4 font-medium">
              The first 3 qualified calls are free, and you never pay for a no-show.
            </p>
            <p className="text-lg text-text-muted mb-4 font-medium">
              If a prospect does not attend, you do not get charged. Simple as that.
            </p>
            <p className="text-lg text-navy-900 font-bold">
              We carry the risk, not you.
            </p>
          </div>
        </div>
      </section>

      {/* 15. Pricing / Offer Card Section */}
      <section id="pricing" className="py-32 bg-white bg-dots-pattern animate-slide-up relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-gold-100 text-gold-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">SIMPLE PRICING</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-navy-900 mb-4">Simple performance-based pricing</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-700 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 md:p-12 border-2 border-gold-400 shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold font-display text-navy-900 mb-8 text-center">First 3 Qualified Calls Free</h3>

            <ul className="space-y-4 mb-8">
              {[
                "Pay only when a qualified prospect shows up",
                "Never pay for a no-show",
                "No long-term contracts",
                "Cancel anytime",
                "Built for B2B coaches, consultants & service founders"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-navy-900 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-navy-900 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="https://calendly.com/chandru-ink7/intro-call" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-to-r from-navy-800 to-navy-900 hover:from-navy-900 hover:to-navy-950 text-white px-8 py-5 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_20px_rgba(15,23,42,0.4)] hover:-translate-y-1 text-center">
              Book Your Free Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* 16. FAQ Section */}
      <section id="faq" className="py-32 bg-gradient-to-b from-ivory-100 to-white animate-slide-up relative">
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-gold-100 text-gold-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">FAQ</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-navy-900 mb-4">Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-700 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-text-muted font-medium">Straight answers.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How is this different from a normal lead agency?",
                a: "Normal lead agencies usually rely on volume. We focus on buyer intent, qualification, and timing."
              },
              {
                q: "What does 'qualified' actually mean?",
                a: "A qualified call means the prospect matches your target market, has a relevant need, and shows signs they may be actively looking for help."
              },
              {
                q: "Do I pay if no one books or shows?",
                a: "No. Your first 3 qualified calls are free, and after that you only pay when a qualified prospect actually shows up."
              },
              {
                q: "Am I locked into a contract?",
                a: "No. There are no long-term contracts. You can cancel anytime."
              },
              {
                q: "Is this built for coaches and consultants like me?",
                a: "Yes. theAtpass is built for founder-led B2B coaches, consultants, and service businesses selling expertise or high-ticket services."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-ivory-100/50 transition-colors"
                >
                  <span className="font-bold text-navy-900">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gold-600 transition-transform duration-300 ${faqOpen === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${faqOpen === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-text-muted font-medium">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. Final CTA Section */}
      <section id="final-cta" className="py-32 bg-gradient-to-br from-navy-50 via-ivory-100 to-navy-100 bg-hero-pattern animate-fade-in relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-600/5 to-gold-800/5"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-white text-navy-800 px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-lg border border-slate-200">READY TO GET STARTED?</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-navy-900 mb-6 leading-tight">
              Stop convincing strangers.<br />Start talking to buyers.
            </h2>
            <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto font-medium">
              Get 10+ qualified sales calls a month with prospects already in buying mode. Your first 3 are on us.
            </p>
            <a href="https://calendly.com/chandru-ink7/intro-call" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-navy-800 to-navy-900 hover:from-navy-900 hover:to-navy-950 text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_20px_rgba(15,23,42,0.4)] hover:-translate-y-1 mb-4">
              Book Your Free Strategy Call
            </a>
            <p className="text-sm text-text-muted font-bold">
              You only pay when a prospect actually shows up.
            </p>
          </div>

          <div className="hidden md:block bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-w-4xl mx-auto hover:shadow-3xl transition-shadow duration-500">
            {/* Calendar Header */}
            <div className="bg-navy-950 px-6 py-4 flex items-center justify-between border-b border-slate-800">
              <span className="text-sm font-bold text-white uppercase tracking-wider">Your Calendar This Week</span>
              <span className="bg-green-500/10 text-green-400 border border-green-500/30 px-3 py-1 rounded text-xs font-bold">+6 New Meetings Booked</span>
            </div>
            {/* Calendar Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-slate-200 text-center text-xs">
              {[
                { day: "Mon", dates: [
                  { time: "10:00 AM", label: "Intro: Sarah M.", desc: "Marketing CEO", type: "Qualified" },
                  { time: "2:30 PM", label: "Demo: James R.", desc: "Sales Coach (12 booked)", type: "Qualified" }
                ] },
                { day: "Tue", dates: [
                  { time: "11:30 AM", label: "Intro: Elena R.", desc: "SaaS founder", type: "Qualified" }
                ] },
                { day: "Wed", dates: [
                  { time: "1:00 PM", label: "Intro: David V.", desc: "Consulting CEO", type: "Qualified" },
                  { time: "4:00 PM", label: "Demo: Kalyca Z.", desc: "6 closed client lead", type: "Qualified" }
                ] },
                { day: "Thu", dates: [
                  { time: "10:30 AM", label: "Intro: Marcus S.", desc: "SaaS partner", type: "Qualified" }
                ] },
                { day: "Fri", dates: [
                  { time: "2:00 PM", label: "Closing: Sarah M.", desc: "Follow-up proposal", type: "High Intent" }
                ] }
              ].map((col, idx) => (
                <div key={idx} className="bg-navy-50/30 pb-4 md:pb-6">
                  <div className="bg-navy-50 py-3 font-bold border-b border-slate-200 text-navy-800 text-[10px] uppercase tracking-wider">{col.day}</div>
                  <div className="p-3 md:p-2 space-y-3 md:space-y-2 mt-0 md:mt-2">
                    {col.dates.map((meeting, mIdx) => (
                      <div key={mIdx} className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm text-left hover:scale-[1.02] hover:shadow-md transition-all duration-200">
                        <p className="font-bold text-[9px] text-navy-800 font-mono">{meeting.time}</p>
                        <p className="font-bold text-[10px] text-navy-900 truncate mt-0.5">{meeting.label}</p>
                        <p className="text-[9px] text-slate-500 truncate font-medium">{meeting.desc}</p>
                        <div className="flex justify-between items-center mt-1.5 pt-1.5 border-t border-slate-100">
                          <span className="text-[8px] bg-gold-100 text-gold-800 border border-gold-200 font-bold px-1.5 py-0.5 rounded font-sans uppercase">{meeting.type}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 18. Footer */}
      <footer id="footer" className="bg-navy-950 text-slate-400 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-[#0C1322]"></div>
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold font-display text-white">theAtpass</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-md font-medium leading-relaxed">
                Buyer-Intent Client Acquisition™. Built for B2B coaches, consultants & service-based founders who want qualified sales calls, not empty promises.
              </p>
              <a href="https://calendly.com/chandru-ink7/intro-call" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-navy-950 hover:bg-gold-50 hover:text-gold-700 px-6 py-3 rounded-full font-bold transition-all hover:shadow-lg hover:-translate-y-0.5 border border-slate-200">
                Book a Strategy Call
              </a>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-3 font-medium">
                <li><a href="#how-it-works" className="hover:text-gold-400 transition-colors">How It Works</a></li>
                <li><a href="#what-you-get" className="hover:text-gold-400 transition-colors">What You Get</a></li>
                <li><a href="#guarantee" className="hover:text-gold-400 transition-colors">Guarantee</a></li>
                <li><a href="#faq" className="hover:text-gold-400 transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h4>
              <ul className="space-y-3 font-medium">
                <li className="hover:text-gold-400 transition-colors cursor-pointer">hello@theatpass.com</li>
                <li><a href="https://calendly.com/chandru-ink7/intro-call" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Book a Call</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-medium">
              © {new Date().getFullYear()} theAtpass. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm font-medium">
              <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
