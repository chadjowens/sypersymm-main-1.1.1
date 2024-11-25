import React from 'react';
import { useThemeStore } from '../store/themeStore';
import { Brain, Rocket, Code, Palette, LineChart, Wand2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  slug: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, color, slug }) => {
  const { isDarkMode } = useThemeStore();
  
  return (
    <div className={`p-6 rounded-md border group ${
      isDarkMode 
        ? 'bg-gray-800/30 border-gray-700 hover:bg-gray-700/40' 
        : 'bg-white/30 border-gray-200 hover:bg-gray-50/40'
    } transition-all duration-300 backdrop-blur-sm`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color} mb-4`}>
        {icon}
      </div>
      <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
        {description}
      </p>
      <Link 
        to={`/services/${slug}`}
        className={`inline-flex items-center text-sm ${
          isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
        } transition-colors`}
      >
        Learn more <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </div>
  );
};

export const services = [
  {
    title: 'AI Development & Enablement',
    description: 'Leverage cutting-edge AI technologies to transform your business with intelligent solutions and automation.',
    icon: <Brain className="w-6 h-6 text-white" />,
    color: 'bg-pink-600',
    slug: 'ai-development'
  },
  {
    title: 'MVP Product Development',
    description: 'Rapidly prototype and develop minimum viable products to validate your ideas and reach the market faster.',
    icon: <Rocket className="w-6 h-6 text-white" />,
    color: 'bg-purple-600',
    slug: 'mvp-development'
  },
  {
    title: 'Modern Full-Stack Custom Software Development',
    description: 'Build scalable, robust applications using the latest technologies and best practices.',
    icon: <Code className="w-6 h-6 text-white" />,
    color: 'bg-blue-600',
    slug: 'custom-development'
  },
  {
    title: 'UX/UI Design 2.0',
    description: 'Create intuitive, beautiful interfaces that delight users and drive engagement.',
    icon: <Palette className="w-6 h-6 text-white" />,
    color: 'bg-green-600',
    slug: 'ux-ui-design'
  },
  {
    title: 'Data Visualization & Insights',
    description: 'Transform complex data into clear, actionable insights through powerful interactive visualizations.',
    icon: <LineChart className="w-6 h-6 text-white" />,
    color: 'bg-orange-600',
    slug: 'data-visualization'
  },
  {
    title: 'AI Creative Production',
    description: 'Harness AI to generate and enhance creative content, from images to marketing materials.',
    icon: <Wand2 className="w-6 h-6 text-white" />,
    color: 'bg-teal-600',
    slug: 'ai-creative'
  }
];

export const Services: React.FC = () => {
  const { isDarkMode } = useThemeStore();

  return (
    <section id="services" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Our Services
          </h2>
          <p className={`text-xl ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Comprehensive solutions for your digital transformation journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};