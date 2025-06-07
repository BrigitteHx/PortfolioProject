import React from "react";
import type { ReactNode } from "react";
import Draggable from "react-draggable";
import { motion } from "framer-motion";

interface WindowProps {
  title: string;
  defaultPosition: { x: number; y: number };
  children: ReactNode;
}

export default function Window({ title, defaultPosition, children }: WindowProps) {
  return (
    <Draggable defaultPosition={defaultPosition} handle=".title-bar">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-80 bg-white border-4 border-gray-700 shadow-lg select-none"
      >
        <div className="title-bar bg-blue-600 text-white px-3 py-1 cursor-move user-select-none flex justify-between items-center">
          <span className="font-bold text-xs">{title}</span>
          <button
            onClick={() => alert("Close button clicked!")}
            className="text-white hover:text-gray-300 font-bold text-xs"
          >
            ✕
          </button>
        </div>
        <div className="p-4 text-gray-800 text-xs">{children}</div>
      </motion.div>
    </Draggable>
  );
}
