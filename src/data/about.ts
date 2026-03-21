export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
  externalUrl?: string;
}

export const experiences: Experience[] = [
  {
    role: 'Full Stack Application Developer Co-op',
    company: 'Diamond Diagnostics',
    location: 'Holliston, MA',
    period: 'Jan 2026 – Present',
    bullets: [
      'Develop and maintain features on a production MEAN stack application serving medical diagnostics workflows',
      'Translated complex financial reporting logic from JavaScript to TypeScript and implemented responsive design across multiple application views',
      'Built MongoDB aggregation queries in JavaScript executed via Mongoose, and performed manual data correction and inspection using Studio 3T',
      'Configured and managed AWS Elastic Beanstalk environments including autoscaling policies for off-peak cost reduction',
      'Implemented AG Grid enterprise data grid features for large-scale tabular data display',
    ],
    tags: ['Angular 15', 'TypeScript', 'Express.js', 'Node.js', 'MongoDB', 'AWS'],
    externalUrl: 'https://www.diamonddiagnostics.com/',
  },
  {
    role: 'Pharmacy Research Analyst',
    company: 'Mass General Brigham',
    location: 'Boston, MA',
    period: 'May 2025 - Dec 2025',
    bullets: [
      'Performed Mendelian randomization mediation analyses in R to investigate causal relationships between biomarkers and cardiovascular outcomes across 48,000+ patient records',
      'Processed large-scale genomic datasets using PySpark on distributed compute clusters',
      'Applied GWAS methodology to examine associations between GP73, hyperglycemic traits, and heart failure',
      'Used tools including ieugwasr, biomaRt, and openxlsx for data retrieval, annotation, and reporting',
    ],
    tags: ['PySpark', 'Python', 'R', 'GWAS', 'Mendelian Randomization', 'Bioinformatics'],
  },
];