import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-white'
      }`}
    >
      <div className="max-w-content mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img 
              src="/atpasslogo-removebg-preview.png" 
              alt="theAtpass" 
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#why" className="text-text-muted hover:text-text-dark transition-colors text-sm font-medium">Why Us</a>
            <a href="#how" className="text-text-muted hover:text-text-dark transition-colors text-sm font-medium">How it Works</a>
            <a href="#what-you-get" className="text-text-muted hover:text-text-dark transition-colors text-sm font-medium">What You Get</a>
            <a href="#faq" className="text-text-muted hover:text-text-dark transition-colors text-sm font-medium">FAQ</a>
          </div>

          <a 
            href="https://calendly.com/chandru-theatpass/discovery-call" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-cta-blue text-white font-semibold rounded-full hover:bg-cta-hover transition-all hover:scale-105 hover:-translate-y-0.5"
          >
            Book Strategy Call
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-text-dark p-2"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-text-dark mb-1.5 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-text-dark mb-1.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-text-dark transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pb-4 border-t border-border mt-4">
            <div className="flex flex-col space-y-4 pt-4">
              <a 
                href="#why" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-text-muted hover:text-text-dark transition-colors text-sm font-medium"
              >
                Why Us
              </a>
              <a 
                href="#how" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-text-muted hover:text-text-dark transition-colors text-sm font-medium"
              >
                How it Works
              </a>
              <a 
                href="#what-you-get" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-text-muted hover:text-text-dark transition-colors text-sm font-medium"
              >
                What You Get
              </a>
              <a 
                href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-text-muted hover:text-text-dark transition-colors text-sm font-medium"
              >
                FAQ
              </a>
              <a 
                href="https://calendly.com/chandru-theatpass/discovery-call" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-cta-blue text-white font-semibold rounded-full hover:bg-cta-hover transition-all"
              >
                Book Strategy Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
