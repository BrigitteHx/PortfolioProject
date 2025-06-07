import React from "react";

interface TaskbarProps {
  onStartClick: () => void;
}

export default function Taskbar({ onStartClick }: TaskbarProps) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-10 bg-gray-800 text-white flex items-center px-2 z-40">
      <button
        onClick={onStartClick}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-3 py-1 text-xs rounded shadow mr-2"
      >
        Start
      </button>
      <div className="text-xs text-gray-300">Windowed World</div>
    </div>
  );
}
