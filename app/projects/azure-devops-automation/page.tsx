"use client";

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  GitBranch,
  Github,
  Layers3,
  Server,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";

const screenshots = [
  {
    src: "https://raw.githubusercontent.com/Brindha-V-C/Azure-Devops/main/results/s1.png",
    alt: "Azure DevOps pipeline result",
    label: "Azure DevOps pipeline",
  },
  {
    src: "https://raw.githubusercontent.com/Brindha-V-C/Azure-Devops/main/results/s2.png",
    alt: "Azure DevOps agent result",
    label: "Build agent",
  },
  {
    src: "https://raw.githubusercontent.com/Brindha-V-C/Azure-Devops/main/results/s3.png",
    alt: "Docker images produced by the CI pipeline",
    label: "Container images",
  },
];

const stack = [
  "Azure DevOps Pipelines",
  "Docker",
  "Azure Container Registry",
  "Kubernetes",
  "ArgoCD",
  "GitOps",
  "Shell Scripting",
];

export default function AzureDevOpsAutomationPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof screenshots)[number] | null>(null);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
          <a
            href="/"
            className="whitespace-nowrap text-lg font-bold tracking-tight text-white sm:text-xl"
          >
            Brindha V C<span className="text-sky-400"></span>
          </a>

          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-sky-400"
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
            Azure DevOps Automation
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            A CI/CD workflow for the multi-microservice
            <span className="font-semibold text-slate-800">
              {" "}example-voting-app
            </span>
            {" "}using Azure DevOps for continuous integration, ArgoCD for
            continuous delivery, and Kubernetes for runtime deployment.
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
              href="https://github.com/Brindha-V-C/Azure-Devops"
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
                The project demonstrates a complete CI/CD workflow for a
                multi-microservice voting application. The CI side builds
                container images for individual services and pushes them to a
                container registry. The CD side uses ArgoCD to monitor the
                Kubernetes manifests and reconcile the cluster with the desired
                state.
              </p>
              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                A shell helper script updates image tags in Kubernetes manifests
                so that a newly built image can move through the GitOps workflow
                and trigger a deployment update.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#f7f8fa] p-6">
              <Layers3 className="text-sky-600" size={25} />
              <h3 className="mt-5 text-lg font-bold">Microservices</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                vote, result, worker, redis, db, and nginx run as separate
                containers.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Vote", "Result", "Worker", "Redis", "DB", "Nginx"].map(
                  (service) => (
                    <span
                      key={service}
                      className="rounded-md bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {service}
                    </span>
                  ),
                )}
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
          CI/CD Pipeline &amp; GitOps Flow
        </h2>

        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          Here’s how the code changes flow from development to a running
          application in the Kubernetes cluster using Azure DevOps for CI and
          ArgoCD for CD.
        </p>

        <div className="mt-10 overflow-x-auto pb-3">
          <div className="min-w-[1040px]">
            <div className="relative grid grid-cols-[1.35fr_0.95fr] gap-3">
              <div className="rounded-2xl border border-dashed border-sky-300 bg-sky-50/50 px-3 py-3">
                <div className="mb-3 text-center">
                  <h3 className="text-base font-bold text-sky-600">
                    CI – Build, Test and Push
                  </h3>
                  <p className="text-xs text-sky-600">(Azure DevOps Pipeline)</p>
                </div>

                <div className="flex items-center">
                  {[
                    {
                      title: "Source Code",
                      subtitle: "(GitHub)",
                      detail: "Push code\nto main branch",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
                    },
                    {
                      title: "Azure DevOps",
                      subtitle: "(CI Pipeline)",
                      detail: "Checkout and Build Docker Images",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg",
                    },
                    {
                      title: "Docker Images",
                      subtitle: "(vote, result, worker)",
                      detail: "Build & Tag\n(images with build ID)",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
                    },
                    {
                      title: "Azure Container Registry",
                      subtitle: "(ACR)",
                      detail: "Push images\nto ACR",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
                    },
                  ].map((step, index, steps) => (
                    <div key={step.title} className="flex min-w-0 flex-1 items-center">
                      <div className="flex h-[178px] w-full flex-col items-center rounded-xl border border-slate-200 bg-white px-2 py-3 text-center shadow-sm">
                        <div className="flex h-[45px] items-center justify-center">
                          <img src={step.icon} alt="" className="h-10 w-10 object-contain" />
                        </div>
                        <h4 className="mt-1 text-[12px] font-bold leading-4 text-slate-950">
                          {step.title}
                        </h4>
                        <p className="mt-0.5 min-h-[18px] text-[11px] leading-4 text-slate-500">
                          {step.subtitle}
                        </p>
                        <div className="mt-auto flex min-h-[55px] w-full items-center justify-center rounded-lg bg-sky-50 px-2 py-1.5 text-[11px] leading-4 text-slate-700">
                          <span className="whitespace-pre-line">{step.detail}</span>
                        </div>
                      </div>

                      {index < steps.length - 1 && (
                        <div className="flex w-7 shrink-0 items-center justify-center text-xl font-medium text-sky-500">
                          →
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* ACR → Kubernetes manifest update */}
              <div
                className="pointer-events-none absolute left-[58.7%] z-20 hidden -translate-x-1/2 text-xl font-semibold text-sky-500 lg:block"
                style={{ top: "50%" }}
                aria-hidden="true"
              >
                →
              </div>

              <div className="relative rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/50 px-3 py-3">
                <div className="mb-3 text-center">
                  <h3 className="text-base font-bold text-slate-950">
                    CD – Deploy using GitOps
                  </h3>
                  <p className="text-xs text-slate-600">(ArgoCD)</p>
                </div>

                <div className="flex items-center">
                  {[
                    {
                      title: "Revise k8s yaml",
                      subtitle: "(Git Repository)",
                      detail: "Update image tags\nand commit",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                    },
                    {
                      title: "ArgoCD",
                      subtitle: "(GitOps)",
                      detail: "Detects changes\nand syncs",
                      icon: "https://cdn.jsdelivr.net/gh/cncf/artwork@main/projects/argo/icon/color/argo-icon-color.svg",
                    },
                    {
                      title: "Kubernetes Cluster",
                      subtitle: "(AKS)",
                      detail: "Deploys updated\napplication",
                      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
                    },
                  ].map((step, index, steps) => (
                    <div key={step.title} className="flex min-w-0 flex-1 items-center">
                      <div className="flex h-[178px] w-full flex-col items-center rounded-xl border border-slate-200 bg-white px-2 py-3 text-center shadow-sm">
                        <div className="flex h-[45px] items-center justify-center">
                          <img src={step.icon} alt="" className="h-10 w-10 object-contain" />
                        </div>
                        <h4 className="mt-1 text-[12px] font-bold leading-4 text-slate-950">
                          {step.title}
                        </h4>
                        <p className="mt-0.5 min-h-[34px] whitespace-pre-line text-[11px] leading-4 text-slate-500">
                          {step.subtitle}
                        </p>
                        <div className="mt-auto flex min-h-[62px] w-full items-center justify-center rounded-lg bg-emerald-50 px-2 py-2 text-[10px] leading-4 text-slate-700">
                          <span className="whitespace-pre-line">{step.detail}</span>
                        </div>
                      </div>

                      {index < steps.length - 1 && (
                        <div className="flex w-7 shrink-0 items-center justify-center text-xl font-medium text-emerald-500">
                          →
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
          <div className="flex items-center gap-3">
            <Server className="text-sky-600" size={23} />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Implementation
              </p>
              <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
                Repository structure
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-[#f7f8fa] p-6">
              <h3 className="font-bold">pipelines/</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Service-specific Azure Pipeline YAML files for the results,
                vote, and worker services.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#f7f8fa] p-6">
              <h3 className="font-bold">scripts/</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Contains updatek8smanifest.sh, which updates image tags in
                Kubernetes manifests before the GitOps change is committed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
          Results
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          Pipeline output
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          These screenshots are the result images documented in the project
          repository and show the CI/CD workflow output.
        </p>

        <div className="mt-10 grid gap-6">
          {screenshots.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:border-sky-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
              aria-label={`Open ${image.label} image`}
            >
              <div className="relative bg-slate-50 p-3 sm:p-5">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="mx-auto h-auto w-full rounded-xl border border-slate-200 object-contain"
                  loading="lazy"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-6 mx-auto w-fit rounded-full bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
                  Click to view full image
                </span>
              </div>
              <figcaption className="border-t border-slate-200 px-5 py-4 text-sm font-medium text-slate-600">
                {image.label}
              </figcaption>
            </button>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                Source
              </p>
              <h2 className="mt-3 text-2xl font-bold">
                Explore the implementation
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                View the pipelines, helper scripts, README, and project
                history on GitHub.
              </p>
            </div>

            <a
              href="https://github.com/Brindha-V-C/Azure-Devops"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              <Github size={17} />
              GitHub Repository
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-slate-500">
            <CheckCircle2 size={16} className="text-sky-400" />
            CI/CD workflow documented with pipeline and output screenshots
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.label}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label="Close full image"
          >
            <X size={26} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[92vh] max-w-[96vw] rounded-lg object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
