import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import { education, profile, projects, skillGroups } from "../data/portfolio";

function Tag({ children }) {
  return (
    <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />

      <main>
        <section id="about" className="mx-auto max-w-6xl px-5 pb-24 pt-20 sm:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_320px]">
            <div>
              <p className="mb-4 text-sm font-semibold text-zinc-500">
                Portfolio • MSc student in Intelligent Systems
              </p>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-zinc-950 sm:text-6xl">
                Hello, my name is {profile.shortName}.
              </h1>

              <p className="mt-5 max-w-3xl text-xl font-medium leading-8 text-zinc-700">
                {profile.tagline}
              </p>

              <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600">
                {profile.intro}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-950"
                >
                  <FiMail />
                  Contact me
                </a>
              </div>
            </div>

            <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border border-zinc-200 bg-zinc-50 shadow-sm lg:h-72 lg:w-72">
              <img
                src="/photo_cv_bis.jpg"
                alt={`Profile photo of ${profile.shortName}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="formation" className="border-y border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionTitle
              eyebrow="Background"
              title="Education"
              description="A background spanning physics, electronics, computer science, and artificial intelligence."
            />

            <div className="grid gap-4">
              {education.map((item) => (
                <article
                  key={`${item.period}-${item.title}`}
                  className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 sm:grid-cols-[150px_1fr]"
                >
                  <p className="text-sm font-bold text-zinc-500">{item.period}</p>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-950">{item.title}</h3>
                    <p className="mt-1 font-medium text-zinc-700">{item.place}</p>
                    <p className="mt-3 leading-7 text-zinc-600">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="competences" className="mx-auto max-w-6xl px-5 py-20">
          <SectionTitle
            eyebrow="What I do"
            title="Skills"
            description="I present my skills by areas of application rather than using arbitrary percentages."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-zinc-200 p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-zinc-950">{group.title}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{group.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projets" className="border-y border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionTitle
              eyebrow="Selected work"
              title="Projects"
              description="Each project has its own page with more detail about the context, work, and technologies involved."
            />

            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <Link
                  to={`/projects/${project.slug}`}
                  key={project.slug}
                  className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:border-zinc-400 hover:bg-zinc-950/5 hover:shadow-xl"
                >
                  {project.heroImage && (
                    <img
                      src={project.heroImage}
                      alt={project.heroAlt || project.name}
                      loading="lazy"
                      className="mb-5 aspect-video w-full rounded-xl border border-zinc-200 object-cover"
                    />


                  )}
                  <p className="text-sm font-semibold text-zinc-500">{project.date}</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950">
                    {project.name}
                  </h3>
                  <p className="mt-4 flex-1 leading-7 text-zinc-600">
                    {project.shortDescription}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>

                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-zinc-950">
                    View project
                    <FiArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
          <div className="rounded-3xl bg-zinc-950 px-6 py-12 text-white sm:px-10">
            <p className="text-sm font-semibold text-zinc-400">Contact</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              Have a project, a question, or an opportunity?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-zinc-300">
              The best way to reach me is by email. You can also explore my
              public repositories on GitHub.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-white px-5 py-3 text-sm font-bold text-zinc-950"
              >
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-bold text-white transition hover:border-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.shortName}</p>
          <p>React • Vite • Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
