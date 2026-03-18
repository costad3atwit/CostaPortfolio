import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import PdfModal from '../components/PdfModal';

export default function Projects() {
  const [pdfModal, setPdfModal] = useState<{ url: string; title: string } | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6" style={{ backgroundColor: '#E8E2DB' }}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2" style={{ color: '#1A3263' }}>Projects</h1>
        <p className="text-base mb-10" style={{ color: '#547792' }}>
          A collection of academic and personal projects spanning data science, machine learning, and full-stack development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl p-5 shadow-sm flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              style={{ backgroundColor: 'white' }}
            >
              {/* Status badge */}
              {project.status === 'in-progress' && (
                <span className="self-start text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3"
                  style={{ backgroundColor: '#FAB95B', color: '#1A3263' }}>
                  In Progress
                </span>
              )}

              <h2 className="text-base font-bold mb-0.5" style={{ color: '#1A3263' }}>{project.title}</h2>
              <p className="text-xs font-medium mb-3" style={{ color: '#547792' }}>{project.subtitle}</p>
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: '#1A3263', opacity: 0.8 }}>
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: '#E8E2DB', color: '#547792' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2 mt-auto">
                <Link
                  to={`/projects/${project.id}`}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:opacity-90"
                  style={{ backgroundColor: '#1A3263', color: '#E8E2DB' }}
                >
                  Details
                </Link>
                {project.pdfUrl && (
                  <button
                    onClick={() => setPdfModal({ url: project.pdfUrl!, title: project.title })}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:opacity-90"
                    style={{ backgroundColor: '#FAB95B', color: '#1A3263' }}
                  >
                    View PDF
                  </button>
                )}
                {project.externalUrl && (
                  <a href={project.externalUrl} target="_blank" rel="noreferrer"
                    className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:opacity-90"
                    style={{ backgroundColor: '#547792', color: '#E8E2DB' }}>
                    Live Site ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {pdfModal && (
        <PdfModal url={pdfModal.url} title={pdfModal.title} onClose={() => setPdfModal(null)} />
      )}
    </div>
  );
}