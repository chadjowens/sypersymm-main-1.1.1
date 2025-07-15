import React from 'react';
import { useThemeStore } from '../../store/themeStore';
import { Github, Linkedin, Twitter, Mail, UserSearch, LineChart, MessageCircle, Workflow, Database, BarChart3 } from 'lucide-react';

import AnimatedSeparator from '../ui/AnimatedSeparator';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  contact: {
    email: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, image, contact }) => {
  const { isDarkMode } = useThemeStore();
  
  return (
    <div className={`flex flex-col items-center p-6 rounded-lg border ${
      isDarkMode 
        ? 'bg-gray-800/30 border-gray-700' 
        : 'bg-white/30 border-gray-200'
    } backdrop-blur-sm`}>
      <img
        src={image}
        alt={name}
        className="w-48 h-48 rounded-full object-cover mb-4"
      />
      <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {name}
      </h3>
      <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        {role}
      </p>
      <p className={`text-center mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {bio}
      </p>
      <div className="flex space-x-4">
        <a href={`mailto:${contact.email}`} className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <Mail size={20} />
        </a>
        {contact.github && (
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <Github size={20} />
          </a>
        )}
        {contact.linkedin && (
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <Linkedin size={20} />
          </a>
        )}
        {contact.twitter && (
          <a href={contact.twitter} target="_blank" rel="noopener noreferrer" className={`hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <Twitter size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

const teamMembers: TeamMemberProps[] = [
  {
    name: 'Chad Owens',
    role: 'Co-Founder & Chief Creative Engineer',
    bio: 'Passionate about combining AI with human-centered design to build meaningful business solutions.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    contact: {
      email: 'chad.owens@supersymm.io',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Sarah Diseker',
    role: 'Co-Founder & Chief Growth Officer',
    bio: 'Strategist, researcher and trusted client partner with 15+ years of experience in building scalable solutions.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    contact: {
      email: 'sarah@example.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  }
];

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
          <p className={`text-xl md:text-2xl max-w-5xl mx-auto mb-10 font-light leading-relaxed ${
            isDarkMode ? 'text-gray-200' : 'text-gray-600'
          }`}>
            Supersymmetry specializes in designing and deploying bespoke "agent teams" tailored to your specific business needs. Imagine a coordinated network of intelligent AI agents working tirelessly across your digital ecosystem:
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
                <span className="text-xl">With real-time analytics</span>
              </div>
            </div>
          </div>
          
          <p className={`text-xl md:text-2xl max-w-5xl mx-auto mb-8 font-light leading-relaxed ${
            isDarkMode ? 'text-gray-200' : 'text-gray-600'
          }`}>
            These agent teams are not simply tools;
          </p>
          
          <div className={`flex flex-col gap-6 max-w-4xl mx-auto mb-12 ${
            isDarkMode ? 'text-gray-200' : 'text-gray-600'
          }`}>
            <p className="text-xl md:text-2xl text-center">1. they are extensions of your workforce,</p>
            <p className="text-xl md:text-2xl text-center">2. amplifying human capabilities and</p>
            <p className="text-xl md:text-2xl text-center">3. creating a synergistic effect that drives unparalleled efficiency and effectiveness.</p>
          </div>
          
          <p className={`text-xl md:text-2xl max-w-5xl mx-auto mb-12 font-light leading-relaxed ${
            isDarkMode ? 'text-gray-200' : 'text-gray-600'
          }`}>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};