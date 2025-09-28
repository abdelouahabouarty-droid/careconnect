
import React, { useState } from 'react';
import { EmailIcon, WhatsAppIcon, FacebookIcon, TwitterIcon, LinkedInIcon } from './icons';

interface ContactProps {
  language: 'ar' | 'en';
  t: any;
}

const Contact: React.FC<ContactProps> = ({ language, t }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: FacebookIcon },
    { name: 'Twitter', href: '#', icon: TwitterIcon },
    { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
  ];
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Hide the success message after 5 seconds
    setTimeout(() => setFormSubmitted(false), 5000);
    // Optionally reset the form fields
    e.currentTarget.reset();
  };


  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t.title[language]}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t.subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t.info.title[language]}</h3>
            <div className="space-y-6">
              <a href="mailto:contact.careconnet@gmail.com" className={`flex items-center space-x-4 ${language === 'ar' ? 'space-x-reverse' : ''} text-lg text-gray-700 hover:text-primary-500 transition-colors`}>
                <EmailIcon className="h-8 w-8 text-primary-500" />
                <span>contact.careconnet@gmail.com</span>
              </a>
              <a href="https://wa.me/212600323200" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-4 ${language === 'ar' ? 'space-x-reverse' : ''} text-lg text-gray-700 hover:text-primary-500 transition-colors`}>
                <WhatsAppIcon className="h-8 w-8 text-primary-500" />
                <span dir="ltr">00212600323200</span>
              </a>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">{t.info.followUs[language]}</h4>
              <div className={`flex space-x-6 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
                {socialLinks.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-500 hover:text-primary-500 transition-colors">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-7 w-7" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="full-name" className="block text-sm font-bold text-gray-700 mb-2">
                  {t.form.name[language]}
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  {t.form.email[language]}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                  {t.form.message[language]}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-transform transform hover:scale-105"
                >
                  {t.form.submit[language]}
                </button>
              </div>
              {formSubmitted && (
                 <div className="mt-4 p-4 text-center text-green-800 bg-green-100 border border-green-200 rounded-md animate-fade-in">
                    {t.form.successMessage[language]}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;