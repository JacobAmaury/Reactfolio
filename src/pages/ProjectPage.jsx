import { Link, Navigate, useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import Navbar from "../components/Navbar";
import { projects } from "../data/portfolio";

function Tag({ children }) {
  return (
    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
      {children}
    </span>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />

      <main className="mx-auto max-w-4xl px-5 py-14 sm:py-20">
        <Link
          to="/#projets"
          className="inline-flex items-center gap-2 text-sm font-bold text-zinc-600 transition hover:text-zinc-950"
        >
          <FiArrowLeft />
          Retour aux projets
        </Link>

        <header className="mt-10 border-b border-zinc-200 pb-10">
          <p className="text-sm font-semibold text-zinc-500">{project.date}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            {project.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          {(project.githubRepositoryURL || project.externalURL) && (
            <div className="mt-7 flex flex-wrap gap-3">
              {project.githubRepositoryURL && (
                <a
                  href={project.githubRepositoryURL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white"
                >
                  <FaGithub />
                  Dépôt GitHub
                </a>
              )}

              {project.externalURL && (
                <a
                  href={project.externalURL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-bold"
                >
                  <FiExternalLink />
                  Voir le projet
                </a>
              )}
            </div>
          )}
        </header>

        <div className="space-y-12 py-12">
          <section>
            <h2 className="text-2xl font-bold text-zinc-950">Contexte</h2>
            <p className="mt-4 leading-8 text-zinc-600">{project.context}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-950">Objectif</h2>
            <p className="mt-4 leading-8 text-zinc-600">{project.objective}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-950">Travail réalisé</h2>
            <ul className="mt-4 space-y-3">
              {project.work.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-zinc-600">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-950" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-950">Résultat</h2>
            <p className="mt-4 leading-8 text-zinc-600">{project.results}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-950">Technologies</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </section>
        </div>

        <div className="border-t border-zinc-200 pt-8">
          <Link
            to="/#projets"
            className="inline-flex items-center gap-2 font-bold text-zinc-950"
          >
            <FiArrowLeft />
            Tous les projets
          </Link>
        </div>
      </main>
    </div>
  );
}
