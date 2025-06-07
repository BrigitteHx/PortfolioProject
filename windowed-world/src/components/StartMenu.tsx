import React from "react";

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (id: string) => void;
}

const options = [
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function StartMenu({ isOpen, onClose, onSelect }: StartMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute bottom-12 left-2 bg-blue-800 text-white w-48 border border-black shadow-lg z-50">
      <ul className="p-2">
        {options.map((option) => (
          <li
            key={option.id}
            onClick={() => {
              onSelect(option.id);
              onClose();
            }}
            className="hover:bg-blue-700 p-1 cursor-pointer text-sm"
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
