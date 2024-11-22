import React from 'react';
import { BaseServiceLayout } from './BaseServiceLayout';
import { services } from '../Services';

export const UXUILayout: React.FC = () => {
  const service = services.find(s => s.slug === 'ux-ui-design')!;
  return <BaseServiceLayout service={service} />;
};