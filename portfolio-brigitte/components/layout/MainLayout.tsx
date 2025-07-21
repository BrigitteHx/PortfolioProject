// components/layout/MainLayout.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; 
import {
  Home as HomeIcon, User, Briefcase, Code, Folder, MessageSquareText, Mail, Menu, X,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "About Me", href: "/about", icon: User },
  { label: "Experience", href: "/experience", icon: Briefcase },
  { label: "Skills", href: "/skills", icon: Code },
  { label: "Projects", href: "/projects", icon: Folder },
  { label: "Recommendations", href: "/recommendations", icon: MessageSquareText },
  { label: "Contact", href: "/contact", icon: Mail },
];

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname(); 

  return (
    <div className="flex h-screen bg-neutral-100 text-foreground dark:bg-neutral-950 dark:text-foreground">
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-neutral-200 text-foreground dark:bg-neutral-800 dark:text-foreground shadow-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed md:relative flex flex-col h-full bg-card-background border-r border-border shadow-lg transition-all duration-300 ease-in-out z-40
          dark:bg-card-background dark:border-border dark:shadow-xl
          ${isSidebarOpen ? "w-64" : "w-0 md:w-64"}
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >

        <div className="p-4 border-b border-border flex items-center gap-3 dark:border-border py-6"> 
          <Image
            src="/brigitte-avatar.png"
            alt="Brigitte's Avatar"
            width={50} 
            height={50}
            className="rounded-full object-cover border-2 border-primary/50 dark:border-secondary/50" 
          />
          <h2 className="text-xl font-bold text-foreground whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"> {/* Gradiënt naam */}
            Digital Portfolio
          </h2>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href; 
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 p-3 rounded-md transition-colors duration-200
                           ${isActive
                              ? "bg-primary text-primary-foreground shadow-md font-semibold" 
                              : "text-neutral-700 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-800" 
                           }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <link.icon size={20} className={`flex-shrink-0
                              ${isActive ? "text-primary-foreground" : "text-primary dark:text-primary"}`} /> 
                <span className="whitespace-nowrap">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border dark:border-border text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
            Built by Brigitte Heijkoop
            {/* B.A.H. - Build. Automate. Highlight */}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </aside>

      <main className="flex-1 p-8 md:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}