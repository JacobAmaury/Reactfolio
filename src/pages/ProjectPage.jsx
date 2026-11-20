import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";

import Navbar from "../components/Navbar";
import { projects } from "../data/portfolio";

const pill =
  "inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700";

function Tags({ tags = [] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => <span className={pill} key={tag}>{tag}</span>)}
    </div>
  );
}

function ExternalLink({ link }) {
  const primary = link.kind === "primary";
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 ${
        primary
          ? "bg-zinc-950 text-white hover:bg-zinc-800"
          : "border border-zinc-300 bg-white text-zinc-800 hover:border-zinc-950"
      }`}
    >
      {link.label}
      <FiExternalLink aria-hidden="true" />
    </a>
  );
}

function Media({ media }) {
  if (!media) return null;
  return (
    <figure className="mt-7 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50">
      <img
        src={media.src}
        alt={media.alt || "Project illustration"}
        loading="lazy"
        className="max-h-[560px] w-full object-contain"
      />
      {media.caption && (
        <figcaption className="border-t border-zinc-200 px-5 py-3 text-sm leading-6 text-zinc-500">
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}

function CaseStudy({ project }) {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:pt-16">
          <Link
            to="/#projets"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 transition hover:text-zinc-950"
          >
            <FiArrowLeft aria-hidden="true" /> Back to projects
          </Link>

          <header className="mt-10 grid gap-8 border-b border-zinc-200 pb-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">
                {project.category}
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                {project.name}
              </h1>
              <p className="mt-5 max-w-2xl text-xl font-medium leading-8 text-zinc-700">
                {project.tagline || project.shortDescription}
              </p>
              <p className="mt-5 max-w-2xl leading-8 text-zinc-600">
                {project.overview || project.description}
              </p>
              <p className="mt-5 text-sm font-semibold text-zinc-500">{project.date}</p>
              <div className="mt-5"><Tags tags={project.tags} /></div>
              {project.links?.length > 0 && (
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.links.map((link) => <ExternalLink key={link.url} link={link} />)}
                </div>
              )}
            </div>

            {project.heroImage && (
              <figure className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-sm">
                <img
                  src={project.heroImage}
                  alt={project.heroAlt || project.name}
                  className="h-80 w-full object-cover object-center sm:h-[430px]"
                  fetchPriority="high"
                />
              </figure>
            )}
          </header>

          {project.facts?.length > 0 && (
            <div className="grid gap-3 border-b border-zinc-200 py-8 sm:grid-cols-3">
              {project.facts.map((fact) => (
                <div className="rounded-2xl bg-zinc-50 p-6" key={fact.label}>
                  <p className="text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl">{fact.value}</p>
                  <p className="mt-2 text-sm font-medium text-zinc-600">{fact.label}</p>
                </div>
              ))}
            </div>
          )}

          <div className="grid gap-12 py-14 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16">
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-zinc-400">On this page</p>
                <nav aria-label="Project sections" className="flex flex-col gap-1">
                  {project.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="rounded-lg px-3 py-2 text-sm font-medium leading-6 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900"
                    >
                      {section.title}
                    </a>
                  ))}
                  {project.youtubeURL && (
                    <a href="#video" className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900">
                      Video demonstration
                    </a>
                  )}
                </nav>
              </div>
            </aside>

            <div className="min-w-0">
              <section className="pb-10">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">My role</p>
                <p className="mt-3 text-lg font-semibold leading-8 text-zinc-800">{project.role}</p>
              </section>

              {project.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 border-t border-zinc-200 py-12"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">{section.eyebrow}</p>
                  <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-zinc-950 sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-zinc-600">
                    {section.paragraphs?.map((paragraph, index) => <p key={`${section.id}-${index}`}>{paragraph}</p>)}
                  </div>
                  {section.bullets?.length > 0 && (
                    <ul className="mt-7 space-y-3">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex gap-3 leading-7 text-zinc-600">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Media media={section.media} />
                </section>
              ))}

              {project.youtubeURL && (
                <section id="video" className="scroll-mt-28 border-t border-zinc-200 py-12">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">Watch it run</p>
                  <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-zinc-950 sm:text-3xl">
                    Video demonstration
                  </h2>
                  <p className="mt-4 leading-8 text-zinc-600">{project.videoDescription}</p>
                  <div className="mt-7 overflow-hidden rounded-2xl border border-zinc-200 bg-black">
                    <iframe
                      src={project.youtubeURL}
                      title={project.videoTitle || `Demonstration: ${project.name}`}
                      loading="lazy"
                      className="aspect-video w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </section>
              )}
            </div>
          </div>

          <footer className="flex flex-col gap-5 border-t border-zinc-200 pt-9 sm:flex-row sm:items-center sm:justify-between">
            <Link to="/#projets" className="inline-flex items-center gap-2 font-bold text-zinc-900 hover:text-zinc-600">
              <FiArrowLeft aria-hidden="true" /> All projects
            </Link>
            <div className="flex flex-wrap items-center gap-4">
              {project.links?.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950">
                  {link.label} <FiArrowRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

/* Keep existing project records usable without requiring them to have new fields. */
function LegacyProject({ project }) {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 py-14 sm:py-20">
        <Link to="/#projets" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-600 hover:text-zinc-950">
          <FiArrowLeft aria-hidden="true" /> Back to projects
        </Link>
        <header className="mt-10 border-b border-zinc-200 pb-10">
          <p className="text-sm font-semibold text-zinc-500">{project.date}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">{project.name}</h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600">{project.shortDescription}</p>
          <div className="mt-6"><Tags tags={project.tags} /></div>
          <div className="mt-7 flex flex-wrap gap-3">
            {project.githubRepositoryURL && (
              <a href={project.githubRepositoryURL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white">
                <FaGithub aria-hidden="true" /> GitHub repository
              </a>
            )}
            {project.externalURL && (
              <a href={project.externalURL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-bold text-zinc-900">
                <FiExternalLink aria-hidden="true" /> View project
              </a>
            )}
          </div>
        </header>
        {((project.images?.length || 0) > 0 || project.youtubeURL) && (
          <section className="space-y-6 border-b border-zinc-200 py-12">
            <h2 className="text-2xl font-bold text-zinc-950">Project preview</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {(project.images || []).map((src, index) => (
                <img key={`${project.slug}-${index}`} src={src} alt={`${project.name} — image ${index + 1}`} loading="lazy" className="h-full min-h-56 w-full rounded-2xl border border-zinc-200 object-cover" />
              ))}
            </div>
            {project.youtubeURL && (
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950">
                <iframe src={project.youtubeURL} title={`Video: ${project.name}`} className="aspect-video w-full" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            )}
          </section>
        )}
        <div className="space-y-12 py-12">
          {[
            ["Description", project.description],
            ["Context", project.context],
            ["Objective", project.objective],
          ].filter(([, value]) => value).map(([title, value]) => (
            <section key={title}>
              <h2 className="text-2xl font-bold text-zinc-950">{title}</h2>
              <p className="mt-4 leading-8 text-zinc-600">{value}</p>
            </section>
          ))}
          {(project.work?.length || 0) > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-zinc-950">Work completed</h2>
              <ul className="mt-4 space-y-3">
                {project.work.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-zinc-600"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-950" /><span>{item}</span></li>
                ))}
              </ul>
            </section>
          )}
          {project.results && (
            <section><h2 className="text-2xl font-bold text-zinc-950">Outcome</h2><p className="mt-4 leading-8 text-zinc-600">{project.results}</p></section>
          )}
          <section><h2 className="text-2xl font-bold text-zinc-950">Technologies</h2><div className="mt-5"><Tags tags={project.tags} /></div></section>
        </div>
        <div className="border-t border-zinc-200 pt-8">
          <Link to="/#projets" className="inline-flex items-center gap-2 font-bold text-zinc-950"><FiArrowLeft aria-hidden="true" /> All projects</Link>
        </div>
      </main>
    </div>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    const previousTitle = document.title;
    if (project) document.title = `${project.name} | Amaury Jacob`;
    window.scrollTo(0, 0);
    return () => { document.title = previousTitle; };
  }, [project]);

  if (!project) return <Navigate to="/" replace />;
  if (project.sections?.length) return <CaseStudy project={project} />;
  return <LegacyProject project={project} />;
}
