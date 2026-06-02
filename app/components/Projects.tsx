"use client";

import { CardProject } from "./card-project";
import { projectsArray } from "../lib/projects";
import VantaBackground from "./custom-ui/vanta-background-net";


export function Projects() {
  return (
    <section id="projects" className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <VantaBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b  from-[#1b1917] to-[#0C0A0A]/30" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos en los que he trabajado recientemente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsArray.map((project, index) => (
            <CardProject key={index} project={project} projectIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
