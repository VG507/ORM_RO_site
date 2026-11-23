export interface CareerStage {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  badge: string;
  colorScheme: 'navy' | 'lime' | 'cyan' | 'purple';
  description: string;
  fullDetails: string;
  keyTasks: string[];
  competencies: string[];
  learningPlatforms: { name: string; url?: string }[];
  nextTransitions: string[];
}

export interface Direction {
  id: string;
  title: string;
  tagline: string;
  description: string;
  colorScheme: 'navy' | 'lime' | 'cyan' | 'purple' | 'light';
  size: 'large' | 'medium' | 'featured';
  badge: string;
  keyProjects: string[];
  targetAudience: string;
  image?: string;
}

export interface ProfessionRole {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  level: string;
  salaryRange?: string;
  description: string;
  dailyTasks: string[];
  skills: string[];
  careerPathStageId: string;
  prospects: string;
}

export interface SkillItem {
  id: string;
  name: string;
  type: 'soft' | 'hard';
  category: string;
  description: string;
  relevance: string;
  level: 'Базовый' | 'Продвинутый' | 'Экспертный';
  howToDevelop: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  role: string;
  municipality: string;
  image: string;
  quote: string;
  background: string;
  milestones: string[];
  keyAdvice: string;
  tags: string[];
}

export interface SelectorOption {
  id: string;
  text: string;
  directionTag: string;
  recommendedRoleId: string;
  description: string;
}

export interface SelectorQuestion {
  id: number;
  title: string;
  subtitle: string;
  options: SelectorOption[];
}

export interface OpportunityItem {
  id: string;
  title: string;
  organization: string;
  badge: string;
  description: string;
  benefits: string[];
  link: string;
  linkText: string;
  colorScheme: 'lime' | 'cyan' | 'purple' | 'navy';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
