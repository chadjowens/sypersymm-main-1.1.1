import { useParams, Navigate } from 'react-router-dom';
import { AIDevLayout } from '../layouts/services/AIDevLayout';
import { MVPLayout } from '../layouts/services/MVPLayout';
import { FullStackLayout } from '../layouts/services/FullStackLayout';
import { UXUILayout } from '../layouts/services/UXUILayout';
import { DataVizLayout } from '../layouts/services/DataVizLayout';
import { AICreativeLayout } from '../layouts/services/AICreativeLayout';
import { services } from '../components/sections/Services';

/**
 * ServicePage component for displaying service-specific content
 * 
 * Dynamically renders the appropriate service layout based on the URL parameter
 * Redirects to home page if an invalid service slug is provided
 * 
 * @returns {JSX.Element} The rendered ServicePage component for the specific service
 */
const ServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
  // Helper function to generate slug from title
  const generateSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim();
  };
  
  // Validate that the service exists by checking generated slugs
  const serviceExists = services.some(service => {
    const generatedSlug = generateSlug(service.title);
    return generatedSlug === serviceSlug;
  });
  
  if (!serviceExists) {
    return <Navigate to="/" replace />;
  }
  
  // Render the appropriate layout based on the service slug
  switch (serviceSlug) {
    case 'ai-development':
      return <AIDevLayout />;
    case 'mvp-development':
      return <MVPLayout />;
    case 'custom-development':
      return <FullStackLayout />;
    case 'ux-ui-design':
      return <UXUILayout />;
    case 'data-visualization':
      return <DataVizLayout />;
    case 'ai-creative':
      return <AICreativeLayout />;
    default:
      return <Navigate to="/" replace />;
  }
};

export default ServicePage;
