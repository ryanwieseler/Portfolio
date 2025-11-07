import { useState } from "react";
import { Project } from "../types/project";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Sparkles, ChevronRight, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SidebarNavigationLayoutProps {
  projects: Project[];
}

export function SidebarNavigationLayout({ projects }: SidebarNavigationLayoutProps) {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const featuredProjects = projects.filter(p => p.isFeatured);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-slate-200 flex flex-col sticky top-0 h-screen overflow-y-auto">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-slate-200">
          <h1 className="text-slate-900 mb-1">Ryan Wieseler</h1>
          <p className="text-slate-600 mb-4">Senior UX Designer</p>
          <Button className="w-full" size="sm">
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
        </div>

        {/* Featured Projects Quick Nav */}
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-slate-900">Featured</span>
          </div>
          
          <div className="space-y-2">
            {featuredProjects.map(project => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                  selectedProject.id === project.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className={`truncate ${selectedProject.id === project.id ? 'text-white' : 'text-slate-900'}`}>
                      {project.title}
                    </p>
                    <p className={`text-sm ${selectedProject.id === project.id ? 'text-slate-300' : 'text-slate-500'}`}>
                      {project.category}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 ml-2 ${
                    selectedProject.id === project.id ? 'text-white' : 'text-slate-400'
                  }`} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Nav */}
        <div className="p-6 flex-1">
          <h3 className="text-slate-900 mb-4">All Projects</h3>
          
          <nav className="space-y-1">
            {projects.map(project => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                  selectedProject.id === project.id
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="truncate">{project.title}</span>
                  {project.isFeatured && (
                    <Sparkles className="w-3 h-3 text-amber-500 flex-shrink-0 ml-2" />
                  )}
                </div>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-12 py-12 max-w-5xl">
          {/* Project Header */}
          <div className="mb-8">
            {selectedProject.isFeatured && (
              <Badge className="bg-amber-500 text-white border-0 mb-4">
                <Sparkles className="w-3 h-3 mr-1" />
                Featured Project
              </Badge>
            )}
            <p className="text-slate-500 mb-2">{selectedProject.category}</p>
            <h1 className="text-slate-900 mb-4">{selectedProject.title}</h1>
            
            <div className="flex items-center gap-6 text-slate-600 mb-6">
              <span>{selectedProject.role}</span>
              <span>•</span>
              <span>{selectedProject.year}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>

          {/* Project Image */}
          <div className="relative rounded-2xl overflow-hidden mb-8 shadow-xl">
            <div className="aspect-video">
              <ImageWithFallback
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-slate-900 mb-4">Overview</h2>
              <p className="text-slate-600 leading-relaxed">
                {selectedProject.longDescription}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h3 className="text-slate-900 mb-4">Project Highlights</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive user research and stakeholder interviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>Iterative prototyping and usability testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>Design system implementation and documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>Cross-functional collaboration with engineering and product teams</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1">View Full Case Study</Button>
              <Button variant="outline" className="flex-1">View Prototype</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
