"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cloud,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  X,
  Server,
  Trophy,
} from "lucide-react";

import Image from "next/image";
import { useState } from "react";

const skills = [
  {
    title: "Cloud",
    icon: Cloud,
    items: [
      "Microsoft Azure",
      "VM",
      "Azure Functions",
      "App Service",
      "Blob Storage",
      "Queue Storage",
      "VNet",
      "Load Balancer",
      "Azure Container Registry",
    ],
  },
  {
    title: "DevOps & CI/CD",
    icon: Server,
    items: [
      "Docker",
      "Jenkins",
      "Azure DevOps Pipelines",
      "GitHub Actions",
      "Git",
      "CI/CD",
      "GitOps",
    ],
  },
  {
    title: "Development",
    icon: Code2,
    items: ["Python", "Django", "Shell Scripting"],
  },
  {
    title: "Containers",
    icon: Server,
    items: ["Docker", "Kubernetes", "ArgoCD"],
  },
];

const projects = [
  {
    title: "Secure Cloud File Vault",
    description:
      "A cloud-based Django file management application using Azure Blob Storage and Queue Storage, deployed on an Azure VM with Docker and Azure Container Registry.",
    technologies: ["Python", "Django", "Azure", "Docker", "ACR"],
    github: "https://github.com/Brindha-V-C/Secure-Cloud-File-Vault",
    caseStudy: "/projects/secure-cloud-vault",
  },
  {
    title: "Spring Boot App CI/CD",
    description:
      "A multi-stage Jenkins pipeline that automates build, test, package, and deployment for a Spring Boot application, with Docker-based deployment.",
    technologies: ["Git", "Jenkins", "Docker", "Spring Boot", "SonarQube", "Azure VM"],
    github: "https://github.com/Brindha-V-C/springboot-App-cicd",
    caseStudy: "/projects/springboot-app-cicd",
  },
  {
    title: "Azure DevOps Automation",
    description:
      "A CI/CD workflow for a multi-microservice voting application using Azure Pipelines, Docker, ACR, Kubernetes, and GitOps-based ArgoCD deployments.",
    technologies: [
      "Azure Pipelines",
      "Docker",
      "ACR",
      "Kubernetes",
      "ArgoCD",
    ],
    github: "https://github.com/Brindha-V-C/Azure-Devops",
    caseStudy: "/projects/azure-devops-automation",
  },
];

