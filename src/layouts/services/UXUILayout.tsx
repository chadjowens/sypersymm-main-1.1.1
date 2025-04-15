import React from 'react';
import { BaseServiceLayout } from './BaseServiceLayout';
import { services } from '../../components/sections/Services';

export const UXUILayout: React.FC = () => {
  const service = services.find(s => s.slug === 'ux-ui-design')!;
  return <BaseServiceLayout service={service} />;
};