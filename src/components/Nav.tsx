import { useRef, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CONTACT } from '../config';

const NAV_ITEMS = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
];

export default function Nav() {
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  useEffect(() => {
    const activeIndex = NAV_ITEMS.findIndex((item) =>
      location.pathname.startsWith(item.to)
    );
    const el = itemRefs.current[activeIndex];
    if (el && navRef.current) {
      const containerRect = navRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setPillStyle({
        left: elRect.left - containerRect.left,
        width: elRect.width,
      });
    }
    setMenuOpen(false);
  }, [location.pathname]);

  const socialLinks = (
    <>
      <button onClick={handleCopyEmail} title="Copy email"
        className="text-[#E8E2DB] hover:text-[#FAB95B] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </button>
      <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" title="LinkedIn"
        className="text-[#E8E2DB] hover:text-[#FAB95B] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S.02 4.88.02 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.84v2.18h.05c.54-1.02 1.85-2.1 3.8-2.1C19.55 8.08 20 11.34 20 14.68V24h-4v-8.4c0-2-.04-4.57-2.78-4.57-2.78 0-3.21 2.17-3.21 4.41V24H8V8z"/>
        </svg>
      </a>
      <a href={CONTACT.github} target="_blank" rel="noreferrer" title="GitHub"
        className="text-[#E8E2DB] hover:text-[#FAB95B] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.04c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.29 3.46.99.1-.77.42-1.29.76-1.59-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      </a>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#1A3263' }}>
      {copied && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm font-medium shadow-lg pointer-events-none"
          style={{ backgroundColor: '#22c55e', color: '#fff' }}>
          Email Copied!
        </div>
      )}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="text-[#E8E2DB] font-semibold text-lg tracking-wide hover:text-[#FAB95B] transition-colors">
          David Costa
        </NavLink>

        {/* Desktop: Pill Nav */}
        <div ref={navRef} className="relative hidden md:flex items-center rounded-full p-1"
          style={{ backgroundColor: '#0e1f3d' }}>
          <div
            className="absolute rounded-full transition-all duration-300 ease-in-out"
            style={{
              left: pillStyle.left,
              width: pillStyle.width,
              top: 4,
              bottom: 4,
              backgroundColor: '#FAB95B',
            }}
          />
          {NAV_ITEMS.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="relative z-10 px-5 py-1.5 text-sm font-medium rounded-full transition-colors duration-200"
              style={({ isActive }) => ({
                color: isActive ? '#1A3263' : '#E8E2DB',
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop: Social links */}
        <div className="hidden md:flex items-center gap-4">
          {socialLinks}
        </div>

        {/* Mobile: Hamburger */}
        <button
          className="md:hidden text-[#E8E2DB] hover:text-[#FAB95B] transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3" style={{ backgroundColor: '#1A3263' }}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="text-sm font-medium py-1"
              style={({ isActive }) => ({
                color: isActive ? '#FAB95B' : '#E8E2DB',
              })}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="flex items-center gap-4 pt-1">
            {socialLinks}
          </div>
        </div>
      )}
    </header>
  );
}