const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    credential:
      "https://drive.google.com/file/d/1QHkV7Q36ce1BEATfoHqISJWMI2iIHF_n/view?usp=sharing",
  },
  {
    title: "NDG - Linux Unhatched",
    issuer: "Cisco Networking Academy",
    credential:
      "https://drive.google.com/file/d/11sWVfg_VKDQ1P84VnnUXoAUjmBVFab0w/view?usp=sharing",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    credential:
      "https://drive.google.com/file/d/1qwMF3lE05LpX9KTDvFHsq0OqdgLLDN3M/view?usp=sharing",
  },
  {
    title: "DevOps Support Administrator",
    issuer: "Infosys Springboard",
    credential:
      "https://drive.google.com/file/d/1Ali4BafMaW4iFzAfnNCc_wwSj46Pp4NN/view?usp=sharing",
  },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f8fa] text-slate-900">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="whitespace-nowrap text-lg font-bold tracking-tight text-white sm:text-xl"
          >
            Brindha V C<span className="text-sky-600"></span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-sky-400">About</a>
            <a href="#experience" className="transition hover:text-sky-400">Experience</a>
            <a href="#skills" className="transition hover:text-sky-400">Skills</a>
            <a href="#projects" className="transition hover:text-sky-400">Projects</a>
            <a href="#certifications" className="transition hover:text-sky-400">Certifications</a>
            <a href="#contact" className="transition hover:text-sky-400">Contact</a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-lg p-2 text-sky-400 transition hover:bg-slate-800 md:hidden"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-800 bg-slate-950 px-5 py-2 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col">
              {[
                ["About", "#about"],
                ["Experience", "#experience"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Certifications", "#certifications"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-slate-800 py-3 text-sm font-medium text-slate-300 last:border-b-0 hover:text-sky-400"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="mx-auto max-w-6xl px-5 pb-8 pt-24 sm:px-6 sm:pb-14 sm:pt-24 md:pb-24 md:pt-32"
      >
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_360px] lg:gap-16">
          <div className="max-w-4xl">
            <h1 className="whitespace-nowrap text-[2.15rem] font-bold tracking-tight text-slate-950 sm:text-5xl md:text-7xl">
              Hi, I&apos;m Brindha V C
            </h1>

            <p className="mt-5 max-w-3xl text-[1.35rem] font-medium leading-8 text-slate-700 sm:mt-6 sm:text-2xl sm:leading-relaxed md:text-3xl">
              Computer Science Graduate building reliable cloud and DevOps
              solutions.
            </p>

            <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-slate-500 sm:mt-6 sm:text-base md:text-lg">
              I work with Azure, CI/CD, Docker, Python, and modern deployment
              practices to build scalable and dependable software systems.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
              >
                View Projects
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://drive.google.com/file/d/1PWwDfMi7NMq6jP5EnXYGzsNFGcGHxQka/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 sm:w-auto"
              >
                View Resume
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-xl sm:h-64 sm:w-64 md:h-80 md:w-80">
              <Image
                src="/projects/profile/brindha-profile.png"
                alt="Brindha V C"
                fill
                priority
                sizes="(max-width: 639px) 13rem, (max-width: 1023px) 16rem, 20rem"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="About"
              title="A little about me"
            />
            <p className="mt-6 max-w-2xl leading-8 text-slate-600">
              Computer Science graduate with a strong foundation in cloud-based
              systems and DevOps practices. Hands-on experience with Azure,
              CI/CD, Docker, Python, and backend development through academic
              and project work.
            </p>
            <p className="mt-4 max-w-2xl leading-8 text-slate-600">
              I&apos;m interested in automation, deployment strategy, release
              management, reliability, and scalable cloud delivery.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#f7f8fa] p-6">
            <GraduationCap className="text-sky-600" size={25} />
            <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Education
            </p>
            <h3 className="mt-2 text-xl font-bold">
              B.E. - Computer Science
            </h3>
            <p className="mt-2 text-slate-600">
              Velalar College of Engineering and Technology
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-500">
              <span>Nov 2022 – May 2026</span>
              <span>•</span>
              <span>CGPA: 9.43</span>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Experience"
          title="Internship"
        />

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <BriefcaseBusiness size={21} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Python Developer Intern</h3>
                <p className="mt-1 text-slate-500">Infosys Springboard · Remote</p>
              </div>
            </div>
            <p className="text-sm font-medium text-slate-500">
              Nov 2025 – Jan 2026
            </p>
          </div>

          <ul className="mt-7 space-y-3 pl-5 text-sm leading-7 text-slate-600">
            <li>
              Directed ML strategy backtesting for historical time-series
              trading models and documented engineering outcomes.
            </li>
            <li>
              Architected FastAPI backend APIs for dashboard systems and
              strengthened software integration and service implementation.
            </li>
            <li>
              Partnered on code reviews and troubleshooting to improve testing,
              security, and repository maintenance.
            </li>
            <li>
              Supported sprint planning and Agile activities by coordinating
              task updates and delivery responsibilities.
            </li>
          </ul>
        </div>
      </section>

      <section id="skills" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            eyebrow="Technical Skills"
            title="Cloud, DevOps & Backend Development"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="rounded-2xl border border-slate-200 bg-[#f7f8fa] p-6 transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={21} className="text-sky-600" />
                    <h3 className="text-base font-bold uppercase tracking-wide">
                      {skill.title}
                    </h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Projects"
          title="Things I&apos;ve built"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-bold text-sky-600">
                  0{index + 1}
                </span>
                <Server size={20} className="text-slate-400" />
              </div>

              <h3 className="mt-8 text-xl font-bold">{project.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {project.caseStudy ? (
                <a
                  href={project.caseStudy}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 transition hover:text-sky-600"
                >
                  View Project
                  <ArrowUpRight size={16} />
                </a>
              ) : (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 transition hover:text-sky-600"
                >
                  <Github size={17} />
                  View on GitHub
                  <ExternalLink size={14} />
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-7 text-center">
          <Github className="mx-auto text-slate-500" size={25} />
          <h3 className="mt-3 font-bold">More projects on GitHub</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Explore my GitHub profile for
            additional projects, experiments, and code.
          </p>
          <a
            href="https://github.com/Brindha-V-C"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:border-slate-400"
          >
            Explore GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <section id="certifications" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            eyebrow="Certifications"
            title="Learning & credentials"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {certifications.map((cert) => (
              <a
                key={cert.title}
                href={cert.credential}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-[#f7f8fa] p-6 transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <Cloud size={19} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">{cert.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{cert.issuer}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600">
                    View Credential
                    <ExternalLink
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Achievements"
          title="A few highlights"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Achievement
            title="Animate 2024 — IIT Bombay"
            description="Created a 2D animated video highlighting India’s advancements in navigation and received a consolation prize."
          />
          <Achievement
            title="Dark Patterns Buster Hackathon — IIT BHU"
            description="Finalist for designing a browser-extension architecture detecting 10+ dark patterns and helping safeguard over 2,000 users from potential scams."
          />
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Let&apos;s build something.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              I&apos;m open to opportunities involving cloud, DevOps, backend
              development, and automation.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:brindhavc15@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              <Mail size={17} />
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/brindha-v-c"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>

            <a
              href="https://github.com/Brindha-V-C"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
            >
              <Github size={17} />
              GitHub
            </a>
          </div>

          <div className="mt-16 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <span>© {new Date().getFullYear()} Brindha V C</span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} />
              Tamil Nadu, India
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function Achievement({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <Trophy size={22} className="text-sky-600" />
      <h3 className="mt-5 font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}
