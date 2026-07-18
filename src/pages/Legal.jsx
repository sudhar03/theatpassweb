import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Legal({ initialTab = "Privacy Policy" }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const tabs = [
    { id: "Privacy Policy", label: "Privacy policy", path: "/privacy-policy" },
    { id: "Data Protection", label: "Data Protection", path: "/legal?tab=data-protection" },
    { id: "Data protection addendum", label: "Data protection addendum", path: "/legal?tab=dpa" },
    { id: "Terms and Conditions", label: "Terms and conditions", path: "/terms-and-conditions" },
    { id: "Earnings disclaimer", label: "Earnings disclaimer", path: "/legal?tab=earnings" }
  ];

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen flex flex-col">
      <header className="bg-navy-950 py-6 px-6 shadow-md relative z-20">
        <div className="max-w-content mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold font-display text-white">theAtpass</Link>
          <Link to="/" className="text-white hover:text-gold-400 font-medium transition-colors">Back to Home</Link>
        </div>
      </header>

      <main className="flex-1 max-w-content mx-auto w-full px-6 py-12 md:py-20 flex flex-col md:flex-row gap-12 relative z-10">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-10 flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-5 py-4 rounded-xl font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-navy-950 text-white shadow-lg border-l-4 border-gold-500' 
                    : 'text-slate-500 hover:bg-slate-200 hover:text-navy-900 border-l-4 border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </aside>

        <div className="flex-1 bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 prose prose-slate max-w-none">
          {activeTab === "Privacy Policy" && <PrivacyPolicyContent />}
          {activeTab === "Terms and Conditions" && <TermsContent />}
          {activeTab !== "Privacy Policy" && activeTab !== "Terms and Conditions" && (
            <div>
              <h1 className="text-3xl font-bold font-display text-navy-900 mb-6">{activeTab}</h1>
              <p className="text-slate-600">This section is currently being updated. Please check back soon.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-navy-950 text-slate-400 py-12 text-center border-t border-slate-800">
        <p className="font-medium">&copy; {new Date().getFullYear()} theAtpass. All rights reserved.</p>
      </footer>
    </div>
  );
}

function PrivacyPolicyContent() {
  return (
    <div className="space-y-6 text-slate-600">
      <h1 className="text-4xl font-bold font-display text-navy-900 mb-8 border-b border-slate-100 pb-6">Privacy Policy</h1>
      
      <p className="font-bold text-navy-900">This privacy policy sets out how theAtpass uses and protects your personal data. This privacy policy is provided in a layered format so you can click through to the specific areas set out below.</p>
      
      <ul className="list-decimal pl-6 space-y-2 font-medium text-navy-800">
        <li>IMPORTANT INFORMATION AND WHO WE ARE</li>
        <li>TYPES OF PERSONAL DATA WE COLLECT ABOUT YOU</li>
        <li>HOW IS YOUR PERSONAL DATA COLLECTED?</li>
        <li>HOW WE USE YOUR PERSONAL DATA</li>
        <li>DISCLOSURES OF YOUR PERSONAL DATA</li>
        <li>INTERNATIONAL TRANSFERS</li>
        <li>DATA SECURITY</li>
        <li>DATA RETENTION</li>
        <li>YOUR LEGAL RIGHTS</li>
        <li>CONTACT DETAILS</li>
        <li>COMPLAINTS</li>
        <li>CHANGES TO THE PRIVACY POLICY AND YOUR DUTY TO INFORM US OF CHANGES</li>
        <li>THIRD PARTY LINKS</li>
      </ul>

      <h2 className="text-2xl font-bold font-display text-navy-900 mt-10 mb-4">Important information and who we are</h2>
      <p>This privacy policy gives you information about how theAtpass collects and uses your personal data through your use of this website, including any data you may provide when you purchase a service from us.</p>
      <p>This website is not intended for children and we do not knowingly collect data relating to children.</p>
      
      <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">Controller</h3>
      <p>theAtpass Ltd is the controller and responsible for your personal data (referred to as "theAtpass", "we", "us" or "our" in this privacy policy).</p>
      <p>If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact us using the information set out in the contact details section.</p>

      <h2 className="text-2xl font-bold font-display text-navy-900 mt-10 mb-4">The types of personal data we collect about you</h2>
      <p>Personal data means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Identity Data</strong> includes first name, last name, any previous names, username or similar identifier, marital status, title, date of birth and gender.</li>
        <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
        <li><strong>Financial Data</strong> includes bank account and payment card details.</li>
        <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of services you have purchased from us.</li>
        <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, device ID and other technology on the devices you use to access this website.</li>
        <li><strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.</li>
        <li><strong>Usage Data</strong> includes information about how you interact with and use our website and services.</li>
        <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
      </ul>
      <p>We also collect, use and share aggregated data such as statistical or demographic data which is not personal data as it does not directly (or indirectly) reveal your identity. For example, we may aggregate individuals' Usage Data to calculate the percentage of users accessing a specific website feature in order to analyse general trends in how users are interacting with our website to help improve the website and our service offering.</p>

      <h2 className="text-2xl font-bold font-display text-navy-900 mt-10 mb-4">How is your personal data collected?</h2>
      <p>We use different methods to collect data from and about you including through:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Your interactions with us.</strong> You may give us your personal data by filling in online forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you apply for our services, subscribe to our service, request marketing, or give feedback.</li>
        <li><strong>Automated technologies or interactions.</strong> As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns.</li>
        <li><strong>Third parties or publicly available sources.</strong> We will receive personal data about you from various third parties such as analytics providers (Google, Meta) and scheduling providers (Calendly).</li>
      </ul>

      <h2 className="text-2xl font-bold font-display text-navy-900 mt-10 mb-4">How we use your personal data</h2>
      <p>The law requires us to have a legal basis for collecting and using your personal data. We rely on one or more of the following legal bases:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Performance of a contract with you:</strong> Where we need to perform the contract we are about to enter into or have entered into with you.</li>
        <li><strong>Legitimate interests:</strong> We may use your personal data where it is necessary to conduct our business and pursue our legitimate interests, for example to prevent fraud and enable us to give you the best and most secure customer experience.</li>
        <li><strong>Legal obligation:</strong> We may use your personal data where it is necessary for compliance with a legal obligation that we are subject to.</li>
        <li><strong>Consent:</strong> We rely on consent only where we have obtained your active agreement to use your personal data for a specified purpose, for example if you subscribe to an email newsletter.</li>
      </ul>

      <h2 className="text-2xl font-bold font-display text-navy-900 mt-10 mb-4">Disclosures of your personal data</h2>
      <p>We may share your personal data where necessary with external third parties such as Meta, Google, Stripe, Calendly, and other essential service providers for advertisement tracking, processing payment details, and hosting our services.</p>
      <p>We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.</p>

      <h2 className="text-2xl font-bold font-display text-navy-900 mt-10 mb-4">International transfers</h2>
      <p>We may transfer your personal data to service providers that carry out certain functions on our behalf. This may involve transferring personal data outside the UK to countries which have laws that do not provide the same level of data protection as the UK law.</p>
      <p>Whenever we transfer your personal data out of the UK to service providers, we ensure a similar degree of protection is afforded to it by ensuring that the appropriate safeguards are in place.</p>

      <h2 className="text-2xl font-bold font-display text-navy-900 mt-10 mb-4">Data security</h2>
      <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>

      <h2 className="text-2xl font-bold font-display text-navy-900 mt-10 mb-4">Data retention</h2>
      <p>We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.</p>

      <h2 className="text-2xl font-bold font-display text-navy-900 mt-10 mb-4">Your legal rights</h2>
      <p>You have a number of rights under data protection laws in relation to your personal data. You have the right to:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Request access to your personal data.</li>
        <li>Request correction of the personal data that we hold about you.</li>
        <li>Request erasure of your personal data in certain circumstances.</li>
        <li>Object to processing of your personal data where we are relying on a legitimate interest.</li>
        <li>Request restriction of processing of your personal data.</li>
        <li>Request the transfer of your personal data to you or to a third party.</li>
        <li>Withdraw consent at any time where we are relying on consent to process your personal data.</li>
      </ul>

      <h2 className="text-2xl font-bold font-display text-navy-900 mt-10 mb-4">Contact details</h2>
      <p>If you have any questions about this privacy policy or about the use of your personal data or you want to exercise your privacy rights, please contact us in the following ways:</p>
      <p><strong>Email address:</strong> <a href="mailto:chandru@theatpass.com" className="text-gold-600 hover:text-gold-700">chandru@theatpass.com</a></p>

      <h2 className="text-2xl font-bold font-display text-navy-900 mt-10 mb-4">Complaints</h2>
      <p>You have the right to make a complaint at any time to the Information Commissioner’s Office (ICO), the UK regulator for data protection issues (www.ico.org.uk). We would, however, appreciate the chance to deal with your concerns before you approach the ICO so please contact us in the first instance.</p>

      <h2 className="text-2xl font-bold font-display text-navy-900 mt-10 mb-4">Changes to the privacy policy</h2>
      <p>We keep our privacy policy under regular review. It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us, for example a new address or email address.</p>

      <h2 className="text-2xl font-bold font-display text-navy-900 mt-10 mb-4">Third-party links</h2>
      <p>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.</p>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="space-y-6 text-slate-600">
      <h1 className="text-4xl font-bold font-display text-navy-900 mb-8 border-b border-slate-100 pb-6">Terms and Conditions</h1>
      
      <p>Welcome to theAtpass. These terms and conditions outline the rules and regulations for the use of theAtpass's Website.</p>
      <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use theAtpass if you do not agree to take all of the terms and conditions stated on this page.</p>
      
      <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">Cookies</h3>
      <p>We employ the use of cookies. By accessing theAtpass, you agreed to use cookies in agreement with the theAtpass's Privacy Policy.</p>
      <p>Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website.</p>

      <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">License</h3>
      <p>Unless otherwise stated, theAtpass and/or its licensors own the intellectual property rights for all material on theAtpass. All intellectual property rights are reserved. You may access this from theAtpass for your own personal use subjected to restrictions set in these terms and conditions.</p>
      
      <p>You must not:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Republish material from theAtpass</li>
        <li>Sell, rent or sub-license material from theAtpass</li>
        <li>Reproduce, duplicate or copy material from theAtpass</li>
        <li>Redistribute content from theAtpass</li>
      </ul>

      <h3 className="text-xl font-bold text-navy-900 mt-8 mb-4">Disclaimer</h3>
      <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>limit or exclude our or your liability for death or personal injury;</li>
        <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
        <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
        <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
      </ul>
      <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
      <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
    </div>
  );
}
