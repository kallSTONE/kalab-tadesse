interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="space-y-2 mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  );
}
