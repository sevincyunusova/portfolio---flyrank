"use client"

import { useEffect, useState } from "react"
import ShaderHero from "@/components/ShaderHero"

type ContactForm = {
  name: string
  email: string
  message: string
}
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
    number: "01",
    title: "StudyPilot",
    description:
      "An AI-powered study planner that helps students organize tasks, generate personalized study plans, and stay on track with their goals.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    live: "https://studypilot-coral.vercel.app/",
    github: "https://github.com/sevincyunusova/studypilot",
  },
  {
    number: "02",
    title: "CineVault",
    description:
      "A movie discovery application with search, genre filtering, favorites, and movie data powered by an external movie API.",
    tech: ["React", "JavaScript", "API", "CSS"],
    live: "https://cine-vault-jet.vercel.app/",
    github: "https://github.com/sevincyunusova/CineVault",
  },
  {
    number: "03",
    title: "SwiftMove",
    description:
      "A modern responsive frontend project focused on clean UI, responsive layouts, and interactive components.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    live: "https://swiftmove-site.vercel.app/",
    github: "https://github.com/sevincyunusova/swiftmove-site",
  },
  {
    number: "04",
    title: "Fruitables",
    description:
      "A responsive frontend e-commerce style website built with a focus on layout, reusable UI patterns, and responsive design.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    live: "https://fruitables-site-alpha.vercel.app/",
    github: "https://github.com/sevincyunusova/fruitables-site",
  },
  {
    number: "05",
    title: "Furni",
    description:
      "A modern furniture website concept with a responsive interface and clean product-focused layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://furni-site-roan.vercel.app/",
    github: "https://github.com/sevincyunusova/furni-site",
  },
  {
    number: "06",
    title: "RestOrder",
    description:
      "A restaurant ordering interface designed with a responsive frontend and user-friendly navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://sevincyunusova-restorder.vercel.app/",
    github: "https://github.com/sevincyunusova/restorder",
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

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState("")

  const dark = darkMode

  const toggleDark = () => {
    setDarkMode((prev) => !prev)
  }

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
        className={`fixed left-1/2 top-4 z-50 w-[calc(100%-32px)] max-w-6xl -translate-x-1/2 rounded-2xl border backdrop-blur-2xl transition-all duration-300 ${dark
          ? "border-white/10 bg-[#090718]/55 shadow-[0_8px_40px_rgba(0,0,0,0.25)]"
          : "border-white/70 bg-white/55 shadow-[0_8px_40px_rgba(124,58,237,0.10)]"
          }`}
      >
        {/* Purple / cyan ambient glow */}
        <div className="pointer-events-none absolute -left-10 top-1/2 h-20 w-32 -translate-y-1/2 rounded-full bg-[#7c3aed]/15 blur-3xl" />

        <div className="pointer-events-none absolute -right-10 top-1/2 h-20 w-32 -translate-y-1/2 rounded-full bg-[#06b6d4]/10 blur-3xl" />

        <div className="relative flex h-[68px] items-center justify-between px-5">
          {/* Logo */}
          <a
            href="#home"
            className="group relative flex items-center gap-2"
          >
            <span
              className={`text-lg font-bold tracking-tight transition-colors ${dark ? "text-white" : "text-[#171225]"
                }`}
            >
              S<span className="text-[#8b5cf6]">.</span>
            </span>

            {/* Logo glow */}
            <span className="absolute -left-2 top-1/2 -z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-[#8b5cf6]/30 blur-xl transition-all duration-300 group-hover:bg-[#06b6d4]/40" />
          </a>

          {/* Navigation */}
          <div
            className={`hidden items-center gap-1 rounded-xl border px-1.5 py-1.5 md:flex ${dark
              ? "border-white/5 bg-white/[0.03]"
              : "border-black/5 bg-black/[0.02]"
              }`}
          >
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Experience", "#experience"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={`group relative rounded-lg px-3 py-2 text-xs font-medium transition-all duration-300 ${dark
                  ? "text-white/60 hover:bg-white/[0.06] hover:text-white"
                  : "text-black/55 hover:bg-black/[0.04] hover:text-black"
                  }`}
              >
                {label}

                {/* Hover glow */}
                <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#67e8f9] shadow-[0_0_10px_rgba(103,232,249,0.7)] transition-all duration-300 group-hover:w-4" />
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Theme button */}
            <button
              type="button"
              onClick={toggleDark}
              aria-label="Toggle theme"
              className={`group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border transition-all duration-300 ${dark
                ? "border-white/10 bg-white/[0.04] text-white/70 hover:border-[#8b5cf6]/30 hover:bg-[#8b5cf6]/10 hover:text-white"
                : "border-black/10 bg-black/[0.03] text-black/60 hover:border-[#8b5cf6]/30 hover:bg-[#8b5cf6]/10 hover:text-black"
                }`}
            >
              <span className="text-sm transition-transform duration-300 group-hover:rotate-12">
                {dark ? "☀" : "☾"}
              </span>

              <span className="absolute inset-0 -z-10 rounded-xl bg-[#8b5cf6]/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open navigation menu"
              className={`flex h-9 w-9 items-center justify-center rounded-xl border md:hidden ${dark
                ? "border-white/10 bg-white/[0.04] text-white"
                : "border-black/10 bg-black/[0.03] text-black"
                }`}
            >
              <div className="flex flex-col gap-1">
                <span className="h-[2px] w-4 rounded-full bg-current" />
                <span className="h-[2px] w-3 rounded-full bg-current" />
                <span className="h-[2px] w-4 rounded-full bg-current" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className={`border-t px-4 py-3 md:hidden ${dark ? "border-white/10" : "border-black/10"
              }`}
          >
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Experience", "#experience"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm transition-colors ${dark
                  ? "text-white/65 hover:bg-white/[0.05] hover:text-white"
                  : "text-black/60 hover:bg-black/[0.04] hover:text-black"
                  }`}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* NAVBAR OFFSET */}
      <div className="h-[73px]" />
      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-73px)] w-full overflow-hidden"
      >
        {/* Shader background */}
        <ShaderHero dark={dark} />

        {/* Main readability overlay */}
        <div
          className={`pointer-events-none absolute inset-0 z-[1] ${dark ? "bg-[#090718]/45" : "bg-[#fffaf5]/40"
            }`}
        />

        {/* Soft blurred color atmosphere */}
        <div
          className={`pointer-events-none absolute left-[8%] top-[18%] z-[1] h-[420px] w-[420px] rounded-full blur-[120px] transition-all duration-1000 ${dark ? "bg-[#7c3aed]/20" : "bg-[#c084fc]/20"
            }`}
        />

        <div
          className={`pointer-events-none absolute right-[8%] top-[12%] z-[1] h-[500px] w-[500px] rounded-full blur-[130px] transition-all duration-1000 ${dark ? "bg-[#06b6d4]/15" : "bg-[#67e8f9]/20"
            }`}
        />

        {/* Very subtle grid */}
        <div
          className={`pointer-events-none absolute inset-0 z-[1] transition-opacity duration-700 ${dark ? "opacity-20" : "opacity-35"
            }`}
          style={{
            backgroundImage: dark
              ? "linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)"
              : "linear-gradient(rgba(124,58,237,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.05) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 0%, transparent 78%)",
          }}
        />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-73px)] w-full max-w-7xl items-center gap-12 px-8 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* LEFT SIDE */}
          <div className="relative max-w-3xl">
            {/* Small glow behind text */}
            <div
              className={`pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full blur-[100px] ${dark ? "bg-[#8b5cf6]/15" : "bg-[#a855f7]/10"
                }`}
            />

            {/* Availability badge */}
            <div
              className={`relative mb-7 inline-flex items-center gap-3 rounded-full border px-4 py-2 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${dark
                ? "border-[#a78bfa]/30 bg-[#8b5cf6]/10 shadow-lg shadow-purple-500/10"
                : "border-[#a855f7]/25 bg-white/70 shadow-lg shadow-purple-500/10"
                }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a78bfa] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#8b5cf6]" />
              </span>

              <span
                className={`text-sm ${dark ? "text-[#ddd6fe]" : "text-[#6d28d9]"
                  }`}
              >
                Available for opportunities
              </span>
            </div>

            {/* Role */}
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.32em] text-[#a78bfa]">
              Frontend Developer
            </p>

            {/* Main heading */}
            <h1 className="relative max-w-4xl text-5xl font-black leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
              <span className={dark ? "text-white" : "text-[#211b35]"}>
                Hi, I&apos;m
              </span>{" "}
              <span className="relative inline-block">
                {/* Glow behind name */}
                <span
                  className="pointer-events-none absolute -inset-x-4 -inset-y-3 rounded-full bg-gradient-to-r from-[#7c3aed]/30 via-[#c084fc]/25 to-[#06b6d4]/25 blur-2xl"
                  aria-hidden="true"
                />

                {/* Shimmering name */}
                <span
                  className={`relative bg-[length:200%_100%] bg-clip-text text-transparent animate-[gradient_5s_ease_infinite] ${dark
                    ? "bg-gradient-to-r from-[#a78bfa] via-[#f0abfc] to-[#67e8f9]"
                    : "bg-gradient-to-r from-[#7c3aed] via-[#c026d3] to-[#0891b2]"
                    }`}
                >
                  Sevincxanim Yunusova.
                </span>
              </span>
            </h1>

            {/* Description */}
            <p
              className={`relative mt-8 max-w-2xl text-lg leading-8 transition-colors duration-700 ${dark ? "text-white/60" : "text-[#625a70]"
                }`}
            >
              I&apos;m a frontend developer and Information Technologies student
              focused on building modern, responsive web applications. I&apos;m
              also exploring frontend AI engineering and creating practical
              AI-powered experiences.
            </p>

            {/* Buttons */}
            <div className="relative mt-9 flex flex-wrap gap-4">
              {/* Primary button */}
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-full p-[1px] shadow-[0_0_35px_rgba(124,58,237,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(124,58,237,0.45)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] via-[#c026d3] to-[#06b6d4] opacity-90" />

                <span className="relative block rounded-full bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#06b6d4] px-7 py-3.5 font-semibold text-white">
                  <span className="relative z-10">
                    Explore My Work →
                  </span>

                  <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-700 group-hover:translate-x-full" />
                </span>
              </a>

              {/* Secondary button */}
              <a
                href="#contact"
                className={`group relative overflow-hidden rounded-full border px-7 py-3.5 font-semibold backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${dark
                  ? "border-white/15 bg-white/[0.04] text-white shadow-[0_0_25px_rgba(167,139,250,0.05)] hover:border-[#a78bfa]/50 hover:bg-[#a78bfa]/10 hover:shadow-[0_0_35px_rgba(167,139,250,0.18)]"
                  : "border-[#ded3c7] bg-white/70 text-[#211b35] shadow-[0_0_25px_rgba(168,85,247,0.08)] hover:border-[#a855f7] hover:bg-[#f8f0ff] hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]"
                  }`}
              >
                <span className="relative z-10">Let&apos;s Connect</span>

                <span
                  className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full`}
                />
              </a>
            </div>

            {/* Social links */}
            <div className="relative mt-10 flex flex-wrap gap-6 text-sm">
              <a
                href="https://www.linkedin.com/in/sevincxan%C4%B1m-yunusova-b21245397/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#a78bfa] transition-all duration-300 hover:-translate-y-1 hover:text-[#ddd6fe] hover:drop-shadow-[0_0_12px_rgba(167,139,250,0.7)]"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/sevincyunusova"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#67e8f9] transition-all duration-300 hover:-translate-y-1 hover:text-[#a5f3fc] hover:drop-shadow-[0_0_12px_rgba(103,232,249,0.7)]"
              >
                GitHub ↗
              </a>

              <a
                href="https://canva.link/19vm7ro7zqvgspn"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#f0abfc] transition-all duration-300 hover:-translate-y-1 hover:text-[#f5d0fe] hover:drop-shadow-[0_0_12px_rgba(240,171,252,0.7)]"
              >
                View CV ↗
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — DEVELOPER VISUAL */}
          {/* RIGHT SIDE — GLOWING DEVELOPER FRAME */}
          <div className="relative hidden min-h-[520px] items-center justify-center lg:flex">

            {/* Ambient glow */}
            <div
              className={`absolute h-[430px] w-[430px] rounded-full blur-[110px] ${dark ? "bg-[#7c3aed]/20" : "bg-[#a855f7]/15"
                }`}
            />

            <div
              className={`absolute h-[300px] w-[300px] rounded-full blur-[100px] ${dark ? "bg-[#06b6d4]/15" : "bg-[#67e8f9]/15"
                }`}
            />

            {/* Rotating outer rings */}
            <div className="absolute h-[360px] w-[360px] animate-[spin_75s_linear_infinite_reverse] rounded-full border border-[#06b6d4]/10">
              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#67e8f9] shadow-[0_0_22px_rgba(103,232,249,0.95)]" />

              <div className="absolute bottom-12 right-7 h-2.5 w-2.5 rounded-full bg-[#c084fc] shadow-[0_0_20px_rgba(192,132,252,0.9)]" />
            </div>

            {/* GLOWING FRAME */}
            <div className="relative w-[450px]">

              {/* Animated cyan/purple glowing border */}
              <div
                className="absolute -inset-[2px] rounded-[30px] opacity-90 blur-[1px]"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, transparent 45deg, #67e8f9 75deg, #a78bfa 110deg, transparent 145deg, transparent 240deg, #06b6d4 275deg, #c084fc 310deg, transparent 345deg)",
                  animation: "spin 7s linear infinite",
                }}
              />

              {/* Outer glow */}
              <div
                className="absolute -inset-4 rounded-[34px] opacity-40 blur-xl"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent, #67e8f9, transparent, #a78bfa, transparent)",
                  animation: "spin 7s linear infinite reverse",
                }}
              />

              {/* Glass card */}
              <div
                className={`relative overflow-hidden rounded-[28px] border backdrop-blur-2xl ${dark
                  ? "border-white/10 bg-[#0b0818]/80 shadow-[0_0_70px_rgba(6,182,212,0.12),0_0_100px_rgba(124,58,237,0.12)]"
                  : "border-white/80 bg-white/70 shadow-[0_0_70px_rgba(168,85,247,0.15)]"
                  }`}
              >

                {/* Inner top glow */}
                <div
                  className={`pointer-events-none absolute -top-32 left-1/2 h-48 w-80 -translate-x-1/2 rounded-full blur-3xl ${dark
                    ? "bg-gradient-to-r from-[#7c3aed]/20 via-[#67e8f9]/25 to-[#c084fc]/20"
                    : "bg-gradient-to-r from-[#c084fc]/15 via-[#67e8f9]/15 to-[#a78bfa]/15"
                    }`}
                />

                {/* Small top accent line */}
                <div className="relative h-[2px] w-full overflow-hidden bg-white/5">
                  <div
                    className="absolute left-0 top-0 h-full w-32 rounded-full bg-gradient-to-r from-transparent via-[#67e8f9] to-[#a78bfa] shadow-[0_0_15px_rgba(103,232,249,0.9)]"
                    style={{
                      animation: "frameLine 4s ease-in-out infinite",
                    }}
                  />
                </div>

                {/* Code content */}
                <div className="relative px-8 py-9 font-mono text-sm leading-8">
                  <div className="pl-6">
                    <span className="text-[#c084fc]">const</span>{" "}
                    <span className={dark ? "text-white" : "text-[#211b35]"}>
                      developer
                    </span>{" "}
                    <span className="text-[#67e8f9]">=</span>{" "}
                    <span className="text-[#a5f3fc]">{"{"}</span>
                  </div>

                  <div className="pl-12">
                    <span className="text-[#a78bfa]">name</span>
                    <span className={dark ? "text-white/40" : "text-black/40"}>
                      :
                    </span>{" "}
                    <span className="text-[#f0abfc]">
                      &quot;Sevincxanim Yunusova&quot;
                    </span>
                    <span className={dark ? "text-white/30" : "text-black/30"}>
                      ,
                    </span>
                  </div>

                  <div className="pl-12">
                    <span className="text-[#a78bfa]">role</span>
                    <span className={dark ? "text-white/40" : "text-black/40"}>
                      :
                    </span>{" "}
                    <span className="text-[#67e8f9]">
                      &quot;Frontend Developer&quot;
                    </span>
                    <span className={dark ? "text-white/30" : "text-black/30"}>
                      ,
                    </span>
                  </div>

                  <div className="pl-12">
                    <span className="text-[#a78bfa]">focus</span>
                    <span className={dark ? "text-white/40" : "text-black/40"}>
                      :
                    </span>{" "}
                    <span className="text-[#c4b5fd]">
                      &quot;Web + AI + Helpdesk&quot;
                    </span>
                    <span className={dark ? "text-white/30" : "text-black/30"}>
                      ,
                    </span>
                  </div>

                  <div className="pl-12">
                    <span className="text-[#a78bfa]">stack</span>
                    <span className={dark ? "text-white/40" : "text-black/40"}>
                      :
                    </span>{" "}
                    <span className="text-[#f0abfc]">
                      [&quot;React&quot;, &quot;Next.js&quot;]
                    </span>
                  </div>

                  <div className="pl-6 text-[#a5f3fc]">
                    {"}"}
                  </div>

                  <div className="mt-6 pl-6">
                    <span className="text-[#c084fc]">build</span>
                    <span className={dark ? "text-white/40" : "text-black/40"}>
                      {" "}
                      {"→"}{" "}
                    </span>
                    <span className="text-[#67e8f9]">
                      create
                    </span>
                    <span className={dark ? "text-white/40" : "text-black/40"}>
                      {" "}
                      {"→"}{" "}
                    </span>
                    <span className="text-[#f0abfc]">
                      innovate
                    </span>
                  </div>
                </div>

                {/* Bottom glowing line */}
                <div className="relative h-[1px] w-full overflow-hidden bg-white/5">
                  <div
                    className="absolute right-0 top-0 h-full w-28 rounded-full bg-gradient-to-l from-transparent via-[#67e8f9] to-[#a78bfa] shadow-[0_0_14px_rgba(103,232,249,0.8)]"
                    style={{
                      animation: "frameLineReverse 4s ease-in-out infinite",
                    }}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      {/* ABOUT */}
      <section
        id="about"
        className="relative mx-auto max-w-7xl scroll-mt-24 overflow-hidden px-6 py-28"
      >
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#7c3aed]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#06b6d4]/10 blur-[130px]" />

        {/* Section header */}
        <div className="relative mb-14 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-[#8b5cf6] to-[#67e8f9]" />

            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#a78bfa]">
              About Me
            </p>
          </div>

          <h2 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Turning ideas into
            <span className="mt-2 block bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#67e8f9] bg-clip-text text-transparent">
              digital experiences.
            </span>
          </h2>

          <p
            className={`mt-6 max-w-2xl text-sm leading-7 sm:text-base ${dark ? "text-white/55" : "text-[#766d80]"
              }`}
          >
            A frontend developer and Information Technologies student focused on
            building modern interfaces, exploring AI-powered experiences, and
            learning through real-world projects.
          </p>
        </div>

        {/* Main About Card */}
        <div className="relative grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Main glass card */}
          <div
            className={`group relative overflow-hidden rounded-[32px] border p-7 transition-all duration-700 sm:p-9 lg:p-10 ${dark
              ? "border-white/10 bg-white/[0.035] hover:border-[#8b5cf6]/25"
              : "border-[#e8dfe8] bg-white/60 shadow-[0_20px_70px_rgba(124,58,237,0.06)] hover:border-[#a855f7]/30"
              }`}
          >
            {/* Card glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#8b5cf6]/10 blur-[90px] transition-transform duration-1000 group-hover:scale-125" />

            <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-[#06b6d4]/8 blur-[90px]" />

            {/* Animated top line */}
            <div className="absolute left-8 right-8 top-0 h-px overflow-hidden">
              <div className="h-full w-24 animate-[aboutLine_5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-[#67e8f9] to-transparent shadow-[0_0_14px_rgba(103,232,249,0.8)]" />
            </div>

            <div className="relative">
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono text-[11px] tracking-[0.2em] ${dark ? "text-white/25" : "text-black/25"
                    }`}
                >
                   ABOUT
                </span>

                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#67e8f9] shadow-[0_0_10px_rgba(103,232,249,0.9)]" />
                  <span
                    className={`text-[10px] font-medium ${dark ? "text-white/35" : "text-black/35"
                      }`}
                  >
                    IN PROGRESS
                  </span>
                </span>
              </div>

              <div className="mt-10 max-w-3xl">
                <p
                  className={`text-xl font-medium leading-9 sm:text-2xl sm:leading-10 ${dark ? "text-white/85" : "text-[#332a3d]"
                    }`}
                >
                  I&apos;m an Information Technologies student at Azerbaijan State
                  Oil and Industry University and a frontend developer who enjoys
                  turning ideas into{" "}
                  <span className="bg-gradient-to-r from-[#a78bfa] to-[#67e8f9] bg-clip-text text-transparent">
                    clean, interactive web experiences.
                  </span>
                </p>

                <p
                  className={`mt-6 max-w-2xl text-sm leading-7 sm:text-base ${dark ? "text-white/50" : "text-[#766d80]"
                    }`}
                >
                  My journey combines academic learning with hands-on experience
                  through internships, personal projects, and real-world development.
                  I&apos;m continuously improving my frontend skills while exploring
                  how AI can make modern web applications more useful and engaging.
                </p>
              </div>

              {/* Mini stats */}
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["Frontend"],
                  ["AI Engineering"],
                  ["Helpdesk"],
                  ["Learning"],
                ].map(([number, label], index) => (
                  <div
                    key={label}
                    className={`group/stat relative overflow-hidden rounded-2xl border p-4 transition-all duration-500 hover:-translate-y-1 ${dark
                      ? "border-white/8 bg-white/[0.035] hover:border-[#8b5cf6]/30 hover:bg-white/[0.055]"
                      : "border-black/5 bg-white/60 hover:border-[#a855f7]/25 hover:bg-white"
                      }`}
                  >
                    <div
                      className={`absolute -right-6 -top-6 h-14 w-14 rounded-full blur-2xl transition-transform duration-500 group-hover/stat:scale-150 ${index % 2 === 0 ? "bg-[#8b5cf6]/15" : "bg-[#06b6d4]/15"
                        }`}
                    />

                    <div className="relative">
                      <p
                        className={`text-xl font-black ${index === 1
                          ? "text-[#67e8f9]"
                          : index === 2
                            ? "text-[#f0abfc]"
                            : "text-[#a78bfa]"
                          }`}
                      >
                        {number}
                      </p>

                      <p
                        className={`mt-1 text-[10px] font-medium ${dark ? "text-white/50" : "text-[#766d80]"
                          }`}
                      >
                        {label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div
            className={`relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-[32px] border ${dark
              ? "border-white/10 bg-white/[0.025]"
              : "border-[#e8dfe8] bg-white/50"
              }`}
          >
            {/* Background glow */}
            <div className="absolute h-56 w-56 rounded-full bg-[#7c3aed]/15 blur-[90px]" />
            <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-[#06b6d4]/15 blur-[70px]" />

            {/* Rotating rings */}
            <div className="absolute h-[310px] w-[310px] animate-[spin_55s_linear_infinite] rounded-full border border-[#8b5cf6]/10">
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#67e8f9] shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
            </div>

            <div className="absolute h-[230px] w-[230px] animate-[spin_42s_linear_infinite_reverse] rounded-full border border-[#06b6d4]/10" />

            {/* Profile glass object */}
            <div className="relative w-[250px] animate-[aboutFloat_6s_ease-in-out_infinite]">
              {/* Glow behind card */}
              <div className="absolute -inset-6 rounded-[30px] bg-gradient-to-br from-[#7c3aed]/20 via-transparent to-[#06b6d4]/15 blur-2xl" />

              <div
                className={`relative overflow-hidden rounded-[26px] border backdrop-blur-2xl ${dark
                  ? "border-white/10 bg-[#0b0818]/75 shadow-[0_0_70px_rgba(124,58,237,0.15)]"
                  : "border-white/80 bg-white/75 shadow-[0_0_70px_rgba(124,58,237,0.10)]"
                  }`}
              >
                {/* Top gradient */}
                <div className="h-1 w-full bg-gradient-to-r from-[#7c3aed] via-[#c084fc] to-[#67e8f9]" />

                <div className="p-6">
                  {/* Terminal dots */}
                  <div className="mb-6 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#f0abfc]" />
                    <span className="h-2 w-2 rounded-full bg-[#a78bfa]" />
                    <span className="h-2 w-2 rounded-full bg-[#67e8f9]" />

                    <span
                      className={`ml-auto font-mono text-[9px] ${dark ? "text-white/20" : "text-black/20"
                        }`}
                    >
                      developer.ts
                    </span>
                  </div>

                  {/* Code-style identity */}
                  <div className="font-mono text-xs leading-7">

                    <div className="pl-4">
                      <span className="text-[#c084fc]">const</span>{" "}
                      <span className={dark ? "text-white" : "text-[#211b35]"}>
                        passion
                      </span>{" "}
                      <span className="text-[#67e8f9]">=</span>
                    </div>

                    <div className="pl-8">
                      <span className="text-[#f0abfc]">
                        &quot;build + learn&quot;
                      </span>
                    </div>

                    <div className="mt-3 pl-4">
                      <span className="text-[#c084fc]">const</span>{" "}
                      <span className={dark ? "text-white" : "text-[#211b35]"}>
                        stack
                      </span>{" "}
                      <span className="text-[#67e8f9]">=</span>
                    </div>

                    <div className="pl-8 text-[#a5f3fc]">
                      [&quot;React&quot;, &quot;Next.js&quot;]
                    </div>
                  </div>

                  {/* Progress line */}
                  <div className="mt-7">
                    <div className="mb-2 flex items-center justify-between">
                      <span
                        className={`text-[9px] uppercase tracking-[0.18em] ${dark ? "text-white/30" : "text-black/30"
                          }`}
                      >
                        continuous learning
                      </span>

                      <span className="text-[9px] text-[#67e8f9]">∞</span>
                    </div>

                    <div
                      className={`h-1 overflow-hidden rounded-full ${dark ? "bg-white/10" : "bg-black/5"
                        }`}
                    >
                      <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#7c3aed] via-[#c084fc] to-[#67e8f9] shadow-[0_0_12px_rgba(103,232,249,0.6)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating labels */}
            <div
              className={`absolute left-5 top-8 rounded-xl border px-3 py-2 backdrop-blur-xl ${dark
                ? "border-white/10 bg-white/[0.04]"
                : "border-white/80 bg-white/60"
                }`}
            >
              <span className="text-[9px] font-bold tracking-[0.15em] text-[#a78bfa]">
                FRONTEND
              </span>
            </div>

            <div
              className={`absolute bottom-8 right-5 rounded-xl border px-3 py-2 backdrop-blur-xl ${dark
                ? "border-white/10 bg-white/[0.04]"
                : "border-white/80 bg-white/60"
                }`}
            >
              <span className="text-[9px] font-bold tracking-[0.15em] text-[#67e8f9]">
                AI × WEB
              </span>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {/* Frontend */}
          <div
            className={`group relative overflow-hidden rounded-[26px] border p-6 transition-all duration-500 hover:-translate-y-2 ${dark
              ? "border-white/10 bg-white/[0.025] hover:border-[#8b5cf6]/40 hover:bg-[#8b5cf6]/5"
              : "border-[#e5dce2] bg-white/60 hover:border-[#a855f7]/40 hover:bg-[#faf5ff]"
              }`}
          >
            <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#8b5cf6]/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between">

                <span className="text-xl text-[#a78bfa] transition-transform duration-500 group-hover:rotate-12">
                  ◇
                </span>
              </div>

              <h3
                className={`text-lg font-black ${dark ? "text-white" : "text-[#211b35]"
                  }`}
              >
                Frontend Development
              </h3>

              <p
                className={`mt-3 text-xs leading-6 ${dark ? "text-white/50" : "text-[#766d80]"
                  }`}
              >
                Building responsive interfaces with React, Next.js, JavaScript,
                Tailwind CSS, and modern web technologies.
              </p>
            </div>
          </div>

          {/* AI */}
          <div
            className={`group relative overflow-hidden rounded-[26px] border p-6 transition-all duration-500 hover:-translate-y-2 ${dark
              ? "border-white/10 bg-white/[0.025] hover:border-[#06b6d4]/40 hover:bg-[#06b6d4]/5"
              : "border-[#e5dce2] bg-white/60 hover:border-[#06b6d4]/40 hover:bg-[#f0fdff]"
              }`}
          >
            <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#06b6d4]/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xl text-[#67e8f9] transition-transform duration-500 group-hover:rotate-12">
                  ✦
                </span>
              </div>

              <h3
                className={`text-lg font-black ${dark ? "text-white" : "text-[#211b35]"
                  }`}
              >
                AI Engineering
              </h3>

              <p
                className={`mt-3 text-xs leading-6 ${dark ? "text-white/50" : "text-[#766d80]"
                  }`}
              >
                Exploring AI integration in frontend applications and creating
                practical AI-powered web experiences.
              </p>
            </div>
          </div>

          {/* Helpdesk */}
          <div
            className={`group relative overflow-hidden rounded-[26px] border p-6 transition-all duration-500 hover:-translate-y-2 ${dark
              ? "border-white/10 bg-white/[0.025] hover:border-[#f0abfc]/40 hover:bg-[#f0abfc]/5"
              : "border-[#e5dce2] bg-white/60 hover:border-[#f0abfc]/40 hover:bg-[#fff7ff]"
              }`}
          >
            <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#f0abfc]/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xl text-[#f0abfc] transition-transform duration-500 group-hover:rotate-12">
                  ◌
                </span>
              </div>

              <h3
                className={`text-lg font-black ${dark ? "text-white" : "text-[#211b35]"
                  }`}
              >
                Helpdesk
              </h3>

              <p
                className={`mt-3 text-xs leading-6 ${dark ? "text-white/50" : "text-[#766d80]"
                  }`}
              >
                Troubleshooting technical issues, supporting users, and developing
                practical problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SKILLS */}
      {/* SKILLS */}
      <section
        id="skills"
        className={`relative scroll-mt-24 overflow-hidden border-y transition-colors duration-700 ${dark
          ? "border-white/10 bg-[#100d25]"
          : "border-[#e8ddd2] bg-[#f8f1ff]"
          }`}
      >
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#7c3aed]/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#06b6d4]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28">
          {/* HEADER */}
          <div className="relative max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-[#8b5cf6] to-[#67e8f9]" />

              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#a78bfa]">
                Skills & Toolkit
              </p>
            </div>

            <h2 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Tools behind
              <span className="mt-2 block bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#67e8f9] bg-clip-text text-transparent">
                what I build.
              </span>
            </h2>

            <p
              className={`mt-6 max-w-2xl text-sm leading-7 sm:text-base ${dark ? "text-white/50" : "text-[#766d80]"
                }`}
            >
              A growing toolkit shaped by frontend development, programming,
              AI integration, and real-world digital workflows.
            </p>
          </div>

          {/* SKILL CARDS */}
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {/* FRONTEND */}
            <div
              className={`group relative overflow-hidden rounded-[30px] border p-7 transition-all duration-700 hover:-translate-y-2 ${dark
                ? "border-white/10 bg-white/[0.035] hover:border-[#8b5cf6]/40 hover:bg-white/[0.05]"
                : "border-[#e5dce2] bg-white/70 hover:border-[#a855f7]/40 hover:shadow-[0_25px_70px_rgba(124,58,237,0.10)]"
                }`}
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#8b5cf6]/10 blur-[70px] transition-all duration-700 group-hover:scale-150 group-hover:bg-[#8b5cf6]/20" />

              <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#7c3aed] via-[#c084fc] to-transparent transition-all duration-700 group-hover:w-full" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#a78bfa]">
                      FRONTEND
                    </span>

                    <h3
                      className={`mt-3 text-xl font-black ${dark ? "text-white" : "text-[#211b35]"
                        }`}
                    >
                      Frontend Development
                    </h3>
                  </div>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ${dark
                      ? "border-[#8b5cf6]/20 bg-[#8b5cf6]/10 text-[#c4b5fd]"
                      : "border-[#a855f7]/20 bg-[#f3e8ff] text-[#7c3aed]"
                      }`}
                  >
                    &lt;/&gt;
                  </div>
                </div>

                <p
                  className={`mt-5 max-w-xl text-xs leading-6 ${dark ? "text-white/45" : "text-[#766d80]"
                    }`}
                >
                  Building responsive, interactive interfaces with modern frontend
                  technologies and component-based architecture.
                </p>

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
                  ].map((skill, index) => (
                    <span
                      key={skill}
                      className={`cursor-default rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-1 ${dark
                        ? "border-white/10 bg-white/[0.035] text-white/60 hover:border-[#a78bfa]/40 hover:bg-[#8b5cf6]/10 hover:text-[#c4b5fd]"
                        : "border-[#e5dce2] bg-[#faf8fc] text-[#625a70] hover:border-[#a855f7]/40 hover:bg-[#f3e8ff] hover:text-[#7c3aed]"
                        }`}
                      style={{
                        animationDelay: `${index * 40}ms`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* PROGRAMMING */}
            <div
              className={`group relative overflow-hidden rounded-[30px] border p-7 transition-all duration-700 hover:-translate-y-2 ${dark
                ? "border-white/10 bg-white/[0.035] hover:border-[#06b6d4]/40 hover:bg-white/[0.05]"
                : "border-[#e5dce2] bg-white/70 hover:border-[#06b6d4]/40 hover:shadow-[0_25px_70px_rgba(6,182,212,0.10)]"
                }`}
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#06b6d4]/10 blur-[70px] transition-all duration-700 group-hover:scale-150 group-hover:bg-[#06b6d4]/20" />

              <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#06b6d4] via-[#67e8f9] to-transparent transition-all duration-700 group-hover:w-full" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#06b6d4]">
                      PROGRAMMING
                    </span>

                    <h3
                      className={`mt-3 text-xl font-black ${dark ? "text-white" : "text-[#211b35]"
                        }`}
                    >
                      Programming & APIs
                    </h3>
                  </div>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-lg transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 ${dark
                      ? "border-[#06b6d4]/20 bg-[#06b6d4]/10 text-[#67e8f9]"
                      : "border-[#06b6d4]/20 bg-[#ecfeff] text-[#0891b2]"
                      }`}
                  >
                    {"{ }"}
                  </div>
                </div>

                <p
                  className={`mt-5 max-w-xl text-xs leading-6 ${dark ? "text-white/45" : "text-[#766d80]"
                    }`}
                >
                  Working with programming languages, APIs, data formats, version
                  control, and application communication.
                </p>

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
              className={`group relative overflow-hidden rounded-[30px] border p-7 transition-all duration-700 hover:-translate-y-2 ${dark
                ? "border-white/10 bg-white/[0.035] hover:border-[#f0abfc]/40 hover:bg-white/[0.05]"
                : "border-[#e5dce2] bg-white/70 hover:border-[#f0abfc]/40 hover:shadow-[0_25px_70px_rgba(240,171,252,0.10)]"
                }`}
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#f0abfc]/10 blur-[70px] transition-all duration-700 group-hover:scale-150 group-hover:bg-[#f0abfc]/20" />

              <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#f0abfc] via-[#c084fc] to-transparent transition-all duration-700 group-hover:w-full" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#f0abfc]">
                     AI + DESIGN
                    </span>

                    <h3
                      className={`mt-3 text-xl font-black ${dark ? "text-white" : "text-[#211b35]"
                        }`}
                    >
                      AI & Design
                    </h3>
                  </div>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ${dark
                      ? "border-[#f0abfc]/20 bg-[#f0abfc]/10 text-[#f0abfc]"
                      : "border-[#f0abfc]/30 bg-[#fff5ff] text-[#c026d3]"
                      }`}
                  >
                    ✦
                  </div>
                </div>

                <p
                  className={`mt-5 max-w-xl text-xs leading-6 ${dark ? "text-white/45" : "text-[#766d80]"
                    }`}
                >
                  Exploring AI-powered interfaces while combining development with
                  visual design and productivity tools.
                </p>

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
              className={`group relative overflow-hidden rounded-[30px] border p-7 transition-all duration-700 hover:-translate-y-2 ${dark
                ? "border-white/10 bg-white/[0.035] hover:border-[#a78bfa]/40 hover:bg-white/[0.05]"
                : "border-[#e5dce2] bg-white/70 hover:border-[#a78bfa]/40 hover:shadow-[0_25px_70px_rgba(124,58,237,0.10)]"
                }`}
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#a78bfa]/10 blur-[70px] transition-all duration-700 group-hover:scale-150 group-hover:bg-[#a78bfa]/20" />

              <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#8b5cf6] via-[#67e8f9] to-transparent transition-all duration-700 group-hover:w-full" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#a78bfa]">
                      WORKFLOW
                    </span>

                    <h3
                      className={`mt-3 text-xl font-black ${dark ? "text-white" : "text-[#211b35]"
                        }`}
                    >
                      Workflow
                    </h3>
                  </div>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-lg transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 ${dark
                      ? "border-[#a78bfa]/20 bg-[#a78bfa]/10 text-[#c4b5fd]"
                      : "border-[#a78bfa]/20 bg-[#f5f0ff] text-[#7c3aed]"
                      }`}
                  >
                    ↗
                  </div>
                </div>

                <p
                  className={`mt-5 max-w-xl text-xs leading-6 ${dark ? "text-white/45" : "text-[#766d80]"
                    }`}
                >
                  Organizing projects with version control, reusable components,
                  responsive layouts, APIs, and iterative development.
                </p>

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
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8b5cf6]/30 to-transparent" />

            <span
              className={`text-[10px] font-bold uppercase tracking-[0.25em] ${dark ? "text-white/30" : "text-[#a397a7]"
                }`}
            >
              Always learning · Always building
            </span>

            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#06b6d4]/30 to-transparent" />
          </div>
        </div>
      </section>

      <section
        id="technologies"
        className={`relative overflow-hidden py-10 ${dark ? "bg-[#0a0718]" : "bg-[#fcf9ff]"
          }`}
      >
        {/* BACKGROUND GRID */}
        <div
          className={`pointer-events-none absolute inset-0 opacity-30 ${dark
            ? "bg-[linear-gradient(rgba(139,92,246,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.07)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(124,58,237,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.06)_1px,transparent_1px)]"
            } bg-[size:48px_48px] animate-[techGrid_18s_linear_infinite]`}
        />

        {/* AMBIENT GLOWS */}
        <div
          className={`pointer-events-none absolute left-[3%] top-[10%] h-[300px] w-[300px] rounded-full blur-[110px] ${dark ? "bg-[#7c3aed]/18" : "bg-[#a855f7]/12"
            } animate-[techOrbOne_14s_ease-in-out_infinite]`}
        />

        <div
          className={`pointer-events-none absolute right-[0%] top-[32%] h-[280px] w-[280px] rounded-full blur-[110px] ${dark ? "bg-[#06b6d4]/15" : "bg-[#67e8f9]/12"
            } animate-[techOrbTwo_17s_ease-in-out_infinite]`}
        />

        <div
          className={`pointer-events-none absolute bottom-[0%] left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full blur-[110px] ${dark ? "bg-[#c084fc]/12" : "bg-[#c084fc]/10"
            } animate-[techOrbThree_15s_ease-in-out_infinite]`}
        />

        {/* LARGE ORBITS */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 lg:block">
          {/* Outer orbit */}
          <div
            className={`absolute inset-0 rounded-full border ${dark ? "border-[#8b5cf6]/25" : "border-[#8b5cf6]/18"
              }`}
          />

          <div className="absolute inset-0 animate-[techOrbitOne_58s_linear_infinite] rounded-full border border-transparent border-t-[#8b5cf6]/65 border-r-[#c084fc]/20">
            <div className="absolute left-1/2 top-[-9px] h-[18px] w-[18px] -translate-x-1/2 rounded-full bg-[#c084fc] shadow-[0_0_20px_7px_rgba(192,132,252,0.45)]" />
          </div>

          <div className="absolute inset-0 animate-[techOrbitOne_38s_linear_infinite_reverse] rounded-full">
            <div className="absolute right-[9%] top-[17%] h-4 w-4 rounded-full bg-[#67e8f9] shadow-[0_0_25px_8px_rgba(103,232,249,0.4)]" />
          </div>

          {/* Middle orbit */}
          <div
            className={`absolute left-1/2 top-1/2 h-[590px] w-[590px] -translate-x-1/2 -translate-y-1/2 rounded-full border ${dark ? "border-[#06b6d4]/25" : "border-[#06b6d4]/16"
              }`}
          />

          <div className="absolute left-1/2 top-1/2 h-[590px] w-[590px] -translate-x-1/2 -translate-y-1/2 animate-[techOrbitTwo_46s_linear_infinite] rounded-full border border-transparent border-b-[#06b6d4]/65 border-l-[#67e8f9]/20">
            <div className="absolute bottom-[-8px] left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#67e8f9] shadow-[0_0_23px_8px_rgba(103,232,249,0.4)]" />
          </div>

          <div className="absolute left-1/2 top-1/2 h-[590px] w-[590px] -translate-x-1/2 -translate-y-1/2 animate-[techOrbitTwo_31s_linear_infinite_reverse] rounded-full">
            <div className="absolute left-[7%] top-[18%] h-3.5 w-3.5 rounded-full bg-[#a78bfa] shadow-[0_0_22px_7px_rgba(167,139,250,0.4)]" />
          </div>

          {/* Inner orbit */}
          <div
            className={`absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border ${dark ? "border-[#c084fc]/20" : "border-[#c084fc]/14"
              }`}
          />

          <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 animate-[techOrbitOne_27s_linear_infinite] rounded-full border border-transparent border-t-[#c084fc]/60">
            <div className="absolute right-[-7px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-[#c084fc] shadow-[0_0_22px_7px_rgba(192,132,252,0.4)]" />
          </div>

          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/5 blur-[2px]" />
        </div>

        {/* FLOATING PARTICLES */}
        <div className="pointer-events-none absolute left-[8%] top-[22%] h-2 w-2 rounded-full bg-[#67e8f9] shadow-[0_0_18px_5px_rgba(103,232,249,0.4)] animate-[techParticle_5s_ease-in-out_infinite]" />

        <div className="pointer-events-none absolute right-[12%] top-[18%] h-2.5 w-2.5 rounded-full bg-[#c084fc] shadow-[0_0_20px_6px_rgba(192,132,252,0.4)] animate-[techParticle_6s_ease-in-out_infinite_1s]" />

        <div className="pointer-events-none absolute bottom-[18%] left-[12%] h-2 w-2 rounded-full bg-[#a78bfa] shadow-[0_0_18px_5px_rgba(167,139,250,0.4)] animate-[techParticle_5.5s_ease-in-out_infinite_0.5s]" />

        <div className="pointer-events-none absolute bottom-[15%] right-[9%] h-2 w-2 rounded-full bg-[#67e8f9] shadow-[0_0_18px_5px_rgba(103,232,249,0.4)] animate-[techParticle_6.5s_ease-in-out_infinite_1.5s]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          {/* HEADER */}
          <div className="mb-5 max-w-2xl">
            <div className="mb-2 flex items-center gap-3">
              <span
                className={`h-px w-8 ${dark ? "bg-[#8b5cf6]" : "bg-[#7c3aed]"
                  }`}
              />

              <span
                className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${dark ? "text-[#a78bfa]" : "text-[#7c3aed]"
                  }`}
              >
                Technologies
              </span>
            </div>

            <h2
              className={`text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-[#171717]"
                }`}
            >
              Tools I use to
              <span
                className={`block ${dark ? "text-[#c084fc]" : "text-[#7c3aed]"
                  }`}
              >
                build & solve.
              </span>
            </h2>

            <p
              className={`mt-2 max-w-xl text-sm leading-5 ${dark ? "text-white/50" : "text-black/50"
                }`}
            >
              A visual overview of the technologies, development tools and
              technical skills I am currently building with.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid gap-3 md:grid-cols-2">
            {/* FRONTEND */}
            <div
              className={`group relative overflow-hidden rounded-[18px] border px-4 py-3 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${dark
                ? "border-white/8 bg-white/[0.035] hover:border-[#8b5cf6]/45 hover:bg-white/[0.055] hover:shadow-[0_0_45px_rgba(139,92,246,0.15)]"
                : "border-black/8 bg-white/55 hover:border-[#8b5cf6]/30 hover:bg-white/80 hover:shadow-[0_0_45px_rgba(139,92,246,0.10)]"
                }`}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#8b5cf6]/15 opacity-0 blur-[55px] transition-opacity duration-500 group-hover:opacity-100" />

              <div className="pointer-events-none absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-[#c084fc] to-transparent animate-[techLine_5s_ease-in-out_infinite] group-hover:h-[2px]" />

              <div className="relative z-10 mb-2.5">

                <h3
                  className={`mt-0.5 text-base font-semibold ${dark ? "text-white" : "text-[#171717]"
                    }`}
                >
                  Frontend Development
                </h3>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-x-5 gap-y-2">
                {[
                  ["HTML5", 100],
                  ["CSS3", 100],
                  ["JavaScript", 100],
                  ["Tailwind", 90],
                  ["React", 60],
                  ["Next.js", 55],
                  ["Bootstrap", 85],
                  ["TypeScript", 45],
                ].map(([name, level]) => (
                  <div key={name as string}>
                    <div className="mb-1">
                      <span
                        className={`text-[10px] font-medium ${dark ? "text-white/70" : "text-black/65"
                          }`}
                      >
                        {name as string}
                      </span>
                    </div>

                    <div
                      className={`relative h-[2px] w-full overflow-hidden rounded-full ${dark ? "bg-white/8" : "bg-black/8"
                        }`}
                    >
                      <div
                        className="relative h-full rounded-full bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#67e8f9]"
                        style={{ width: `${level}%` }}
                      >
                        <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#67e8f9] shadow-[0_0_9px_rgba(103,232,249,0.95)]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PROGRAMMING */}
            <div
              className={`group relative overflow-hidden rounded-[18px] border px-4 py-3 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${dark
                ? "border-white/8 bg-white/[0.035] hover:border-[#06b6d4]/45 hover:bg-white/[0.055] hover:shadow-[0_0_45px_rgba(6,182,212,0.15)]"
                : "border-black/8 bg-white/55 hover:border-[#06b6d4]/30 hover:bg-white/80 hover:shadow-[0_0_45px_rgba(6,182,212,0.10)]"
                }`}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#06b6d4]/15 opacity-0 blur-[55px] transition-opacity duration-500 group-hover:opacity-100" />

              <div className="pointer-events-none absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-[#67e8f9] to-transparent animate-[techLine_5s_ease-in-out_infinite_1s] group-hover:h-[2px]" />

              <div className="relative z-10 mb-2.5">

                <h3
                  className={`mt-0.5 text-base font-semibold ${dark ? "text-white" : "text-[#171717]"
                    }`}
                >
                  Programming & APIs
                </h3>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-x-5 gap-y-2">
                {[
                  ["C++", 95],
                  ["C#", 80],
                  ["Python", 75],
                  ["REST API", 75],
                  ["JSON", 85],
                  ["Git", 90],
                  ["GitHub", 90],
                ].map(([name, level]) => (
                  <div key={name as string}>
                    <div className="mb-1">
                      <span
                        className={`text-[10px] font-medium ${dark ? "text-white/70" : "text-black/65"
                          }`}
                      >
                        {name as string}
                      </span>
                    </div>

                    <div
                      className={`relative h-[2px] w-full overflow-hidden rounded-full ${dark ? "bg-white/8" : "bg-black/8"
                        }`}
                    >
                      <div
                        className="relative h-full rounded-full bg-gradient-to-r from-[#06b6d4] via-[#67e8f9] to-[#a78bfa]"
                        style={{ width: `${level}%` }}
                      >
                        <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#67e8f9] shadow-[0_0_9px_rgba(103,232,249,0.95)]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI & DESIGN */}
            <div
              className={`group relative overflow-hidden rounded-[18px] border px-4 py-3 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${dark
                ? "border-white/8 bg-white/[0.035] hover:border-[#c084fc]/45 hover:bg-white/[0.055] hover:shadow-[0_0_45px_rgba(192,132,252,0.15)]"
                : "border-black/8 bg-white/55 hover:border-[#c084fc]/30 hover:bg-white/80 hover:shadow-[0_0_45px_rgba(192,132,252,0.10)]"
                }`}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#c084fc]/15 opacity-0 blur-[55px] transition-opacity duration-500 group-hover:opacity-100" />

              <div className="pointer-events-none absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-[#c084fc] to-transparent animate-[techLine_5s_ease-in-out_infinite_2s] group-hover:h-[2px]" />

              <div className="relative z-10 mb-2.5">

                <h3
                  className={`mt-0.5 text-base font-semibold ${dark ? "text-white" : "text-[#171717]"
                    }`}
                >
                  AI & Design
                </h3>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-x-5 gap-y-2">
                {[
                  ["AI Integration", 65],
                  ["Figma", 45],
                  ["Canva", 90],
                  ["Word", 90],
                  ["PowerPoint", 90],
                  ["Excel", 80],
                ].map(([name, level]) => (
                  <div key={name as string}>
                    <div className="mb-1">
                      <span
                        className={`text-[10px] font-medium ${dark ? "text-white/70" : "text-black/65"
                          }`}
                      >
                        {name as string}
                      </span>
                    </div>

                    <div
                      className={`relative h-[2px] w-full overflow-hidden rounded-full ${dark ? "bg-white/8" : "bg-black/8"
                        }`}
                    >
                      <div
                        className="relative h-full rounded-full bg-gradient-to-r from-[#c084fc] via-[#a78bfa] to-[#67e8f9]"
                        style={{ width: `${level}%` }}
                      >
                        <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#c084fc] shadow-[0_0_9px_rgba(192,132,252,0.95)]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SUPPORT & WORKFLOW */}
            <div
              className={`group relative overflow-hidden rounded-[18px] border px-4 py-3 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${dark
                ? "border-white/8 bg-white/[0.035] hover:border-[#67e8f9]/45 hover:bg-white/[0.055] hover:shadow-[0_0_45px_rgba(103,232,249,0.15)]"
                : "border-black/8 bg-white/55 hover:border-[#67e8f9]/30 hover:bg-white/80 hover:shadow-[0_0_45px_rgba(103,232,249,0.10)]"
                }`}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#67e8f9]/15 opacity-0 blur-[55px] transition-opacity duration-500 group-hover:opacity-100" />

              <div className="pointer-events-none absolute left-0 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-[#67e8f9] to-transparent animate-[techLine_5s_ease-in-out_infinite_3s] group-hover:h-[2px]" />

              <div className="relative z-10 mb-2.5">
                <h3
                  className={`mt-0.5 text-base font-semibold ${dark ? "text-white" : "text-[#171717]"
                    }`}
                >
                  Support & Workflow
                </h3>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-x-5 gap-y-2">
                {[
                  ["Technical Support", 75],
                  ["Troubleshooting", 80],
                  ["Component Design", 75],
                  ["Responsive Design", 90],
                  ["Problem Solving", 85],
                  ["Team Collaboration", 85],
                ].map(([name, level]) => (
                  <div key={name as string}>
                    <div className="mb-1">
                      <span
                        className={`text-[10px] font-medium ${dark ? "text-white/70" : "text-black/65"
                          }`}
                      >
                        {name as string}
                      </span>
                    </div>

                    <div
                      className={`relative h-[2px] w-full overflow-hidden rounded-full ${dark ? "bg-white/8" : "bg-black/8"
                        }`}
                    >
                      <div
                        className="relative h-full rounded-full bg-gradient-to-r from-[#67e8f9] via-[#06b6d4] to-[#8b5cf6]"
                        style={{ width: `${level}%` }}
                      >
                        <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#67e8f9] shadow-[0_0_9px_rgba(103,232,249,0.95)]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className={`relative overflow-hidden scroll-mt-24 py-24 ${dark ? "bg-[#090718]" : "bg-[#fcf9ff]"
          }`}
      >
        {/* PROJECTS BACKGROUND */}

        {/* Soft moving glow */}
        <div
          className={`pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full blur-[120px] ${dark ? "bg-[#7c3aed]/12" : "bg-[#a855f7]/10"
            }`}
          style={{
            animation: "techOrbOne 12s ease-in-out infinite",
          }}
        />

        <div
          className={`pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full blur-[120px] ${dark ? "bg-[#06b6d4]/10" : "bg-[#67e8f9]/10"
            }`}
          style={{
            animation: "techOrbTwo 15s ease-in-out infinite",
          }}
        />

        {/* Large decorative orbit */}
        <div
          className={`pointer-events-none absolute left-1/2 top-[55%] h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border ${dark ? "border-[#8b5cf6]/[0.07]" : "border-[#a855f7]/[0.08]"
            }`}
          style={{
            animation: "techOrbitOne 60s linear infinite",
          }}
        >
          <div
            className={`absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full ${dark
              ? "bg-[#67e8f9] shadow-[0_0_20px_rgba(103,232,249,0.9)]"
              : "bg-[#06b6d4] shadow-[0_0_20px_rgba(6,182,212,0.45)]"
              }`}
          />
        </div>

        {/* Second orbit */}
        <div
          className={`pointer-events-none absolute left-1/2 top-[55%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border ${dark ? "border-[#06b6d4]/[0.06]" : "border-[#06b6d4]/[0.07]"
            }`}
          style={{
            animation: "techOrbitTwo 42s linear infinite",
          }}
        >
          <div
            className={`absolute bottom-8 right-10 h-2 w-2 rounded-full ${dark
              ? "bg-[#c084fc] shadow-[0_0_18px_rgba(192,132,252,0.9)]"
              : "bg-[#a855f7] shadow-[0_0_18px_rgba(168,85,247,0.4)]"
              }`}
          />
        </div>

        {/* Small floating particles */}
        <div
          className={`pointer-events-none absolute left-[12%] top-[30%] h-1.5 w-1.5 rounded-full ${dark
            ? "bg-[#67e8f9] shadow-[0_0_12px_rgba(103,232,249,0.9)]"
            : "bg-[#06b6d4] shadow-[0_0_12px_rgba(6,182,212,0.35)]"
            }`}
          style={{
            animation: "techParticle 5s ease-in-out infinite",
          }}
        />

        <div
          className={`pointer-events-none absolute right-[15%] top-[22%] h-1.5 w-1.5 rounded-full ${dark
            ? "bg-[#c084fc] shadow-[0_0_12px_rgba(192,132,252,0.9)]"
            : "bg-[#a855f7] shadow-[0_0_12px_rgba(168,85,247,0.35)]"
            }`}
          style={{
            animation: "techParticle 6s ease-in-out infinite 1s",
          }}
        />

        <div
          className={`pointer-events-none absolute bottom-[18%] left-[28%] h-1 w-1 rounded-full ${dark
            ? "bg-[#8b5cf6] shadow-[0_0_10px_rgba(139,92,246,0.9)]"
            : "bg-[#8b5cf6] shadow-[0_0_10px_rgba(139,92,246,0.35)]"
            }`}
          style={{
            animation: "techParticle 7s ease-in-out infinite 2s",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]" />

                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#a78bfa]">
                  My Projects
                </p>
              </div>

              <h2
                className={`text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl ${dark ? "text-white" : "text-[#211b35]"
                  }`}
              >
                A selection of{" "}
                <span className="bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#67e8f9] bg-clip-text text-transparent">
                  my work.
                </span>
              </h2>
            </div>

            <p
              className={`max-w-md text-sm leading-7 transition-colors duration-700 ${dark ? "text-white/55" : "text-[#766d80]"
                }`}
            >
              A collection of frontend projects built while learning,
              experimenting, and working with modern web technologies.
            </p>
          </div>

          {/* Projects */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group relative flex min-h-[390px] flex-col overflow-hidden rounded-[30px] border p-7 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.015] ${dark
                  ? "border-white/[0.09] bg-white/[0.035] backdrop-blur-xl hover:border-[#8b5cf6]/45 hover:bg-white/[0.055] hover:shadow-[0_25px_70px_rgba(124,58,237,0.18)]"
                  : "border-[#e6ddd3] bg-white/75 shadow-sm backdrop-blur-xl hover:border-[#a855f7]/45 hover:shadow-[0_25px_70px_rgba(168,85,247,0.14)]"
                  }`}
              >
                {/* Card glow */}
                <div
                  className={`absolute -right-20 -top-20 h-48 w-48 rounded-full blur-[70px] transition-all duration-700 group-hover:scale-150 ${index % 2 === 0
                    ? dark
                      ? "bg-[#8b5cf6]/10 group-hover:bg-[#8b5cf6]/20"
                      : "bg-[#a855f7]/10 group-hover:bg-[#a855f7]/15"
                    : dark
                      ? "bg-[#06b6d4]/10 group-hover:bg-[#06b6d4]/20"
                      : "bg-[#06b6d4]/10 group-hover:bg-[#06b6d4]/15"
                    }`}
                />

                {/* Bottom glow */}
                <div
                  className={`absolute -bottom-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-[70px] opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${index % 2 === 0
                    ? "bg-[#7c3aed]/20"
                    : "bg-[#06b6d4]/20"
                    }`}
                />

                {/* Existing moving shine — kept and enhanced */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-[1200ms] ease-out group-hover:translate-x-full" />

                {/* Thin animated top line */}
                <div className="pointer-events-none absolute left-0 top-0 h-px w-full overflow-hidden">
                  <div
                    className={`h-full w-1/3 bg-gradient-to-r from-transparent ${index % 2 === 0
                      ? "via-[#a78bfa] to-transparent"
                      : "via-[#67e8f9] to-transparent"
                      }`}
                    style={{
                      animation: `techLine ${4 + index * 0.6
                        }s ease-in-out infinite`,
                    }}
                  />
                </div>

                {/* Top row */}
                <div className="relative flex items-center justify-between">
                  <span
                    className={`text-sm font-bold tracking-wider ${dark ? "text-white/35" : "text-[#c7bcc9]"
                      }`}
                  >
                    {project.number}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] ${dark
                      ? "border-white/10 bg-white/[0.025] text-white/50"
                      : "border-[#e5dce2] bg-white/70 text-[#8b7f8c]"
                      }`}
                  >
                    Project
                  </span>
                </div>

                {/* Main content */}
                <div className="relative mt-10 flex-1">
                  <h3
                    className={`text-2xl font-black tracking-tight transition-all duration-300 ${dark
                      ? "text-white group-hover:text-[#d8ccff]"
                      : "text-[#211b35] group-hover:text-[#7c3aed]"
                      }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`mt-4 text-sm leading-7 ${dark ? "text-white/60" : "text-[#6d6572]"
                      }`}
                  >
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 group-hover:-translate-y-0.5 ${dark
                          ? "border-[#8b5cf6]/10 bg-[#8b5cf6]/10 text-[#c4b5fd]"
                          : "border-[#e9d5ff] bg-[#f3e8ff] text-[#7c3aed]"
                          }`}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom buttons */}
                <div className="relative mt-8 flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                    className="rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(139,92,246,0.35)]"
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

                {/* Corner accent */}
                <div
                  className={`absolute bottom-0 right-0 h-16 w-16 rounded-tl-[40px] opacity-0 transition-all duration-500 group-hover:opacity-100 ${index % 2 === 0
                    ? "bg-gradient-to-tl from-[#7c3aed]/10"
                    : "bg-gradient-to-tl from-[#06b6d4]/10"
                    }`}
                />
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* EXPERIENCE */}
      \<section
        id="experience"
        className={`relative scroll-mt-24 overflow-hidden border-y transition-colors duration-700 ${dark
            ? "border-white/10 bg-[#100d25]"
            : "border-[#e8ddd2] bg-[#f8f1ff]"
          }`}
      >
        {/* BACKGROUND ORBITS */}

        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full border ${dark ? "border-[#8b5cf6]/[0.07]" : "border-[#a855f7]/[0.08]"
            }`}
          style={{
            animation: "techOrbitOne 65s linear infinite",
          }}
        >
          <div
            className={`absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full ${dark
                ? "bg-[#8b5cf6] shadow-[0_0_18px_rgba(139,92,246,0.8)]"
                : "bg-[#a855f7] shadow-[0_0_18px_rgba(168,85,247,0.35)]"
              }`}
          />
        </div>

        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 h-[590px] w-[590px] -translate-x-1/2 -translate-y-1/2 rounded-full border ${dark ? "border-[#06b6d4]/[0.055]" : "border-[#06b6d4]/[0.07]"
            }`}
          style={{
            animation: "techOrbitTwo 48s linear infinite",
          }}
        >
          <div
            className={`absolute bottom-8 right-12 h-2 w-2 rounded-full ${dark
                ? "bg-[#67e8f9] shadow-[0_0_16px_rgba(103,232,249,0.8)]"
                : "bg-[#06b6d4] shadow-[0_0_16px_rgba(6,182,212,0.3)]"
              }`}
          />
        </div>

        {/* Soft ambient glows */}

        <div
          className={`pointer-events-none absolute -left-40 top-20 h-[360px] w-[360px] rounded-full blur-[120px] ${dark ? "bg-[#7c3aed]/10" : "bg-[#a855f7]/8"
            }`}
          style={{
            animation: "techOrbOne 14s ease-in-out infinite",
          }}
        />

        <div
          className={`pointer-events-none absolute -right-40 bottom-10 h-[380px] w-[380px] rounded-full blur-[120px] ${dark ? "bg-[#06b6d4]/8" : "bg-[#67e8f9]/8"
            }`}
          style={{
            animation: "techOrbTwo 17s ease-in-out infinite",
          }}
        />

        {/* Small floating points */}

        <div
          className={`pointer-events-none absolute left-[10%] top-[28%] h-1.5 w-1.5 rounded-full ${dark
              ? "bg-[#a78bfa] shadow-[0_0_12px_rgba(167,139,250,0.8)]"
              : "bg-[#8b5cf6] shadow-[0_0_12px_rgba(139,92,246,0.3)]"
            }`}
          style={{
            animation: "techParticle 6s ease-in-out infinite",
          }}
        />

        <div
          className={`pointer-events-none absolute right-[12%] top-[18%] h-1.5 w-1.5 rounded-full ${dark
              ? "bg-[#67e8f9] shadow-[0_0_12px_rgba(103,232,249,0.8)]"
              : "bg-[#06b6d4] shadow-[0_0_12px_rgba(6,182,212,0.3)]"
            }`}
          style={{
            animation: "techParticle 7s ease-in-out infinite 1s",
          }}
        />

        <div
          className={`pointer-events-none absolute bottom-[18%] right-[25%] h-1 w-1 rounded-full ${dark
              ? "bg-[#f0abfc] shadow-[0_0_10px_rgba(240,171,252,0.8)]"
              : "bg-[#a855f7] shadow-[0_0_10px_rgba(168,85,247,0.3)]"
            }`}
          style={{
            animation: "techParticle 8s ease-in-out infinite 2s",
          }}
        />

        {/* CONTENT */}

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#a78bfa]">
              Experience
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              My current journey.
            </h2>

            <p
              className={`mt-5 text-base leading-7 ${dark ? "text-white/60" : "text-[#766d80]"
                }`}
            >
              A timeline of my education, internships, projects, and leadership
              experience.
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
                        backgroundColor: dark ? "#100d25" : "#f8f1ff",
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
                                  ? "border-white/10 bg-white/[0.04] text-white/60"
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
                          className={`shrink-0 text-sm font-medium ${dark ? "text-white/60" : "text-[#91858f]"
                            }`}
                        >
                          {experience.date}
                        </span>
                      </div>

                      <p
                        className={`relative mt-5 max-w-3xl leading-7 ${dark ? "text-white/65" : "text-[#6d6572]"
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
     <section
  id="contact"
  className={`relative scroll-mt-24 overflow-hidden border-t ${
    dark
      ? "border-white/10 bg-[#090718]"
      : "border-[#e8ddd2] bg-[#fcf9ff]"
  }`}
>
  {/* BACKGROUND */}

  <div
    className={`pointer-events-none absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border ${
      dark ? "border-[#8b5cf6]/[0.055]" : "border-[#a855f7]/[0.06]"
    }`}
    style={{
      animation: "techOrbitOne 75s linear infinite",
    }}
  >
    <div
      className={`absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full ${
        dark
          ? "bg-[#67e8f9] shadow-[0_0_18px_rgba(103,232,249,0.9)]"
          : "bg-[#06b6d4]"
      }`}
    />
  </div>

  <div
    className={`pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border ${
      dark ? "border-[#06b6d4]/[0.045]" : "border-[#06b6d4]/[0.06]"
    }`}
    style={{
      animation: "techOrbitTwo 52s linear infinite",
    }}
  >
    <div
      className={`absolute bottom-4 right-12 h-2 w-2 rounded-full ${
        dark
          ? "bg-[#c084fc] shadow-[0_0_18px_rgba(192,132,252,0.8)]"
          : "bg-[#a855f7]"
      }`}
    />
  </div>

  <div
    className={`pointer-events-none absolute -left-40 top-10 h-[380px] w-[380px] rounded-full blur-[130px] ${
      dark ? "bg-[#7c3aed]/10" : "bg-[#a855f7]/08"
    }`}
    style={{
      animation: "techOrbOne 15s ease-in-out infinite",
    }}
  />

  <div
    className={`pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full blur-[130px] ${
      dark ? "bg-[#06b6d4]/08" : "bg-[#67e8f9]/08"
    }`}
    style={{
      animation: "techOrbTwo 18s ease-in-out infinite",
    }}
  />

  {/* SMALL FLOATING DOTS */}

  <div
    className={`pointer-events-none absolute left-[9%] top-[25%] h-1.5 w-1.5 rounded-full ${
      dark
        ? "bg-[#a78bfa] shadow-[0_0_12px_rgba(167,139,250,0.9)]"
        : "bg-[#8b5cf6]"
    }`}
    style={{
      animation: "techParticle 6s ease-in-out infinite",
    }}
  />

  <div
    className={`pointer-events-none absolute right-[10%] top-[30%] h-1.5 w-1.5 rounded-full ${
      dark
        ? "bg-[#67e8f9] shadow-[0_0_12px_rgba(103,232,249,0.9)]"
        : "bg-[#06b6d4]"
    }`}
    style={{
      animation: "techParticle 7s ease-in-out infinite 1s",
    }}
  />

  {/* MAIN */}

  <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:py-24">
    <div
      className={`relative overflow-hidden rounded-[34px] border ${
        dark
          ? "border-white/10 bg-[#0d0a1d]/90 shadow-[0_30px_100px_rgba(76,29,149,0.16)]"
          : "border-[#e3d8e8] bg-white/80 shadow-[0_30px_100px_rgba(168,85,247,0.09)]"
      }`}
    >
      {/* TOP GLOW LINE */}

      <div className="absolute left-0 top-0 h-px w-full overflow-hidden">
        <div
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#a78bfa] to-transparent"
          style={{
            animation: "techLine 6s ease-in-out infinite",
          }}
        />
      </div>

      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
        {/* LEFT */}

        <div
          className={`relative overflow-hidden border-b p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12 ${
            dark
              ? "border-white/10 bg-gradient-to-br from-[#21154a]/70 via-[#120d27]/80 to-[#0d1728]/70"
              : "border-[#e5dce8] bg-gradient-to-br from-[#f5eaff] via-white to-[#e6faff]"
          }`}
        >
          {/* Decorative circle */}

          <div
            className={`absolute -right-28 -top-28 h-72 w-72 rounded-full blur-[90px] ${
              dark ? "bg-[#8b5cf6]/20" : "bg-[#a855f7]/15"
            }`}
          />

          <div
            className={`absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-[90px] ${
              dark ? "bg-[#06b6d4]/10" : "bg-[#67e8f9]/12"
            }`}
          />

          <div className="relative">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]" />

              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#a78bfa]">
                Get In Touch
              </span>
            </div>

            <h2
              className={`text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl ${
                dark ? "text-white" : "text-[#211b35]"
              }`}
            >
              Let&apos;s
              <br />
              <span className="bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#67e8f9] bg-clip-text text-transparent">
                talk.
              </span>
            </h2>

            <p
              className={`mt-7 max-w-sm text-sm leading-7 ${
                dark ? "text-white/50" : "text-[#6d6572]"
              }`}
            >
              Have an idea, a project, or simply want to connect? Send me a
              message and let&apos;s create something meaningful.
            </p>

            {/* CONTACT DETAILS */}

            <div className="mt-9 space-y-4">
              <a
                href="mailto:yunusovasevinc08@gmail.com"
                className="group flex items-center gap-3"
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border text-xs transition-all duration-300 group-hover:scale-110 ${
                    dark
                      ? "border-[#8b5cf6]/20 bg-[#8b5cf6]/10 text-[#c4b5fd]"
                      : "border-[#a855f7]/20 bg-[#f3e8ff] text-[#7c3aed]"
                  }`}
                >
                  @
                </span>

                <div>
                  <p
                    className={`text-[10px] font-bold uppercase tracking-[0.16em] ${
                      dark ? "text-white/30" : "text-[#91858f]"
                    }`}
                  >
                    Email
                  </p>

                  <p
                    className={`text-sm ${
                      dark
                        ? "text-white/70 group-hover:text-[#c4b5fd]"
                        : "text-[#4d4353] group-hover:text-[#7c3aed]"
                    }`}
                  >
                    yunusovasevinc08@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+994516411470"
                className="group flex items-center gap-3"
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border text-xs transition-all duration-300 group-hover:scale-110 ${
                    dark
                      ? "border-[#06b6d4]/20 bg-[#06b6d4]/10 text-[#67e8f9]"
                      : "border-[#06b6d4]/20 bg-[#e6faff] text-[#0891b2]"
                  }`}
                >
                  ☎
                </span>

                <div>
                  <p
                    className={`text-[10px] font-bold uppercase tracking-[0.16em] ${
                      dark ? "text-white/30" : "text-[#91858f]"
                    }`}
                  >
                    Phone
                  </p>

                  <p
                    className={`text-sm ${
                      dark
                        ? "text-white/70 group-hover:text-[#67e8f9]"
                        : "text-[#4d4353] group-hover:text-[#0891b2]"
                    }`}
                  >
                    +994 51 641 14 70
                  </p>
                </div>
              </a>
            </div>

            {/* SOCIAL LINKS */}

            <div className="mt-10 flex flex-wrap gap-2.5">
              <a
                href="https://www.linkedin.com/in/sevincxan%C4%B1m-yunusova-b21245397/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/sevincyunusova"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 hover:-translate-y-1 ${
                  dark
                    ? "border-white/10 text-white/65 hover:border-[#67e8f9]/40 hover:text-[#67e8f9]"
                    : "border-[#d9cddf] text-[#5d5361] hover:border-[#7c3aed]/50 hover:text-[#7c3aed]"
                }`}
              >
                GitHub ↗
              </a>

              <a
                href="https://canva.link/19vm7ro7zqvgspn"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 hover:-translate-y-1 ${
                  dark
                    ? "border-white/10 text-white/65 hover:border-[#a78bfa]/40 hover:text-[#a78bfa]"
                    : "border-[#d9cddf] text-[#5d5361] hover:border-[#7c3aed]/50 hover:text-[#7c3aed]"
                }`}
              >
                View CV ↗
              </a>
            </div>

            {/* CALENDLY */}

            <a
              href="https://calendly.com/yunusovasevinc08/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={`group mt-4 inline-flex items-center gap-2 text-xs font-semibold transition-all duration-300 ${
                dark
                  ? "text-[#67e8f9] hover:text-white"
                  : "text-[#0891b2] hover:text-[#7c3aed]"
              }`}
            >
              Book a meeting
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT — FORM */}

        <div className="p-8 sm:p-10 lg:p-12">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p
                className={`text-xs font-bold uppercase tracking-[0.22em] ${
                  dark ? "text-white/35" : "text-[#91858f]"
                }`}
              >
                Send a message
              </p>

              <h3
                className={`mt-2 text-2xl font-black ${
                  dark ? "text-white" : "text-[#211b35]"
                }`}
              >
                Start a conversation.
              </h3>
            </div>

            <div
              className={`hidden items-center gap-2 rounded-full border px-3 py-1.5 sm:flex ${
                dark
                  ? "border-white/10 bg-white/[0.03]"
                  : "border-[#e5dce8] bg-white"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#67e8f9] shadow-[0_0_10px_rgba(103,232,249,0.9)]" />

              <span
                className={`text-[10px] font-medium ${
                  dark ? "text-white/40" : "text-[#91858f]"
                }`}
              >
                Open to opportunities
              </span>
            </div>
          </div>

          <form
            onSubmit={async (e) => {
              e.preventDefault()
              setSending(true)
              setStatus("")

              try {
                const response = await fetch("/api/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(form),
                })

                const data = await response.json()

                if (!response.ok) {
                  throw new Error(data.error || "Failed to send message.")
                }

                setStatus("Message sent successfully!")

                setForm({
                  name: "",
                  email: "",
                  message: "",
                })
              } catch (error) {
                setStatus(
                  error instanceof Error
                    ? error.message
                    : "Failed to send message."
                )
              } finally {
                setSending(false)
              }
            }}
            className="space-y-5"
          >
            {/* NAME + EMAIL */}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className={`mb-2 block text-xs font-semibold ${
                    dark ? "text-white/55" : "text-[#5d5361]"
                  }`}
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  required
                  placeholder="Your name"
                  className={`w-full rounded-2xl border px-4 py-3.5 text-sm outline-none transition-all duration-300 ${
                    dark
                      ? "border-white/10 bg-white/[0.035] text-white placeholder:text-white/25 focus:border-[#a78bfa]/60 focus:bg-white/[0.055] focus:shadow-[0_0_25px_rgba(139,92,246,0.08)]"
                      : "border-[#ddd3e3] bg-white/70 text-[#332b40] placeholder:text-[#a39aa8] focus:border-[#a855f7] focus:shadow-[0_0_25px_rgba(168,85,247,0.08)]"
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`mb-2 block text-xs font-semibold ${
                    dark ? "text-white/55" : "text-[#5d5361]"
                  }`}
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  required
                  placeholder="your@email.com"
                  className={`w-full rounded-2xl border px-4 py-3.5 text-sm outline-none transition-all duration-300 ${
                    dark
                      ? "border-white/10 bg-white/[0.035] text-white placeholder:text-white/25 focus:border-[#a78bfa]/60 focus:bg-white/[0.055] focus:shadow-[0_0_25px_rgba(139,92,246,0.08)]"
                      : "border-[#ddd3e3] bg-white/70 text-[#332b40] placeholder:text-[#a39aa8] focus:border-[#a855f7] focus:shadow-[0_0_25px_rgba(168,85,247,0.08)]"
                  }`}
                />
              </div>
            </div>

            {/* MESSAGE */}

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="message"
                  className={`block text-xs font-semibold ${
                    dark ? "text-white/55" : "text-[#5d5361]"
                  }`}
                >
                  Message
                </label>

                <span
                  className={`text-[10px] ${
                    dark ? "text-white/25" : "text-[#a39aa8]"
                  }`}
                >
                  Let&apos;s create something.
                </span>
              </div>

              <textarea
                id="message"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                required
                rows={6}
                placeholder="Tell me about your idea..."
                className={`w-full resize-none rounded-2xl border px-4 py-3.5 text-sm outline-none transition-all duration-300 ${
                  dark
                    ? "border-white/10 bg-white/[0.035] text-white placeholder:text-white/25 focus:border-[#a78bfa]/60 focus:bg-white/[0.055] focus:shadow-[0_0_30px_rgba(139,92,246,0.08)]"
                    : "border-[#ddd3e3] bg-white/70 text-[#332b40] placeholder:text-[#a39aa8] focus:border-[#a855f7] focus:shadow-[0_0_30px_rgba(168,85,247,0.08)]"
                }`}
              />
            </div>

            {/* SUBMIT */}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <p
                className={`max-w-[220px] text-[11px] leading-5 ${
                  dark ? "text-white/30" : "text-[#91858f]"
                }`}
              >
                Your message will be sent directly to my inbox.
              </p>

              <button
                type="submit"
                disabled={sending}
                className="group rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a855f7] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(139,92,246,0.3)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="inline-flex items-center gap-2">
                  {sending ? "Sending..." : "Send Message"}

                  {!sending && (
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </span>
              </button>
            </div>

            {status && (
              <p
                className={`text-xs font-medium ${
                  status === "Message sent successfully!"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
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
          <p className={dark ? "text-white/60" : "text-[#8b7f8c]"}>
            © 2026 Sevincxanim Yunusova. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="https://github.com/sevincyunusova"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a78bfa] transition hover:text-[#a855f7]"
            >
              GitHub
            </a>

            <a
              href="mailto:yunusovasevinc08@gmail.com"
              className="text-[#a78bfa] transition hover:text-[#a855f7]"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}