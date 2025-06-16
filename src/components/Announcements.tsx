import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const Announcements: React.FC = () => {
  const { t } = useLanguage();

  const announcements = [
    {
      title: t('announcement1Title'),
      description: t('announcement1Text'),
      date: 'March 15, 2024',
      location: 'Community Center',
      icon: Users,
      color: 'bg-gold-100 text-gold-700',
    },
    {
      title: t('announcement2Title'),
      description: t('announcement2Text'),
      date: 'Registration Open',
      location: 'Youth Center',
      icon: Calendar,
      color: 'bg-primary-100 text-primary-700',
    },
    {
      title: t('announcement3Title'),
      description: t('announcement3Text'),
      date: 'March 31, 2024',
      location: 'Main Sanctuary',
      icon: Calendar,
      color: 'bg-brown-100 text-brown-700',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-900 mb-6">{t('announcementsTitle')}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((announcement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-cream-200">
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg ${announcement.color} flex items-center justify-center mb-4`}>
                  <announcement.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-brown-900 mb-3">{announcement.title}</h3>
                <p className="text-brown-700 mb-4 leading-relaxed">{announcement.description}</p>
                <div className="space-y-2 text-sm text-brown-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {announcement.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {announcement.location}
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-cream-50">
                <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};