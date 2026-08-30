"use client"

import { useEffect, useState } from "react"

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

const navItems = ["About", "Skills", "Projects", "Experience", "Contact"]

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const dark = darkMode

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const sections = ["home", ...navItems.map((item) => item.toLowerCase())]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180
      let currentSection = "home"

      for (const section of sections) {
        const element = document.getElementById(section)

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <main
      className={`min-h-screen overflow-x-hidden transition-colors duration-700 ease-in-out ${dark
          ? "bg-[#090718] text-white"
          : "bg-[#fffaf5] text-[#211b35]"
        }`}
    >
      {/* NAVBAR */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-500 ${dark
            ? "border-white/10 bg-[#090718]/80"
            : "border-[#e8ddd2] bg-[#fffaf5]/85"
          }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            onClick={closeMenu}
            className="group text-xl font-black tracking-tight"
          >
            <span className={dark ? "text-white" : "text-[#211b35]"}>
              SY
            </span>

            <span className="text-[#a855f7] transition-colors duration-300 group-hover:text-[#06b6d4]">
              .
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 text-sm md:flex">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase()
              const isActive = activeSection === sectionId

              return (
                <a
                  key={item}
                  href={`#${sectionId}`}
                  className={`group relative py-2 transition-all duration-300 ${isActive
                      ? dark
                        ? "text-white"
                        : "text-[#7c3aed]"
                      : dark
                        ? "text-white/60 hover:text-white"
                        : "text-[#625a70] hover:text-[#7c3aed]"
                    }`}
                >
                  {item}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            {/* THEME BUTTON */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-500 hover:-translate-y-0.5 ${dark
                  ? "border-white/15 bg-white/5 text-white hover:border-[#a78bfa]/60 hover:bg-[#8b5cf6]/10"
                  : "border-[#ded3c7] bg-white text-[#211b35] hover:border-[#8b5cf6] hover:bg-[#f3e8ff]"
                }`}
            >
              <span className="hidden sm:inline">
                {dark ? "☀ Light" : "◐ Dark"}
              </span>

              <span className="sm:hidden">
                {dark ? "☀" : "◐"}
              </span>
            </button>

            {/* HAMBURGER */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border transition-all duration-300 md:hidden ${dark
                  ? "border-white/10 bg-white/5"
                  : "border-[#ded3c7] bg-white"
                }`}
            >
              <span
                className={`h-0.5 w-5 rounded-full transition-all duration-300 ${dark ? "bg-white" : "bg-[#211b35]"
                  } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />

              <span
                className={`h-0.5 w-5 rounded-full transition-all duration-300 ${dark ? "bg-white" : "bg-[#211b35]"
                  } ${menuOpen ? "opacity-0" : ""}`}
              />

              <span
                className={`h-0.5 w-5 rounded-full transition-all duration-300 ${dark ? "bg-white" : "bg-[#211b35]"
                  } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`overflow-hidden border-t transition-all duration-500 ease-in-out md:hidden ${menuOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 border-transparent opacity-0"
            } ${dark
              ? "border-white/10 bg-[#090718]"
              : "border-[#e8ddd2] bg-[#fffaf5]"
            }`}
        >
          <div className="mx-auto max-w-6xl px-6 py-5">
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => {
                const sectionId = item.toLowerCase()
                const isActive = activeSection === sectionId

                return (
                  <a
                    key={item}
                    href={`#${sectionId}`}
                    onClick={closeMenu}
                    className={`rounded-xl px-4 py-3 transition-all duration-300 ${isActive
                        ? dark
                          ? "bg-white/5 pl-6 text-[#c4b5fd]"
                          : "bg-[#f3e8ff] pl-6 text-[#7c3aed]"
                        : dark
                          ? "text-white/65 hover:bg-white/5 hover:pl-6 hover:text-[#c4b5fd]"
                          : "text-[#625a70] hover:bg-[#f3e8ff] hover:pl-6 hover:text-[#7c3aed]"
                      }`}
                    style={{
                      transitionDelay: menuOpen
                        ? `${index * 40}ms`
                        : "0ms",
                    }}
                  >
                    {item}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* NAVBAR OFFSET */}
      <div className="h-[73px]" />

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center overflow-hidden px-6 py-24"
      >
        {/* GRID */}
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${dark ? "opacity-30" : "opacity-50"
            }`}
          style={{
            backgroundImage: dark
              ? "linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)"
              : "linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 75%)",
          }}
        />

        {/* GLOW 1 */}
        <div
          className={`pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full blur-3xl transition-all duration-1000 ${dark ? "bg-[#7c3aed]/20" : "bg-[#c084fc]/25"
            }`}
        />

        {/* GLOW 2 */}
        <div
          className={`pointer-events-none absolute right-[-120px] top-1/4 h-[400px] w-[400px] rounded-full blur-3xl transition-all duration-1000 ${dark ? "bg-[#06b6d4]/10" : "bg-[#67e8f9]/20"
            }`}
        />

        {/* HERO ORBIT */}
        <div className="pointer-events-none absolute right-[8%] top-[20%] hidden h-72 w-72 rounded-full border border-[#8b5cf6]/10 md:block">
          <div className="absolute inset-5 rounded-full border border-[#06b6d4]/10" />
          <div className="absolute inset-12 rounded-full border border-[#a855f7]/10" />

          <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#a78bfa] shadow-lg shadow-purple-500/50" />

          <div className="absolute bottom-10 right-5 h-2 w-2 rounded-full bg-[#67e8f9] shadow-lg shadow-cyan-500/50" />
        </div>

        {/* FLOATING DOT */}
        <div
          className={`pointer-events-none absolute right-[15%] top-[18%] hidden h-3 w-3 animate-pulse rounded-full md:block ${dark ? "bg-[#67e8f9]" : "bg-[#0891b2]"
            }`}
        />

        <div className="relative z-10 max-w-4xl">
          {/* AVAILABILITY */}
          <div
            className={`mb-7 inline-flex items-center gap-3 rounded-full border px-4 py-2 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${dark
                ? "border-[#8b5cf6]/30 bg-[#8b5cf6]/10"
                : "border-[#a855f7]/25 bg-[#f3e8ff]"
              }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a78bfa] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#8b5cf6]" />
            </span>

            <span
              className={`text-sm ${dark ? "text-[#c4b5fd]" : "text-[#6d28d9]"
                }`}
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
              className={`bg-clip-text text-transparent transition-all duration-700 ${dark
                  ? "bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#67e8f9]"
                  : "bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#0891b2]"
                }`}
            >
              Sevincxanim Yunusova.
            </span>
          </h1>

          <p
            className={`mt-8 max-w-2xl text-lg leading-8 transition-colors duration-700 ${dark ? "text-white/55" : "text-[#625a70]"
              }`}
          >
            I&apos;m a frontend developer and Information Technologies
            student focused on building modern, responsive web
            applications. I&apos;m also exploring frontend AI engineering
            and creating practical AI-powered experiences.
          </p>

          {/* BUTTONS */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#06b6d4] px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30"
            >
              <span className="relative z-10">
                Explore My Work →
              </span>

              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
            </a>

            <a
              href="#contact"
              className={`rounded-full border px-7 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 ${dark
                  ? "border-white/15 bg-white/5 text-white hover:border-[#a78bfa]/50 hover:bg-[#a78bfa]/10"
                  : "border-[#ded3c7] bg-white text-[#211b35] hover:border-[#a855f7] hover:bg-[#f8f0ff]"
                }`}
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* SOCIALS */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <a
              href="https://www.linkedin.com/in/sevincxan%C4%B1m-yunusova-b21245397/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#a78bfa] transition-all duration-300 hover:-translate-y-1 hover:text-[#c4b5fd]"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/sevincyunusova"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#67e8f9] transition-all duration-300 hover:-translate-y-1 hover:text-[#a5f3fc]"
            >
              GitHub ↗
            </a>

            <a
              href="https://canva.link/19vm7ro7zqvgspn"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#f0abfc] transition-all duration-300 hover:-translate-y-1 hover:text-[#f5d0fe]"
            >
              View CV ↗
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-28"
      >
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8b5cf6]">
              About Me
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Frontend development meets AI.
            </h2>
          </div>

          <div
            className={`text-lg leading-8 transition-colors duration-700 ${dark ? "text-white/55" : "text-[#625a70]"
              }`}
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
        className={`border-y transition-colors duration-700 ${dark
            ? "border-white/10 bg-[#100d25]"
            : "border-[#e8ddd2] bg-[#f8f1ff]"
          }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8b5cf6]">
            Skills
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-4xl font-black sm:text-5xl">
              Tools I use to build.
            </h2>

            <p
              className={`max-w-md text-sm leading-6 transition-colors duration-700 ${dark ? "text-white/40" : "text-[#766d80]"
                }`}
            >
              A growing toolkit focused on modern frontend development,
              responsive interfaces, and AI-powered web experiences.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-500 hover:-translate-y-2 ${dark
                    ? "border-white/10 bg-white/[0.03] hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/10 hover:shadow-lg hover:shadow-purple-950/30"
                    : "border-[#e5d8ee] bg-white hover:border-[#a855f7]/50 hover:bg-[#faf5ff] hover:shadow-lg hover:shadow-purple-200/40"
                  }`}
              >
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-gradient-to-br from-[#8b5cf6]/20 to-[#06b6d4]/10 blur-2xl transition-all duration-500 group-hover:scale-150" />

                <span
                  className={`relative text-xs ${dark ? "text-white/30" : "text-[#9a8da3]"
                    }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p
                  className={`relative mt-3 font-semibold transition-all duration-300 ${dark
                      ? "text-white/80 group-hover:text-[#c4b5fd]"
                      : "text-[#332b40] group-hover:text-[#7c3aed]"
                    }`}
                >
                  {skill}
                </p>

                <div className="mt-4 h-1 w-0 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-28"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8b5cf6]">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Things I&apos;ve built.
            </h2>
          </div>

          <p
            className={`max-w-md text-sm leading-6 transition-colors duration-700 ${dark ? "text-white/40" : "text-[#766d80]"
              }`}
          >
            A collection of frontend projects built while learning,
            experimenting, and working with modern web technologies.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative flex min-h-[390px] flex-col overflow-hidden rounded-[28px] border p-7 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.015] ${dark
                  ? "border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] hover:border-[#8b5cf6]/50 hover:shadow-2xl hover:shadow-purple-950/50"
                  : "border-[#e6ddd3] bg-white shadow-sm hover:border-[#a855f7]/50 hover:shadow-2xl hover:shadow-purple-200/40"
                }`}
            >
              <div
                className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150 ${index % 2 === 0
                    ? "bg-[#8b5cf6]/10 group-hover:bg-[#8b5cf6]/20"
                    : "bg-[#06b6d4]/10 group-hover:bg-[#06b6d4]/20"
                  }`}
              />

              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              <div className="relative flex items-center justify-between">
                <span
                  className={`text-sm font-bold ${dark ? "text-white/20" : "text-[#c7bcc9]"
                    }`}
                >
                  {project.number}
                </span>

                <span
                  className={`rounded-full border px-3 py-1 text-xs ${dark
                      ? "border-white/10 text-white/40"
                      : "border-[#e5dce2] text-[#8b7f8c]"
                    }`}
                >
                  Project
                </span>
              </div>

              <div className="relative mt-12 flex-1">
                <h3
                  className={`text-2xl font-black transition-all duration-300 ${dark
                      ? "text-white group-hover:text-[#c4b5fd]"
                      : "text-[#211b35] group-hover:text-[#7c3aed]"
                    }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mt-4 text-sm leading-7 ${dark ? "text-white/45" : "text-[#6d6572]"
                    }`}
                >
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 group-hover:-translate-y-0.5 ${dark
                          ? "bg-[#8b5cf6]/10 text-[#c4b5fd]"
                          : "bg-[#f3e8ff] text-[#7c3aed]"
                        }`}
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
                  className="rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  Live Demo ↗
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full border px-4 py-2.5 text-xs font-bold transition-all duration-300 hover:-translate-y-1 ${dark
                      ? "border-white/10 text-white/60 hover:border-[#67e8f9]/40 hover:text-[#67e8f9]"
                      : "border-[#ded5dc] text-[#5d5361] hover:border-[#a855f7] hover:text-[#7c3aed]"
                    }`}
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
        className={`border-y transition-colors duration-700 ${dark
            ? "border-white/10 bg-[#100d25]"
            : "border-[#e8ddd2] bg-[#f8f1ff]"
          }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8b5cf6]">
              Experience
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              My current journey.
            </h2>

            <p
              className={`mt-5 max-w-2xl leading-7 ${dark ? "text-white/45" : "text-[#6d6572]"
                }`}
            >
              A timeline of the experiences and education shaping my path
              as a frontend developer.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative mt-16">
            {/* VERTICAL LINE */}
            <div
              className={`absolute left-[11px] top-2 bottom-2 w-px ${dark
                  ? "bg-gradient-to-b from-[#8b5cf6]/80 via-[#a855f7]/40 to-[#06b6d4]/20"
                  : "bg-gradient-to-b from-[#8b5cf6]/70 via-[#a855f7]/40 to-[#06b6d4]/20"
                }`}
            />

            <div className="space-y-12">
              {/* FLYRANK */}
              <div className="relative pl-12 md:pl-16">
                {/* DOT */}
                <div
                  className={`absolute left-0 top-8 flex h-6 w-6 items-center justify-center rounded-full border-4 ${dark
                      ? "border-[#100d25] bg-[#8b5cf6] shadow-lg shadow-purple-500/40"
                      : "border-[#f8f1ff] bg-[#8b5cf6] shadow-lg shadow-purple-300/50"
                    }`}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>

                {/* CONNECTING LINE */}
                <div className="absolute left-6 top-[41px] hidden h-px w-10 bg-gradient-to-r from-[#8b5cf6]/60 to-transparent md:block" />

                <div
                  className={`group relative overflow-hidden rounded-[28px] border p-7 transition-all duration-500 hover:-translate-y-2 ${dark
                      ? "border-white/10 bg-white/[0.035] hover:border-[#8b5cf6]/50 hover:bg-white/[0.055] hover:shadow-2xl hover:shadow-purple-950/40"
                      : "border-[#e5dce2] bg-white hover:border-[#a855f7]/50 hover:shadow-2xl hover:shadow-purple-200/40"
                    }`}
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#8b5cf6]/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

                  <div className="relative flex flex-col justify-between gap-5 md:flex-row md:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-black">
                          FlyRank
                        </h3>

                        <span
                          className={`rounded-full border px-3 py-1 text-xs ${dark
                              ? "border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[#c4b5fd]"
                              : "border-[#a855f7]/30 bg-[#f3e8ff] text-[#7c3aed]"
                            }`}
                        >
                          Internship
                        </span>
                      </div>

                      <p className="mt-2 font-medium text-[#a855f7]">
                        Frontend AI Engineering Intern
                      </p>
                    </div>

                    <span
                      className={`text-sm ${dark ? "text-white/30" : "text-[#91858f]"
                        }`}
                    >
                      2026 — Present
                    </span>
                  </div>

                  <p
                    className={`relative mt-6 max-w-3xl leading-7 ${dark ? "text-white/45" : "text-[#6d6572]"
                      }`}
                  >
                    Working on frontend development, AI-powered features,
                    modern web technologies, and practical AI engineering
                    tasks.
                  </p>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {[
                      "Frontend",
                      "AI Engineering",
                      "React",
                      "Next.js",
                    ].map((item) => (
                      <span
                        key={item}
                        className={`rounded-full px-3 py-1.5 text-xs font-medium ${dark
                            ? "bg-white/5 text-white/50"
                            : "bg-[#f5eff9] text-[#756b7d]"
                          }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CODEALPHA */}
              <div className="relative pl-12 md:pl-16">
                {/* DOT */}
                <div
                  className={`absolute left-0 top-8 flex h-6 w-6 items-center justify-center rounded-full border-4 ${dark
                      ? "border-[#100d25] bg-[#06b6d4] shadow-lg shadow-cyan-500/40"
                      : "border-[#f8f1ff] bg-[#06b6d4] shadow-lg shadow-cyan-300/50"
                    }`}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>

                {/* CONNECTING LINE */}
                <div className="absolute left-6 top-[41px] hidden h-px w-10 bg-gradient-to-r from-[#06b6d4]/60 to-transparent md:block" />

                <div
                  className={`group relative overflow-hidden rounded-[28px] border p-7 transition-all duration-500 hover:-translate-y-2 ${dark
                      ? "border-white/10 bg-white/[0.035] hover:border-[#06b6d4]/50 hover:bg-white/[0.055] hover:shadow-2xl hover:shadow-cyan-950/30"
                      : "border-[#e5dce2] bg-white hover:border-[#06b6d4]/50 hover:shadow-2xl hover:shadow-cyan-100"
                    }`}
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#06b6d4]/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

                  <div className="relative flex flex-col justify-between gap-5 md:flex-row md:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-black">
                          CodeAlpha
                        </h3>

                        <span
                          className={`rounded-full border px-3 py-1 text-xs ${dark
                              ? "border-[#06b6d4]/30 bg-[#06b6d4]/10 text-[#67e8f9]"
                              : "border-[#06b6d4]/30 bg-[#ecfeff] text-[#0891b2]"
                            }`}
                        >
                          Internship
                        </span>
                      </div>

                      <p className="mt-2 font-medium text-[#0891b2]">
                        Frontend Development Intern
                      </p>
                    </div>

                    <span
                      className={`text-sm ${dark ? "text-white/30" : "text-[#91858f]"
                        }`}
                    >
                      2026
                    </span>
                  </div>

                  <p
                    className={`relative mt-6 max-w-3xl leading-7 ${dark ? "text-white/45" : "text-[#6d6572]"
                      }`}
                  >
                    Developing frontend projects and strengthening
                    practical skills in modern web development.
                  </p>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {[
                      "Frontend Development",
                      "JavaScript",
                      "Responsive UI",
                    ].map((item) => (
                      <span
                        key={item}
                        className={`rounded-full px-3 py-1.5 text-xs font-medium ${dark
                            ? "bg-white/5 text-white/50"
                            : "bg-[#eefcff] text-[#55717a]"
                          }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* UNIVERSITY */}
              <div className="relative pl-12 md:pl-16">
                {/* DOT */}
                <div
                  className={`absolute left-0 top-8 flex h-6 w-6 items-center justify-center rounded-full border-4 ${dark
                      ? "border-[#100d25] bg-[#f0abfc] shadow-lg shadow-fuchsia-500/40"
                      : "border-[#f8f1ff] bg-[#c026d3] shadow-lg shadow-fuchsia-300/50"
                    }`}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>

                {/* CONNECTING LINE */}
                <div className="absolute left-6 top-[41px] hidden h-px w-10 bg-gradient-to-r from-[#f0abfc]/60 to-transparent md:block" />

                <div
                  className={`group relative overflow-hidden rounded-[28px] border p-7 transition-all duration-500 hover:-translate-y-2 ${dark
                      ? "border-white/10 bg-white/[0.035] hover:border-[#f0abfc]/50 hover:bg-white/[0.055] hover:shadow-2xl hover:shadow-fuchsia-950/30"
                      : "border-[#e5dce2] bg-white hover:border-[#f0abfc]/60 hover:shadow-2xl hover:shadow-fuchsia-100"
                    }`}
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f0abfc]/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

                  <div className="relative flex flex-col justify-between gap-5 md:flex-row md:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-black">
                          Azerbaijan State Oil and Industry University
                        </h3>

                        <span
                          className={`rounded-full border px-3 py-1 text-xs ${dark
                              ? "border-[#f0abfc]/30 bg-[#f0abfc]/10 text-[#f5d0fe]"
                              : "border-[#c026d3]/20 bg-[#fdf4ff] text-[#c026d3]"
                            }`}
                        >
                          Education
                        </span>
                      </div>

                      <p className="mt-2 font-medium text-[#c026d3]">
                        Information Technologies
                      </p>
                    </div>

                    <span
                      className={`whitespace-nowrap text-sm ${dark ? "text-white/30" : "text-[#91858f]"
                        }`}
                    >
                      2025 — 2029
                    </span>
                  </div>

                  <p
                    className={`relative mt-6 max-w-3xl leading-7 ${dark ? "text-white/45" : "text-[#6d6572]"
                      }`}
                  >
                    Studying Information Technologies and building a strong
                    foundation in software, web development, and modern
                    technology.
                  </p>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {[
                      "Information Technologies",
                      "Software",
                      "Web Development",
                    ].map((item) => (
                      <span
                        key={item}
                        className={`rounded-full px-3 py-1.5 text-xs font-medium ${dark
                            ? "bg-white/5 text-white/50"
                            : "bg-[#fdf4ff] text-[#756b7d]"
                          }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-28"
      >
        <div
          className={`relative overflow-hidden rounded-[32px] border p-8 transition-all duration-700 sm:p-12 ${dark
              ? "border-[#8b5cf6]/30 bg-gradient-to-br from-[#21154a] via-[#17122f] to-[#0d1728]"
              : "border-[#ddd0e8] bg-gradient-to-br from-[#f5eaff] via-[#fff7fc] to-[#e6faff]"
            }`}
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#8b5cf6]/20 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a78bfa]">
              Get In Touch
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Let&apos;s build something.
            </h2>

            <p
              className={`mt-5 max-w-2xl leading-7 ${dark ? "text-white/50" : "text-[#665b6f]"
                }`}
            >
              I&apos;m open to connecting with developers, teams, and people
              interested in frontend development and AI-powered web
              experiences.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:yunusovasevinc08@gmail.com"
                className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${dark
                    ? "border-white/10 bg-white/5 hover:border-[#a78bfa]/50 hover:bg-white/10"
                    : "border-[#ddd3e3] bg-white/70 hover:border-[#a855f7]/50"
                  }`}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-[#a78bfa]">
                  Email
                </p>

                <p
                  className={`mt-2 text-sm font-medium ${dark ? "text-white/80" : "text-[#332b40]"
                    }`}
                >
                  yunusovasevinc08@gmail.com
                </p>
              </a>

              <a
                href="tel:+994516411470"
                className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${dark
                    ? "border-white/10 bg-white/5 hover:border-[#67e8f9]/50 hover:bg-white/10"
                    : "border-[#ddd3e3] bg-white/70 hover:border-[#06b6d4]/50"
                  }`}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-[#67e8f9]">
                  Phone
                </p>

                <p
                  className={`mt-2 text-sm font-medium ${dark ? "text-white/80" : "text-[#332b40]"
                    }`}
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
                className="rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/sevincyunusova"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 ${dark
                    ? "border-white/15 text-white hover:bg-white/10"
                    : "border-[#d9cddf] text-[#332b40] hover:bg-white"
                  }`}
              >
                GitHub ↗
              </a>

              <a
                href="https://canva.link/19vm7ro7zqvgspn"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 ${dark
                    ? "border-white/15 text-white hover:bg-white/10"
                    : "border-[#d9cddf] text-[#332b40] hover:bg-white"
                  }`}
              >
                View CV ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`border-t transition-colors duration-700 ${dark
            ? "border-white/10"
            : "border-[#e8dfd3]"
          }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p
            className={
              dark ? "text-white/30" : "text-[#8b7f8c]"
            }
          >
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