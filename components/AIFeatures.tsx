
import React from 'react';
import { SmartMatchingIcon, NeedsAnalysisIcon, CommunicationIcon, VolunteerTrainingIcon, ImpactPredictionIcon, FraudDetectionIcon } from './icons';

interface AIFeaturesProps {
    language: 'ar' | 'en';
    t: any;
}

const AIFeatures: React.FC<AIFeaturesProps> = ({ language, t }) => {
    const features = [
        {
            icon: <SmartMatchingIcon className="h-12 w-12 text-white" />,
            title: t.features.matching.title[language],
            description: t.features.matching.description[language],
        },
        {
            icon: <NeedsAnalysisIcon className="h-12 w-12 text-white" />,
            title: t.features.analysis.title[language],
            description: t.features.analysis.description[language],
        },
        {
            icon: <CommunicationIcon className="h-12 w-12 text-white" />,
            title: t.features.communication.title[language],
            description: t.features.communication.description[language],
        },
        {
            icon: <VolunteerTrainingIcon className="h-12 w-12 text-white" />,
            title: t.features.training.title[language],
            description: t.features.training.description[language],
        },
        {
            icon: <ImpactPredictionIcon className="h-12 w-12 text-white" />,
            title: t.features.prediction.title[language],
            description: t.features.prediction.description[language],
        },
        {
            icon: <FraudDetectionIcon className="h-12 w-12 text-white" />,
            title: t.features.fraud.title[language],
            description: t.features.fraud.description[language],
        },
    ];

    return (
        <section className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        {t.title[language]}
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        {t.subtitle[language]}
                    </p>
                </div>
                <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-primary-500/80 mx-auto mb-6 ring-4 ring-primary-500/30">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold">{feature.title}</h3>
                            <p className="mt-2 text-base text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIFeatures;
