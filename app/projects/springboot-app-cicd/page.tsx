import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Container,
  Github,
  GitBranch,
  Server,
  ShieldCheck,
} from "lucide-react";

const screenshots = [
  {
    src: "/projects/springboot-app-cicd/jenkins-pipeline.png",
    alt: "Jenkins CI/CD pipeline showing checkout, build and test, SonarQube analysis, and Docker image push stages",
    label: "Jenkins pipeline execution",
  },
  {
    src: "/projects/springboot-app-cicd/sonarqube.png",
    alt: "SonarQube project dashboard showing the Spring Boot project quality gate passed",
    label: "SonarQube code quality analysis",
  },
  {
    src: "/projects/springboot-app-cicd/docker-hub.png",
    alt: "Docker registry page showing the container image tag pushed by the CI pipeline",
    label: "Docker image published to registry",
  },
];

const stack = [
  "Java",
  "Spring Boot",
  "Jenkins",
  "SonarQube",
  "Docker",
  "Docker Hub",
  "GitHub",
  "Azure VM",
];

const flow = [
  {
    title: "Source Code",
    subtitle: "GitHub",
    detail: "Code changes are pushed to the repository.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    title: "Jenkins",
    subtitle: "CI Pipeline",
    detail: "Checkout → build → test the Spring Boot application.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
  },
  {
    title: "SonarQube",
    subtitle: "Static Analysis",
    detail: "Analyze the codebase and verify the quality gate.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg",
  },
  {
    title: "Docker",
    subtitle: "Container Image",
    detail: "Build the application into a Docker image.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    title: "Docker Hub",
    subtitle: "Image Registry",
    detail: "Push the built image to the container registry.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
];

export default function SpringBootAppCicdPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-[#f7f8fa]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
          <a
            href="/"
            className="whitespace-nowrap text-lg font-bold tracking-tight text-slate-950 sm:text-xl"
          >
            Brindha V C<span className="text-sky-600"></span>
          </a>

          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-sky-600"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-6 sm:pt-36">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Project Case Study
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
            Spring Boot App CI/CD
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            A Jenkins-based CI/CD pipeline for a Spring Boot application that
            automates source checkout, build and test, static code analysis,
            Docker image creation, and publishing the image to Docker Hub.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/Brindha-V-C/springboot-app-cicd"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <Github size={17} />
              View Source Code
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Overview
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                What I built
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-slate-600">
                I set up Jenkins on an Azure VM and used it to automate the
                continuous integration workflow for a Spring Boot application.
                The pipeline checks out the source code, builds and tests the
                application, performs static code analysis with SonarQube, and
                then builds and pushes a Docker image to Docker Hub.
              </p>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                The goal was to turn the manual build-and-publish process into
                a repeatable pipeline while keeping the tooling and execution
                environment under my control on the Azure VM.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#f7f8fa] p-6">
              <Server className="text-sky-600" size={25} />
              <h3 className="mt-5 text-lg font-bold">Execution environment</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Jenkins, SonarQube, and the Docker build workflow were run from
                an Azure Virtual Machine.
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-1">
                {["Azure VM", "Jenkins", "SonarQube", "Docker"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-600"
                  >
                    <CheckCircle2 size={15} className="text-emerald-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
          Workflow
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Jenkins CI/CD Flow
        </h2>

        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          The pipeline takes a code change from GitHub through automated build,
          testing, quality analysis, containerization, and Docker Hub
          publishing.
        </p>

        <div className="mt-10 overflow-x-auto pb-3">
          <div className="min-w-[1080px] rounded-2xl border border-dashed border-sky-300 bg-sky-50/50 px-3 py-4">
            <div className="mb-4 text-center">
              <h3 className="text-base font-bold text-sky-600">
                CI – Build, Analyze and Publish
              </h3>
              <p className="text-xs text-sky-600">(Jenkins running on Azure VM)</p>
            </div>

            <div className="flex items-center">
              {flow.map((step, index) => (
                <div key={step.title} className="flex min-w-0 flex-1 items-center">
                  <div className="flex h-[180px] w-full flex-col items-center rounded-xl border border-slate-200 bg-white px-2 py-3 text-center shadow-sm">
                    <div className="flex h-[45px] items-center justify-center">
                      <img
                        src={step.icon}
                        alt=""
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <h4 className="mt-1 text-[12px] font-bold leading-4 text-slate-950">
                      {step.title}
                    </h4>
                    <p className="mt-0.5 min-h-[18px] text-[11px] leading-4 text-slate-500">
                      {step.subtitle}
                    </p>
                    <div className="mt-auto flex min-h-[62px] w-full items-center justify-center rounded-lg bg-sky-50 px-2 py-1.5 text-[11px] leading-4 text-slate-700">
                      {step.detail}
                    </div>
                  </div>

                  {index < flow.length - 1 && (
                    <div className="flex w-8 shrink-0 items-center justify-center text-xl font-medium text-sky-500">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <GitBranch className="text-sky-600" size={23} />
            <h3 className="mt-4 font-bold">Automated source flow</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Jenkins checks out the application source from GitHub as part of
              the pipeline.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <ShieldCheck className="text-sky-600" size={23} />
            <h3 className="mt-4 font-bold">Quality check</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              SonarQube is integrated into the pipeline for static code analysis
              before the image publishing step.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <Container className="text-sky-600" size={23} />
            <h3 className="mt-4 font-bold">Container publishing</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The Docker image is built by the Jenkins workflow and pushed to
              Docker Hub for reuse and distribution.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Results
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Pipeline in action
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            These screenshots show the actual pipeline execution, SonarQube
            analysis result, and Docker image publishing workflow from the
            project.
          </p>

          <div className="mt-10 space-y-8">
            {screenshots.map((shot) => (
              <figure
                key={shot.src}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f7f8fa] shadow-sm"
              >
                <div className="bg-slate-50 p-2 sm:p-3">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="w-full rounded-xl border border-slate-200 bg-white object-contain"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm font-semibold text-slate-700">
                  {shot.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 px-6 py-10 text-white sm:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Project takeaway
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              From code commit to a published container image
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              This project gave me hands-on experience connecting source control,
              Jenkins automation, static analysis, Docker image creation, and a
              container registry into one repeatable CI workflow on Azure.
            </p>

            <a
              href="https://github.com/Brindha-V-C/springboot-app-cicd"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              <Github size={17} />
              View on GitHub
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
