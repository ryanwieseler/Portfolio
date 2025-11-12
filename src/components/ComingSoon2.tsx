import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Linkedin, Sparkles } from "lucide-react";

export function ComingSoon2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-amber-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        <Badge className="mb-6 bg-violet-100 text-violet-700 border-violet-200">
          <Sparkles className="w-3 h-3 mr-1" />
          Coming Soon
        </Badge>
        
        <h1 className="text-slate-900 mb-2">Ryan Wieseler</h1>
        <p className="text-slate-600 mb-8">Senior UX Designer</p>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100 mb-8">
          <h2 className="text-slate-900 mb-4">The Portfolio Is In the Design Phase</h2>
          <p className="text-slate-600 max-w-lg mx-auto">
            Check back on Monday to see the full meal deal.
          </p>
        </div>

        <Button size="lg" variant="default" asChild>
          <a 
            href="https://www.linkedin.com/in/ryan-wieseler/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            View LinkedIn Profile
          </a>
        </Button>
      </div>
    </div>
  );
}