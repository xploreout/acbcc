import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    announcements: 'Announcements',
    ministries: 'Ministries',
    events: 'Events',
    give: 'Give',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Welcome to Grace Community Church',
    heroSubtitle: 'A place where faith, hope, and love come together',
    heroDescription: 'Join us in worship, fellowship, and service as we grow together in Christ. All are welcome in our loving community.',
    joinUs: 'Join Us This Sunday',
    learnMore: 'Learn More',
    
    // Service Times
    serviceTimes: 'Service Times',
    sundayWorship: 'Sunday Worship',
    wednesdayStudy: 'Wednesday Bible Study',
    
    // About Section
    aboutTitle: 'About Our Church',
    aboutDescription: 'Grace Community Church has been serving our community for over 30 years. We are a diverse congregation united by our love for Jesus Christ and our commitment to making disciples who make a difference in the world.',
    ourMission: 'Our Mission',
    missionText: 'To love God, love people, and serve our community through the transforming power of Jesus Christ.',
    ourValues: 'Our Values',
    
    // Announcements
    announcementsTitle: 'Latest Announcements',
    announcement1Title: 'Community Outreach Program',
    announcement1Text: 'Join us this Saturday for our monthly community service project. We\'ll be serving meals at the local shelter.',
    announcement2Title: 'Youth Summer Camp',
    announcement2Text: 'Registration is now open for our annual youth summer camp. Early bird pricing available until March 31st.',
    announcement3Title: 'Easter Celebration',
    announcement3Text: 'Join us for our special Easter celebration service with music, testimony, and communion.',
    
    // Ministries
    ministriesTitle: 'Our Ministries',
    youthMinistry: 'Youth Ministry',
    youthDescription: 'Empowering the next generation through Bible study, fellowship, and service opportunities.',
    childrenMinistry: 'Children\'s Ministry',
    childrenDescription: 'Creating a safe and fun environment where children can learn about God\'s love.',
    worshipMinistry: 'Worship Ministry',
    worshipDescription: 'Leading our congregation in heartfelt worship through music and prayer.',
    
    // Events
    eventsTitle: 'Upcoming Events',
    event1: 'Sunday Service',
    event1Date: 'Every Sunday at 10:00 AM',
    event2: 'Bible Study',
    event2Date: 'Wednesdays at 7:00 PM',
    event3: 'Community Dinner',
    event3Date: 'First Friday of each month',
    
    // Give
    giveTitle: 'Give Back',
    giveDescription: 'Your generous giving helps us serve our community and spread God\'s love. Thank you for your faithful support.',
    giveOnline: 'Give Online',
    giveInPerson: 'Give In Person',
    
    // Contact
    contactTitle: 'Get In Touch',
    address: '123 Faith Street, Hope City, HC 12345',
    phone: '(555) 123-4567',
    email: 'info@gracecommunity.org',
    
    // Footer
    copyright: '© 2024 Grace Community Church. All rights reserved.',
    followUs: 'Follow Us'
  },
  zh: {
    // Navigation
    home: '首页',
    about: '关于我们',
    announcements: '公告',
    ministries: '事工',
    events: '活动',
    give: '奉献',
    contact: '联系我们',
    
    // Hero Section
    heroTitle: '欢迎来到恩典社区教会',
    heroSubtitle: '信心、希望与爱汇聚的地方',
    heroDescription: '与我们一起敬拜、团契和服务，在基督里共同成长。我们的爱心社区欢迎所有人。',
    joinUs: '本周日加入我们',
    learnMore: '了解更多',
    
    // Service Times
    serviceTimes: '聚会时间',
    sundayWorship: '主日崇拜',
    wednesdayStudy: '周三查经',
    
    // About Section
    aboutTitle: '关于我们的教会',
    aboutDescription: '恩典社区教会已经服务我们的社区超过30年。我们是一个多元化的会众，因对耶稣基督的爱和致力于培养能在世界上产生影响的门徒而团结在一起。',
    ourMission: '我们的使命',
    missionText: '通过耶稣基督的转化力量，爱神、爱人、服务我们的社区。',
    ourValues: '我们的价值观',
    
    // Announcements
    announcementsTitle: '最新公告',
    announcement1Title: '社区外展项目',
    announcement1Text: '本周六加入我们的月度社区服务项目。我们将在当地收容所提供餐食服务。',
    announcement2Title: '青年夏令营',
    announcement2Text: '我们的年度青年夏令营现已开始报名。早鸟优惠价格截止到3月31日。',
    announcement3Title: '复活节庆典',
    announcement3Text: '加入我们特别的复活节庆典聚会，包括音乐、见证和圣餐。',
    
    // Ministries
    ministriesTitle: '我们的事工',
    youthMinistry: '青年事工',
    youthDescription: '通过查经、团契和服务机会赋能下一代。',
    childrenMinistry: '儿童事工',
    childrenDescription: '创造一个安全有趣的环境，让孩子们学习神的爱。',
    worshipMinistry: '敬拜事工',
    worshipDescription: '通过音乐和祷告带领我们的会众进行真诚的敬拜。',
    
    // Events
    eventsTitle: '即将举行的活动',
    event1: '主日聚会',
    event1Date: '每周日上午10:00',
    event2: '查经聚会',
    event2Date: '周三晚上7:00',
    event3: '社区晚餐',
    event3Date: '每月第一个周五',
    
    // Give
    giveTitle: '奉献回馈',
    giveDescription: '您慷慨的奉献帮助我们服务社区并传播神的爱。感谢您忠实的支持。',
    giveOnline: '在线奉献',
    giveInPerson: '现场奉献',
    
    // Contact
    contactTitle: '联系我们',
    address: '信心街123号，希望城，HC 12345',
    phone: '(555) 123-4567',
    email: 'info@gracecommunity.org',
    
    // Footer
    copyright: '© 2024 恩典社区教会。保留所有权利。',
    followUs: '关注我们'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};