interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12 space-y-3">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-sm uppercase tracking-[0.14em] text-text-tertiary">
          {subtitle}
        </p>
      )}
    </div>
  );
}
