import React from 'react';
import { BaseServiceLayout } from './BaseServiceLayout';
import { services } from '../Services';

export const AIDevLayout: React.FC = () => {
  const service = services.find(s => s.slug === 'ai-development')!;
  return <BaseServiceLayout service={service} />;
};