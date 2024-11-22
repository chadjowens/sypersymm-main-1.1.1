import React from 'react';
import { BaseServiceLayout } from './BaseServiceLayout';
import { services } from '../Services';

export const AICreativeLayout: React.FC = () => {
  const service = services.find(s => s.slug === 'ai-creative')!;
  return <BaseServiceLayout service={service} />;
};