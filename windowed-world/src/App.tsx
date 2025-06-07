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

  // Houd een array bij van venster ID's die de stapelvolgorde bepaalt:
  const [zOrder, setZOrder] = useState<number[]>(windows.map(w => w.id));

  function closeWindow(id: number) {
    setWindows(ws => ws.map(w => (w.id === id ? { ...w, isOpen: false } : w)));
    setZOrder(zs => zs.filter(zid => zid !== id));
  }

  function focusWindow(id: number) {
    setZOrder(zs => [...zs.filter(zid => zid !== id), id]); // Zet gefocust venster achteraan (bovenste)
  }

  return (
    <div className="min-h-screen bg-gray-200 p-4 relative overflow-hidden">
      <h1 className="text-2xl mb-6 text-center">Windowed World</h1>

      {windows
        .filter(w => w.isOpen)
        .map(w => {
          const zIndex = zOrder.indexOf(w.id) + 10; // basis z-index 10 + positie
          return (
            <Window
              key={w.id}
              title={w.title}
              defaultPosition={w.position}
              isFocused={zOrder[zOrder.length - 1] === w.id} // Is het bovenste venster?
              onFocus={() => focusWindow(w.id)}
              onClose={() => closeWindow(w.id)}
              style={{ zIndex }} // Geef z-index mee aan Window
            >
              <p>Inhoud van venster "{w.title}"</p>
            </Window>
          );
        })}
    </div>
  );
}
