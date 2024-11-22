export interface NavItem {
  label: string;
  href: string;
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  completionDate: Date;
  budget: string;
  projectDescription: string;
}

export interface ServiceType {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  slug: string;
}