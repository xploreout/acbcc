import React, { useState } from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Announcements } from './components/Announcements';
import { Ministries } from './components/Ministries';
import { Events } from './components/Events';
import { Give } from './components/Give';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero onSectionChange={setActiveSection} />;
      case 'about':
        return <About />;
      case 'announcements':
        return <Announcements />;
      case 'ministries':
        return <Ministries />;
      case 'events':
        return <Events />;
      case 'give':
        return <Give />;
      default:
        return <Hero onSectionChange={setActiveSection} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream-50">
        <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
        
        <main>
          {renderSection()}
          <Contact />
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;