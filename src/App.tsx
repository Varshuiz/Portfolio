import { lazy, Suspense } from "react";
import { AnimatedLetters } from "./components/AnimatedLetters";
import { HeroIllustration } from "./components/HeroIllustration";
import { HeroSubtext } from "./components/HeroSubtext";
import { ParallaxBlobs } from "./components/ParallaxBlobs";
import { ScrollOrchestrator } from "./components/ScrollOrchestrator";
import { ScrollProgress } from "./components/ScrollProgress";
import { ThemeToggle } from "./components/ThemeToggle";
import {
  contact,
  education,
  github,
  hero,
  leadership,
  projects,
  sectionCopy,
  skills,
  volunteer,
  workExperience,
  type ProjectLink,
} from "./content";
import { stackToTags } from "./utils/stackTags";

const HeroModel = lazy(() =>
  import("./components/HeroModel").then((m) => ({ default: m.HeroModel }))
);

function Nav() {
  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#leadership", label: "Leadership" },
    { href: "#volunteer", label: "Volunteer" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="logo" href="#top">
          SM
        </a>
        <nav className="nav" aria-label="Primary">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
        <a
          className="btn btn-ghost"
          href={github.profile}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

function ProjectCardLink({ link }: { link: ProjectLink }) {
  if (link.kind === "repo") {
    return (
      <a
        className="project-github"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label ?? "Learn more"}
        <span aria-hidden> →</span>
      </a>
    );
  }
  return (
    <a
      className="project-github muted-link"
      href={github.profile}
      target="_blank"
      rel="noopener noreferrer"
      title="Profile — add a public repo slug in src/content.ts when ready"
    >
      {link.label ?? "View on GitHub"}
      <span aria-hidden> →</span>
    </a>
  );
}

export default function App() {
  return (
    <>
      <ScrollProgress />
      <ScrollOrchestrator />
      <ParallaxBlobs />
      <Nav />
      <main id="top">
        <section className="hero">
          <div className="hero-split">
            <div className="hero-copy">
              <div className="hero-inner">
              <p className="hero-greeting">{hero.greeting}</p>
              <AnimatedLetters
                as="h1"
                text={hero.name}
                variant="hero"
                className="hero-h1-title h1-split-root"
                letterClassName="h1-char"
              />
              <HeroSubtext
                credential={hero.credential}
                tagline={hero.tagline}
                location={hero.location}
              />
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  View projects
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Get in touch
                </a>
                <a
                  className="btn btn-ghost hero-github"
                  href={github.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub @{github.username}
                </a>
              </div>
              </div>
            </div>
            <div className="hero-art" aria-hidden>
              <Suspense fallback={<HeroIllustration />}>
                <HeroModel />
              </Suspense>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="wrap">
            <p className="section-kicker">{sectionCopy.about}</p>
            <AnimatedLetters
              as="h2"
              text="About"
              variant="section"
              className="section-title"
              letterClassName="section-title-char"
            />
            <p className="prose js-reveal">
            I believe the best way to learn is to build, and that has driven every role I've taken on. From climate datasets for agricultural research to GAN pipelines at my ML internship to a mobile app built for a social work nonprofit, I've always sought out work where the output actually matters. Alongside that, I lead the UAlberta chapter of CanadaCyberSTEAMChallenge, working to make tech education more accessible across Canada. I'm looking for a software engineering role where I can keep learning and building things that actually make a difference. let's connect!
            </p>
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="wrap">
            <p className="section-kicker">{sectionCopy.projects}</p>
            <AnimatedLetters
              as="h2"
              text="Technical projects"
              variant="section"
              className="section-title"
              letterClassName="section-title-char"
            />

            <div className="project-grid js-reveal">
              {projects.map((p) => (
                <article key={p.name} className="card project-card">
                  <div className="card-head">
                    <div className="project-tags" aria-label="Tech stack">
                      {stackToTags(p.stack).map((tag, i) => (
                        <span key={`${tag}-${i}`} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3>{p.name}</h3>
                    {p.context && <p className="muted small">{p.context}</p>}
                    {p.dates && <p className="dates small">{p.dates}</p>}
                  </div>
                  <ul className="bullets compact">
                    {p.description.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  {(p.github || p.demo) && (
                    <div className="project-links">
                      {p.github && <ProjectCardLink link={p.github} />}
                      {p.demo && <ProjectCardLink link={p.demo} />}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="wrap">
            <AnimatedLetters
              as="h2"
              text="Education"
              variant="section"
              className="section-title"
              letterClassName="section-title-char"
            />
            <article className="card card-feature js-reveal">
              <div className="card-head">
                <h3>{education.degree}</h3>
                <p className="org">
                  {education.school} · {education.dates}
                </p>
                <p className="muted small">{education.location}</p>
              </div>
              <ul className="bullets">
                {education.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="wrap">
            <AnimatedLetters
              as="h2"
              text="Professional experience"
              variant="section"
              className="section-title"
              letterClassName="section-title-char"
            />
            <div className="stack js-reveal">
              {workExperience.map((job) => (
                <article key={job.title + job.org + job.dates} className="card">
                  <div className="card-head">
                    <h3>
                      {job.title}
                      <span className="org"> — {job.org}</span>
                    </h3>
                    {job.detail && <p className="muted small">{job.detail}</p>}
                    <p className="dates">
                      {job.dates} · {job.location}
                    </p>
                  </div>
                  <ul className="bullets">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="leadership" className="section">
          <div className="wrap">
            <AnimatedLetters
              as="h2"
              text="Leadership"
              variant="section"
              className="section-title"
              letterClassName="section-title-char"
            />
            <div className="stack js-reveal">
              {leadership.map((item) => (
                <article key={item.title + item.org} className="card">
                  <div className="card-head">
                    <h3>
                      {item.title}
                      <span className="org"> — {item.org}</span>
                    </h3>
                    <p className="dates">
                      {item.dates} · {item.location}
                    </p>
                  </div>
                  <ul className="bullets">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="volunteer" className="section section-alt">
          <div className="wrap">
            <AnimatedLetters
              as="h2"
              text="Volunteer"
              variant="section"
              className="section-title"
              letterClassName="section-title-char"
            />
            <div className="stack js-reveal">
              {volunteer.map((item) => (
                <article key={item.title + item.org + item.dates} className="card">
                  <div className="card-head">
                    <h3>
                      {item.title}
                      <span className="org"> — {item.org}</span>
                    </h3>
                    <p className="dates">
                      {item.dates} · {item.location}
                    </p>
                  </div>
                  <ul className="bullets">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="wrap">
            <p className="section-kicker">Tools &amp; concepts</p>
            <AnimatedLetters
              as="h2"
              text="Skills"
              variant="section"
              className="section-title"
              letterClassName="section-title-char"
            />
            <div className="skills-grid js-reveal">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-block">
                  <h3 className="skill-cat">{category}</h3>
                  <ul className="skill-tags">
                    {items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section section-alt contact-section">
          <div className="wrap">
            <p className="section-kicker">{sectionCopy.contact}</p>
            <AnimatedLetters
              as="h2"
              text="Get in touch"
              variant="section"
              className="section-title"
              letterClassName="section-title-char"
            />
            <div className="contact-panel js-reveal">
              <p className="contact-lead">
                Open to internships, research collaborations, and interesting builds. Say hello —
                I&apos;d love to hear from you.
              </p>
              <div className="contact-actions">
                {contact.email ? (
                  <a
                    className="btn btn-primary"
                    href={
                      contact.email.toLowerCase().endsWith("@gmail.com")
                        ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`
                        : `mailto:${contact.email}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Email me
                  </a>
                ) : (
                  <p className="contact-hint">
                    Add your <code className="inline-code">email</code> in{" "}
                    <code className="inline-code">src/content.ts</code> to enable the mail button.
                  </p>
                )}
                <a
                  className={contact.email ? "btn btn-secondary" : "btn btn-primary"}
                  href={github.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
                {contact.linkedin ? (
                  <a
                    className="btn btn-secondary"
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn →
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p>
            <strong>{hero.name}</strong> · {hero.location}
          </p>
          <p>
            <a href={github.profile} target="_blank" rel="noopener noreferrer">
              github.com/{github.username}
            </a>
          </p>
        </div>
      </footer>

      <style>{`
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          z-index: 100;
          background: rgba(10, 51, 35, 0.1);
          pointer-events: none;
        }

        .scroll-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--glaucous), var(--accent), var(--powder-blue));
          border-radius: 0 2px 2px 0;
          transition: width 0.1s ease-out;
        }

        .wrap {
          max-width: var(--max);
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: var(--header-bg);
          backdrop-filter: blur(14px) saturate(1.15);
          border-bottom: 1px solid var(--border);
          box-shadow: var(--header-shadow);
        }

        .header-inner {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1.5rem;
          max-width: var(--max);
          margin: 0 auto;
        }

        .logo {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.125rem;
          color: var(--text);
          letter-spacing: 0.02em;
          padding: 0.35rem 0.65rem;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--accent-dim), transparent);
          border: 1px solid var(--border);
        }

        .logo:hover {
          color: var(--accent);
          border-color: var(--border-bright);
        }

        .nav {
          flex: 1;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .nav ul {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem 0.75rem;
          list-style: none;
          margin: 0;
          padding: 0;
          justify-content: center;
        }

        .nav a {
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--muted);
          padding: 0.35rem 0.65rem;
          border-radius: 999px;
          transition: background 0.2s, color 0.2s;
        }

        .nav a:hover {
          color: var(--text);
          background: var(--accent-dim);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.6rem 1.15rem;
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 600;
          border: 1px solid transparent;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s;
        }

        .btn:active {
          transform: scale(0.98);
        }

        .btn-primary {
          background: linear-gradient(145deg, var(--accent-soft), var(--accent));
          color: #0a3323;
          box-shadow: 0 6px 28px var(--accent-glow);
        }

        .btn-primary:hover {
          background: linear-gradient(145deg, #f5ddd8, var(--accent-soft));
          color: #062818;
          box-shadow: 0 10px 36px var(--accent-glow);
        }

        .btn-secondary {
          border-color: var(--border);
          color: var(--text);
          background: var(--btn-secondary-bg);
          box-shadow: var(--shadow);
        }

        .btn-secondary:hover {
          border-color: var(--accent);
          color: var(--link-hover);
          background: var(--btn-secondary-bg-hover);
        }

        .btn-ghost {
          flex-shrink: 0;
          border-color: var(--border);
          color: var(--muted);
          font-size: 0.8125rem;
        }

        .btn-ghost:hover {
          color: var(--accent);
          border-color: var(--border-bright);
          background: var(--accent-dim);
        }

        .hero {
          padding: 2rem 0 3rem;
          position: relative;
          width: 100%;
          overflow-x: clip;
        }

        /* Full-viewport split — not limited by .wrap (1080px), so the model can own the full right half */
        .hero-split {
          display: grid;
          width: 100%;
          max-width: none;
          margin: 0;
          gap: 2rem;
          align-items: stretch;
          grid-template-columns: minmax(0, 1fr);
        }

        @media (min-width: 900px) {
          .hero-split {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: 0;
            min-height: min(92vh, 960px);
            height: min(92vh, 960px);
          }
        }

        .hero-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
          padding: 1rem clamp(1.25rem, 4vw, 2.5rem) 2rem;
        }

        @media (min-width: 900px) {
          .hero-copy {
            padding: 2.5rem clamp(1.5rem, 5vw, 5rem) 4rem clamp(1.5rem, 6vw, 6rem);
            min-height: 100%;
            height: 100%;
            box-sizing: border-box;
          }
        }

        .hero-inner {
          width: 100%;
          max-width: 44rem;
          min-width: 0;
        }

        .hero-art {
          display: flex;
          width: 100%;
          min-width: 0;
          justify-content: stretch;
          align-items: stretch;
          min-height: min(72vh, 640px);
          background: var(--hero-model-bg);
          border: none;
        }

        @media (min-width: 900px) {
          .hero-art {
            min-height: 100%;
            height: 100%;
            align-self: stretch;
          }
        }

        @media (max-width: 899px) {
          .hero-art {
            min-height: min(58vh, 520px);
            border-radius: var(--radius-lg);
            overflow: hidden;
          }
        }

        .hero-model-wrap {
          position: relative;
          flex: 1 1 auto;
          width: 100%;
          max-width: none;
          height: 100%;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          margin: 0;
        }

        .hero-drag-hint {
          position: absolute;
          inset: 0;
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          padding: 1.5rem;
          pointer-events: none;
          text-align: center;
          background: linear-gradient(
            165deg,
            rgba(255, 255, 255, 0.14) 0%,
            rgba(120, 120, 120, 0.08) 42%,
            transparent 68%
          );
        }

        html[data-theme="dark"] .hero-drag-hint {
          background: linear-gradient(
            165deg,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(0, 0, 0, 0.12) 45%,
            transparent 70%
          );
        }

        .hero-drag-hint-graphic {
          width: min(9rem, 42vw);
          height: auto;
          color: rgba(60, 70, 65, 0.72);
          filter: drop-shadow(0 1px 2px rgba(255, 255, 255, 0.35));
        }

        html[data-theme="dark"] .hero-drag-hint-graphic {
          color: rgba(230, 240, 235, 0.82);
          filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.45));
        }

        .hero-drag-hint-label {
          margin: 0;
          font-size: 0.9375rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: rgba(55, 65, 60, 0.78);
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        html[data-theme="dark"] .hero-drag-hint-label {
          color: rgba(235, 245, 240, 0.9);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }

        .hero-model-viewer {
          display: block;
          width: 100%;
          flex: 1 1 auto;
          height: 100%;
          min-height: 100%;
          border-radius: 0;
          overflow: hidden;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          aspect-ratio: auto;
        }

        .hero-model-viewer:focus-visible {
          outline: 2px solid var(--link);
          outline-offset: 2px;
        }

        @media (min-width: 900px) {
          .hero-model-viewer {
            min-height: 100%;
            height: 100%;
            border-radius: var(--radius-lg) 0 0 var(--radius-lg);
          }
        }

        .hero-model-fallback {
          width: 100%;
          max-width: none;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: inherit;
        }

        .hero-model-hint {
          margin: 0.75rem 0 0;
          font-size: 0.8125rem;
          color: var(--muted);
          text-align: center;
          line-height: 1.55;
        }

        .hero-illustration {
          width: 100%;
          max-width: 28rem;
        }

        .hero-illustration-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .hero-greeting {
          font-family: var(--font-display);
          font-size: clamp(1.125rem, 2.15vw, 1.45rem);
          font-weight: 500;
          color: var(--muted);
          margin: 0 0 0.35rem;
          letter-spacing: 0.02em;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--accent);
          margin: 0 0 1rem;
          font-weight: 600;
        }

        .eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent), var(--glaucous));
          box-shadow: 0 0 14px var(--accent-glow);
        }

        .h1-split-root {
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0;
        }

        .h1-char {
          display: inline-block;
          color: var(--hero-name-color);
        }

        .hero-h1-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.6vw, 2.85rem);
          font-weight: 600;
          line-height: 1.14;
          margin: 0 0 1rem;
          letter-spacing: -0.03em;
        }

        .hero-tagline {
          font-size: 1.0625rem;
          color: var(--muted);
          margin: 0 0 0.75rem;
          line-height: 1.65;
        }

        .hero-meta {
          margin: 0 0 1.75rem;
          color: var(--muted);
          font-size: 0.9375rem;
          padding-left: 1rem;
          border-left: 3px solid var(--glaucous);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
        }

        .hero-github {
          font-size: 0.8125rem;
        }

        .section {
          padding: 3.5rem 0;
        }

        .section-alt {
          background: var(--section-alt-bg);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          position: relative;
        }

        .section-alt::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(16, 86, 102, 0.35), transparent);
          opacity: 0.95;
        }

        .section-kicker {
          font-size: 0.8125rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--section-kicker);
          margin: 0 0 0.35rem;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: 1.85rem;
          font-weight: 600;
          margin: 0 0 1.5rem;
          letter-spacing: -0.02em;
          position: relative;
          display: inline-block;
          color: var(--text-bright);
          perspective: 900px;
          transform-style: preserve-3d;
        }

        .section-title-char {
          display: inline-block;
          transform-origin: 50% 100%;
          backface-visibility: hidden;
        }

        .section-title::after {
          content: "";
          display: block;
          height: 4px;
          width: min(120px, 40%);
          margin-top: 0.5rem;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--dusty-mauve), var(--accent), var(--powder-blue));
          opacity: 0.95;
        }

        .section-intro {
          color: var(--muted);
          max-width: 40rem;
          margin: -0.5rem 0 2rem;
          font-size: 0.9375rem;
        }

        .inline-code {
          font-family: ui-monospace, monospace;
          font-size: 0.85em;
          background: var(--surface);
          padding: 0.15em 0.4em;
          border-radius: 6px;
          border: 1px solid var(--border);
        }

        .prose {
          font-size: 1.0625rem;
          color: var(--muted);
          max-width: 40rem;
          margin: 0;
          line-height: 1.75;
        }

        .prose strong {
          color: var(--text-bright);
          font-weight: 600;
        }

        .card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.5rem 1.75rem;
          box-shadow: var(--shadow);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          color: var(--text);
        }

        .card:hover {
          transform: translateY(-4px);
          border-color: var(--border-bright);
          box-shadow: var(--shadow-lift);
        }

        .card-feature {
          border-color: rgba(131, 153, 88, 0.45);
          background: var(--card-feature-bg);
        }

        .card-head h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin: 0 0 0.35rem;
          line-height: 1.35;
          color: var(--text-bright);
        }

        .org {
          font-weight: 500;
          color: var(--muted);
        }

        .dates {
          margin: 0.35rem 0 0;
          font-size: 0.875rem;
          color: var(--muted);
        }

        .muted {
          color: var(--muted);
        }

        .small {
          font-size: 0.875rem;
        }

        .stack {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .bullets {
          margin: 1rem 0 0;
          padding-left: 1.2rem;
          color: var(--muted);
        }

        .bullets li::marker {
          color: var(--dusty-mauve);
        }

        .bullets li {
          margin-bottom: 0.4rem;
        }

        .bullets.compact li {
          margin-bottom: 0.25rem;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin: 0 0 0.75rem;
        }

        .project-tag {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.3rem 0.55rem;
          border-radius: 6px;
          background: var(--project-tag-bg);
          color: var(--text-bright);
          border: 1px solid var(--border);
        }

        .project-grid {
          display: grid;
          gap: 1.25rem;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
        }

        .project-card {
          display: flex;
          flex-direction: column;
        }

        .project-github {
          font-size: 0.875rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }

        .project-links {
          margin-top: auto;
          padding-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
        }

        .contact-section .section-title {
          margin-bottom: 1rem;
        }

        .contact-panel {
          max-width: 36rem;
        }

        .contact-lead {
          font-size: 1.0625rem;
          line-height: 1.7;
          color: var(--muted);
          margin: 0 0 1.5rem;
        }

        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
        }

        .contact-hint {
          margin: 0;
          font-size: 0.875rem;
          color: var(--muted);
          max-width: 22rem;
          line-height: 1.5;
        }

        .muted-link {
          opacity: 0.88;
        }

        .skills-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        }

        .skill-block {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.25rem 1.5rem;
          transition: transform 0.2s ease, border-color 0.2s;
          box-shadow: var(--shadow);
          color: var(--text);
        }

        .skill-block:hover {
          transform: translateY(-3px);
          border-color: var(--border-bright);
        }

        .skill-cat {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent);
          margin: 0 0 0.75rem;
          font-weight: 700;
        }

        .skill-tags {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .skill-tags li {
          font-size: 0.8125rem;
          padding: 0.4rem 0.75rem;
          background: var(--accent-dim);
          border-radius: 999px;
          color: var(--text);
          border: 1px solid var(--border);
          font-weight: 500;
        }

        .site-footer {
          border-top: 1px solid var(--border);
          padding: 2.25rem 0;
          margin-top: 2rem;
          background: var(--footer-bg);
        }

        .footer-inner {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
          color: var(--muted);
        }

        .footer-inner strong {
          color: var(--text-bright);
        }

        @media (max-width: 768px) {
          .header-inner {
            flex-wrap: wrap;
          }

          .nav {
            order: 3;
            width: 100%;
            padding-top: 0.5rem;
            border-top: 1px solid var(--border);
            margin-top: 0.5rem;
          }

          .nav ul {
            justify-content: flex-start;
          }
        }
      `}</style>
    </>
  );
}
