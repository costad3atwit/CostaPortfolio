import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PdfModal from '../components/PdfModal';
import { S3_BASE } from '../config';
import { experiences } from '../data/about';

const SECTION_NAV = [
  { label: 'Overview', hash: 'overview' },
  { label: 'Skills', hash: 'skills' },
  { label: 'Experience', hash: 'experience' },
  { label: 'Resume', hash: 'resume' },
];

const SKILLS = {
  Frontend: ['React', 'Angular 15', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'AG Grid'],
  'ML / Data Science': ['scikit-learn', 'NumPy', 'Pandas', 'PySpark', 'R', 'NetworkX', 'BioWordVec'],
  Backend: ['Node.js', 'Express.js', 'Python', 'FastAPI'],
  'Cloud / DevOps': ['AWS S3', 'CloudFront', 'Elastic Beanstalk', 'EC2', 'ACM'],
  Databases: ['MongoDB', 'PostgreSQL', 'SQL'],
  Tools: ['Git', 'VS Code', 'MATLAB', 'Jupyter'],
  Learning: ['Spring Boot', 'Docker', 'Java', 'PostgreSQL'],
};

const S3_RESUME = `${S3_BASE}/files/DavidCostaResume_2_19_26.pdf`;

export default function About() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('overview');
  const [pdfOpen, setPdfOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        sectionRefs.current[hash]?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.hash]);

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (hash: string) => {
    sectionRefs.current[hash]?.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', `/about#${hash}`);
  };

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#E8E2DB' }}>
      {/* Sticky section pill nav */}
      <div className="sticky top-16 z-40 flex justify-center py-3">
        <div className="flex items-center rounded-full p-1 shadow-md"
          style={{ backgroundColor: '#1A3263' }}>
          {SECTION_NAV.map((item) => (
            <button
              key={item.hash}
              onClick={() => scrollTo(item.hash)}
              className="relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200"
              style={{
                backgroundColor: activeSection === item.hash ? '#FAB95B' : 'transparent',
                color: activeSection === item.hash ? '#1A3263' : '#E8E2DB',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-[50vh] space-y-24 pt-8">

        {/* Overview */}
        <section id="overview" ref={(el) => { sectionRefs.current['overview'] = el; }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#1A3263' }}>About Me</h2>
          <div className="rounded-2xl p-8 shadow-sm" style={{ backgroundColor: 'white' }}>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#1A3263' }}>
              Hi there! I'm David, a computer science student at Wentworth Institute of Technology with minors in Data Science and Applied Mathematics, on track to graduate in August 2026.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#1A3263' }}>
              I'm passionate about building full-stack applications, applying machine learning to real-world problems, gaming, and rock climbing (so if you're ever looking for a belay buddy, let me know)!
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#1A3263' }}>
              I've worked as a Full Stack Application Developer Co-Op at Diamond Diagnostics, building features on a production MEAN stack Enterprise Resource Planning application, and as a Pharmacy Research Analyst at Mass General Brigham, where I applied data science techniques to large-scale genomics research. Both experiences have shaped how I think about writing software that actually matters.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#1A3263' }}>
              After graduation, I plan to continue into a master's degree in computing while keeping one foot in industry because I think the best engineers never really stop learning on the job. For now, I'm actively seeking co-op and full-time opportunities in software engineering and data science.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" ref={(el) => { sectionRefs.current['skills'] = el; }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#1A3263' }}>Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category} className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: 'white' }}>
                <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#547792' }}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1 rounded-full font-medium"
                      style={{ backgroundColor: '#E8E2DB', color: '#1A3263' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" ref={(el) => { sectionRefs.current['experience'] = el; }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#1A3263' }}>Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.role} className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: 'white' }}>
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: '#1A3263' }}>{exp.role}</h3>
                    <p className="text-sm font-medium" style={{ color: '#547792' }}>{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#E8E2DB', color: '#547792' }}>
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1.5 mb-4">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="text-sm flex gap-2" style={{ color: '#1A3263' }}>
                      <span style={{ color: '#FAB95B' }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ backgroundColor: '#1A3263', color: '#E8E2DB' }}>
                      {tag}
                    </span>
                  ))}
                </div >
                <div className="flex flex-wrap gap-2 mt-2">  
                  {exp.externalUrl && (
                  <a href={exp.externalUrl} target="_blank" rel="noreferrer"
                    className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:opacity-90"
                    style={{ backgroundColor: '#547792', color: '#E8E2DB' }}>
                    Live Site ↗
                  </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resume */}
        <section id="resume" ref={(el) => { sectionRefs.current['resume'] = el; }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#1A3263' }}>Resume</h2>
          <div className="rounded-2xl p-8 shadow-sm flex flex-col sm:flex-row items-center gap-6"
            style={{ backgroundColor: 'white' }}>
            <div className="flex-1">
              <p className="text-base mb-1 font-medium" style={{ color: '#1A3263' }}>David Costa — Resume</p>
              <p className="text-sm" style={{ color: '#547792' }}>Updated February 2026</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setPdfOpen(true)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: '#1A3263', color: '#E8E2DB' }}
              >
                View
              </button>
              <a
                href={S3_RESUME}
                download
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: '#FAB95B', color: '#1A3263' }}
              >
                Download
              </a>
            </div>
          </div>
        </section>

      </div>

      {pdfOpen && (
        <PdfModal
          url={S3_RESUME}
          title="David Costa — Resume"
          onClose={() => setPdfOpen(false)}
        />
      )}
    </div>
  );
}