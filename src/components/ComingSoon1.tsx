import { Button } from "./ui/button";
import { Linkedin, Hammer } from "lucide-react";

export function ComingSoon1() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100">
          <Hammer className="w-8 h-8 text-slate-900" />
        </div>
        
        <h1 className="text-slate-900 mb-2">Ryan Wieseler</h1>
        <p className="text-slate-600 mb-8">Senior UX Designer</p>
        
        <div className="mb-12">
          <h2 className="text-slate-900 mb-4">Portfolio Under Construction</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Check back on Monday to see the full meal deal.
          </p>
        </div>

        <Button size="lg" asChild>
          <a 
            href="https://www.linkedin.com/in/ryan-wieseler/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            Connect on LinkedIn
          </a>
        </Button>
      </div>
    </div>
  );
}