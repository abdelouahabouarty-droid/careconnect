
import React from 'react';

interface DonationProps {
  language: 'ar' | 'en';
  t: any;
}

const Donation: React.FC<DonationProps> = ({ language, t }) => {
  return (
    <section className="py-20 bg-secondary-500/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`${language === 'ar' ? 'md:text-right' : 'md:text-left'} text-center`}>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t.title[language]}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t.description[language]}
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block px-12 py-4 text-lg font-semibold text-white bg-primary-500 rounded-lg shadow-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-transform transform hover:scale-105"
              >
                {t.buttonText[language]}
              </a>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t.bankTransfer.title[language]}</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">{t.bankTransfer.bankNameLabel[language]}</span> {t.bankTransfer.bankNameValue[language]}</p>
              <p><span className="font-semibold">{t.bankTransfer.accountNumberLabel[language]}</span> 123-456-789012</p>
              <p><span className="font-semibold">IBAN:</span> SA03 8000 0000 6080 1016 7519</p>
              <p><span className="font-semibold">Swift Code:</span> CARESA</p>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              {t.bankTransfer.footerNote[language]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;