"use client"

import { useEffect, useState } from "react"

const skills = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "JavaScript",
  "React",
  "TypeScript",
  "Next.js",
  "C++",
  "C#",
  "Python",
  "Microsoft Office",
  "Canva",
  "Figma",
  "Git",
  "GitHub",
  "AI Integration",
  "REST API",
  "JSON",
  "Responsive Design",
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

const experiences = [
  {
    company: "FlyRank",
    role: "Frontend AI Engineering Intern",
    date: "2026 July – Present",
    type: "Internship",
    description:
      "Working on frontend development, AI-powered features, modern web technologies, and practical AI engineering tasks.",
    accent: "purple",
  },

  {
    company: "Baku Design Academy",
    role: "Frontend Developer — MVP Project",
    date: "2026 August – 2026 October",
    type: "MVP Project",
    description:
      "Working as a frontend developer on an MVP project, building responsive interfaces and implementing modern frontend solutions.",
    accent: "cyan",
  },

  {
    company: "CodeAlpha",
    role: "Frontend Development Intern",
    date: "2026 August – 2026 September",
    type: "Internship",
    description:
      "Developing frontend projects and strengthening practical skills in modern web development.",
    accent: "pink",
  },

  {
    company: "Azerbaijan State Oil and Industry University",
    role: "Helpdesk Intern — Digital Development Department",
    date: "2026 September – Present",
    type: "Internship",
    description:
      "Working as a Helpdesk Intern within the Digital Development Department, supporting users with technical issues and gaining practical experience in IT support and troubleshooting.",
    accent: "cyan",
  },

  {
    company: "Jet Academy",
    role: "Frontend Developer — Student",
    date: "2025 November – 2026 July",
    type: "Course",
    description:
      "Completed frontend development training focused on modern web technologies, responsive design, JavaScript, React, and practical project development.",
    accent: "purple",
  },

  {
    company: "ASOIU İTİF THİK",
    role: "Team Leader",
    date: "2025 November – 2026 May",
    type: "Leadership",
    description:
      "Led a team within the Information Technologies and Engineering Faculty Student Scientific Society, coordinating activities and supporting team collaboration.",
    accent: "cyan",
  },

  {
    company: "Azerbaijan State Oil and Industry University",
    role: "Information Technologies",
    date: "2025 – Present",
    type: "Bachelor's",
    description:
      "Studying Information Technologies and building a strong foundation in software development, web technologies, and computer science.",
    accent: "pink",
  },
]

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
            aria-label="Go to homepage"
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
                  aria-current={isActive ? "page" : undefined}
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
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={
                dark ? "Switch to light mode" : "Switch to dark mode"
              }
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
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border transition-all duration-300 md:hidden ${dark
                ? "border-white/10 bg-white/5"
                : "border-[#ded3c7] bg-white"
                }`}
            >
              <span
                className={`h-0.5 w-5 rounded-full transition-all duration-300 ${dark ? "bg-white" : "bg-[#211b35]"
                  } ${menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
              />

              <span
                className={`h-0.5 w-5 rounded-full transition-all duration-300 ${dark ? "bg-white" : "bg-[#211b35]"
                  } ${menuOpen ? "opacity-0" : ""}`}
              />

              <span
                className={`h-0.5 w-5 rounded-full transition-all duration-300 ${dark ? "bg-white" : "bg-[#211b35]"
                  } ${menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
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

        <div
          className={`pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full blur-3xl transition-all duration-1000 ${dark ? "bg-[#7c3aed]/20" : "bg-[#c084fc]/25"
            }`}
        />

        <div
          className={`pointer-events-none absolute right-[-120px] top-1/4 h-[400px] w-[400px] rounded-full blur-3xl transition-all duration-1000 ${dark ? "bg-[#06b6d4]/10" : "bg-[#67e8f9]/20"
            }`}
        />

        <div className="pointer-events-none absolute right-[8%] top-[20%] hidden h-72 w-72 rounded-full border border-[#8b5cf6]/10 md:block">
          <div className="absolute inset-5 rounded-full border border-[#06b6d4]/10" />
          <div className="absolute inset-12 rounded-full border border-[#a855f7]/10" />
          <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#a78bfa] shadow-lg shadow-purple-500/50" />
          <div className="absolute bottom-10 right-5 h-2 w-2 rounded-full bg-[#67e8f9] shadow-lg shadow-cyan-500/50" />
        </div>

        <div
          className={`pointer-events-none absolute right-[15%] top-[18%] hidden h-3 w-3 animate-pulse rounded-full md:block ${dark ? "bg-[#67e8f9]" : "bg-[#0891b2]"
            }`}
        />

        <div className="relative z-10 max-w-4xl">
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
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
      >
        {/* HEADER */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8b5cf6]">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Building for the web,
            <span className="block bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#67e8f9] bg-clip-text text-transparent">
              learning as I go.
            </span>
          </h2>
        </div>

        {/* MAIN INTRO */}
        <div
          className={`relative mt-10 overflow-hidden rounded-[28px] border p-7 sm:p-8 lg:p-10 ${dark
            ? "border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.025] to-transparent"
            : "border-[#e5dce2] bg-gradient-to-br from-white via-[#faf7ff] to-[#f5fbff] shadow-sm"
            }`}
        >
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#8b5cf6]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-[#06b6d4]/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-center">
            {/* TEXT */}
            <div>
              <p
                className={`text-lg leading-8 sm:text-xl sm:leading-9 ${dark ? "text-white/70" : "text-[#51485b]"
                  }`}
              >
                I&apos;m an Information Technologies student at Azerbaijan State
                Oil and Industry University and a frontend developer passionate
                about building modern digital experiences.
              </p>

              <p
                className={`mt-5 max-w-2xl text-sm leading-7 sm:text-base ${dark ? "text-white/45" : "text-[#766d80]"
                  }`}
              >
                My journey combines academic learning with hands-on experience
                through internships, personal projects, and real-world development.
                I enjoy transforming ideas into responsive, functional interfaces
                and continuously improving the way I build for the web.
              </p>
            </div>

            {/* QUICK INFO */}
            <div className="grid grid-cols-2 gap-3">
              <div
                className={`rounded-2xl border p-4 ${dark
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-[#e5dce2] bg-white"
                  }`}
              >
                <p className="text-2xl font-black text-[#a78bfa]">01</p>

                <p
                  className={`mt-1 text-xs font-medium ${dark ? "text-white/70" : "text-[#51485b]"
                    }`}
                >
                  Frontend
                </p>
              </div>

              <div
                className={`rounded-2xl border p-4 ${dark
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-[#e5dce2] bg-white"
                  }`}
              >
                <p className="text-2xl font-black text-[#67e8f9]">02</p>

                <p
                  className={`mt-1 text-xs font-medium ${dark ? "text-white/70" : "text-[#51485b]"
                    }`}
                >
                  AI Engineering
                </p>
              </div>

              <div
                className={`rounded-2xl border p-4 ${dark
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-[#e5dce2] bg-white"
                  }`}
              >
                <p className="text-2xl font-black text-[#c084fc]">03</p>

                <p
                  className={`mt-1 text-xs font-medium ${dark ? "text-white/70" : "text-[#51485b]"
                    }`}
                >
                  Helpdesk
                </p>
              </div>

              <div
                className={`rounded-2xl border p-4 ${dark
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-[#e5dce2] bg-white"
                  }`}
              >
                <p className="text-2xl font-black text-[#a78bfa]">04</p>

                <p
                  className={`mt-1 text-xs font-medium ${dark ? "text-white/70" : "text-[#51485b]"
                    }`}
                >
                  Continuous Learning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* THREE FEATURE CARDS */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {/* FRONTEND */}
          <div
            className={`group relative overflow-hidden rounded-[24px] border p-6 transition-all duration-500 hover:-translate-y-2 ${dark
              ? "border-white/10 bg-white/[0.025] hover:border-[#8b5cf6]/40 hover:bg-[#8b5cf6]/5"
              : "border-[#e5dce2] bg-white shadow-sm hover:border-[#a855f7]/40 hover:bg-[#faf5ff]"
              }`}
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#8b5cf6]/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />

            <div className="relative">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#8b5cf6]">
                FOCUS
              </span>

              <h3
                className={`mt-3 text-lg font-black ${dark ? "text-white" : "text-[#211b35]"
                  }`}
              >
                Frontend Development
              </h3>

              <p
                className={`mt-2 text-xs leading-6 ${dark ? "text-white/40" : "text-[#766d80]"
                  }`}
              >
                Building responsive interfaces with JavaScript, React, Next.js,
                TypeScript, Tailwind CSS, and modern web technologies.
              </p>
            </div>
          </div>

          {/* AI */}
          <div
            className={`group relative overflow-hidden rounded-[24px] border p-6 transition-all duration-500 hover:-translate-y-2 ${dark
              ? "border-white/10 bg-white/[0.025] hover:border-[#06b6d4]/40 hover:bg-[#06b6d4]/5"
              : "border-[#e5dce2] bg-white shadow-sm hover:border-[#06b6d4]/40 hover:bg-[#f0fdff]"
              }`}
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#06b6d4]/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />

            <div className="relative">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#06b6d4]">
                EXPLORING
              </span>

              <h3
                className={`mt-3 text-lg font-black ${dark ? "text-white" : "text-[#211b35]"
                  }`}
              >
                AI Engineering
              </h3>

              <p
                className={`mt-2 text-xs leading-6 ${dark ? "text-white/40" : "text-[#766d80]"
                  }`}
              >
                Exploring AI integration in frontend applications and building
                practical AI-powered web experiences.
              </p>
            </div>
          </div>

          {/* HELPDESK */}
          <div
            className={`group relative overflow-hidden rounded-[24px] border p-6 transition-all duration-500 hover:-translate-y-2 ${dark
              ? "border-white/10 bg-white/[0.025] hover:border-[#f0abfc]/40 hover:bg-[#f0abfc]/5"
              : "border-[#e5dce2] bg-white shadow-sm hover:border-[#f0abfc]/40 hover:bg-[#fff7ff]"
              }`}
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#f0abfc]/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />

            <div className="relative">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#f0abfc]">
                FOCUS
              </span>

              <h3
                className={`mt-3 text-lg font-black ${dark ? "text-white" : "text-[#211b35]"
                  }`}
              >
                Helpdesk
              </h3>

              <p
                className={`mt-2 text-xs leading-6 ${dark ? "text-white/40" : "text-[#766d80]"
                  }`}
              >
                Supporting users with technical issues, troubleshooting problems,
                resolving software and hardware-related issues, and providing
                effective technical assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className={`scroll-mt-24 border-y transition-colors duration-700 ${dark
            ? "border-white/10 bg-[#100d25]"
            : "border-[#e8ddd2] bg-[#f8f1ff]"
          }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-28">

          {/* HEADER */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8b5cf6]">
                Skills
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Tools I use to build.
              </h2>
            </div>

            <p
              className={`max-w-md text-sm leading-6 transition-colors duration-700 ${dark ? "text-white/40" : "text-[#766d80]"
                }`}
            >
              A growing toolkit focused on frontend development, programming,
              AI integration, and modern digital workflows.
            </p>
          </div>

          {/* SKILL CATEGORIES */}
          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {/* FRONTEND */}
            <div
              className={`group relative overflow-hidden rounded-[28px] border p-7 transition-all duration-500 hover:-translate-y-1 ${dark
                  ? "border-white/10 bg-white/[0.035] hover:border-[#8b5cf6]/40 hover:bg-white/[0.05]"
                  : "border-[#e5dce2] bg-white hover:border-[#a855f7]/40 hover:shadow-xl hover:shadow-purple-200/20"
                }`}
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#8b5cf6]/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-[#8b5cf6]/20" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.25em] text-[#8b5cf6]">
                      01
                    </span>

                    <h3
                      className={`mt-2 text-xl font-black ${dark ? "text-white" : "text-[#211b35]"
                        }`}
                    >
                      Frontend Development
                    </h3>
                  </div>

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl border text-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ${dark
                        ? "border-[#8b5cf6]/20 bg-[#8b5cf6]/10 text-[#c4b5fd]"
                        : "border-[#a855f7]/20 bg-[#f3e8ff] text-[#7c3aed]"
                      }`}
                  >
                    &lt;/&gt;
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "Bootstrap",
                    "Responsive Design",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className={`cursor-default rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-1 ${dark
                          ? "border-white/10 bg-white/[0.035] text-white/60 hover:border-[#a78bfa]/40 hover:bg-[#8b5cf6]/10 hover:text-[#c4b5fd]"
                          : "border-[#e5dce2] bg-[#faf8fc] text-[#625a70] hover:border-[#a855f7]/40 hover:bg-[#f3e8ff] hover:text-[#7c3aed]"
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* PROGRAMMING */}
            <div
              className={`group relative overflow-hidden rounded-[28px] border p-7 transition-all duration-500 hover:-translate-y-1 ${dark
                  ? "border-white/10 bg-white/[0.035] hover:border-[#06b6d4]/40 hover:bg-white/[0.05]"
                  : "border-[#e5dce2] bg-white hover:border-[#06b6d4]/40 hover:shadow-xl hover:shadow-cyan-200/20"
                }`}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#06b6d4]/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-[#06b6d4]/20" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.25em] text-[#06b6d4]">
                      02
                    </span>

                    <h3
                      className={`mt-2 text-xl font-black ${dark ? "text-white" : "text-[#211b35]"
                        }`}
                    >
                      Programming & APIs
                    </h3>
                  </div>

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl border text-lg transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 ${dark
                        ? "border-[#06b6d4]/20 bg-[#06b6d4]/10 text-[#67e8f9]"
                        : "border-[#06b6d4]/20 bg-[#ecfeff] text-[#0891b2]"
                      }`}
                  >
                    {"{ }"}
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {[
                    "C++",
                    "C#",
                    "Python",
                    "REST API",
                    "JSON",
                    "Git",
                    "GitHub",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className={`cursor-default rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-1 ${dark
                          ? "border-white/10 bg-white/[0.035] text-white/60 hover:border-[#67e8f9]/40 hover:bg-[#06b6d4]/10 hover:text-[#67e8f9]"
                          : "border-[#e5dce2] bg-[#faf8fc] text-[#625a70] hover:border-[#06b6d4]/40 hover:bg-[#ecfeff] hover:text-[#0891b2]"
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* AI & DESIGN */}
            <div
              className={`group relative overflow-hidden rounded-[28px] border p-7 transition-all duration-500 hover:-translate-y-1 ${dark
                  ? "border-white/10 bg-white/[0.035] hover:border-[#f0abfc]/40 hover:bg-white/[0.05]"
                  : "border-[#e5dce2] bg-white hover:border-[#f0abfc]/40 hover:shadow-xl hover:shadow-pink-200/20"
                }`}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#f0abfc]/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-[#f0abfc]/20" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.25em] text-[#f0abfc]">
                      03
                    </span>

                    <h3
                      className={`mt-2 text-xl font-black ${dark ? "text-white" : "text-[#211b35]"
                        }`}
                    >
                      AI & Design
                    </h3>
                  </div>

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl border text-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ${dark
                        ? "border-[#f0abfc]/20 bg-[#f0abfc]/10 text-[#f0abfc]"
                        : "border-[#f0abfc]/30 bg-[#fff5ff] text-[#c026d3]"
                      }`}
                  >
                    ✦
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {[
                    "AI Integration",
                    "Figma",
                    "Canva",
                    "Microsoft Office",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className={`cursor-default rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-1 ${dark
                          ? "border-white/10 bg-white/[0.035] text-white/60 hover:border-[#f0abfc]/40 hover:bg-[#f0abfc]/10 hover:text-[#f0abfc]"
                          : "border-[#e5dce2] bg-[#fffafe] text-[#625a70] hover:border-[#f0abfc]/40 hover:bg-[#fff0ff] hover:text-[#c026d3]"
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* WORKFLOW */}
            <div
              className={`group relative overflow-hidden rounded-[28px] border p-7 transition-all duration-500 hover:-translate-y-1 ${dark
                  ? "border-white/10 bg-white/[0.035] hover:border-[#a78bfa]/40 hover:bg-white/[0.05]"
                  : "border-[#e5dce2] bg-white hover:border-[#a78bfa]/40 hover:shadow-xl hover:shadow-purple-200/20"
                }`}
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#a78bfa]/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-[#a78bfa]/20" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.25em] text-[#a78bfa]">
                      04
                    </span>

                    <h3
                      className={`mt-2 text-xl font-black ${dark ? "text-white" : "text-[#211b35]"
                        }`}
                    >
                      Workflow
                    </h3>
                  </div>

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl border text-lg transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 ${dark
                        ? "border-[#a78bfa]/20 bg-[#a78bfa]/10 text-[#c4b5fd]"
                        : "border-[#a78bfa]/20 bg-[#f5f0ff] text-[#7c3aed]"
                      }`}
                  >
                    ↗
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {[
                    "Git",
                    "GitHub",
                    "Responsive Design",
                    "REST API",
                    "JSON",
                    "Component Design",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className={`cursor-default rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-1 ${dark
                          ? "border-white/10 bg-white/[0.035] text-white/60 hover:border-[#c4b5fd]/40 hover:bg-[#8b5cf6]/10 hover:text-[#c4b5fd]"
                          : "border-[#e5dce2] bg-[#faf8fc] text-[#625a70] hover:border-[#a855f7]/40 hover:bg-[#f3e8ff] hover:text-[#7c3aed]"
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM LINE */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8b5cf6]/30 to-transparent" />

            <span
              className={`text-[10px] font-bold uppercase tracking-[0.25em] ${dark ? "text-white/20" : "text-[#a397a7]"
                }`}
            >
              Always learning · Always building
            </span>

            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#06b6d4]/30 to-transparent" />
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8b5cf6]">
              My Projects
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              A selection of my work.
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
                  aria-label={`Open ${project.title} live demo`}
                  className="rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  Live Demo ↗
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} GitHub repository`}
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
        className={`scroll-mt-24 border-y transition-colors duration-700 ${dark
          ? "border-white/10 bg-[#100d25]"
          : "border-[#e8ddd2] bg-[#f8f1ff]"
          }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8b5cf6]">
              Experience
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              My current journey.
            </h2>

            <p
              className={`mt-5 text-base leading-7 ${dark ? "text-white/40" : "text-[#766d80]"
                }`}
            >
              A timeline of my education, internships, projects, and
              leadership experience.
            </p>
          </div>

          <div className="relative mt-16">
            <div
              className={`absolute bottom-0 left-[11px] top-0 w-px md:left-[15px] ${dark
                ? "bg-gradient-to-b from-[#8b5cf6]/70 via-[#06b6d4]/40 to-transparent"
                : "bg-gradient-to-b from-[#8b5cf6]/60 via-[#06b6d4]/40 to-transparent"
                }`}
            />

            <div className="space-y-8">
              {experiences.map((experience) => {
                const accentColor =
                  experience.accent === "cyan"
                    ? "#06b6d4"
                    : experience.accent === "pink"
                      ? "#f0abfc"
                      : "#a855f7"

                return (
                  <div
                    key={`${experience.company}-${experience.role}`}
                    className="group relative pl-10 md:pl-14"
                  >
                    <div
                      className="absolute left-0 top-8 flex h-6 w-6 items-center justify-center rounded-full border-2 md:h-8 md:w-8"
                      style={{
                        borderColor: `${accentColor}66`,
                        backgroundColor: dark
                          ? "#100d25"
                          : "#f8f1ff",
                        boxShadow: `0 0 20px ${accentColor}22`,
                      }}
                    >
                      <div
                        className="h-2 w-2 rounded-full md:h-2.5 md:w-2.5"
                        style={{
                          backgroundColor: accentColor,
                          boxShadow: `0 0 12px ${accentColor}88`,
                        }}
                      />
                    </div>

                    <div
                      className={`relative overflow-hidden rounded-[24px] border p-7 transition-all duration-500 hover:-translate-y-1 ${dark
                        ? "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-purple-950/20"
                        : "border-[#e5dce2] bg-white hover:border-[#c9b6d8] hover:shadow-xl hover:shadow-purple-200/30"
                        }`}
                    >
                      <div
                        className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full blur-3xl opacity-10 transition-all duration-700 group-hover:scale-150 group-hover:opacity-20"
                        style={{
                          backgroundColor: accentColor,
                        }}
                      />

                      <div className="relative flex flex-col justify-between gap-5 md:flex-row md:items-start">
                        <div className="max-w-3xl">
                          <div className="flex flex-wrap items-center gap-3">
                            <h3
                              className={`text-2xl font-black transition-colors duration-300 ${dark
                                ? "text-white group-hover:text-[#c4b5fd]"
                                : "text-[#211b35] group-hover:text-[#7c3aed]"
                                }`}
                            >
                              {experience.company}
                            </h3>

                            <span
                              className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${dark
                                ? "border-white/10 bg-white/[0.04] text-white/40"
                                : "border-[#e5dce2] bg-[#faf7fc] text-[#8b7f8c]"
                                }`}
                            >
                              {experience.type}
                            </span>
                          </div>

                          <p
                            className="mt-2 font-semibold"
                            style={{ color: accentColor }}
                          >
                            {experience.role}
                          </p>
                        </div>

                        <span
                          className={`shrink-0 text-sm font-medium ${dark ? "text-white/35" : "text-[#91858f]"
                            }`}
                        >
                          {experience.date}
                        </span>
                      </div>

                      <p
                        className={`relative mt-5 max-w-3xl leading-7 ${dark ? "text-white/45" : "text-[#6d6572]"
                          }`}
                      >
                        {experience.description}
                      </p>

                      <div
                        className="relative mt-6 h-px w-0 transition-all duration-700 group-hover:w-full"
                        style={{
                          background: `linear-gradient(to right, ${accentColor}, transparent)`,
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
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
        className={`border-t transition-colors duration-700 ${dark ? "border-white/10" : "border-[#e8dfd3]"
          }`}
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