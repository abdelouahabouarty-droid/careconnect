
import React from 'react';
import { PostRequestIcon, MatchIcon, ReceiveHelpIcon } from './icons';

interface HowItWorksProps {
  language: 'ar' | 'en';
  t: any;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ language, t }) => {
  const steps = [
    {
      icon: <PostRequestIcon className="h-12 w-12 text-white" />,
      title: t.steps.create.title[language],
      description: t.steps.create.description[language],
    },
    {
      icon: <MatchIcon className="h-12 w-12 text-white" />,
      title: t.steps.find.title[language],
      description: t.steps.find.description[language],
    },
    {
      icon: <ReceiveHelpIcon className="h-12 w-12 text-white" />,
      title: t.steps.receive.title[language],
      description: t.steps.receive.description[language],
    },
  ];

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
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-x-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-primary-500 mx-auto">
                {step.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-base text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
