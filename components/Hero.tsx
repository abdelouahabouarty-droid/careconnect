
import React from 'react';

interface HeroProps {
  language: 'ar' | 'en';
  t: any;
}

const Hero: React.FC<HeroProps> = ({ language, t }) => {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://picsum.photos/1600/900?grayscale&blur=2"
          alt="Community helping each other"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gray-800 mix-blend-multiply opacity-60" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t.title[language]}
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-indigo-100">
          {t.subtitle[language]}
        </p>
        <div className={`mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 ${language === 'ar' ? 'sm:space-x-reverse' : ''}`}>
          <a
            href="#requests"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-600 transition-transform transform hover:scale-105"
          >
            {t.buttons.requestHelp[language]}
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-600 bg-white hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            {t.buttons.volunteer[language]}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;