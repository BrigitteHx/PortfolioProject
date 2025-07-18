// components/layout/MainLayout.tsx
"use client"; // Deze component gebruikt useState, dus het moet een Client Component zijn.

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Lucide React Icons voor de sidebar
import {
  Home as HomeIcon, // Gebruik 'as HomeIcon' om naamconflicten te voorkomen
  User, // Gebruik 'User' of 'UserCog' voor About Me
  Briefcase, // Voor Work Experience
  Code, // Voor Skills
  Folder, // Voor Projects
  MessageSquareText, // Voor Recommendations
  Mail, // Voor Contact
  Menu, // Voor de toggle knop op mobiel
  X, // Voor sluiten op mobiel
} from "lucide-react";

// Definiëer je navigatielinks. Dit is jouw structuur!
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State voor mobiele sidebar

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      {/* Mobiele Sidebar Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar - Desktop & Mobiel overlay */}
      <aside
        className={`fixed md:relative flex flex-col h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out z-40
          ${isSidebarOpen ? "w-64" : "w-0 md:w-64"}
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Sidebar Header ( naam/logo) */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center gap-3">
          <Image
            src="/brigitte-avatar.jpg" // Plaats je foto in de `public` folder
            alt="Brigitte's Avatar"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white whitespace-nowrap">
            Brigitte's Portfolio
          </h2>
        </div>

        {/* Navigatie Links */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 p-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setIsSidebarOpen(false)} // Sluit sidebar na klik op mobiel
            >
              <link.icon size={20} className="flex-shrink-0" />
              <span className="whitespace-nowrap">{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer/Contact in Sidebar (Optioneel) */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Brigitte.
          </p>
        </div>
      </aside>

      {/* Hoofd Content Area */}
      <main className="flex-1 p-8 md:p-10 overflow-y-auto">
        {children} {/* Hier wordt de inhoud van de huidige pagina weergegeven */}
      </main>
    </div>
  );
}