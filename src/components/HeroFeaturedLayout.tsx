import { Project } from "../types/project";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Briefcase } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroFeaturedLayoutProps {
  projects: Project[];
}

export function HeroFeaturedLayout({ projects }: HeroFeaturedLayoutProps) {
  const featuredProjects = projects.filter(p => p.isFeatured);
  const otherProjects = projects.filter(p => !p.isFeatured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-slate-900">Ryan Wieseler</h1>
              <p className="text-slate-600">Senior UX Designer</p>
            </div>
            <Button variant="outline">Contact</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Featured Projects Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Badge variant="default" className="bg-slate-900">Featured Work</Badge>
            <span className="text-slate-500">— Highlighted Projects</span>
          </div>

          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`relative h-[400px] overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm">
                        {project.year}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <p className="text-slate-500 mb-2">{project.category}</p>
                    <h2 className="text-slate-900 mb-4">{project.title}</h2>
                    <p className="text-slate-600 mb-6">{project.longDescription}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-slate-500 mb-6">
                      <Briefcase className="w-4 h-4" />
                      <span>{project.role}</span>
                    </div>

                    <Button className="w-fit group/btn">
                      View Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects Section */}
        <div>
          <h2 className="text-slate-900 mb-8">More Projects</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map(project => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-[240px] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <p className="text-slate-500 mb-1">{project.category}</p>
                  <h3 className="text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
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
