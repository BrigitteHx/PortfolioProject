import React from "react";

interface StartMenuProps {
  onOpenWindow: (id: string) => void;
  isVisible: boolean;
}

export default function StartMenu({ onOpenWindow, isVisible }: StartMenuProps) {
  if (!isVisible) return null;

  return (
    <div className="absolute bottom-12 left-4 bg-white border-2 border-gray-800 p-2 w-40 shadow-lg z-50 font-retro text-xs">
      <button
        onClick={() => onOpenWindow("about")}
        className="block w-full text-left px-2 py-1 hover:bg-blue-100"
      >
        🧑 About
      </button>
      <button
        onClick={() => onOpenWindow("projects")}
        className="block w-full text-left px-2 py-1 hover:bg-blue-100"
      >
        📁 Projects
      </button>
      <button
        onClick={() => onOpenWindow("contact")}
        className="block w-full text-left px-2 py-1 hover:bg-blue-100"
      >
        📬 Contact
      </button>
    </div>
  );
}
