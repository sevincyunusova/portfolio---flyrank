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
    number: "01",
  },
  {
    title: "CineVault",
    description:
      "A movie discovery application with search, genre filtering, favorites, and movie data powered by an external movie API.",
    tech: ["React", "JavaScript", "API", "CSS"],
    live: "https://cine-vault-jet.vercel.app/",
    github: "https://github.com/sevincyunusova/CineVault",
    number: "02",
  },
  {
    title: "SwiftMove",
    description:
      "A modern responsive frontend project focused on clean UI, responsive layouts, and interactive components.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    live: "https://swiftmove-site.vercel.app/",
    github: "https://github.com/sevincyunusova/swiftmove-site",
    number: "03",
  },
  {
    title: "Fruitables",
    description:
      "A responsive frontend e-commerce style website built with a focus on layout, reusable UI patterns, and responsive design.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    live: "https://fruitables-site-alpha.vercel.app/",
    github: "https://github.com/sevincyunusova/fruitables-site",
    number: "04",
  },
  {
    title: "Furni",
    description:
      "A modern furniture website concept with a responsive interface and clean product-focused layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://furni-site-roan.vercel.app/",
    github: "https://github.com/sevincyunusova/furni-site",
    number: "05",
  },
  {
    title: "RestOrder",
    description:
      "A restaurant ordering interface designed with a responsive frontend and user-friendly navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://sevincyunusova-restorder.vercel.app/",
    github: "https://github.com/sevincyunusova/restorder",
    number: "06",
  },
]

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  const dark = darkMode

  return (
    <main
      className={
        dark
          ? "min-h-screen bg-[#0b0920] text-white transition-colors duration-500"
          : "min-h-screen bg-[#fffaf3] text-[#211b35] transition-colors duration-500"
      }
    >
      {/* NAVBAR */}
      <nav
        className={
          dark
            ? "sticky top-0 z-50 border-b border-white/10 bg-[#0b0920]/85 backdrop-blur-xl"
            : "sticky top-0 z-50 border-b border-[#e8dfd3] bg-[#fffaf3]/85 backdrop-blur-xl"
        }
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="text-xl font-black tracking-tight transition hover:scale-105"
          >
            <span className={dark ? "text-white" : "text-[#211b35]"}>SY</span>
            <span className="text-[#8b5cf6]">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm md:flex">
            {["About", "Skills", "Projects", "Experience", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={
                    dark
                      ? "text-white/60 transition hover:text-[#c4b5fd]"
                      : "text-[#625a70] transition hover:text-[#7c3aed]"
                  }
                >
                  {item}
                </a>
              )
            )}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={
              dark
                ? "rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10"
                : "rounded-full border border-[#ded3c7] bg-white px-4 py-2 text-sm font-medium text-[#211b35] transition hover:border-[#8b5cf6] hover:bg-[#f3e8ff]"
            }
          >
            {dark ? "☀ Light" : "◐ Dark"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-6xl items-center overflow-hidden px-6 py-24"
      >
        <div
          className={
            dark
              ? "pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#7c3aed]/20 blur-3xl"
              : "pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#f0abfc]/30 blur-3xl"
          }
        />

        <div
          className={
            dark
              ? "pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-[#06b6d4]/10 blur-3xl"
              : "pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-[#c4b5fd]/30 blur-3xl"
          }
        />

        <div className="relative max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#a78bfa]" />
            <span
              className={
                dark
                  ? "text-sm text-[#c4b5fd]"
                  : "text-sm text-[#6d28d9]"
              }
            >
              Available for opportunities
            </span>
          </div>

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-[#8b5cf6]">
            Frontend Developer
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span
              className={
                dark
                  ? "bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#67e8f9] bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#0891b2] bg-clip-text text-transparent"
              }
            >
              Sevincxanim Yunusova.
            </span>
          </h1>

          <p
            className={
              dark
                ? "mt-8 max-w-2xl text-lg leading-8 text-white/55"
                : "mt-8 max-w-2xl text-lg leading-8 text-[#625a70]"
            }
          >
            I&apos;m a frontend developer and Information Technologies student
            focused on building modern, responsive web applications. I&apos;m
            also exploring frontend AI engineering and creating practical
            AI-powered experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30"
            >
              Explore My Work →
            </a>

            <a
              href="#contact"
              className={
                dark
                  ? "rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:border-[#a78bfa]/50 hover:bg-[#a78bfa]/10"
                  : "rounded-full border border-[#ded3c7] bg-white px-7 py-3.5 font-semibold text-[#211b35] transition hover:-translate-y-1 hover:border-[#a78bfa] hover:bg-[#f8f0ff]"
              }
            >
              Let&apos;s Connect
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <a
              href="https://www.linkedin.com/in/sevincxan%C4%B1m-yunusova-b21245397/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#a78bfa] transition hover:text-[#c4b5fd]"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/sevincyunusova"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#67e8f9] transition hover:text-[#a5f3fc]"
            >
              GitHub ↗
            </a>

            <a
              href="https://canva.link/19vm7ro7zqvgspn"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#f0abfc] transition hover:text-[#f5d0fe]"
            >
              View CV ↗
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8b5cf6]">
              About Me
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight">
              Frontend development meets AI.
            </h2>
          </div>

          <div
            className={
              dark
                ? "text-lg leading-8 text-white/55"
                : "text-lg leading-8 text-[#625a70]"
            }
          >
            <p>
              I&apos;m currently studying Information Technologies at
              Azerbaijan State Oil and Industry University (ADNSU). My main
              focus is frontend development and creating modern, responsive
              user interfaces.
            </p>

            <p className="mt-6">
              I&apos;m currently gaining professional experience through
              internships at FlyRank and CodeAlpha, working in frontend
              development and frontend AI engineering.
            </p>

            <p className="mt-6">
              I enjoy turning ideas into functional web experiences and
              continuously improving my skills through real projects,
              internships, and hands-on development.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className={
          dark
            ? "border-y border-white/10 bg-[#120f2b]"
            : "border-y border-[#e8dfd3] bg-[#f8f1ff]"
        }
      >
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8b5cf6]">
            Skills
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-4xl font-black">
              Tools I use to build.
            </h2>

            <p
              className={
                dark
                  ? "max-w-md text-sm leading-6 text-white/40"
                  : "max-w-md text-sm leading-6 text-[#766d80]"
              }
            >
              A growing toolkit focused on modern frontend development,
              responsive interfaces, and AI-powered web experiences.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={
                  dark
                    ? "group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10"
                    : "group rounded-2xl border border-[#e5d8ee] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#a855f7]/50 hover:bg-[#faf5ff]"
                }
              >
                <span
                  className={
                    dark
                      ? "text-xs text-white/30"
                      : "text-xs text-[#9a8da3]"
                  }
                >
                  0{index + 1}
                </span>

                <p
                  className={
                    dark
                      ? "mt-3 font-semibold text-white/80 transition group-hover:text-[#c4b5fd]"
                      : "mt-3 font-semibold text-[#332b40] transition group-hover:text-[#7c3aed]"
                  }
                >
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8b5cf6]">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Things I&apos;ve built.
            </h2>
          </div>

          <p
            className={
              dark
                ? "max-w-md text-sm leading-6 text-white/40"
                : "max-w-md text-sm leading-6 text-[#766d80]"
            }
          >
            A collection of frontend projects built while learning,
            experimenting, and working with modern web technologies.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={
                dark
                  ? "group relative flex min-h-[390px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#8b5cf6]/50 hover:shadow-2xl hover:shadow-purple-950/40"
                  : "group relative flex min-h-[390px] flex-col overflow-hidden rounded-[28px] border border-[#e6ddd3] bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#a855f7]/40 hover:shadow-xl hover:shadow-purple-200/30"
              }
            >
              <div
                className={
                  index % 2 === 0
                    ? "absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#8b5cf6]/10 blur-2xl transition duration-500 group-hover:bg-[#8b5cf6]/20"
                    : "absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#06b6d4]/10 blur-2xl transition duration-500 group-hover:bg-[#06b6d4]/20"
                }
              />

              <div className="relative flex items-center justify-between">
                <span
                  className={
                    dark
                      ? "text-sm font-bold text-white/20"
                      : "text-sm font-bold text-[#c7bcc9]"
                  }
                >
                  {project.number}
                </span>

                <span
                  className={
                    dark
                      ? "rounded-full border border-white/10 px-3 py-1 text-xs text-white/40"
                      : "rounded-full border border-[#e5dce2] px-3 py-1 text-xs text-[#8b7f8c]"
                  }
                >
                  Project
                </span>
              </div>

              <div className="relative mt-12 flex-1">
                <h3 className="text-2xl font-black transition group-hover:text-[#a78bfa]">
                  {project.title}
                </h3>

                <p
                  className={
                    dark
                      ? "mt-4 text-sm leading-7 text-white/45"
                      : "mt-4 text-sm leading-7 text-[#6d6572]"
                  }
                >
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className={
                        dark
                          ? "rounded-full bg-[#8b5cf6]/10 px-3 py-1.5 text-xs font-medium text-[#c4b5fd]"
                          : "rounded-full bg-[#f3e8ff] px-3 py-1.5 text-xs font-medium text-[#7c3aed]"
                      }
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative mt-8 flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#8b5cf6] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#7c3aed]"
                >
                  Live Demo ↗
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    dark
                      ? "rounded-full border border-white/10 px-4 py-2.5 text-xs font-bold text-white/60 transition hover:border-white/25 hover:text-white"
                      : "rounded-full border border-[#ded5dc] px-4 py-2.5 text-xs font-bold text-[#5d5361] transition hover:border-[#a855f7] hover:text-[#7c3aed]"
                  }
                >
                  GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className={
          dark
            ? "border-y border-white/10 bg-[#120f2b]"
            : "border-y border-[#e8dfd3] bg-[#f8f1ff]"
        }
      >
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8b5cf6]">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-black">
            My current journey.
          </h2>

          <div className="mt-12 space-y-5">
            <div
              className={
                dark
                  ? "group rounded-[24px] border border-white/10 bg-white/[0.03] p-7 transition hover:border-[#8b5cf6]/40"
                  : "group rounded-[24px] border border-[#e5dce2] bg-white p-7 transition hover:border-[#a855f7]/40"
              }
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="text-2xl font-black">FlyRank</h3>
                  <p className="mt-2 font-medium text-[#a855f7]">
                    Frontend AI Engineering Intern
                  </p>
                </div>

                <span
                  className={
                    dark
                      ? "text-sm text-white/30"
                      : "text-sm text-[#91858f]"
                  }
                >
                  Internship
                </span>
              </div>

              <p
                className={
                  dark
                    ? "mt-5 max-w-3xl leading-7 text-white/45"
                    : "mt-5 max-w-3xl leading-7 text-[#6d6572]"
                }
              >
                Working on frontend development, AI-powered features, modern
                web technologies, and practical AI engineering tasks.
              </p>
            </div>

            <div
              className={
                dark
                  ? "group rounded-[24px] border border-white/10 bg-white/[0.03] p-7 transition hover:border-[#06b6d4]/40"
                  : "group rounded-[24px] border border-[#e5dce2] bg-white p-7 transition hover:border-[#06b6d4]/40"
              }
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="text-2xl font-black">CodeAlpha</h3>
                  <p className="mt-2 font-medium text-[#0891b2]">
                    Frontend Development Intern
                  </p>
                </div>

                <span
                  className={
                    dark
                      ? "text-sm text-white/30"
                      : "text-sm text-[#91858f]"
                  }
                >
                  Internship
                </span>
              </div>

              <p
                className={
                  dark
                    ? "mt-5 max-w-3xl leading-7 text-white/45"
                    : "mt-5 max-w-3xl leading-7 text-[#6d6572]"
                }
              >
                Developing frontend projects and strengthening practical
                skills in modern web development.
              </p>
            </div>

            <div
              className={
                dark
                  ? "group rounded-[24px] border border-white/10 bg-white/[0.03] p-7 transition hover:border-[#f0abfc]/40"
                  : "group rounded-[24px] border border-[#e5dce2] bg-white p-7 transition hover:border-[#f0abfc]/60"
              }
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="text-2xl font-black">
                    Azerbaijan State Oil and Industry University
                  </h3>
                  <p className="mt-2 font-medium text-[#c026d3]">
                    Information Technologies
                  </p>
                </div>

                <span
                  className={
                    dark
                      ? "text-sm text-white/30"
                      : "text-sm text-[#91858f]"
                  }
                >
                  Bachelor&apos;s
                </span>
              </div>

              <p
                className={
                  dark
                    ? "mt-5 max-w-3xl leading-7 text-white/45"
                    : "mt-5 max-w-3xl leading-7 text-[#6d6572]"
                }
              >
                Studying Information Technologies and building a strong
                foundation in software and web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
        <div
          className={
            dark
              ? "relative overflow-hidden rounded-[32px] border border-[#8b5cf6]/30 bg-gradient-to-br from-[#21154a] via-[#17122f] to-[#0d1728] p-8 sm:p-12"
              : "relative overflow-hidden rounded-[32px] border border-[#ddd0e8] bg-gradient-to-br from-[#f5eaff] via-[#fff7fc] to-[#e6faff] p-8 sm:p-12"
          }
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#8b5cf6]/20 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a78bfa]">
              Get In Touch
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Let&apos;s build something.
            </h2>

            <p
              className={
                dark
                  ? "mt-5 max-w-2xl leading-7 text-white/50"
                  : "mt-5 max-w-2xl leading-7 text-[#665b6f]"
              }
            >
              I&apos;m open to connecting with developers, teams, and people
              interested in frontend development and AI-powered web
              experiences.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:yunusovasevinc08@gmail.com"
                className={
                  dark
                    ? "rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-[#a78bfa]/50 hover:bg-white/10"
                    : "rounded-2xl border border-[#ddd3e3] bg-white/70 p-5 transition hover:-translate-y-1 hover:border-[#a855f7]/50"
                }
              >
                <p className="text-xs font-bold uppercase tracking-wider text-[#a78bfa]">
                  Email
                </p>

                <p
                  className={
                    dark
                      ? "mt-2 text-sm font-medium text-white/80"
                      : "mt-2 text-sm font-medium text-[#332b40]"
                  }
                >
                  yunusovasevinc08@gmail.com
                </p>
              </a>

              <a
                href="tel:+994516411470"
                className={
                  dark
                    ? "rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-[#67e8f9]/50 hover:bg-white/10"
                    : "rounded-2xl border border-[#ddd3e3] bg-white/70 p-5 transition hover:-translate-y-1 hover:border-[#06b6d4]/50"
                }
              >
                <p className="text-xs font-bold uppercase tracking-wider text-[#67e8f9]">
                  Phone
                </p>

                <p
                  className={
                    dark
                      ? "mt-2 text-sm font-medium text-white/80"
                      : "mt-2 text-sm font-medium text-[#332b40]"
                  }
                >
                  +994 51 641 14 70
                </p>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/sevincxan%C4%B1m-yunusova-b21245397/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#7c3aed] px-6 py-3 font-semibold text-white transition hover:bg-[#6d28d9]"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/sevincyunusova"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  dark
                    ? "rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                    : "rounded-full border border-[#d9cddf] px-6 py-3 font-semibold text-[#332b40] transition hover:bg-white"
                }
              >
                GitHub ↗
              </a>

              <a
                href="https://canva.link/19vm7ro7zqvgspn"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  dark
                    ? "rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                    : "rounded-full border border-[#d9cddf] px-6 py-3 font-semibold text-[#332b40] transition hover:bg-white"
                }
              >
                View CV ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={
          dark
            ? "border-t border-white/10"
            : "border-t border-[#e8dfd3]"
        }
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className={dark ? "text-white/30" : "text-[#8b7f8c]"}>
            © 2026 Sevincxanim Yunusova. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="https://github.com/sevincyunusova"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b5cf6] transition hover:text-[#a855f7]"
            >
              GitHub
            </a>

            <a
              href="mailto:yunusovasevinc08@gmail.com"
              className="text-[#8b5cf6] transition hover:text-[#a855f7]"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}