import React from 'react';
import { FacebookIcon, TwitterIcon, LinkedInIcon, EmailIcon, WhatsAppIcon } from './icons';
import { Logo } from './Logo';

interface FooterProps {
  language: 'ar' | 'en';
  t: any;
}

const Footer: React.FC<FooterProps> = ({ language, t }) => {
  
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: FacebookIcon },
    { name: 'Twitter', href: '#', icon: TwitterIcon },
    { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
  ];

  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Logo care={t.brandName.care[language]} connect={t.brandName.connect[language]} />
            <p className="text-gray-300 text-base">
              {t.description[language]}
            </p>
            <div className="space-y-4">
               <div className={`flex items-center space-x-3 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
                    <EmailIcon className="h-6 w-6 text-gray-400" />
                    <a href="mailto:contact.careconnet@gmail.com" className="text-gray-300 hover:text-white text-base">contact.careconnet@gmail.com</a>
               </div>
               <div className={`flex items-center space-x-3 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
                    <WhatsAppIcon className="h-6 w-6 text-gray-400" />
                    <a href="https://wa.me/212600323200" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-base" dir="ltr">00212600323200</a>
               </div>
            </div>
            <div className={`flex space-x-6 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">{t.links.solution.title[language]}</h3>
                <ul className="mt-4 space-y-4">
                  {t.links.solution.items.map((item: any) => (
                    <li key={item.key}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name[language]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">{t.links.support.title[language]}</h3>
                <ul className="mt-4 space-y-4">
                  {t.links.support.items.map((item: any) => (
                    <li key={item.key}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name[language]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">{t.links.company.title[language]}</h3>
                <ul className="mt-4 space-y-4">
                  {t.links.company.items.map((item: any) => (
                    <li key={item.key}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name[language]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">{t.links.legal.title[language]}</h3>
                <ul className="mt-4 space-y-4">
                  {t.links.legal.items.map((item: any) => (
                    <li key={item.key}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name[language]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} {t.copyright[language]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;