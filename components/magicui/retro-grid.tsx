"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface RetroWormholeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Additional CSS classes to apply to the wormhole container
   */
  className?: string;
  /**
   * Number of circles in the wormhole
   * @default 12
   */
  circleCount?: number;
  /**
   * Animation speed for the wormhole effect (seconds)
   * @default 10
   */
  animationSpeed?: number;
  /**
   * Opacity value between 0 and 1
   * @default 0.7
   */
  opacity?: number;
  /**
   * Grid line color in light mode
   * @default "#555555"
   */
  lightLineColor?: string;
  /**
   * Grid line color in dark mode
   * @default "#888888"
   */
  darkLineColor?: string;
  /**
   * Number of segments in each circle
   * @default 12
   */
  segments?: number;
}

export function RetroGrid({
  className,
  circleCount = 12,
  animationSpeed = 10,
  opacity = 0.7,
  lightLineColor = "#555555",
  darkLineColor = "#888888",
  segments = 12,
  ...props
}: RetroWormholeProps) {
  const wormholeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create keyframe animation dynamically
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes wormhole-rotation {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
      }
      
      @keyframes wormhole-pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Create an array of circles to render
  const circles = Array.from({ length: circleCount }, (_, i) => {
    const baseSize = 100 - (i * (70 / circleCount)); // Gradually decreasing size
    const delay = i * (animationSpeed / circleCount);
    
    return (
      <div 
        key={i}
        className="absolute left-1/2 top-1/2 border rounded-full"
        style={{
          width: `${baseSize}%`,
          height: `${baseSize}%`,
          transform: "translate(-50%, -50%)",
          borderColor: "var(--line-color)",
          opacity: opacity * (1 - i / (circleCount * 1.5)),
          animation: `wormhole-rotation ${animationSpeed}s linear infinite`,
          animationDelay: `-${delay}s`,
          zIndex: circleCount - i
        }}
      >
        {/* Generate radial segments for each circle */}
        {Array.from({ length: segments }, (_, j) => {
          const angle = (j / segments) * 360;
          return (
            <div
              key={j}
              className="absolute top-1/2 left-1/2 border-t"
              style={{
                width: "50%",
                transform: `translate(0, -50%) rotate(${angle}deg)`,
                transformOrigin: "left center",
                borderColor: "var(--line-color)",
              }}
            />
          );
        })}
      </div>
    );
  });

  return (
    <div
      className={cn(
        "fixed inset-0 w-full h-full overflow-hidden",
        className
      )}
      style={{
        "--light-line": lightLineColor,
        "--dark-line": darkLineColor,
        "--line-color": "var(--light-line)",
      } as React.CSSProperties}
      {...props}
    >
      {/* Wormhole container */}
      <div 
        ref={wormholeRef}
        className={cn(
          "absolute inset-0 w-full h-full [perspective:1000px]",
          "dark:[--line-color:var(--dark-line)]"
        )}
        style={{
          animation: `wormhole-pulse ${animationSpeed * 1.5}s ease-in-out infinite`
        }}
      >
        {circles}
      </div>
      
      {/* Central glow */}
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-lg" />
      
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#3C4048] dark:to-black opacity-70" />
    </div>
  );
}