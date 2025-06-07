import React, { useState } from "react";
import Window from "./Window";
import StartMenu from "./StartMenu";

interface WindowState {
  id: string;
  title: string;
  content: React.ReactNode;
  position: { x: number; y: number };
  visible: boolean;
}

export default function App() {
  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: "about",
      title: "About",
      content: <p>Content van About hier!</p>,
      position: { x: 100, y: 100 },
      visible: true,
    },
    {
      id: "projects",
      title: "Projects",
      content: <p>Content van Projects hier!</p>,
      position: { x: 300, y: 150 },
      visible: true,
    },
    {
      id: "contact",
      title: "Contact",
      content: <p>Contactformulier komt hier</p>,
      position: { x: 500, y: 200 },
      visible: false,
    },
  ]);

  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible((prev) => !prev);

  const focusWindow = (id: string) => {
    setFocusedId(id);
  };

  const closeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, visible: false } : w
      )
    );
  };

  const openWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, visible: true } : w
      )
    );
    setFocusedId(id);
    setMenuVisible(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-300 font-retro relative overflow-hidden">
      {windows.map(
        (win) =>
          win.visible && (
            <Window
              key={win.id}
              title={win.title}
              defaultPosition={win.position}
              isFocused={focusedId === win.id}
              onFocus={() => focusWindow(win.id)}
              onClose={() => closeWindow(win.id)}
            >
              {win.content}
            </Window>
          )
      )}

      {/* Start-menu */}
      <StartMenu isVisible={isMenuVisible} onOpenWindow={openWindow} />

      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-2 flex items-center gap-2 z-40">
        <button
          className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 text-xs rounded"
          onClick={toggleMenu}
        >
          Start
        </button>

        {windows
          .filter((w) => w.visible)
          .map((w) => (
            <button
              key={w.id}
              className={`px-3 py-1 text-xs rounded font-bold ${
                focusedId === w.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-white"
              }`}
              onClick={() => focusWindow(w.id)}
            >
              {w.title}
            </button>
          ))}
      </div>
    </div>
  );
}
