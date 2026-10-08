"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigation, socialLinks } from "@/lib/navigation";
import { Icon } from "@/components/ui/icons";

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-card border-r border-border transition-all duration-300 flex flex-col overflow-hidden",
        isCollapsed ? "w-20 sidebar-collapsed" : "w-80 sidebar-width"
      )}
      data-lenis-prevent
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          {!isCollapsed && (
            <Link href="/" className="font-serif text-xl font-semibold text-card-foreground">
              Portfolio
            </Link>
          )}
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-accent focus-ring transition-colors"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <Icon name="chevron-left" className="h-5 w-5 text-muted" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-6" role="navigation" aria-label="Main navigation">
          {navigation.map((group) => (
            <div key={group.title}>
              {!isCollapsed && (
                <h3 className="px-3 text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                  {group.title}
                </h3>
              )}
              <ul className="space-y-1" role="list">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                        isActive(item.href)
                          ? "bg-accent text-accent-foreground"
                          : "text-muted hover:bg-accent hover:text-accent-foreground",
                        isCollapsed && "justify-center"
                      )}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      <Icon name={item.icon} className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                      {!isCollapsed && (
                        <>
                          <span className="truncate font-medium">{item.label}</span>
                          {item.badge && (
                            <span className="ml-auto px-2 py-0.5 text-xs font-medium bg-muted/50 text-muted rounded-full">
                              {item.badge}
                            </span>
                          )}
                          {item.upcoming && (
                            <span className="ml-auto px-2 py-0.5 text-xs font-medium bg-amber-500/20 text-amber-500 rounded-full">
                              Soon
                            </span>
                          )}
                        </>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="pt-6 border-t border-border" role="list">
            {socialLinks.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-muted hover:bg-accent hover:text-accent-foreground transition-colors",
                    isCollapsed && "justify-center"
                  )}
                  aria-label={social.label}
                >
                  <Icon name={social.icon} className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  {!isCollapsed && <span className="truncate">{social.label}</span>}
                </a>
              </li>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-border space-y-4">
          {!isCollapsed && (
            <div className="text-xs text-muted text-center">
              GMT+8 • {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
          )}

          <button
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg text-muted hover:bg-accent hover:text-accent-foreground transition-colors w-full",
              isCollapsed && "justify-center"
            )}
          >
            <Icon name="sun" className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            {!isCollapsed && <span>Theme</span>}
          </button>

          <div className="pt-4 border-t border-border" role="list">
            {socialLinks.slice(0, 2).map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg text-muted hover:bg-accent hover:text-accent-foreground transition-colors w-full",
                  isCollapsed && "justify-center"
                )}
                aria-label={social.label}
              >
                <Icon name={social.icon} className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                {!isCollapsed && <span className="truncate">{social.label}</span>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}