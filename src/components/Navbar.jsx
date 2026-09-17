import { Link, useLocation } from "react-router-dom";
import { profile } from "../data/portfolio";

const navItems = [
  ["À propos", "about"],
  ["Formation", "formation"],
  ["Compétences", "competences"],
  ["Projets", "projets"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const homeHref = (section) => (isHome ? `#${section}` : `/#${section}`);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link
          to="/"
          className="text-base font-bold tracking-tight text-zinc-950 sm:text-lg"
        >
          {profile.shortName}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(([label, section]) => (
            <a
              key={section}
              href={homeHref(section)}
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white"
        >
          Me contacter
        </a>
      </div>
    </header>
  );
}
