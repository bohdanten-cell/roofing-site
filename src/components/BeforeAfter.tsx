"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

export default function BeforeAfter({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPos((x / rect.width) * 100);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging.current) return;
    update(e.clientX);
  }, [update]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    update(e.touches[0].clientX);
  }, [update]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl select-none cursor-col-resize aspect-video"
      onMouseMove={onMouseMove}
      onMouseDown={() => { dragging.current = true; }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchMove={onTouchMove}
    >
      {/* After (full) */}
      <Image src={after} alt="Після" fill unoptimized className="object-cover" />

      {/* Before (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image src={before} alt="До" fill unoptimized className="object-cover" />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-graphite/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg">ДО</div>
      <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg">ПІСЛЯ</div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)]"
        style={{ left: `${pos}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-graphite" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
