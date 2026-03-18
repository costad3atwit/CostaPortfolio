import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: '#E8E2DB' }}>

      {/* Name */}
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4"
        style={{ color: '#1A3263' }}>
        David Costa
      </h1>

      {/* Tagline */}
      <p className="text-xl md:text-2xl font-medium mb-2" style={{ color: '#547792' }}>
        Full Stack Developer &amp; Data Scientist
      </p>
      <p className="text-base md:text-lg max-w-xl mb-10" style={{ color: '#547792' }}>
        Building data-driven applications and exploring the intersection of software engineering and machine learning.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/about"
          className="px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
          style={{ backgroundColor: '#1A3263', color: '#E8E2DB' }}
        >
          About Me
        </Link>
        <Link
          to="/projects"
          className="px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
          style={{ backgroundColor: '#FAB95B', color: '#1A3263' }}
        >
          View Projects
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 flex flex-col items-center gap-1 opacity-40" style={{ color: '#1A3263' }}>
        <span className="text-xs tracking-widest uppercase">Explore</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </main>
  );
}