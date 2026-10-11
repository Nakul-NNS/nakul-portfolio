import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import Navbar from "./components/Navbar";
import "./App.css";

const skillGroups = [
  {
    number: "01",
    title: "Programming",
    description: "Writing logic, solving problems, and building applications.",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    number: "02",
    title: "AI & Machine Learning",
    description: "Learning the foundations of intelligent systems.",
    skills: ["Machine Learning", "NLP", "LLMs"],
  },
  {
    number: "03",
    title: "Web Development",
    description: "Building responsive interfaces and application experiences.",
    skills: ["HTML", "CSS", "React"],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description: "Developing a reliable engineering workflow.",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

const projects = [
  {
    number: "01",
    category: "AI / MACHINE LEARNING",
    title: "Intelligent Learning Assistant",
    description:
      "A planned learning assistant that helps students explore subject material and understand concepts through AI-powered explanations.",
    tags: ["Python", "NLP", "AI"],
    status: "PLANNED",
  },
  {
    number: "02",
    category: "PERSONAL SOFTWARE",
    title: "NEXUS Personal AI Assistant",
    description:
      "An ambitious personal assistant concept combining voice interaction, a local language model, and useful desktop tools.",
    tags: ["Python", "LLMs", "Automation"],
    status: "IN DEVELOPMENT",
  },
  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "Personal Portfolio",
    description:
      "This portfolio website, built to document my learning journey, showcase completed work, and connect with the tech community.",
    tags: ["React", "CSS", "Responsive UI"],
    status: "IN DEVELOPMENT",
  },
];

const journey = [
  {
    year: "2029",
    title: "Expected B.Tech graduation",
    description:
      "AI specialization, with a focus on developing strong engineering and machine learning skills.",
  },
  {
    year: "NOW",
    title: "Build. Learn. Improve.",
    description:
      "Strengthening programming fundamentals and building practical projects that demonstrate real skills.",
  },
];

function SectionHeading({ label, title, description }) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero container">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="availability">
          <span className="status-dot" />
          BUILDING MY FUTURE IN AI
        </div>

        <p className="hero-eyebrow">HELLO, I'M</p>

        <h1 className="hero-title">
          Nakul
          <br />
          <span className="accent">Solanki.</span>
        </h1>

        <h2 className="hero-role">
          Aspiring <span className="accent">AI/ML Engineer</span>
        </h2>

        <p className="hero-description">
          I explore the intersection of artificial intelligence and software
          engineering, turning ideas into practical, thoughtfully built
          projects.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            Explore projects
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>

          <a href="#contact" className="button button-secondary">
            Get in touch
          </a>
        </div>

        <div className="hero-socials" aria-label="Social profiles">
          <a
            href="https://github.com/Nakul-NNS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/nakul-solanki-730317443/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            LinkedIn ↗
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        aria-hidden="true"
      >
        <div className="visual-grid" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />

        <div className="visual-core">
          <span className="core-symbol">
            N<span>.</span>
          </span>
          <span className="core-caption">INTELLIGENCE IN MOTION</span>
        </div>

        <span className="tag-top">AI / ML</span>
        <span className="tag-bottom">BUILD · LEARN · REPEAT</span>
      </motion.div>

      <a className="scroll-cue" href="#about">
        <ArrowDown size={16} aria-hidden="true" />
        SCROLL TO EXPLORE
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section container">
      <motion.div
        className="about-layout"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <div className="about-intro">
          <SectionHeading
            label="01 / ABOUT ME"
            title={
              <>
                Curious mind. <span className="accent">Builder's mindset.</span>
              </>
            }
          />
        </div>

        <div className="about-content">
          <p className="about-lead">
            I'm an aspiring AI/ML engineer interested in building technology
            that solves meaningful problems.
          </p>

          <p className="section-description">
            I'm pursuing a B.Tech with an AI specialization and expect to
            graduate in 2029. My focus is on strengthening my programming
            fundamentals, understanding how intelligent systems work, and
            learning by building real applications.
          </p>

          <p className="section-description">
            I believe a good project should be more than an impressive
            interface. It should solve a problem, work reliably, and be
            documented well enough for someone else to understand it.
          </p>

          <div className="about-principles">
            <div className="principle">
              <span className="principle-number">01</span>
              <span>Learn the fundamentals</span>
            </div>
            <div className="principle">
              <span className="principle-number">02</span>
              <span>Build practical solutions</span>
            </div>
            <div className="principle">
              <span className="principle-number">03</span>
              <span>Improve through feedback</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHeading
        label="02 / TOOLKIT"
        title={
          <>
            Skills I'm <span className="accent">developing.</span>
          </>
        }
        description="A snapshot of the technologies I'm learning and using. My goal is to demonstrate these skills through working projects, not just list them on a page."
      />

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.number}
            className="skill-card surface"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
          >
            <span className="skill-number">{group.number}</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section container">
      <SectionHeading
        label="03 / SELECTED WORK"
        title={
          <>
            Ideas into <span className="accent">reality.</span>
          </>
        }
        description="A selection of projects I'm building or planning. Each project will earn its place here through implementation, testing, documentation, and a public repository where possible."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card surface"
            key={project.number}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="project-card-top">
              <span className="project-number">{project.number}</span>
              <span className="project-status">{project.status}</span>
            </div>

            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="skill-tags">
              {project.tags.map((tag) => (
                <span className="skill-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-bottom">
              <span>PROJECT PROFILE</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </div>
          </motion.article>
        ))}
      </div>

      <p className="projects-note">
        Project status is shown honestly. Planned ideas are not presented as
        completed work.
      </p>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="section container">
      <SectionHeading
        label="04 / THE JOURNEY"
        title={
          <>
            Building toward <span className="accent">2029.</span>
          </>
        }
        description="The goal is steady progress: stronger fundamentals, useful projects, and experience collaborating on real software."
      />

      <div className="journey-list">
        {journey.map((item) => (
          <article className="journey-item" key={item.year}>
            <div className="journey-marker">
              <span />
            </div>
            <span className="journey-year">{item.year}</span>
            <div className="journey-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section container">
      <div className="contact-panel surface">
        <p className="section-label">05 / CONTACT</p>
        <h2 className="section-title">
          Let's build something <span className="accent">meaningful.</span>
        </h2>
        <p className="section-description">
          I'm interested in learning from other developers, collaborating on
          useful projects, and exploring opportunities to grow in AI and
          software engineering.
        </p>

        <a
          className="button button-primary"
          href="mailto:nakulsolanki822@gmail.com"
        >
          Contact me
          <ArrowUpRight size={17} aria-hidden="true" />
        </a>

        <p className="contact-note">
          Open to connecting with developers, collaborators, and recruiters.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <span>
            NAKUL<span className="accent">.</span>
          </span>
          <span>Learning today. Building for tomorrow.</span>
          <span>© {new Date().getFullYear()} Nakul Solanki</span>
        </div>
      </footer>
    </>
  );
}
