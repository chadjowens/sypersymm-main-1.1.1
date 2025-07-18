import React from 'react';
import { useThemeStore } from '../../store/themeStore';
import { Brain, Rocket, Code, Palette, LineChart, Wand2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Props for the ServiceCard component
 * 
 * @interface ServiceCardProps
 * @property {string} title - The title of the service
 * @property {string} description - A brief description of the service
 * @property {React.ReactNode} icon - The icon to display for the service
 * @property {string} slug - URL slug for the service page
 * @property {string} [color] - Optional background color for the service card
 * @property {boolean} [isAnimating] - Whether the card should display animation
 */
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  color?: string;
  isAnimating?: boolean;
}

/**
 * ServiceCard component displays an individual service offering
 * 
 * Features hover effects, animations, and links to service-specific pages
 * 
 * @param {ServiceCardProps} props - The component props
 * @returns {JSX.Element} The rendered ServiceCard component
 */
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, slug, isAnimating = false }) => {
  const { isDarkMode } = useThemeStore();
  
  const bgColor = isDarkMode ? 'rgba(31, 41, 55, 0.3)' : 'rgba(255, 255, 255, 0.3)';
  const hoverBgColor = isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)';

  return (
    <div 
      style={{
        backgroundColor: bgColor,
      }}
      className={`
        service-card
        p-6 
        rounded-md 
        group 
        backdrop-blur-sm 
        transition-all
        duration-300
        hover:shadow-lg
        border
        hover:!bg-opacity-70
        ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
        ${isAnimating ? 'service-card-animated' : ''}
      `}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = hoverBgColor;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.backgroundColor = bgColor;
      }}
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <div className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>
          {icon}
        </div>
      </div>
      <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-600'} mb-4 font-light leading-snug`}>
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

/**
 * Array of service offerings provided by SyperSymmetry
 * Each service includes title, description, icon, and routing information
 */
export const services = [
  {
    title: 'AI Development & Enablement',
    description: 'Leverage cutting-edge AI technologies to transform your business with intelligent solutions and automation.',
    icon: <Brain className="w-6 h-6" />,
    slug: 'ai-development',
    color: 'bg-[rgba(255,105,180,0.7)]'
  },
  {
    title: 'MVP Product Development',
    description: 'Rapidly prototype and develop minimum viable products to validate your ideas and reach the market faster.',
    icon: <Rocket className="w-6 h-6" />,
    slug: 'mvp-development',
    color: 'bg-[rgba(255,105,180,0.7)]'
  },
  {
    title: 'Modern Full-Stack Custom Software Development',
    description: 'Build scalable, robust applications using the latest technologies and best practices.',
    icon: <Code className="w-6 h-6" />,
    slug: 'custom-development',
    color: 'bg-[rgba(255,105,180,0.7)]'
  },
  {
    title: 'UX/UI Design 2.0',
    description: 'Create intuitive, beautiful interfaces that delight users and drive engagement.',
    icon: <Palette className="w-6 h-6" />,
    slug: 'ux-ui-design',
    color: 'bg-[rgba(255,105,180,0.7)]'
  },
  {
    title: 'Data Visualization & Insights',
    description: 'Transform complex data into clear, actionable insights through powerful interactive visualizations.',
    icon: <LineChart className="w-6 h-6" />,
    slug: 'data-visualization',
    color: 'bg-[rgba(255,105,180,0.7)]'
  },
  {
    title: 'AI Creative Production',
    description: 'Harness AI to generate and enhance creative content, from images to marketing materials.',
    icon: <Wand2 className="w-6 h-6" />,
    slug: 'ai-creative',
    color: 'bg-[rgba(255,105,180,0.7)]'
  }
];

/**
 * Services component displays all service offerings in a grid layout
 * 
 * Features include:
 * - Responsive grid layout for service cards
 * - Random animation of service cards to draw attention
 * - Links to detailed service pages
 * - Themed styling based on light/dark mode
 * 
 * @returns {JSX.Element} The rendered Services component
 */
export const Services: React.FC = () => {
  const { isDarkMode } = useThemeStore();
  const [animatingIndex, setAnimatingIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    console.log('Setting up animation cycle');
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;
    
    const animateRandomService = () => {
      // Get random index, different from current if possible
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * services.length);
      } while (randomIndex === animatingIndex && services.length > 1);
      
      console.log('Setting new animating index:', randomIndex);
      setAnimatingIndex(randomIndex);
    };

    // Start the animation cycle
    const startAnimationCycle = () => {
      animateRandomService();
      // Clear previous animation after 3 seconds
      timeoutId = setTimeout(() => {
        setAnimatingIndex(null);
      }, 3000);
    };

    // Initial animation
    startAnimationCycle();

    // Set up interval for future animations
    intervalId = setInterval(() => {
      startAnimationCycle();
    }, 8000); // Increased to 8 seconds for 5 second gap between 3-second animations

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []); // Remove animatingIndex dependency

  return (
    <section id="services" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl section-header mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Our Services
          </h2>
          <p className={`text-xl md:text-2xl font-normal ${
            isDarkMode ? 'text-gray-200' : 'text-gray-600'
          }`}>
            Comprehensive solutions for your digital transformation journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.slug} 
              {...service} 
              isAnimating={index === animatingIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};