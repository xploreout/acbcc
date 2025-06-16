import React from 'react';
import { Heart, CreditCard, Banknote, Gift } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const Give: React.FC = () => {
  const { t } = useLanguage();

  const givingOptions = [
    {
      title: t('giveOnline'),
      description: 'Secure online giving available 24/7',
      icon: CreditCard,
      color: 'bg-primary-600'
    },
    {
      title: t('giveInPerson'),
      description: 'Offering during Sunday service',
      icon: Banknote,
      color: 'bg-gold-600'
    },
    {
      title: 'Monthly Giving',
      description: 'Set up recurring donations',
      icon: Gift,
      color: 'bg-brown-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Heart className="h-8 w-8 text-primary-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-brown-900 mb-6">{t('giveTitle')}</h2>
          <p className="text-xl text-brown-700 max-w-3xl mx-auto leading-relaxed">
            {t('giveDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {givingOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center border border-cream-200">
              <div className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <option.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brown-900 mb-4">{option.title}</h3>
              <p className="text-brown-700 mb-6">{option.description}</p>
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium">
                Give Now
              </button>
            </div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 border border-cream-200">
          <h3 className="text-2xl font-bold text-brown-900 text-center mb-8">Your Impact</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
              <p className="text-brown-700">Families Served Monthly</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-600 mb-2">25+</div>
              <p className="text-brown-700">Community Programs</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-brown-600 mb-2">500+</div>
              <p className="text-brown-700">Lives Touched Weekly</p>
            </div>
          </div>
        </div>

        {/* Bible Verse */}
        <div className="text-center mt-12">
          <div className="bg-primary-600 text-white p-8 rounded-lg max-w-2xl mx-auto">
            <p className="text-lg italic mb-4">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
            </p>
            <p className="font-semibold">2 Corinthians 9:7</p>
          </div>
        </div>
      </div>
    </section>
  );
};