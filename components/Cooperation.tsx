
import React from 'react';

interface CooperationProps {
    language: 'ar' | 'en';
    t: any;
}

const Cooperation: React.FC<CooperationProps> = ({ language, t }) => {
    return (
        <div className="relative bg-gray-900">
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src="https://picsum.photos/seed/coop/1600/900?grayscale"
                    alt="People working together"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-primary-800 mix-blend-multiply opacity-70" aria-hidden="true" />
            </div>
            <div className="relative max-w-4xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {t.title[language]}
                </h2>
                <p className="mt-6 mx-auto text-xl text-indigo-100">
                   {t.description[language]}
                </p>
            </div>
        </div>
    );
};

export default Cooperation;