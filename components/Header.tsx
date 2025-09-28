import React, { useState } from 'react';
import { Logo } from './Logo';
import { SearchIcon } from './icons';

interface HeaderProps {
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
  t: any;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, t, searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
  };

  const navLinks = t.navLinks;

  const searchBar = (isMobile = false) => (
    <div className="w-full">
        <label htmlFor={isMobile ? "search-mobile" : "search"} className="sr-only">{t.searchPlaceholder[language]}</label>
        <div className="relative">
            <div className={`absolute inset-y-0 flex items-center pointer-events-none ${language === 'ar' ? 'right-0 pr-3' : 'left-0 pl-3'}`}>
                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
                id={isMobile ? "search-mobile" : "search"}
                name="search"
                className={`block w-full py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm ${language === 'ar' ? 'pr-10 pl-3' : 'pl-10 pr-3'}`}
                placeholder={t.searchPlaceholder[language]}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    </div>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
             <Logo care={t.brandName.care[language]} connect={t.brandName.connect[language]} />
          </div>
          
          <div className="hidden md:flex items-center flex-1 justify-center px-4">
            <div className="w-full max-w-md">{searchBar()}</div>
          </div>

          <div className="flex items-center">
            <nav className="hidden md:flex md:space-x-6">
              {navLinks.map((link: any) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="font-medium text-gray-500 hover:text-primary-700 transition-colors duration-200 whitespace-nowrap"
                >
                  {link.name[language]}
                </a>
              ))}
            </nav>
            <div className={`hidden md:flex items-center space-x-4 ${language === 'ar' ? 'mr-6' : 'ml-6'}`}>
              <button
                onClick={handleLanguageChange}
                className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                {language === 'ar' ? 'English' : 'العربية'}
              </button>
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-semibold text-white bg-primary-700 rounded-md shadow-sm hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700 transition-transform transform hover:scale-105"
              >
                {t.login[language]}
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
             <button
                onClick={handleLanguageChange}
                className="px-3 py-1 text-sm font-semibold text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors mx-2"
              >
                {language === 'ar' ? 'EN' : 'AR'}
              </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t" id="mobile-menu">
          <div className="px-4 pt-4 pb-3">
            {searchBar(true)}
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link: any) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-700 hover:bg-gray-100"
              >
                {link.name[language]}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-5">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full px-4 py-2 text-center text-sm font-semibold text-white bg-primary-700 rounded-md shadow-sm hover:bg-primary-800"
              >
                {t.login[language]}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;