import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './icons';

interface BackToTopProps {
  t: any;
  language: 'ar' | 'en';
}

const BackToTop: React.FC<BackToTopProps> = ({ t, language }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`fixed bottom-5 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${language === 'ar' ? 'left-5' : 'right-5'}`}>
      <button
        onClick={scrollToTop}
        className="bg-primary-700 hover:bg-primary-800 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700"
        aria-label={t.label[language]}
      >
        <ArrowUpIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default BackToTop;