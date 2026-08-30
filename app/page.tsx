"use client"

import { useState } from "react"

const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Git",
  "GitHub",
  "AI Integration",
]

const projects = [
  {
    title: "StudyPilot",
    description:
      "An AI-powered study planner that helps students organize tasks, generate personalized study plans, and stay on track with their goals.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    live: "https://studypilot-coral.vercel.app/",
    github: "https://github.com/sevincyunusova/studypilot",
  },
  {
    title: "CineVault",
    description:
      "A movie discovery application with search, genre filtering, favorites, and movie data powered by an external movie API.",
    tech: ["React", "JavaScript", "API", "CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "SwiftMove",
    description:
      "A modern responsive frontend project focused on clean UI, responsive layouts, and interactive components.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    live: "#",
    github: "#",
  },
  {
    title: "Fruitables",
    description:
      "A responsive frontend e-commerce style website built with a focus on layout, reusable UI patterns, and responsive design.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    live: "#",
    github: "#",
  },
  {
    title: "Furni",
    description:
      "A modern furniture website concept with a responsive interface and clean product-focused layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
    github: "#",
  },
  {
    title: "RestOrder",
    description:
      "A restaurant ordering interface designed with a responsive frontend and user-friendly navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
    github: "#",
  },
]

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <main
      className={
        darkMode
          ? "min-h-screen bg-slate-950 text-white"
          : "min-h-screen bg-slate-50 text-slate-900"
      }
    >
      <nav
        className={
          darkMode
            ? "sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur"
            : "sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur"
        }
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-bold">
            SY.
          </a>

          <div className="hidden items-center gap-7 text-sm md:flex">
            <a
              href="#about"
              className={
                darkMode
                  ? "text-slate-300 transition hover:text-white"
                  : "text-slate-600 transition hover:text-slate-950"
              }
            >
              About
            </a>

            <a
              href="#skills"
              className={
                darkMode
                  ? "text-slate-300 transition hover:text-white"
                  : "text-slate-600 transition hover:text-slate-950"
              }
            >
              Skills
            </a>

            <a
              href="#projects"
              className={
                darkMode
                  ? "text-slate-300 transition hover:text-white"
                  : "text-slate-600 transition hover:text-slate-950"
              }
            >
              Projects
            </a>

            <a
              href="#experience"
              className={
                darkMode
                  ? "text-slate-300 transition hover:text-white"
                  : "text-slate-600 transition hover:text-slate-950"
              }
            >
              Experience
            </a>

            <a
              href="#contact"
              className={
                darkMode
                  ? "text-slate-300 transition hover:text-white"
                  : "text-slate-600 transition hover:text-slate-950"
              }
            >
              Contact
            </a>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={
              darkMode
                ? "rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm transition hover:bg-slate-800"
                : "rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm transition hover:bg-slate-100"
            }
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      <section
        id="home"
        className="mx-auto flex min-h-[calc(100vh-76px)] max-w-6xl items-center px-6 py-20"
      >
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            <p className="text-sm font-medium text-slate-400">
              Available for opportunities
            </p>
          </div>

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Frontend Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-blue-500">
              Sevincxanim Yunusova.
            </span>
          </h1>

          <p
            className={
              darkMode
                ? "mt-7 max-w-2xl text-lg leading-8 text-slate-400"
                : "mt-7 max-w-2xl text-lg leading-8 text-slate-600"
            }
          >
            I&apos;m a frontend developer and Information Technologies
            student focused on building modern, responsive web applications.
            I&apos;m also exploring frontend AI engineering and building
            practical AI-powered experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className={
                darkMode
                  ? "rounded-lg border border-slate-700 px-6 py-3 font-medium transition hover:bg-slate-900"
                  : "rounded-lg border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100"
              }
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <a
              href="https://www.linkedin.com/in/sevincxan%C4%B1m-yunusova-b21245397/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn →
            </a>

            <a
              href="https://github.com/sevincyunusova"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub →
            </a>

            <a
              href="https://canva.link/19vm7ro7zqvgspn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View CV →
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
              About Me
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Frontend development meets AI.
            </h2>
          </div>

          <div
            className={
              darkMode
                ? "text-lg leading-8 text-slate-400"
                : "text-lg leading-8 text-slate-600"
            }
          >
            <p>
              I&apos;m currently studying Information Technologies at
              Azerbaijan State Oil and Industry University (ADNSU).
              My main focus is frontend development and creating modern,
              responsive user interfaces.
            </p>

            <p className="mt-5">
              I&apos;m currently gaining professional experience through
              internships at FlyRank and CodeAlpha, working in frontend
              development and frontend AI engineering.
            </p>

            <p className="mt-5">
              I enjoy turning ideas into functional web experiences and
              continuously improving my skills through real projects,
              internships, and hands-on development.
            </p>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className={
          darkMode
            ? "border-y border-slate-800 bg-slate-900/40"
            : "border-y border-slate-200 bg-white"
        }
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Technologies I work with
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className={
                  darkMode
                    ? "rounded-lg border border-slate-700 bg-slate-950 px-5 py-3 text-sm text-slate-300"
                    : "rounded-lg border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-700"
                }
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
          Selected Work
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          Projects
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={
                darkMode
                  ? "flex flex-col rounded-xl border border-slate-800 bg-slate-900 p-6"
                  : "flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              }
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p
                  className={
                    darkMode
                      ? "mt-4 text-sm leading-7 text-slate-400"
                      : "mt-4 text-sm leading-7 text-slate-600"
                  }
                >
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex gap-4 text-sm">
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-500 hover:underline"
                  >
                    Live Demo →
                  </a>
                )}

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      darkMode
                        ? "text-slate-400 hover:text-white"
                        : "text-slate-600 hover:text-slate-950"
                    }
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className={
          darkMode
            ? "border-y border-slate-800 bg-slate-900/40"
            : "border-y border-slate-200 bg-white"
        }
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Where I&apos;m gaining experience
          </h2>

          <div className="mt-10 space-y-5">
            <div
              className={
                darkMode
                  ? "rounded-xl border border-slate-800 bg-slate-950 p-6"
                  : "rounded-xl border border-slate-200 bg-slate-50 p-6"
              }
            >
              <h3 className="text-xl font-semibold">
                FlyRank
              </h3>

              <p className="mt-1 text-blue-500">
                Frontend AI Engineering Intern
              </p>

              <p
                className={
                  darkMode
                    ? "mt-3 leading-7 text-slate-400"
                    : "mt-3 leading-7 text-slate-600"
                }
              >
                Working on frontend development, AI-powered features,
                modern web technologies, and practical AI engineering tasks.
              </p>
            </div>

            <div
              className={
                darkMode
                  ? "rounded-xl border border-slate-800 bg-slate-950 p-6"
                  : "rounded-xl border border-slate-200 bg-slate-50 p-6"
              }
            >
              <h3 className="text-xl font-semibold">
                CodeAlpha
              </h3>

              <p className="mt-1 text-blue-500">
                Frontend Development Intern
              </p>

              <p
                className={
                  darkMode
                    ? "mt-3 leading-7 text-slate-400"
                    : "mt-3 leading-7 text-slate-600"
                }
              >
                Developing frontend projects and strengthening practical
                skills in modern web development.
              </p>
            </div>

            <div
              className={
                darkMode
                  ? "rounded-xl border border-slate-800 bg-slate-950 p-6"
                  : "rounded-xl border border-slate-200 bg-slate-50 p-6"
              }
            >
              <h3 className="text-xl font-semibold">
                Azerbaijan State Oil and Industry University
              </h3>

              <p className="mt-1 text-blue-500">
                Information Technologies
              </p>

              <p
                className={
                  darkMode
                    ? "mt-3 leading-7 text-slate-400"
                    : "mt-3 leading-7 text-slate-600"
                }
              >
                Bachelor&apos;s degree in Information Technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div
          className={
            darkMode
              ? "rounded-2xl border border-blue-900 bg-blue-950/30 p-8 sm:p-12"
              : "rounded-2xl border border-blue-200 bg-blue-50 p-8 sm:p-12"
          }
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
            Get In Touch
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Let&apos;s connect.
          </h2>

          <p
            className={
              darkMode
                ? "mt-4 max-w-2xl leading-7 text-slate-400"
                : "mt-4 max-w-2xl leading-7 text-slate-600"
            }
          >
            I&apos;m open to connecting with developers, teams, and people
            interested in frontend development and AI-powered web experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/sevincxan%C4%B1m-yunusova-b21245397/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/sevincyunusova"
              target="_blank"
              rel="noopener noreferrer"
              className={
                darkMode
                  ? "rounded-lg border border-slate-700 px-5 py-3 font-medium transition hover:bg-slate-900"
                  : "rounded-lg border border-slate-300 px-5 py-3 font-medium transition hover:bg-white"
              }
            >
              GitHub
            </a>

            <a
              href="https://canva.link/19vm7ro7zqvgspn"
              target="_blank"
              rel="noopener noreferrer"
              className={
                darkMode
                  ? "rounded-lg border border-slate-700 px-5 py-3 font-medium transition hover:bg-slate-900"
                  : "rounded-lg border border-slate-300 px-5 py-3 font-medium transition hover:bg-slate-100"
              }
            >
              View CV
            </a>
          </div>
        </div>
      </section>

      <footer
        className={
          darkMode
            ? "border-t border-slate-800"
            : "border-t border-slate-200"
        }
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-500">
            © 2026 Sevincxanim Yunusova. All rights reserved.
          </p>

          <a
            href="https://github.com/sevincyunusova"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
        </div>
      </footer>
    </main>
  )
}