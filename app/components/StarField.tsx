"use client";
import { useEffect, useRef } from "react";

export default function StarField() {
  const starFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (starFieldRef.current) {
      const starField = starFieldRef.current;
      const starCount = 200;

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = `${Math.random() * 2}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starField.appendChild(star);
      }
    }
  }, []);

  return <div ref={starFieldRef} className="star-field" />;
}
