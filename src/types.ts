export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  categoryTag: string;
  description: string;
  additionalDetails: string[];
  technologies: string[];
  githubUrl?: string;
  architectureHighlights: {
    title: string;
    description: string;
  }[];
  diagramType?: 'bedrock' | 'monitoring' | 'terraform' | 'ha-web' | 'nextjs';
}

export interface CapabilityCategory {
  number: string;
  category: string;
  tag: 'CORE' | 'TOOLS' | 'BUILD' | 'DESIGN' | 'ANALYTICS';
  technologies: string;
  techList: string[];
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  techTags: string[];
}

export interface CredentialItem {
  type: 'EDUCATION' | 'CERTIFICATION';
  title: string;
  subtitle: string;
  periodOrDetail: string;
  description: string;
  validationNumber?: string;
  validationUrl?: string;
  badgeCode?: string;
}

export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  category: string;
}
