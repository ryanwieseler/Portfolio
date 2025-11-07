import { useState } from "react";
import { HeroFeaturedLayout } from "./components/HeroFeaturedLayout";
import { GridSpotlightLayout } from "./components/GridSpotlightLayout";
import { SidebarNavigationLayout } from "./components/SidebarNavigationLayout";
import { ComingSoon1 } from "./components/ComingSoon1";
import { ComingSoon2 } from "./components/ComingSoon2";
import { ComingSoon3 } from "./components/ComingSoon3";
import { ComingSoon4 } from "./components/ComingSoon4";
import { projects } from "./types/project";
import { Button } from "./components/ui/button";
import { LayoutGrid, LayoutList, PanelLeft } from "lucide-react";

type LayoutType = "hero" | "grid" | "sidebar" | "coming1" | "coming2" | "coming3" | "coming4";

export default function App() {
  const [currentLayout, setCurrentLayout] = useState<LayoutType>("coming1");

  const renderLayout = () => {
    switch (currentLayout) {
      case "hero":
        return <HeroFeaturedLayout projects={projects} />;
      case "grid":
        return <GridSpotlightLayout projects={projects} />;
      case "sidebar":
        return <SidebarNavigationLayout projects={projects} />;
      case "coming1":
        return <ComingSoon1 />;
      case "coming2":
        return <ComingSoon2 />;
      case "coming3":
        return <ComingSoon3 />;
      case "coming4":
        return <ComingSoon4 />;
      default:
        return <ComingSoon1 />;
    }
  };

  return (
    <div className="relative">
      {/* Layout Switcher - Fixed position */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-3">
          <p className="text-slate-500 mb-2 px-2">Coming Soon Pages</p>
          <div className="flex gap-2 mb-3">
            <Button
              variant={currentLayout === "coming1" ? "default" : "ghost"}
              size="sm"
              onClick={() => setCurrentLayout("coming1")}
              className="flex-1"
            >
              1
            </Button>
            <Button
              variant={currentLayout === "coming2" ? "default" : "ghost"}
              size="sm"
              onClick={() => setCurrentLayout("coming2")}
              className="flex-1"
            >
              2
            </Button>
            <Button
              variant={currentLayout === "coming3" ? "default" : "ghost"}
              size="sm"
              onClick={() => setCurrentLayout("coming3")}
              className="flex-1"
            >
              3
            </Button>
            <Button
              variant={currentLayout === "coming4" ? "default" : "ghost"}
              size="sm"
              onClick={() => setCurrentLayout("coming4")}
              className="flex-1"
            >
              4
            </Button>
          </div>
          
          <div className="border-t border-slate-200 pt-3">
            <p className="text-slate-500 mb-2 px-2">Portfolio Layouts</p>
            <div className="flex gap-2">
              <Button
                variant={currentLayout === "hero" ? "default" : "ghost"}
                size="icon"
                onClick={() => setCurrentLayout("hero")}
                className="rounded-lg"
                title="Hero Featured Layout"
              >
                <LayoutList className="w-4 h-4" />
              </Button>
              <Button
                variant={currentLayout === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setCurrentLayout("grid")}
                className="rounded-lg"
                title="Grid Spotlight Layout"
              >
                <LayoutGrid className="w-4 h-4" />
              </Button>
              <Button
                variant={currentLayout === "sidebar" ? "default" : "ghost"}
                size="icon"
                onClick={() => setCurrentLayout("sidebar")}
                className="rounded-lg"
                title="Sidebar Navigation Layout"
              >
                <PanelLeft className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Current Layout */}
      {renderLayout()}
    </div>
  );
}