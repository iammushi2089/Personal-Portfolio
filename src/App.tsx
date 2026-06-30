import { useState, useEffect, useRef } from 'react'
import './App.css'

// ── Asset imports ─────────────────────────────────────────
import profilePic from './assets/profile_picture_cat.png'
import verifiedCheckmark from './assets/verified_badge.png'
import mailIcon from './assets/mail.png'
import locationIcon from './assets/location.png'
import aboutIcon from './assets/about.png'
import jobExperienceIcon from './assets/job_experience.png'
import techStackIcon from './assets/tech_stack.png'
import downIcon from './assets/down.png'

// ── Project screenshots ───────────────────────────────────
import travelToursImg from './assets/travel_tours.png'
import theFolioImg from './assets/the_folio.png'
import biasImg from './assets/bias.png'
import magicLeftovers1 from './assets/magic_leftovers1.png'
import magicLeftovers2 from './assets/magic_leftovers2.png'

// ═════════════════════════════════════════════════════════
//  DATA
// ═════════════════════════════════════════════════════════

const experiences = [
  {
    title: 'Business Analyst',
    desc: 'Mapped business processes, gathered system requirements, and created solution blueprints during my internship at LikhaERP.',
  },
  {
    title: 'Quality Assurance (QA)',
    desc: 'Conducted manual testing, identified bugs, and verified system functionality to ensure software quality.',
  },
  {
    title: 'Backend Development',
    desc: 'Assisted in developing backend features, managing databases, while continuously learning with AI-assisted development.',
  },
  {
    title: 'Frontend Development',
    desc: 'Built responsive and user-friendly web interfaces using modern frontend technologies and best practices.',
  },
  {
    title: 'UI/UX Design',
    desc: 'Designed intuitive and visually appealing user interfaces and prototypes with a focus on usability and user experience.',
  },
  {
    title: 'Static Website Development',
    desc: 'Developed responsive static websites, landing pages, and homepages for academic and personal projects.',
  },
  {
    title: 'Software Testing & Quality Review',
    desc: 'Performed functional, usability, and interface testing to ensure applications met quality standards before deployment.',
  },
]

interface Project {
  title: string
  description: string
  tags: string[]
  images: string[]
  accent: string
}

const projects: Project[] = [
  {
    title: 'J&D Amazing8 Travels and Tours',
    description:
      'A stunning travel booking website featuring destination discovery, tour packages, and seamless booking experiences.',
    tags: ['React', 'TypeScript', 'Supabase'],
    images: [travelToursImg],
    accent: '#e8a44a',
  },
  {
    title: 'The-Folio Project',
    description:
      'My Japan Travel Portfolio — a deeply personal showcase of Japanese culture, travel planning, and meaningful destinations.',
    tags: ['React', 'Supabase', 'TypeScript'],
    images: [theFolioImg],
    accent: '#e85858',
  },
  {
    title: 'BIAS – Barangay Inquiry & Appointment System',
    description:
      'A civic tech portal for Santa Rita, Agoo, streamlining community services, announcements, and digital governance.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    images: [biasImg],
    accent: '#4a8fe8',
  },
  {
    title: 'MagicLeftOvers',
    description:
      'A health-focused app prototype that helps users discover recipes from leftover ingredients, reducing food waste.',
    tags: ['Figma', 'UI/UX', 'Prototyping'],
    images: [magicLeftovers1, magicLeftovers2],
    accent: '#e84a7f',
  },
]

// ═════════════════════════════════════════════════════════
//  DARK MODE TOGGLE
// ═════════════════════════════════════════════════════════
function DarkModeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <button
      className={`toggle-btn ${dark ? 'toggle-btn--on' : ''}`}
      onClick={onToggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="toggle-knob" />
    </button>
  )
}

