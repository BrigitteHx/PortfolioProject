import React, { type ReactNode } from "react";
import { motion } from "framer-motion";

interface WindowProps {
  title: string;
  defaultPosition: { x: number; y: number };
  isFocused: boolean;
  onFocus: () => void;
  onClose: () => void;
  children: ReactNode;
  style?: React.CSSProperties;  // style prop toegevoegd voor zIndex
}

export default function Window({
  title,
  defaultPosition,
  isFocused,
  onFocus,
  onClose,
  children,
  style,
}: WindowProps) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={{ left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight }}
      initial={{ scale: 0.9, opacity: 0, x: defaultPosition.x, y: defaultPosition.y }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={onFocus}
      className={`w-80 bg-white border-4 shadow-lg select-none cursor-default
        ${
          isFocused
            ? "border-blue-600 z-50"
            : "border-gray-700 z-10"
        }
      `}
      style={{ position: "absolute", ...style }}  // style nu hier toegevoegd
    >
      <div
        className="title-bar bg-blue-600 text-white px-3 py-1 cursor-move flex justify-between items-center"
        onPointerDown={onFocus} // focus als je drag start
      >
        <span className="font-bold text-xs">{title}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="text-white hover:text-gray-300 font-bold text-xs"
        >
          ✕
        </button>
      </div>
      <div className="p-4 text-gray-800 text-xs">{children}</div>
    </motion.div>
  );
}
