import { Button } from "./ui/button";
import { Linkedin, Loader2 } from "lucide-react";

export function ComingSoon4() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>In Progress</span>
            </div>

            <h1 className="text-slate-900 mb-2">Ryan Wieseler</h1>
            <p className="text-slate-600 mb-8">Senior UX Designer</p>
            
            <h2 className="text-slate-900 mb-4">Portfolio Loading...</h2>
            <p className="text-slate-600 mb-6">
              My portfolio is currently being redesigned with the same attention to detail I bring to every project. 
              Think of this as the low-fidelity prototype stage.
            </p>

            <Button size="lg" asChild className="mb-4">
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
            
            <p className="text-slate-500">
              Want to chat about a project? Reach out—I'm always available for good conversation.
            </p>
          </div>

          {/* Right Column - Progress Bars */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-slate-900 mb-6">Build Progress</h3>
            
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-700">Case Studies</span>
                  <span className="text-slate-500">60%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-700">Project Images</span>
                  <span className="text-slate-500">45%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-violet-500 rounded-full" style={{ width: '45%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-700">Content Writing</span>
                  <span className="text-slate-500">75%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '75%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-700">Design Polish</span>
                  <span className="text-slate-500">30%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '30%' }} />
                </div>
              </div>
            </div>

            <p className="text-slate-500 mt-6">
              Estimated completion: Sooner than you think ⚡
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
