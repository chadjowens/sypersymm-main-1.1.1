import React from 'react';
import { BaseServiceLayout } from './BaseServiceLayout';
import { services } from '../../components/sections/Services';

export const MVPLayout: React.FC = () => {
  const service = services.find(s => s.slug === 'mvp-development')!;
  return <BaseServiceLayout service={service} />;
};