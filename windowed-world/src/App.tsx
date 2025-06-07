import React, { useState } from "react";
import Window from "./components/Window";
import StartMenu from "./components/StartMenu";
import Taskbar from "./components/Taskbar";
import BootScreen from "./components/BootScreen";

interface WindowData {
  id: string;
  title: string;
  position: { x: number; y: number };
  content: React.ReactNode;
}

const idToTitle: Record<string, string> = {
  about: "About Me",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact",
};

const idToContent: Record<string, React.ReactNode> = {
  about: <p>Hoi! Ik ben een software developer met een passie voor UI/UX.</p>,
  skills: (
    <ul className="list-disc ml-4">
      <li>TypeScript</li>
      <li>React</li>
      <li>Tailwind CSS</li>
      <li>Node.js</li>
    </ul>
  ),
  projects: <p>Hier komen je projecten te staan!</p>,
  contact: <p>Je kunt me bereiken via LinkedIn of e-mail.</p>,
};

export default function App() {
  const [booted, setBooted] = useState(false);
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [focused, setFocused] = useState<string | null>(null);
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  const handleOpenWindow = (id: string) => {
    const alreadyOpen = windows.some((w) => w.id === id);

    if (alreadyOpen) {
      setFocused(id);
      return;
    }

    const newWindow: WindowData = {
      id,
      title: idToTitle[id],
      position: {
        x: 100 + windows.length * 40,
        y: 100 + windows.length * 40,
      },
      content: idToContent[id],
    };

    setWindows([...windows, newWindow]);
    setFocused(id);
  };

  const handleCloseWindow = (id: string) => {
    setWindows(windows.filter((w) => w.id !== id));
    if (focused === id) {
      setFocused(null);
    }
  };

  if (!booted) {
    return <BootScreen onFinish={() => setBooted(true)} />;
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-200 to-white overflow-hidden relative">
      {windows.map((w) => (
        <Window
          key={w.id}
          title={w.title}
          defaultPosition={w.position}
          isFocused={focused === w.id}
          onFocus={() => setFocused(w.id)}
          onClose={() => handleCloseWindow(w.id)}
        >
          {w.content}
        </Window>
      ))}

      <Taskbar onStartClick={() => setStartMenuOpen((v) => !v)} />

      <StartMenu
        isOpen={startMenuOpen}
        onClose={() => setStartMenuOpen(false)}
        onSelect={handleOpenWindow}
      />
    </div>
  );
}
