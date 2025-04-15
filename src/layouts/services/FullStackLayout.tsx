import React from 'react';
import { BaseServiceLayout } from './BaseServiceLayout';
import { services } from '../../components/sections/Services';

export const FullStackLayout: React.FC = () => {
  const service = services.find(s => s.slug === 'custom-development')!;
  return <BaseServiceLayout service={service} />;
};