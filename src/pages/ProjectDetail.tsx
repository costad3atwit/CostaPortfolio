import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import PdfModal from '../components/PdfModal';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [pdfOpen, setPdfOpen] = useState(false);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="min-h-screen pt-24 pb-16 px-6" style={{ backgroundColor: '#E8E2DB' }}>
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 transition-colors hover:opacity-70"
          style={{ color: '#547792' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          All Projects
        </Link>

        {/* Header */}
        <div className="mb-6">
          {project.status === 'in-progress' && (
            <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3"
              style={{ backgroundColor: '#FAB95B', color: '#1A3263' }}>
              In Progress
            </span>
          )}
          <h1 className="text-4xl font-bold mb-1" style={{ color: '#1A3263' }}>{project.title}</h1>
          <p className="text-base font-medium" style={{ color: '#547792' }}>{project.subtitle}</p>
        </div>

        {/* Description */}
        <div className="rounded-2xl p-7 shadow-sm mb-5" style={{ backgroundColor: 'white' }}>
          <p className="text-base leading-relaxed" style={{ color: '#1A3263' }}>{project.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="text-sm px-3 py-1 rounded-full font-medium"
              style={{ backgroundColor: '#1A3263', color: '#E8E2DB' }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          {project.pdfUrl && (
            <button
              onClick={() => setPdfOpen(true)}
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: '#FAB95B', color: '#1A3263' }}
            >
              View PDF
            </button>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: '#1A3263', color: '#E8E2DB' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.29 3.46.99.1-.77.42-1.29.76-1.59-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          {project.externalUrl && (
            <a href={project.externalUrl} target="_blank" rel="noreferrer"
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: '#547792', color: '#E8E2DB' }}>
              Live Site ↗
            </a>
          )}
        </div>
      </div>

      {pdfOpen && project.pdfUrl && (
        <PdfModal url={project.pdfUrl} title={project.title} onClose={() => setPdfOpen(false)} />
      )}
    </div>
  );
}