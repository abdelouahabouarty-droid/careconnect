
import React from 'react';

interface TestimonialsProps {
  language: 'ar' | 'en';
  t: any;
}

const Testimonials: React.FC<TestimonialsProps> = ({ language, t }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t.title[language]}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t.subtitle[language]}
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {t.testimonials.map((testimonial: any) => (
            <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <blockquote className="relative">
                <svg className={`absolute top-0 h-12 w-12 -mt-4 text-gray-200 transform ${language === 'ar' ? 'right-0 -mr-4' : 'left-0 -ml-4'}`} stroke="currentColor" fill="none" viewBox="0 0 144 144">
                  <path strokeWidth="2" d="M41.48 95.74C41.48 112.9 29.8 125.8 14.12 125.8H0V95.74h14.12V65.68H0V51.56h41.48v44.18zm102.52 0C144 112.9 132.32 125.8 116.64 125.8h-14.12V95.74h14.12V65.68h-41.48V51.56H144v44.18z"/>
                </svg>
                <p className="text-lg text-gray-600">"{testimonial.quote[language]}"</p>
                <footer className="mt-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full" src={testimonial.avatarUrl} alt={testimonial.name[language]} loading="lazy" />
                    </div>
                    <div className={language === 'ar' ? 'mr-4' : 'ml-4'}>
                      <div className="text-base font-bold text-gray-900">{testimonial.name[language]}</div>
                      <div className="text-base font-medium text-gray-500">{testimonial.role[language]}</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;