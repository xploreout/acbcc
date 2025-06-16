import React from 'react'
import { Calendar, Clock } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

interface HeroProps {
  onSectionChange: (section: string) => void
}

export const Hero: React.FC<HeroProps> = ({ onSectionChange }) => {
  const { t } = useLanguage()

  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      {/* Video Background */}
      <div className='absolute inset-0 z-0'>
        <video
          autoPlay
          muted
          loop
          playsInline
          className='w-full h-full object-cover'
        >
          <source
            src='https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
            type='video/mp4'
          />
        </video>
        {/* Gradient Overlay with warm tones */}
        <div className='absolute inset-0 bg-gradient-to-r from-white-900/70 via-primary-900/50 to-white-900/70'></div>
        {/* <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brown-900/40'></div> */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white-900/40'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 text-center text-gray-800 max-w-4xl mx-auto px-4'>
        <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-800'>
          {t('heroTitle')}
        </h1>
        <p className='text-xl md:text-2xl mb-4 font-light text-gray-700'>
          {t('heroSubtitle')}
        </p>
        <p className='text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 text-gray-600'>
          {t('heroDescription')}
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16'>
          <button
            onClick={() => onSectionChange('about')}
            className='bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg'
          >
            {t('joinUs')}
          </button>
          <button
            onClick={() => onSectionChange('about')}
            className='bg-transparent border-2 border-gray-600 text-gray-700 hover:bg-gray-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105'
          >
            {t('learnMore')}
          </button>
        </div>

        {/* Service Times */}
        <div className='bg-white/90 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto border border-gray-200 shadow-lg'>
          <h3 className='text-lg font-semibold mb-4 flex items-center justify-center text-gray-800'>
            <Calendar className='h-5 w-5 mr-2' />
            {t('serviceTimes')}
          </h3>
          <div className='space-y-2 text-sm'>
            <div className='flex items-center justify-between text-gray-700'>
              <span>{t('sundayWorship')}</span>
              <span className='flex items-center'>
                <Clock className='h-4 w-4 mr-1' />
                10:00 AM
              </span>
            </div>
            <div className='flex items-center justify-between text-gray-700'>
              <span>{t('wednesdayStudy')}</span>
              <span className='flex items-center'>
                <Clock className='h-4 w-4 mr-1' />
                7:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div className='w-1 h-16 bg-gray-400 rounded-full'>
          <div className='w-1 h-4 bg-gray-600 rounded-full animate-pulse'></div>
        </div>
      </div>
    </section>
  )
}
