import React, { useState } from "react";
import Window from "./Window";

interface WindowData {
  id: number;
  title: string;
  position: { x: number; y: number };
  isFocused: boolean;
  isMinimized: boolean;
}

export default function App() {
  const [windows, setWindows] = useState<WindowData[]>([
    { id: 1, title: "About", position: { x: 100, y: 100 }, isFocused: true, isMinimized: false },
    { id: 2, title: "Projects", position: { x: 300, y: 120 }, isFocused: false, isMinimized: false },
  ]);

  const focusWindow = (id: number) => {
    setWindows((ws) =>
      ws.map((w) => ({
        ...w,
        isFocused: w.id === id,
      }))
    );
  };

  const closeWindow = (id: number) => {
    setWindows((ws) => ws.filter((w) => w.id !== id));
  };

  const toggleMinimize = (id: number) => {
    setWindows((ws) =>
      ws.map((w) =>
        w.id === id
          ? { ...w, isMinimized: !w.isMinimized, isFocused: !w.isMinimized }
          : w
      )
    );
  };

  const getZIndex = (id: number) => {
    const focused = windows.find((w) => w.isFocused);
    return focused?.id === id ? 100 : 10;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 font-retro relative overflow-hidden">
      {/* Render vensters */}
      {windows.map(
        (w) =>
          !w.isMinimized && (
            <Window
              key={w.id}
              title={w.title}
              defaultPosition={w.position}
              isFocused={w.isFocused}
              onFocus={() => focusWindow(w.id)}
              onClose={() => closeWindow(w.id)}
              style={{ zIndex: getZIndex(w.id) }}
            >
              <p>Content van {w.title} hier!</p>
            </Window>
          )
      )}

      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur text-white px-4 py-2 flex gap-2 border-t border-gray-700 shadow-inner">
        {windows.map((w) => (
          <button
            key={w.id}
            onClick={() => toggleMinimize(w.id)}
            className={`px-3 py-1 rounded border font-bold text-xs tracking-wide transition-all
              ${
                w.isMinimized
                  ? "bg-gray-600 border-gray-500 hover:bg-gray-500"
                  : "bg-blue-700 border-blue-600 hover:bg-blue-600"
              }
            `}
          >
            {w.title}
          </button>
        ))}
      </div>
    </div>
  );
}
