import React from 'react'
import { Menu, X, Globe, Church } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = [
    { id: 'home', label: t('home') },
    { id: 'about', label: t('about') },
    { id: 'announcements', label: t('announcements') },
    { id: 'ministries', label: t('ministries') },
    { id: 'events', label: t('events') },
    { id: 'give', label: t('give') },
  ]

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId)
    setIsOpen(false)
  }

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-cream-50/95 backdrop-blur-sm shadow-sm border-b border-cream-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <Church className='h-8 w-8 text-primary-700' />
            <span className='text-xl font-bold text-brown-800'>
              Grace Community
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-primary-700 border-b-2 border-primary-700'
                    : 'text-brown-700 hover:text-primary-700'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Language Toggle */}
            <div className='flex items-center space-x-2 border-l border-cream-300 pl-4'>
              <Globe className='h-4 w-4 text-brown-500' />
              <button
                onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                className='px-3 py-1 text-sm font-medium text-brown-700 bg-cream-100 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200'
              >
                {language === 'en' ? '中文' : 'EN'}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center space-x-2'>
            <Globe className='h-4 w-4 text-brown-500' />
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className='px-2 py-1 text-sm font-medium text-brown-700 bg-cream-100 rounded hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200 mr-2'
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-brown-700 hover:text-primary-700 transition-colors duration-200'
            >
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden py-4 border-t border-cream-200'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-brown-700 hover:text-primary-700 hover:bg-cream-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
