import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FeaturedRequests from './components/FeaturedRequests';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Footer from './components/Footer';
import AIFeatures from './components/AIFeatures';
import Donation from './components/Donation';
import Cooperation from './components/Cooperation';
import Contact from './components/Contact';
import DonorSpotlight from './components/DonorSpotlight';
import { translations } from './lib/translations';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const t = translations.page;
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.title = t.title[language];
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.description[language]);
    }
    
  }, [language]);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header
        language={language}
        setLanguage={setLanguage}
        t={translations.header}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <main>
        <section id="home">
          <Hero language={language} t={translations.hero} />
        </section>
        <section id="how-it-works">
          <HowItWorks language={language} t={translations.howItWorks} />
        </section>
        <section id="ai-features">
          <AIFeatures language={language} t={translations.aiFeatures} />
        </section>
        <section id="requests">
          <FeaturedRequests
            language={language}
            t={translations.featuredRequests}
            searchQuery={searchQuery}
          />
        </section>
        <section id="donation">
         <Donation language={language} t={translations.donation} />
        </section>
        <section id="testimonials">
            <Testimonials language={language} t={translations.testimonials} />
        </section>
        <section id="donor-spotlight">
          <DonorSpotlight language={language} t={translations.donorSpotlight} />
        </section>
        <section id="about-us">
            <Cooperation language={language} t={translations.cooperation} />
        </section>
        <section id="contact">
            <Contact language={language} t={translations.contact} />
        </section>
        <Partners language={language} t={translations.partners} />
      </main>
      <Footer language={language} t={translations.footer} />
      <BackToTop t={translations.backToTop} language={language} />
    </div>
  );
};

export default App;