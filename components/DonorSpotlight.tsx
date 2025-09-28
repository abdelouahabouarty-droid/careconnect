
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

interface DonorSpotlightProps {
    language: 'ar' | 'en';
    t: any;
}

const DonorSpotlight: React.FC<DonorSpotlightProps> = ({ language, t }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? t.donors.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === t.donors.length - 1 ? 0 : prevIndex + 1));
    };
    
    useEffect(() => {
        const timer = setTimeout(handleNext, 7000);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    const currentDonor = t.donors[currentIndex];

    return (
        <section className="relative bg-gray-900 overflow-hidden">
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src="https://picsum.photos/seed/donor/1600/900?grayscale&blur=1"
                    alt="Abstract background representing giving"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-accent-800 mix-blend-multiply opacity-70" aria-hidden="true" />
            </div>
            <div className="relative max-w-4xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center min-h-[500px] flex flex-col justify-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mb-8">
                    {t.title[language]}
                </h2>
                
                <div key={currentDonor.id} className="animate-fade-in">
                    <img className="mx-auto h-24 w-24 rounded-full shadow-lg mb-6 border-4 border-white/50" src={currentDonor.avatarUrl} alt={currentDonor.name[language]} loading="lazy" />
                    <blockquote className="relative">
                        <p className="max-w-3xl mx-auto text-xl text-white italic">
                            "{currentDonor.quote[language]}"
                        </p>
                        <footer className="mt-6">
                            <p className="text-base font-semibold text-white">{currentDonor.name[language]}</p>
                            <p className="text-sm text-indigo-200">{currentDonor.role[language]}</p>
                        </footer>
                    </blockquote>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={handlePrev}
                    className={`absolute top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors ${language === 'ar' ? 'right-4 sm:right-0' : 'left-4 sm:left-0'}`}
                    aria-label="Previous donor"
                >
                    {language === 'ar' ? <ChevronRightIcon className="h-6 w-6" /> : <ChevronLeftIcon className="h-6 w-6" />}
                </button>
                <button
                    onClick={handleNext}
                    className={`absolute top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors ${language === 'ar' ? 'left-4 sm:left-0' : 'right-4 sm:right-0'}`}
                    aria-label="Next donor"
                >
                    {language === 'ar' ? <ChevronLeftIcon className="h-6 w-6" /> : <ChevronRightIcon className="h-6 w-6" />}
                </button>


                {/* Dot Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 space-x-reverse">
                    {t.donors.map((_: any, index: number) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                            aria-label={`Go to donor ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DonorSpotlight;
