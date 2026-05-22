"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export default function CaseGallery({ images, columns = 3 }: { images: string[]; columns?: 2 | 3 }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i! + 1) % images.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i! - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, images.length]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <>
      {/* Grid */}
      <div className={`grid gap-3 ${columns === 2 ? "grid-cols-2" : "grid-cols-2 lg:grid-cols-3"}`}>
        {images.map((src, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer group [transform:translateZ(0)]"
            onClick={() => setLightbox(i)}
          >
            <Image
              src={src}
              alt={`Фото ${i + 1}`}
              fill
              unoptimized
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-colors z-10"
              onClick={() => setLightbox(null)}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {lightbox + 1} / {images.length}
            </div>

            {/* Prev */}
            <button
              className="absolute left-4 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[85vh] w-full mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox]}
                alt={`Фото ${lightbox + 1}`}
                width={1200}
                height={900}
                unoptimized
                className="w-full h-full object-contain rounded-xl"
              />
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
