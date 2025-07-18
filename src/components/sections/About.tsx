import React from 'react';
import { useThemeStore } from '../../store/themeStore';
import { UserSearch, LineChart, MessageCircle, Workflow, Database, BarChart3 } from 'lucide-react';

import AnimatedSeparator from '../ui/AnimatedSeparator';

export const About: React.FC = () => {
  const { isDarkMode } = useThemeStore();

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl section-header mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Hello, we're Supersymmetry
          </h2>
          <p className={`text-xl md:text-2xl max-w-5xl mx-auto mb-8 font-light leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
            Supersymmetry specializes in designing and deploying bespoke <span className="font-bold section-header">agent teams</span> tailored to your specific business needs. Imagine a coordinated network of intelligent AI agents working tirelessly across your digital ecosystem:
          </p>
          
          <div className={`max-w-5xl mx-auto mb-12 ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-4 md:pl-12">
              <div className="flex items-start">
                <UserSearch className="gradient-icon mr-4 mt-1 flex-shrink-0" size={32} />
                <span className="text-xl">Identifying high-potential leads</span>
              </div>
              
              <div className="flex items-start">
                <LineChart className="gradient-icon mr-4 mt-1 flex-shrink-0" size={32} />
                <span className="text-xl">Optimizing sales funnels</span>
              </div>
              
              <div className="flex items-start">
                <MessageCircle className="gradient-icon mr-4 mt-1 flex-shrink-0" size={32} />
                <span className="text-xl">Personalizing customer interactions</span>
              </div>
              
              <div className="flex items-start">
                <Workflow className="gradient-icon mr-4 mt-1 flex-shrink-0" size={32} />
                <span className="text-xl">Automating business processes</span>
              </div>
              
              <div className="flex items-start">
                <Database className="gradient-icon mr-4 mt-1 flex-shrink-0" size={32} />
                <div className="text-xl text-left">
                  Connecting employees to<br />
                  self-improving knowledgebases
                </div>
              </div>
              
              <div className="flex items-start">
                <BarChart3 className="gradient-icon mr-4 mt-1 flex-shrink-0" size={32} />
                <div className="text-xl text-left">
                  Ongoing optimization with<br />
                  real-time analytics
                </div>
              </div>
            </div>
          </div>
          
          <p className={`text-xl md:text-2xl max-w-5xl mx-auto mb-8 font-light leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
            These agent teams are not simply tools; they
            <span className="section-header font-bold text-3xl mx-1 mr-2"> 1</span> 
            are extensions of your workforce, 
            <span className="section-header font-bold text-3xl mx-1 mr-2"> 2</span> 
            amplify your team's abilities and 
            <span className="section-header font-bold text-3xl mx-1 mr-2"> 3</span> 
            drive unparalleled efficiency and effectiveness.
          </p>

          <p className={`text-xl md:text-2xl max-w-5xl mx-auto mb-12 font-light leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-600'}`}>
            By offloading repetitive, data-intensive, and time-consuming tasks to these intelligent agents, your human teams are freed to focus on high-value, strategic initiatives, fostering innovation and deeper client relationships.
          </p>
          
          <AnimatedSeparator className="my-10" />
          
          <h3 className={`text-3xl font-bold mb-8 section-header ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              This collaborative intelligence creates a force multiplier effect.
          </h3>
          
          <p className={`text-xl md:text-2xl max-w-5xl mx-auto mb-10 font-light leading-relaxed ${
            isDarkMode ? 'text-gray-200' : 'text-gray-600'
          }`}>
            Supersymmetry's agent teams enable you to achieve significantly greater outcomes with existing resources. This means accelerated sales cycles, improved customer satisfaction, reduced operational costs, and the ability to scale your operations without linear increases in headcount.
          </p>
          
          <p className={`text-xl md:text-2xl max-w-5xl mx-auto mb-10 font-light leading-relaxed ${
            isDarkMode ? 'text-gray-200' : 'text-gray-600'
          }`}>
            Our solutions integrate seamlessly with your existing infrastructure, ensuring a smooth transition and rapid time-to-value. Transforming Digital Operations for Accelerated Sales and Growth.
          </p>
        </div>
        {/* Profile tiles removed as requested */}
      </div>
    </section>
  );
};