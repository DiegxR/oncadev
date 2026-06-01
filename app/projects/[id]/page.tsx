"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { projectsArray } from "../../lib/projects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { ChevronLeft, ExternalLink, ChevronRight, ChevronDown } from "lucide-react";

export default function ProjectDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [activeTab, setActiveTab] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projectId, setProjectId] = useState("");

  useEffect(() => {
    if (params?.id) {
      setProjectId(params.id as string);
    }
  }, [params]);

  // Get project by ID (index in array)
  const projectIndex = parseInt(projectId, 10);
  const project = projectsArray[projectIndex];

  // Initialize active tab with first detail title
  useEffect(() => {
    if (project?.details[0] && !activeTab) {
      setActiveTab(project.details[0].title);
    }
  }, [project, activeTab]);

  // Get images from active tab
  const activeDetail = project?.details.find(d => d.title === activeTab);
  const images = activeDetail?.images || [];
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-stone-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Proyecto no encontrado</h1>
          <Button onClick={() => router.push("/")} variant="default">
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-950 py-12 px-4 md:px-8">
      <div className="mx-[5%] md:mx-[10%] lg:mx-[15%]">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-6 text-stone-400 hover:text-white"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>

        {/* Project header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.name}</h1>
          <p className="text-lg text-stone-400 max-w-3xl">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="border-emerald-600 text-emerald-200">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tabs with project details */}
        <Tabs value={activeTab} onValueChange={(value) => {
          setActiveTab(value);
          setCurrentImageIndex(0);
        }} className="w-full">
          <TabsList className="flex flex-wrap h-auto bg-stone-900/50 p-1 gap-1 mb-8">
            {project.details.map((detail) => (
              <TabsTrigger
                key={detail.title}
                value={detail.title}
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white px-4 py-2"
              >
                {detail.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {project.details.map((detail) => (
            <TabsContent key={detail.title} value={detail.title} className="space-y-6">
               {/* Description */}
              <Card className="bg-stone-900/50 border-stone-800">
                <CardContent className="pt-0">
                  <h3 className="text-xl font-semibold text-white mb-4">{detail.title}</h3>
                  <p className="text-stone-300 leading-relaxed whitespace-pre-line">
                    {detail.description}
                  </p>
                </CardContent>
              </Card>

              {/* Technologies */}
              {detail.icons.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {detail.icons.map((icon, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="border-stone-700 text-stone-400 py-2 px-4"
                    >
                      <span className={`${icon.icon} w-5 h-5 text-white mr-2`} ></span>
                      {icon.name}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Image Carousel */}
              {detail.images.length > 0 && (
                <div className="relative aspect-video rounded-lg overflow-hidden bg-stone-900">
                  <Image
                    src={detail.images[currentImageIndex]}
                    alt={`${project.name} - ${detail.title} ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Carousel controls */}
                  {hasMultipleImages && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>
                      
                      {/* Image indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {detail.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              idx === currentImageIndex ? "bg-white" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

             
              {/* Link */}
              {detail.link && (
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <a href={detail.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver {detail.title}
                  </a>
                </Button>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}