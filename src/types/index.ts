export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  sections: Section[];
  estimatedTime: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
}

export interface Section {
  id: string;
  title: string;
  content: string;
  resources?: Resource[];
  exercises?: Exercise[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'link' | 'document';
  url: string;
  description?: string;
}

export interface Exercise {
  id: string;
  title: string;
  type: 'quiz' | 'case-study' | 'reflection';
  content: string;
  options?: string[];
  correctAnswer?: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  country: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  lessons: string[];
  resources: Resource[];
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  purpose: string;
  steps: string[];
  resources: Resource[];
  examples?: string[];
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}