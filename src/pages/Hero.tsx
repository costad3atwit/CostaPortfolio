import { Link } from 'react-router-dom';
import TextType from '../components/TextType';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import { S3_BASE } from '../config';


const PHOTO_ITEMS = [
  { src: `${S3_BASE}/files/DSCF4109.JPG.jpg`, label: 'Group Coding' },
  { src: `${S3_BASE}/files/bwh.JPG`, label: 'Brigham and Women\'s Hospital' },
  { src: `${S3_BASE}/files/dd_logo_white_2020_1919.webp`, label: 'Diamond Diagnostics', bg: '#0b225d', contain: true },
  { src: `${S3_BASE}/files/climb.jpg`, label: 'Climbing!', position: 'center 41%' },
];

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <section
        className="min-h-[78vh] flex flex-col items-center justify-start pt-12 px-6 text-center"
        style={{ backgroundColor: '#E8E2DB' }}
      >
        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 w-[75vw] min-h-[2.4em]" style={{ color: '#1A3263' }}>
          <TextType
            text={["Hey, I'm David!", "Welcome to my portfolio. Feel free to reach out :D"]}
            as="span"
            typingSpeed={75}
            pauseDuration={1500}
            loop={true}
            showCursor
            cursorCharacter="|"
            cursorBlinkDuration={0.5}
          />
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

      </section>

      {/* Photo scroll stack */}
      <section style={{ backgroundColor: '#E8E2DB' }}>
        <ScrollStack useWindowScroll itemDistance={80} baseScale={0.88} itemStackDistance={25}>
          {PHOTO_ITEMS.map((item) => (
            <ScrollStackItem key={item.label} itemClassName="overflow-hidden !p-0">
              {item.bg && <div className="absolute inset-0 rounded-[40px]" style={{ backgroundColor: item.bg }} />}
              <img
                src={item.src}
                alt={item.label}
                className={`absolute rounded-[40px] ${item.contain ? 'inset-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] object-contain' : 'inset-0 w-full h-full object-cover'}`}
                style={item.position ? { objectPosition: item.position } : undefined}
              />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </section>
    </>
  );
}
