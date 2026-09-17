export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-9 max-w-3xl">
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-zinc-600">{description}</p>
      )}
    </div>
  );
}
