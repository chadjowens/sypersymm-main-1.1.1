import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useThemeStore } from '../../store/themeStore';
import { ChevronLeft } from 'lucide-react';
import { ServiceType } from '../../types';

interface NavItem {
  id: string;
  title: string;
  content: string;
}

export const defaultNavItems: NavItem[] = [
  {
    id: 'overview',
    title: 'Overview',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 'solutions',
    title: 'Solutions',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 'our-tools',
    title: 'Our Tools',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  // {
  //   id: 'benefits',
  //   title: 'Benefits',
  //   content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  // },
  {
    id: 'cases',
    title: 'Case Studies',
    content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.'
  }
];

interface BaseServiceLayoutProps {
  service: ServiceType;
}

export const BaseServiceLayout: React.FC<BaseServiceLayoutProps> = ({ service }) => {
  const { isDarkMode } = useThemeStore();
  const [activeSection, setActiveSection] = useState('overview');
  const navigate = useNavigate();

  const activeContent = defaultNavItems.find(item => item.id === activeSection);

  const handleBackClick = () => {
    // Navigate to home page
    navigate('/', { state: { scrollToServices: true } });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className={`${service.color} py-20 px-4`}>
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={handleBackClick}
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Services
          </button>
          <div className="flex items-center space-x-4 mb-6">
            {React.cloneElement(service.icon as React.ReactElement, {
              className: "w-12 h-12 text-white"
            })}
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {service.title}
            </h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            {service.description}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation */}
          <nav className="md:col-span-1">
            <ul className="space-y-2 sticky top-20">
              {defaultNavItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? `${service.color} text-white`
                        : isDarkMode
                        ? 'text-gray-300 hover:bg-gray-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Content */}
          <div className="md:col-span-3">
            <div className={`p-8 rounded-lg ${
              isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'
            } backdrop-blur-sm`}>
              <h2 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {activeContent?.title}
              </h2>
              <div className={`prose ${
                isDarkMode ? 'prose-invert' : ''
              } max-w-none`}>
                <p>{activeContent?.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};