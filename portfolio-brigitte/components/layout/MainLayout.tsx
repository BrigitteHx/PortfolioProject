// components/layout/MainLayout.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home as HomeIcon,
  User,
  Briefcase,
  Code,
  Folder,
  MessageSquareText,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
    // Main container (flex on desktop, allows stacking implicitly on mobile)
    <div className="relative flex h-screen bg-neutral-100 text-foreground dark:bg-neutral-950 dark:text-foreground">

      {/* Mobile Menu Toggle Button - Always fixed, always highest z-index */}
      <button
        className="fixed top-4 left-4 z-[99] p-2 rounded-md bg-neutral-200 text-foreground dark:bg-neutral-800 dark:text-foreground shadow-md md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-controls="sidebar-navigation"
        aria-expanded={isSidebarOpen}
        aria-label={isSidebarOpen ? "Close navigation" : "Open navigation"}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar (off-canvas) - Hidden by default on mobile, shown when open */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            id="sidebar-navigation"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 left-0 w-64 flex flex-col
                       bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700
                       shadow-lg z-50 md:hidden" // Only visible on mobile (hidden on md and up)
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3 py-6">
              <Image
                src="/brigitte-avatar.png"
                alt="Brigitte's Avatar"
                width={50}
                height={50}
                className="rounded-full object-cover border-2 border-primary/50 dark:border-secondary/50"
              />
              <h2 className="text-xl font-bold text-foreground whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
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
                               ${
                                 isActive
                                   ? "bg-primary text-primary-foreground shadow-md font-semibold"
                                   : "text-neutral-700 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-800"
                               }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <link.icon
                      size={20}
                      className={`flex-shrink-0
                                  ${
                                    isActive
                                      ? "text-primary-foreground"
                                      : "text-primary dark:text-primary"
                                  }`}
                    />
                    <span className="whitespace-nowrap">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                Built by Brigitte Heijkoop
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div >
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar - Always visible on desktop, hidden on mobile */}
      <aside
        className="hidden md:flex flex-col h-full
                   bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700
                   shadow-lg w-64 flex-shrink-0 z-40" // z-40 is fine here as it's not overlapping mobile button
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3 py-6">
          <Image
            src="/brigitte-avatar.png"
            alt="Brigitte's Avatar"
            width={50}
            height={50}
            className="rounded-full object-cover border-2 border-primary/50 dark:border-secondary/50"
          />
          <h2 className="text-xl font-bold text-foreground whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
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
                           ${
                             isActive
                               ? "bg-primary text-primary-foreground shadow-md font-semibold"
                               : "text-neutral-700 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-800"
                           }`}
                onClick={() => setIsSidebarOpen(false)} // This click handler is for mobile sidebar, doesn't hurt here
              >
                <link.icon
                  size={20}
                  className={`flex-shrink-0
                              ${
                                isActive
                                  ? "text-primary-foreground"
                                  : "text-primary dark:text-primary"
                                }`}
                />
                <span className="whitespace-nowrap">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
            Built by Brigitte Heijkoop
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main
        className="flex-1 p-8 md:p-10 overflow-y-auto"
      >
        {/* Overlay when sidebar is open on mobile */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden" // Only for mobile
              onClick={() => setIsSidebarOpen(false)} // Close sidebar when overlay is clicked
            />
          )}
        </AnimatePresence>
        {children}
      </main>
    </div>
  );
}