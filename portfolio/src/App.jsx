import React, { useEffect } from "react";
import "./index.css";

function App() {
  const year = new Date().getFullYear();

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    let clickTimeout;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));

    const handleMove = (event) => {
      const root = document.documentElement;
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    const handleDown = () => {
      const root = document.documentElement;
      root.classList.add("cursor-click");
      window.clearTimeout(clickTimeout);
      clickTimeout = window.setTimeout(() => {
        root.classList.remove("cursor-click");
      }, 220);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.clearTimeout(clickTimeout);
    };
  }, []);

  return (
    <div className="app-root">
      <div className="glow glow-1" />
      <div className="glow glow-2" />
      <div className="cursor-glow" />

      <div className="page-shell">
        <header className="top-nav">
          <div className="glass top-nav-inner">
            <div className="brand">
              <div className="brand-avatar">GJ</div>
              <div>
                <div className="brand-text-primary">Gurshan Jawandha</div>
                <div className="brand-text-secondary">
                  Full-Stack &amp; DevOps · Ropar, Punjab
                </div>
              </div>
            </div>
            <nav className="nav-links">
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#skills" className="nav-link">
                Skills
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="#contact" className="nav-link nav-link-primary">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main>
          <section className="glass hero-section reveal">
            <div className="hero">
              <div>
                <div className="hero-eyebrow">
                  <span className="hero-eyebrow-dot" />
                  Available for internships, junior roles &amp; freelance
                </div>
                <h1 className="hero-title">
                  Full‑Stack &amp; DevOps engineer building{" "}
                  <span className="accent">modern web apps</span> from code to
                  cloud.
                </h1>
                <p className="hero-subtitle">
                  I design, build, and deploy end‑to‑end web applications with
                  React, Node.js, MongoDB, and AWS—focused on clean
                  architecture, reliable delivery, and real‑world use.
                </p>
                <div className="hero-meta">
                  <div className="hero-meta-pill">
                    <span>🎓 B.Tech CSE (DevOps), Chandigarh University</span>
                  </div>
                  <div className="hero-meta-pill">
                    <span>
                      🚀 Hands‑on projects in cloud storage, social apps, CI/CD
                    </span>
                  </div>
                </div>
                <div className="hero-actions">
                  <a href="#contact" className="btn btn-primary">
                    Hire Me <span>↗</span>
                  </a>
                  <a href="#projects" className="btn btn-ghost">
                    View Projects
                  </a>
                </div>
                <p className="hero-note">
                  Prefer email, GitHub, or LinkedIn for opportunities,
                  collaborations, and internships.
                </p>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="glass section-about reveal reveal-delay-1"
          >
            <div className="section-grid">
              <div>
                <p className="section-label">About</p>
                <h2 className="section-title">
                  Engineer with a builder’s mindset.
                </h2>
                <p className="section-copy">
                  I’m a full‑stack engineer just starting my journey in IT,
                  currently pursuing a B.Tech in Computer Science &amp;
                  Engineering (DevOps) at Chandigarh University. I care about
                  shipping real things—apps that people can actually use,
                  deployed with reliable pipelines.
                </p>
              </div>
              <div className="section-body">
                <div className="card about-card">
                  <div className="card-header-row">
                    <div>
                      <div className="card-title">
                        Hands‑on learning over theory
                      </div>
                      <div className="card-subtitle">
                        Building, breaking, and iterating in code and cloud.
                      </div>
                    </div>
                    <span className="chip">Approach</span>
                  </div>
                  <p className="card-text">
                    I learn by building: cloud storage apps, social platforms,
                    and CI/CD workflows. My focus is simple—take an idea from
                    zero to deployed, then refine based on feedback and
                    performance.
                  </p>
                </div>
                <div className="card about-card">
                  <div className="card-header-row">
                    <div>
                      <div className="card-title">
                        From development to deployment
                      </div>
                      <div className="card-subtitle">
                        Full stack plus DevOps fundamentals.
                      </div>
                    </div>
                    <span className="chip">Edge</span>
                  </div>
                  <p className="card-text">
                    I don’t stop at “it runs on localhost.” I think about
                    environments, pipelines, and the steps needed to get code
                    live, monitored, and easy to update.
                  </p>
                  <div className="tag-row">
                    <span className="tag">GitHub Actions</span>
                    <span className="tag">Jenkins</span>
                    <span className="tag">Docker</span>
                    <span className="tag">AWS Cloud Foundations</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="skills"
            className="glass section-skills reveal reveal-delay-2"
          >
            <div className="section-grid">
              <div>
                <p className="section-label">Skills</p>
                <h2 className="section-title">
                  Modern full‑stack with DevOps foundations.
                </h2>
                <p className="section-copy">
                  Practical skills focused on building web applications, APIs,
                  and deployment workflows that can scale as projects grow.
                </p>
              </div>
              <div className="section-body">
                <div className="card skills-card">
                  <div className="muted-label">Technical</div>
                  <div className="pill-group">
                    <span className="pill-soft">React</span>
                    <span className="pill-soft">JavaScript</span>
                    <span className="pill-soft">TypeScript</span>
                    <span className="pill-soft">HTML</span>
                    <span className="pill-soft">CSS</span>
                    <span className="pill-soft">Node.js</span>
                    <span className="pill-soft">MongoDB</span>
                    <span className="pill-soft">AWS (Foundations)</span>
                  </div>
                </div>
                <div className="card skills-card">
                  <div className="muted-label">Tools &amp; DevOps</div>
                  <div className="pill-group">
                    <span className="pill-soft">Git</span>
                    <span className="pill-soft">GitHub</span>
                    <span className="pill-soft">GitLab</span>
                    <span className="pill-soft">Postman</span>
                    <span className="pill-soft">Docker</span>
                    <span className="pill-soft">Jenkins</span>
                    <span className="pill-soft">GitHub Actions</span>
                  </div>
                </div>
                <div className="card skills-card">
                  <div className="muted-label">Soft Skills</div>
                  <div className="pill-group">
                    <span className="pill-soft">Problem‑solving</span>
                    <span className="pill-soft">Ownership</span>
                    <span className="pill-soft">Clear communication</span>
                    <span className="pill-soft">Continuous learning</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="glass section-projects reveal reveal-delay-3"
          >
            <div className="section-grid">
              <div>
                <p className="section-label">Projects</p>
                <h2 className="section-title">Selected work.</h2>
                <p className="section-copy">
                  A snapshot of the projects where I focus on real‑world
                  flows—authentication, storage, and responsive, usable
                  interfaces.
                </p>
              </div>
              <div className="section-body">
                <div className="projects-grid">
                  <article className="card project-card">
                    <div className="card-header-row">
                      <div>
                        <div className="card-title">
                          StoreIt – Cloud Storage App
                        </div>
                        <div className="card-subtitle">
                          Full‑stack web application for secure file storage.
                        </div>
                      </div>
                      <span className="chip">Full Stack</span>
                    </div>
                    <p className="card-text">
                      Built a cloud storage platform where users can upload,
                      store, and retrieve files through a clean, modern
                      interface. Focused on reliability, clarity, and a
                      structure that’s ready for deployment to cloud
                      infrastructure.
                    </p>
                    <div className="project-metrics">
                      <span>
                        • Designed flows for secure file handling and retrieval.
                      </span>
                      <span>
                        • Structured front‑end and back‑end for maintainability
                        and scaling.
                      </span>
                    </div>
                    <div className="tag-row">
                      <span className="tag">React</span>
                      <span className="tag">TypeScript</span>
                      <span className="tag">Tailwind CSS</span>
                      <span className="tag">Node.js</span>
                      <span className="tag">MongoDB</span>
                      <span className="tag">AWS</span>
                    </div>
                  </article>

                  <article className="card project-card">
                    <div className="card-header-row">
                      <div>
                        <div className="card-title">
                          ChatPulse – Social Web App
                        </div>
                        <div className="card-subtitle">
                          Real‑time social platform with auth and responsive UI.
                        </div>
                      </div>
                      <span className="chip">Full Stack</span>
                    </div>
                    <p className="card-text">
                      Built a social web application with real‑time features and
                      user authentication. The interface is designed to stay
                      responsive and usable across devices, with room for
                      continuous feature updates.
                    </p>
                    <div className="project-metrics">
                      <span>
                        • Implemented login flows and protected routes for
                        authenticated users.
                      </span>
                      <span>
                        • Designed responsive layouts for mobile and desktop
                        usage.
                      </span>
                    </div>
                    <div className="tag-row">
                      <span className="tag">React</span>
                      <span className="tag">JavaScript</span>
                      <span className="tag">TypeScript (v2)</span>
                      <span className="tag">Bootstrap</span>
                      <span className="tag">MongoDB</span>
                    </div>
                  </article>
                </div>

                <div className="card github-card">
                  <div className="card-header-row">
                    <div>
                      <div className="card-title">More on GitHub</div>
                      <div className="card-subtitle">
                        Explore additional experiments and project iterations.
                      </div>
                    </div>
                    <a
                      href="https://github.com/Gurshan07"
                      target="_blank"
                      rel="noreferrer"
                      className="chip"
                    >
                      View GitHub ↗
                    </a>
                  </div>
                  <p className="card-text">
                    I actively explore new stacks, patterns, and workflows in
                    public repositories, including experiments with CI/CD and
                    small utilities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="glass section-cert reveal reveal-delay-4">
            <div className="section-grid">
              <div>
                <p className="section-label">Credentials</p>
                <h2 className="section-title">
                  Certifications &amp; education.
                </h2>
                <p className="section-copy">
                  Formal education and focused certifications backing my work in
                  cloud and DevOps.
                </p>
              </div>
              <div className="section-body">
                <div className="card cert-card">
                  <div className="muted-label">Certifications</div>
                  <div className="card-header-row">
                    <div>
                      <div className="card-title">GitHub Actions</div>
                      <div className="card-subtitle">GitHub</div>
                    </div>
                  </div>
                  <p className="card-text">
                    Demonstrates understanding of automating workflows, CI/CD
                    pipelines, and integrating checks directly into GitHub
                    repositories.
                  </p>
                  <div className="card-header-row" style={{ marginTop: 8 }}>
                    <div>
                      <div className="card-title">AWS Cloud Foundations</div>
                      <div className="card-subtitle">
                        Amazon Web Services
                      </div>
                    </div>
                  </div>
                  <p className="card-text">
                    Covers core AWS concepts including compute, storage,
                    networking, and basic architectural principles for cloud
                    solutions.
                  </p>
                </div>
                <div className="card education-card">
                  <div className="muted-label">Education</div>
                  <p className="card-title">
                    B.Tech, Computer Science &amp; Engineering (DevOps)
                  </p>
                  <p className="card-subtitle">
                    Chandigarh University · 2023 – Present
                  </p>
                  <p className="card-text">
                    Degree track focused on software development and DevOps
                    practices, combining core CS fundamentals with modern
                    tooling and workflows.
                  </p>
                  <div style={{ marginTop: 10 }}>
                    <p className="card-title">Senior Secondary School</p>
                    <p className="card-subtitle">
                      SSS, Ropar, Punjab · 2021 – 2023 · 82%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="glass section-contact reveal reveal-delay-4"
          >
            <div className="section-grid contact-grid">
              <div>
                <p className="section-label">Contact</p>
                <h2 className="section-title">Let’s build something.</h2>
                <p className="section-copy">
                  If you’re looking for a developer who can contribute across
                  the stack, is comfortable with DevOps basics, and is hungry to
                  grow with real responsibility, I’d be glad to talk.
                </p>
                <div className="contact-highlight">
                  I’m open to internships, junior full‑stack roles, and
                  project‑based work.
                  <br />
                  I’m especially interested in teams where I can work on
                  shipping features, improving deployments, and learning from
                  more experienced engineers.
                  <div className="contact-cta-row">
                    <a
                      href="mailto:gurshanjawandha2004@gmail.com"
                      className="btn btn-primary"
                    >
                      Email Me
                    </a>
                    <a
                      href="https://www.linkedin.com/in/gurshan-jawandha-404053280/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-ghost"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-list">
                <div>
                  <div className="contact-item-label">Location</div>
                  <div>
                    Ropar, Punjab, India · Open to remote and relocation
                  </div>
                </div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <a
                    href="mailto:gurshanjawandha2004@gmail.com"
                    className="contact-link"
                  >
                    <span>gurshanjawandha2004@gmail.com</span>
                  </a>
                </div>
                <div>
                  <div className="contact-item-label">Phone</div>
                  <a href="tel:+917814332760" className="contact-link">
                    <span>+91 78143 32760</span>
                  </a>
                </div>
                <div>
                  <div className="contact-item-label">GitHub</div>
                  <a
                    href="https://github.com/Gurshan07"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <span>github.com/Gurshan07</span>
                  </a>
                </div>
                <div>
                  <div className="contact-item-label">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/gurshan-jawandha-404053280/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <span>linkedin.com/in/gurshan-jawandha-404053280</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <span>© {year} Gurshan Jawandha. All rights reserved.</span>
          <div className="footer-links">
            <span className="footer-pill">Full‑Stack</span>
            <span className="footer-pill">DevOps</span>
            <span className="footer-pill">Cloud‑Ready</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
