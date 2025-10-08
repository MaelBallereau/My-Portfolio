"use client";
import { useMemo, useRef, useEffect, useState } from "react";
import {
  listOutils,
  listFrameworks,
  listLangage,
  ListORM,
  listLibrairie,
  listMethode,
} from "../../../data";

interface Skill {
  name: string;
  svgPath: string;
  highlight?: boolean;
}

interface Position {
  x: number;
  y: number;
}

export default function SkillCloud() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Position[]>([]);
  const allSkills: Skill[] = [
    ...listLangage,
    ...listFrameworks,
    ...listOutils,
    ...ListORM,
    ...listLibrairie,
    ...listMethode,
  ];

  const areTooClose = (a: Position, b: Position, minDist: number) => {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy) < minDist;
  };

  const generatePositions = () => {
    if (!containerRef.current) return [];
    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();
    const placed: Position[] = [];
    const results: Position[] = [];
    const maxAttempts = 200;
    const minDist = 60;

    allSkills.forEach((skill) => {
      const size = skill.highlight ? 50 : 38;
      const totalPadding = minDist / 2 + size / 2;
      let tries = 0;
      let pos: Position | undefined;

      do {
        const x = Math.random() * (width - 2 * totalPadding) + totalPadding;
        const y = Math.random() * (height - 2 * totalPadding) + totalPadding;
        pos = { x, y };
        tries++;
      } while (
        placed.some((p) => areTooClose(p, pos!, minDist)) &&
        tries < maxAttempts
      );

      if (!pos) pos = { x: width / 2, y: height / 2 };
      placed.push(pos);
      results.push(pos);
    });

    return results;
  };

  useEffect(() => {
    const updatePositions = () => {
      const newPositions = generatePositions();
      setPositions(newPositions);
    };

    updatePositions();
    const handleResize = () => updatePositions();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[550px] w-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden rounded-lg md:w-2/5"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-indigo-500 pb-2">
        Cloud Skills
      </h2>
      <div className="relative w-full h-full flex items-center justify-center">
        {allSkills.map((skill, i) => {
          const pos = positions[i];
          if (!pos || !containerRef.current) return null;

          const size = skill.highlight ? 50 : 38;
          const containerWidth = containerRef.current.clientWidth;
          const containerHeight = containerRef.current.clientHeight;

          // On s'assure que le logo ne dépasse jamais des limites du conteneur
          const safeX = Math.max(size / 2, Math.min(pos.x, containerWidth - size / 2));
          const safeY = Math.max(size / 2, Math.min(pos.y, containerHeight - size / 2)-30);

          return (
            <div
              key={skill.name}
              className="absolute flex flex-col items-center justify-center text-center select-none transition-transform duration-300 hover:scale-110"
              style={{
                left: `${safeX}px`,
                top: `${safeY}px`,
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(-50%, -50%)`,
              }}
            >
              <img
                src={skill.svgPath}
                alt={skill.name}
                className={`drop-shadow-md transition-all ${
                  skill.highlight ? "brightness-110" : "brightness-90"
                }`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
