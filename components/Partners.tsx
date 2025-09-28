
import React from 'react';

interface PartnersProps {
  language: 'ar' | 'en';
  t: any;
}

const Partners: React.FC<PartnersProps> = ({ language, t }) => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {t.title[language]}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
                {t.subtitle[language]}
            </p>
        </div>
        <div className="flow-root">
          <div className="-mt-4 -ms-8 flex flex-wrap justify-center lg:-ms-4">
            {t.partnerList.map((partner: any) => (
              <div key={partner.key} className="mt-4 ms-8 flex flex-grow flex-shrink-0 items-center justify-center lg:ms-4 lg:flex-grow-0">
                <span className="text-gray-500 font-semibold text-lg hover:text-gray-800 transition-colors">
                  {partner.name[language]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
