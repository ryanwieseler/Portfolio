import { Project } from "../types/project";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface GridSpotlightLayoutProps {
  projects: Project[];
}

export function GridSpotlightLayout({ projects }: GridSpotlightLayoutProps) {
  const featuredProjects = projects.filter(p => p.isFeatured);
  const otherProjects = projects.filter(p => !p.isFeatured);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b sticky top-0 z-10 bg-white">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-slate-900">Ryan Wieseler</h1>
              <p className="text-slate-600">Senior UX Designer — Portfolio</p>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost">About</Button>
              <Button variant="default">Get in Touch</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16">
        {/* Featured Projects in Spotlight Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h2 className="text-slate-900">Featured Case Studies</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map(project => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Featured Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <Badge className="bg-amber-500 text-white border-0">
                    <Star className="w-3 h-3 mr-1 fill-white" />
                    Featured
                  </Badge>
                </div>

                {/* Image Section */}
                <div className="relative h-[320px] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="relative p-8 -mt-32">
                  <div className="relative z-10">
                    <p className="text-amber-400 mb-2">{project.category}</p>
                    <h3 className="text-white mb-4">{project.title}</h3>
                    <p className="text-slate-300 mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-white/10 text-white border-white/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">{project.role} • {project.year}</span>
                      <Button variant="secondary" size="sm" className="group/btn">
                        View Project
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h2 className="text-slate-900 mb-8">All Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map(project => (
              <div
                key={project.id}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-[200px] overflow-hidden bg-slate-100">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-slate-500">{project.category}</p>
                    <Badge variant="outline" className="text-slate-600">{project.year}</Badge>
                  </div>
                  
                  <h3 className="text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="secondary" className="text-slate-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
