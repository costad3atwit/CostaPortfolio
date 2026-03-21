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
    id: 'arcane-chess',
    title: 'Arcane Chess',
    subtitle: 'Software Engineering Project',
    description:
      'A full-stack chess based web app with a fantasy theme built as a software engineering capstone. Features real-time multiplayer using websockets, 12 new pieces, and 20 cards with unique effects allowing for countless novel strategies. Built with Javascript, HTML5, and CSS for the frontend and Python using FastAPI for the backend.',
    tags: ['Full Stack', 'Game Dev', 'Software Engineering', 'Multiplayer'],
    externalUrl: 'https://arcane-chess.onrender.com/',
    githubUrl: 'https://github.com/costad3atwit/SoftwareEngineering',
    status: 'complete',
  },
  {
    id: 'climbing-tracker',
    title: 'Climbing Training Tracker',
    subtitle: 'Senior Capstone Project',
    description:
      `A web application designed to help climbers track their training progress, set goals, and analyze performance over time. Built with Angular for the frontend and Spring Boot for the backend, it will feature user authentication, workout logging, and data visualization of climbing/exertion metrics.`,
    tags: ['Angular', 'Spring Boot', 'Python', 'Machine Learning', 'PostgreSQL'],
    githubUrl: 'https://github.com/costad3atwit/climbing-tracker',
    status: 'in-progress',
  },
  {
    id: 'ml-fundamentals',
    title: 'Machine Learning Models and Evaluation',
    subtitle: 'Machine Learning Final Project',
    description:
      'A comprehensive machine learning project which demonstrated understanding of core ML algorithms on a fictional household features/expenses dataset. Techniques included hierarchical clustering, linear/logistic regression, Decision Tree, Random Forest, Support Vector Machine, and model evaluation techniques using R.',
    tags: ['R',  'Machine Learning'],
    pdfUrl: `${S3_BASE}/files/MachineLearningFinal.pdf`,
    githubUrl: 'https://github.com/costad3atwit/Machine_Learning_Final',
    status: 'complete',
  },
  {
    id: 'alzheimers-analysis',
    title: "Alzheimer's Neuroimaging Analysis",
    subtitle: 'Data Science Fundamentals Final Project',
    description:
      "A research project analyzing Alzheimer's disease progression using the OASIS-3 neuroimaging dataset across 1,378 participants. Applied Decision Tree classification with cost-complexity pruning to achieve 92.4% accuracy in predicting cognitive status, and PAM clustering with Gower distance to identify distinct patient subgroups. Built with Python using scikit-learn, pandas, and seaborn.",
    tags: ['Python', 'scikit-learn', 'Pandas', 'Data Science', 'Healthcare'],
    pdfUrl: `${S3_BASE}/files/Multimodal Predictive Analytics of Alzheimer's Disease Progression - David Costa.pdf`,
    githubUrl: 'https://github.com/costad3atwit/Alzheimer-s-Neuroimaging-Analysis',
    status: 'complete',
  },
  {
    id: 'data-mining',
    title: 'PubMed Graph Analysis',
    subtitle: 'Data Mining Final Project',
    description:
      'A data mining project that built a drug-disease association network by mining 260,000+ biomedical abstracts from PubMed (2015-2025). Used Aho-Corasick pattern matching with MeSH descriptors to detect 12.4M co-mentions, BioWordVec embeddings with agglomerative clustering for synonym resolution, and NetworkX to construct a bipartite graph of 5,135 nodes and 125,664 evidence-based edges. Built with Python.',
    tags: ['Python', 'Data Mining', 'Pattern Recognition', 'scikit-learn'],
    pdfUrl: `${S3_BASE}/files/Data Mining Project Poster.pdf`,
    githubUrl: 'https://github.com/costad3atwit/PubMed_Graph_Analysis',
    status: 'complete',
  },
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
];