import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const Events: React.FC = () => {
  const { t } = useLanguage();

  const events = [
    {
      title: t('event1'),
      date: t('event1Date'),
      time: '10:00 AM - 11:30 AM',
      location: 'Main Sanctuary',
      attendees: '200+',
      description: 'Join us for inspiring worship, fellowship, and biblical teaching.',
      image: 'https://images.pexels.com/photos/8468720/pexels-photo-8468720.jpeg?auto=compress&cs=tinysrgb&w=800',
      recurring: true,
    },
    {
      title: t('event2'),
      date: t('event2Date'),
      time: '7:00 PM - 8:30 PM',
      location: 'Fellowship Hall',
      attendees: '50+',
      description: 'Deep dive into God\'s word with interactive discussion and prayer.',
      image: 'https://images.pexels.com/photos/8468697/pexels-photo-8468697.jpeg?auto=compress&cs=tinysrgb&w=800',
      recurring: true,
    },
    {
      title: t('event3'),
      date: t('event3Date'),
      time: '6:00 PM - 8:00 PM',
      location: 'Community Hall',
      attendees: '100+',
      description: 'A time of fellowship and community over a shared meal.',
      image: 'https://images.pexels.com/photos/6994847/pexels-photo-6994847.jpeg?auto=compress&cs=tinysrgb&w=800',
      recurring: true,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-900 mb-6">{t('eventsTitle')}</h2>
          <p className="text-xl text-brown-700 max-w-3xl mx-auto">
            Join us for meaningful gatherings that strengthen our faith and community bonds.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-cream-200">
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                {event.recurring && (
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Recurring
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brown-900 mb-3">{event.title}</h3>
                <p className="text-brown-700 mb-4 leading-relaxed">{event.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-brown-600">
                    <Calendar className="h-4 w-4 mr-2 text-primary-600" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-brown-600">
                    <Clock className="h-4 w-4 mr-2 text-gold-600" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-brown-600">
                    <MapPin className="h-4 w-4 mr-2 text-brown-600" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-brown-600">
                    <Users className="h-4 w-4 mr-2 text-cream-600" />
                    {event.attendees} Expected
                  </div>
                </div>

                <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium">
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