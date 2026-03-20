export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  pdfUrl?: string;
  githubUrl?: string;
  externalUrl?: string;
  status: 'complete' | 'in-progress';
}

import { S3_BASE } from '../config';

export const projects: Project[] = [
  {
    id: 'gis-social-sciences',
    title: 'GIS for Social Sciences',
    subtitle: 'ArcGIS StoryMap',
    description:
      'An interactive ArcGIS StoryMap exploring geographic and social data patterns. Combines spatial analysis with narrative storytelling to communicate data-driven insights.',
    tags: ['GIS', 'ArcGIS', 'Data Visualization', 'StoryMap'],
    externalUrl: 'https://storymaps.arcgis.com/stories/f2d58e70909c4046ae7d3391c03886bc',
    status: 'complete',
  },
  {
    id: 'ml-fundamentals',
    title: 'ML Fundamentals',
    subtitle: 'Machine Learning Final Project',
    description:
      'A comprehensive machine learning project covering core algorithms including classification, regression, clustering, and model evaluation techniques using scikit-learn and Python.',
    tags: ['Python', 'scikit-learn', 'NumPy', 'Pandas', 'Machine Learning'],
    pdfUrl: `${S3_BASE}/MachineLearningFinal.pdf`,
    githubUrl: 'https://github.com/costad3atwit/Machine_Learning_Final',
    status: 'complete',
  },
  {
    id: 'alzheimers-analysis',
    title: "Alzheimer's Neuroimaging Analysis",
    subtitle: 'Data Science Fundamentals Final Project',
    description:
      "Multimodal predictive analytics of Alzheimer's disease progression using clinical, imaging, and genetic data. Applies feature engineering and ensemble methods for early detection.",
    tags: ['Python', 'scikit-learn', 'Pandas', 'Data Science', 'Healthcare'],
    pdfUrl: `${S3_BASE}/Multimodal Predictive Analytics of Alzheimer's Disease Progression - David Costa.pdf`,
    githubUrl: 'https://github.com/costad3atwit/Alzheimer-s-Neuroimaging-Analysis',
    status: 'complete',
  },
  {
    id: 'data-mining',
    title: 'PubMed Graph Analysis',
    subtitle: 'Data Mining Final Project',
    description:
      'Applied data mining techniques including association rule mining, clustering, and classification on real-world datasets to extract meaningful patterns and insights.',
    tags: ['Python', 'Data Mining', 'Pattern Recognition', 'scikit-learn'],
    pdfUrl: `${S3_BASE}/DataMiningFinal.pdf`,
    githubUrl: 'https://github.com/costad3atwit/PubMed_Graph_Analysis',
    status: 'complete',
  },
  {
    id: 'arcane-chess',
    title: 'Arcane Chess',
    subtitle: 'Software Engineering Project',
    description:
      'A full-stack chess application with a fantasy theme built as a software engineering capstone. Features real-time multiplayer, user authentication, and game history tracking.',
    tags: ['Full Stack', 'Game Dev', 'Software Engineering', 'Multiplayer'],
    externalUrl: 'https://arcane-chess.onrender.com/',
    githubUrl: 'https://github.com/costad3atwit/SoftwareEngineering',
    status: 'complete',
  },
  {
    id: 'climbing-tracker',
    title: 'Climbing Training Tracker',
    subtitle: 'In Development',
    description:
      'A MEAN stack application with a Python/FastAPI ML microservice for tracking climbing training load, progression, and predicting performance improvements.',
    tags: ['MEAN Stack', 'FastAPI', 'Python', 'Machine Learning', 'MongoDB'],
    githubUrl: 'https://github.com/costad3atwit/climbing-tracker',
    status: 'in-progress',
  },
];
