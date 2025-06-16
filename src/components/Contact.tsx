import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-brown-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-cream-100">{t('contactTitle')}</h2>
          <p className="text-xl text-cream-200 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us with any questions or to learn more about our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cream-100">Visit Us</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary-400 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1 text-cream-100">Address</h4>
                  <p className="text-cream-200">{t('address')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-gold-400 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1 text-cream-100">Phone</h4>
                  <p className="text-cream-200">{t('phone')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary-400 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1 text-cream-100">Email</h4>
                  <p className="text-cream-200">{t('email')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-gold-400 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1 text-cream-100">Office Hours</h4>
                  <div className="text-cream-200 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Before and after service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-cream-100">{t('followUs')}</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-primary-600 p-3 rounded-full hover:bg-primary-700 transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary-600 p-3 rounded-full hover:bg-primary-700 transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary-600 p-3 rounded-full hover:bg-primary-700 transition-colors duration-200">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brown-800 p-8 rounded-lg border border-brown-700">
            <h3 className="text-2xl font-bold mb-6 text-cream-100">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-cream-200">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-brown-700 border border-brown-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-cream-200">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-brown-700 border border-brown-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-cream-200">Email</label>
                <input
                  type="email"
                  className="w-full bg-brown-700 border border-brown-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-cream-200">Subject</label>
                <input
                  type="text"
                  className="w-full bg-brown-700 border border-brown-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-cream-200">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-brown-700 border border-brown-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};