"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("sidebar-collapsed");
    if (saved !== null) {
      setIsCollapsed(JSON.parse(saved));
    }
  }, []);

  const toggleSidebar = () => {
    const newValue = !isCollapsed;
    setIsCollapsed(newValue);
    localStorage.setItem("sidebar-collapsed", JSON.stringify(newValue));
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="fixed left-0 top-0 w-80 h-screen bg-card border-r border-border" />
        <main className="ml-80 min-h-screen">{children}</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />
      <main
        className={cn(
          "flex-1 min-h-screen transition-all duration-300",
          isCollapsed ? "ml-20" : "ml-80"
        )}
      >
        <div className="p-8 max-w-5xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}