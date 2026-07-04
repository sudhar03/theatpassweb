const Footer = () => {
  return (
    <footer className="bg-hero-bg text-white py-16">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-lg">
            theAtpass Buyer-Intent Client Acquisition™ · Built for B2B coaches, consultants & service-based founders
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-500">
          <p>&copy; 2026 theAtpass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
