import React from 'react';
import { BaseServiceLayout } from './BaseServiceLayout';
import { services } from '../Services';

export const DataVizLayout: React.FC = () => {
  const service = services.find(s => s.slug === 'data-visualization')!;
  return <BaseServiceLayout service={service} />;
};