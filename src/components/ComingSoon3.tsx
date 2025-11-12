import { Button } from "./ui/button";
import { Linkedin, ArrowRight } from "lucide-react";

export function ComingSoon3() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <div className="border-l-4 border-amber-400 pl-8">
          <p className="text-amber-400 mb-4">Currently Building</p>
          <h1 className="text-white mb-3">Ryan Wieseler</h1>
          <p className="text-slate-300 mb-12">Senior UX Designer</p>
          
          <div className="mb-12 max-w-xl">
            <p className="text-slate-300">
              Check back on Monday to see the full meal deal.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a 
                href="https://www.linkedin.com/in/ryan-wieseler/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800" disabled>
              Full Portfolio
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <p className="text-slate-500 mt-8">
            Status: Wireframing → <span className="text-amber-400">Designing</span> → Launching
          </p>
        </div>
      </div>
    </div>
  );
}