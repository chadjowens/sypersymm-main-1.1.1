import React from 'react';
import { useThemeStore } from '../store/themeStore';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

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
        ? 'bg-gray-800/50 border-gray-700' 
        : 'bg-white/50 border-gray-200'
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
    name: 'Sarah Johnson',
    role: 'Chief Technology Officer',
    bio: 'AI researcher and tech enthusiast with 15+ years of experience in building scalable solutions.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    contact: {
      email: 'sarah@example.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Lead AI Architect',
    bio: 'Passionate about combining AI with human-centered design to create meaningful experiences.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    contact: {
      email: 'michael@example.com',
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
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Us
          </h2>
          <p className={`text-xl max-w-3xl mx-auto mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            We are a team of passionate technologists and creative minds dedicated to pushing the boundaries 
            of what's possible with artificial intelligence and modern web technologies.
          </p>
          <div className={`max-w-3xl mx-auto p-6 rounded-lg mb-16 ${
            isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'
          } backdrop-blur-sm`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Our Core Philosophy
            </h3>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We believe in creating technology that not only solves complex problems but also enhances 
              human capabilities. Our approach combines cutting-edge AI with thoughtful design to deliver 
              solutions that make a real difference in how people work and live.
            </p>
          </div>
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