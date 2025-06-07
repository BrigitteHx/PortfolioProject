import React, { useState } from "react";
import Window from "./Window";

interface WindowData {
  id: number;
  title: string;
  position: { x: number; y: number };
  isOpen: boolean;
}

export default function App() {
  const [windows, setWindows] = useState<WindowData[]>([
    { id: 1, title: "About", position: { x: 100, y: 100 }, isOpen: true },
    { id: 2, title: "Contact", position: { x: 300, y: 150 }, isOpen: true },
  ]);

  const [focusedWindowId, setFocusedWindowId] = useState<number | null>(null);

  function closeWindow(id: number) {
    setWindows((ws) =>
      ws.map((w) => (w.id === id ? { ...w, isOpen: false } : w))
    );
    if (focusedWindowId === id) {
      setFocusedWindowId(null);
    }
  }

  function focusWindow(id: number) {
    setFocusedWindowId(id);
  }

  return (
    <div className="min-h-screen bg-gray-200 p-4 relative overflow-hidden">
      <h1 className="text-2xl mb-6 text-center">Windowed World</h1>

      {windows
        .filter((w) => w.isOpen)
        .map((w) => (
          <Window
            key={w.id}
            title={w.title}
            defaultPosition={w.position}
            isFocused={focusedWindowId === w.id}
            onFocus={() => focusWindow(w.id)}
            onClose={() => closeWindow(w.id)}
          >
            <p>Inhoud van venster "{w.title}"</p>
          </Window>
        ))}
    </div>
  );
}
