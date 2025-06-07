// src/components/BootScreen.tsx
import React, { useEffect, useState } from "react";

interface BootScreenProps {
  onFinish: () => void;
}

export default function BootScreen({ onFinish }: BootScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = new Audio("/assets/startup.mp3");
    audio.volume = 0.7;
    audio.play().catch(() => {});

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500); // kort moment na laden
          return 100;
        }
        return prev + 1;
      });
    }, 40); // 100 * 40ms = ~4 seconden

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-[#008080] flex flex-col items-center justify-center text-white font-retro text-xs z-[9999] transition-opacity duration-1000">
      <img
        src="/assets/windowslogo.png"
        alt="Windows 95 Logo"
        className="w-40 mb-6 drop-shadow-lg"
      />
      <p className="mb-4 animate-pulse">Starting Windows 95...</p>

      <div className="w-64 h-3 bg-gray-700 border border-white relative">
        <div
          className="bg-white h-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
