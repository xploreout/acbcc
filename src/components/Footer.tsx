import React from 'react';
import { Church, Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brown-900 text-white border-t border-brown-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Church className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold text-cream-100">Grace Community Church</span>
            </div>
            <p className="text-cream-200 mb-6 max-w-md">
              A place where faith, hope, and love come together. Join our community as we grow together in Christ and serve our neighbors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary-600 p-2 rounded-full hover:bg-primary-700 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-600 p-2 rounded-full hover:bg-primary-700 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-600 p-2 rounded-full hover:bg-primary-700 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream-100">Quick Links</h3>
            <ul className="space-y-2 text-cream-200">
              <li><a href="#" className="hover:text-white transition-colors duration-200">{t('about')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">{t('ministries')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">{t('events')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">{t('give')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">{t('contact')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream-100">Contact</h3>
            <div className="space-y-3 text-cream-200">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{t('email')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{t('phone')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brown-800 mt-8 pt-8 text-center">
          <p className="text-cream-300">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};