// ═════════════════════════════════════════════════════════
//  PROJECT CARD
// ═════════════════════════════════════════════════════════
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false)
  const [imgIdx, setImgIdx] = useState(0)

  // Cycle images if multiple exist
  useEffect(() => {
    if (project.images.length < 2) return
    const id = setInterval(() => {
      setImgIdx(i => (i + 1) % project.images.length)
    }, 2500)
    return () => clearInterval(id)
  }, [project.images.length])

  return (
    <div
      className={`project-card project-card--${index % 2 === 0 ? 'even' : 'odd'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ '--accent': project.accent } as React.CSSProperties}
    >
      {/* Image pane */}
      <div className="project-card__img-wrap">
        {project.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={project.title}
            className={`project-card__img ${i === imgIdx ? 'project-card__img--active' : ''}`}
          />
        ))}
        <div className={`project-card__overlay ${hovered ? 'project-card__overlay--show' : ''}`} />
        <div className="project-card__number">{String(index + 1).padStart(2, '0')}</div>
      </div>

      {/* Content pane */}
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* Accent bar */}
      <div className="project-card__accent-bar" />
    </div>
  )
}

// ═════════════════════════════════════════════════════════
//  MAIN APP
// ═════════════════════════════════════════════════════════
export default function App() {
  const [dark, setDark] = useState(false)
  const projectsRef = useRef<HTMLElement>(null)

  // Apply dark class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="portfolio">

      {/* ── Dark mode toggle ─────────────────────────────── */}
      <div className="toggle-wrap">
        <DarkModeToggle dark={dark} onToggle={() => setDark(d => !d)} />
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 1 – HERO
      ═══════════════════════════════════════════════════ */}
      <section className="hero-section">
        <div className="hero-inner">
          {/* Profile picture */}
          <div className="profile-img-wrap">
            <img src={profilePic} alt="Jhon Rey" className="profile-img" />
          </div>

          {/* Info */}
          <div className="hero-info">
            <div className="hero-name-row">
              <h1 className="hero-name">Jhon Rey</h1>
              <img src={verifiedCheckmark} alt="Verified" className="verified-icon" />
            </div>
            <p className="hero-location">
              <img src={locationIcon} alt="" className="location-icon" />
              La Union, Philippines
            </p>
            <p className="hero-title">Aspiring UI/UX Designer</p>

            <a
              href="mailto:samsonjohnrey@gmail.com"
              className="send-email-btn"
              aria-label="Send Email"
            >
              <img src={mailIcon} alt="" className="btn-icon" />
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 – ABOUT + EXPERIENCE  (two-column)
      ═══════════════════════════════════════════════════ */}
      <section className="about-experience-section">
        <div className="two-col-grid">

          {/* LEFT COLUMN */}
          <div className="left-col">

            {/* About card */}
            <div className="card">
              <div className="card-header">
                <img src={aboutIcon} alt="" className="section-icon" />
                <h2 className="section-title">About</h2>
              </div>
              <div className="about-text">
                <p>
                  I'm a fourth-year Bachelor of Science in Information Technology student at Don
                  Mariano Marcos Memorial State University – South La Union Campus (DMMMSU-SLUC)
                  with a passion for creating intuitive and visually appealing digital experiences.
                  As an aspiring UI/UX Designer and Frontend Developer, I enjoy transforming ideas
                  into responsive, user-friendly interfaces that combine functionality with clean
                  design.
                </p>
                <p>
                  Throughout my academic journey, I've developed several projects, including J&amp;D
                  Amazing8 Travels and Tours, BIAS (Barangay Inquiry and Appointment System for
                  Santa Rita, Agoo), The-Folio Project, and MagicLeftOvers, each helping me
                  strengthen my problem-solving, design thinking, and development skills.
                </p>
                <p>
                  My technical foundation includes HTML, CSS, JavaScript, React, Supabase,
                  LikhaERP, and Figma, along with experience using modern web development tools and
                  technologies. While frontend development is where I feel most at home, I'm
                  continuously expanding my backend development skills to become a more well-rounded
                  full-stack developer.
                  <br />
                  I'm always eager to learn, explore new technologies, and take on opportunities
                  that challenge me to grow as a designer and developer. My goal is to build
                  meaningful digital products that not only look great but also provide exceptional
                  user experiences.
                </p>
              </div>
            </div>

            {/* Tech Stack card */}
            <div className="card">
              <div className="card-header">
                <img src={techStackIcon} alt="" className="section-icon" />
                <h2 className="section-title">Tech Stack</h2>
              </div>

              <div className="tech-group">
                <p className="tech-group-label">Frontend</p>
                <div className="tag-row">
                  {['HTML, CSS, JS', 'React', 'TypeScript', 'Tailwind CSS'].map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="tech-group">
                <p className="tech-group-label">Backend</p>
                <div className="tag-row">
                  {['Node.js', 'LikhaERP', 'Supabase'].map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – Experience */}
          <div className="card">
            <div className="card-header">
              <img src={jobExperienceIcon} alt="" className="section-icon" />
              <h2 className="section-title">Experience</h2>
            </div>
            <ul className="experience-list">
              {experiences.map(exp => (
                <li key={exp.title} className="experience-item">
                  <span className="exp-bullet" />
                  <div>
                    <p className="exp-title">{exp.title}</p>
                    <p className="exp-desc">{exp.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ─── View More button ───────────────────────────────── */}
      <div className="view-more-wrap">
        <button className="view-more-btn" onClick={scrollToProjects}>
          View More
          <img src={downIcon} alt="" className="down-icon" />
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 – MY PROJECTS
      ═══════════════════════════════════════════════════ */}
      <section className="projects-section" ref={projectsRef} id="projects">
        <div className="projects-header">
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-subtitle">A selection of my works</p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>

    </div>
  )
}
