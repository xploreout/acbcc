import React from 'react';
import { Users, Baby, Music, Hand as Hands } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const Ministries: React.FC = () => {
  const { t } = useLanguage();

  const ministries = [
    {
      title: t('youthMinistry'),
      description: t('youthDescription'),
      icon: Users,
      image: 'https://images.pexels.com/photos/8468663/pexels-photo-8468663.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-primary-600',
    },
    {
      title: t('childrenMinistry'),
      description: t('childrenDescription'),
      icon: Baby,
      image: 'https://images.pexels.com/photos/8468732/pexels-photo-8468732.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-gold-600',
    },
    {
      title: t('worshipMinistry'),
      description: t('worshipDescription'),
      icon: Music,
      image: 'https://images.pexels.com/photos/8468705/pexels-photo-8468705.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-brown-600',
    },
    {
      title: 'Outreach Ministry',
      description: 'Serving our community through various outreach programs and charitable initiatives.',
      icon: Hands,
      image: 'https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'bg-cream-600',
    },
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-900 mb-6">{t('ministriesTitle')}</h2>
          <p className="text-xl text-brown-700 max-w-3xl mx-auto">
            Discover ways to get involved and grow in your faith through our various ministry opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ministries.map((ministry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-cream-200">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={ministry.image}
                  alt={ministry.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-brown-900/40 group-hover:bg-brown-900/30 transition-colors duration-300"></div>
                <div className={`absolute top-4 left-4 w-12 h-12 ${ministry.color} rounded-lg flex items-center justify-center`}>
                  <ministry.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-brown-900 mb-3">{ministry.title}</h3>
                <p className="text-brown-700 mb-4 leading-relaxed">{ministry.description}</p>
                <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};