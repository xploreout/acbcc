import React from 'react';
import { Heart, Users, BookOpen } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: 'Love',
      description: 'We believe in showing God\'s love through our actions and words.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong relationships and supporting one another.',
    },
    {
      icon: BookOpen,
      title: 'Growth',
      description: 'Continuously learning and growing in our faith journey.',
    },
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-900 mb-6">{t('aboutTitle')}</h2>
          <p className="text-xl text-brown-700 max-w-3xl mx-auto leading-relaxed">
            {t('aboutDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/8468715/pexels-photo-8468715.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Church community"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-brown-900 mb-4">{t('ourMission')}</h3>
            <p className="text-lg text-brown-700 mb-6 leading-relaxed">
              {t('missionText')}
            </p>
            <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
              <p className="text-primary-800 font-medium text-center italic">
                "Therefore go and make disciples of all nations..." - Matthew 28:19
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-brown-900 text-center mb-12">{t('ourValues')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-cream-200">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h4 className="text-xl font-semibold text-brown-900 mb-4">{value.title}</h4>
                <p className="text-brown-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};