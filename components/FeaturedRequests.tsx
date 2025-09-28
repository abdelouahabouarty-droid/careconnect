
import React from 'react';

interface FeaturedRequestsProps {
  language: 'ar' | 'en';
  t: any;
  searchQuery: string;
}

const FeaturedRequests: React.FC<FeaturedRequestsProps> = ({ language, t, searchQuery }) => {
  const lowercasedQuery = searchQuery.toLowerCase().trim();

  const filteredRequests = t.requests.filter((request: any) => {
    if (!lowercasedQuery) return true;
    return (
      request.title[language].toLowerCase().includes(lowercasedQuery) ||
      request.description[language].toLowerCase().includes(lowercasedQuery) ||
      request.category[language].toLowerCase().includes(lowercasedQuery) ||
      request.location[language].toLowerCase().includes(lowercasedQuery)
    );
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t.title[language]}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t.subtitle[language]}
          </p>
        </div>
        <div className="mt-12">
          {filteredRequests.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredRequests.map((request: any) => (
                <div key={request.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={request.imageUrl} alt={request.title[language]} loading="lazy" />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-accent-600">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-accent-100 text-accent-800">
                          {request.category[language]}
                        </span>
                      </p>
                      <a href="#donation" className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">{request.title[language]}</p>
                        <p className="mt-3 text-base text-gray-500">{request.description[language]}</p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className={`flex-shrink-0 h-5 w-5 text-gray-400 ${language === 'ar' ? 'ml-1.5' : 'mr-1.5'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {request.location[language]}
                      </div>
                      <a href="#donation" className="text-sm font-semibold text-primary-500 hover:text-primary-600">
                        {t.contributeNow[language]} &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              <h3 className="mt-2 text-xl font-medium text-gray-900">{t.noResults.title[language]}</h3>
              <p className="mt-1 text-base text-gray-500">{t.noResults.description[language]}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRequests;