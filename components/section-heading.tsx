import { ReactNode } from 'react';

export function SectionHeading({
  title,
  subtitle,
  icon
}: {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="mb-8 space-y-3">
      <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
        {icon}
        {title}
      </p>
      {subtitle && <p className="max-w-3xl text-sm text-slate-300 light:text-slate-700 md:text-base">{subtitle}</p>}
    </div>
  );
}
