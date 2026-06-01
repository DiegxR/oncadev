"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ExternalLink } from "lucide-react";

interface ProjectDetail {
  images: string[];
  title: string;
  description: string;
  icons: { icon: string; name: string }[];
  link: string;
  tag: string;
}

interface Project {
  name: string;
  description: string;
  details: ProjectDetail[];
  tags: string[];
}

interface CardProjectProps {
  project: Project;
  projectIndex: number;
}

export function CardProject({ project, projectIndex }: CardProjectProps) {
  const router = useRouter();

  const firstImage = project.details.flatMap((detail) => detail.images)[0] || "/placeholder.jpg";
  const projectLink = project.details.find((detail) => detail.link)?.link || "";
  const hasProjectLink = Boolean(projectLink);

  const handleClick = () => {
    router.push(`/projects/${projectIndex}`);
  };

  return (
    <article
      onClick={handleClick}
      className="group relative cursor-pointer overflow-hidden rounded-3xl bg-emerald-950/35 border border-emerald-800/80 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_24px_80px_-40px_rgba(16,185,129,0.75)]"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-slate-950">
        <Image
          src={firstImage}
          alt={project.name}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-950/95 via-slate-950/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-50" />

        <div className="absolute top-4 right-4 flex gap-2 opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          {hasProjectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-950/80 backdrop-blur-xl border border-emerald-700/80 text-emerald-100 transition-colors duration-300 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-400"
              aria-label="Ver proyecto en vivo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <div className="relative backdrop-blur-sm p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 text-[11px] font-semibold rounded-full bg-slate-900/80 text-slate-200 border border-slate-700/80 transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-500/10 group-hover:text-emerald-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-slate-100 tracking-tight transition-colors duration-300 group-hover:text-emerald-300">
          {project.name}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {hasProjectLink && (
          <div className="pt-2">
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition-all duration-300 group-hover:text-emerald-300 group-hover:gap-3"
            >
              <span>Ver Proyecto</span>
              <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        )}
      </div>

      <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-emerald-500/10 via-transparent to-emerald-300/10" />
      </div>
    </article>
  );
}