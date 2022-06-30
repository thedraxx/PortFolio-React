import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/global.css";

export const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX - 16,
        y: e.clientY - 16,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };
  return (
    <div>
      <motion.div
        className="cursor"
        variants={variants}
        animate="default"
      ></motion.div>
    </div>
  );
};
