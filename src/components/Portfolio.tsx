"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Maximize2, Calendar, Images } from "lucide-react";

const projects = [
  {
    title: "Котедж в Конча-Заспі",
    type: "Фальцева покрівля",
    city: "Конча-Заспа",
    area: "340 м²",
    year: "2024",
    image: "/images/portfolio/koncha.jpg",
    span: "col-span-1 row-span-2",
    slug: "koncha-zaspa-cottage",
  },
  {
    title: "Приватний будинок, Оболонь",
    type: "Металочерепиця",
    city: "Оболонь, Київ",
    area: "180 м²",
    year: "2024",
    image: "/images/portfolio/obolon.jpg",
    span: "col-span-1",
    slug: "obolon-house",
  },
  {
    title: "Таунхаус у Бучі",
    type: "Металочерепиця",
    city: "Буча",
    area: "215 м²",
    year: "2024",
    image: "/images/portfolio/bucha.jpg",
    span: "col-span-1",
    slug: "bucha-townhouse",
  },
  {
    title: "Котедж в Ірпені",
    type: "Металочерепиця",
    city: "Ірпінь",
    area: "420 м²",
    year: "2023",
    image: "/images/portfolio/podil.jpg",
    span: "col-span-2",
    slug: "irpin-cottage",
  },
];

const statsRow = [
  { value: "98%", label: "Задоволених клієнтів" },
  { value: "14 днів", label: "Середній термін монтажу" },
  { value: "15 років", label: "Гарантія на роботи" },
  { value: "Київ +30 км", label: "Зона обслуговування" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-zinc-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-zinc-200/80 rounded-full px-4 py-1.5 mb-5">
            <Images className="w-3.5 h-3.5 text-accent" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Портфоліо</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-graphite leading-tight tracking-tight mb-4">
            Наші завершені проекти
          </h2>
          <p className="text-zinc-500 text-[15px] leading-relaxed max-w-sm mx-auto">
            Кожен об&apos;єкт — це окрема задача. Ми підходимо індивідуально до кожного проекту.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                i === 0 ? "sm:row-span-2" : ""
              } ${i === 3 ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
            {"slug" in p && p.slug && (
              <Link href={`/portfolio/${p.slug}`} className="absolute inset-0 z-20" aria-label={p.title} />
            )}
              {/* Image */}
              <Image
                src={p.image}
                alt={p.title}
                fill
                unoptimized
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Default overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-graphite/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Type badge */}
                <span className="inline-block bg-accent text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide mb-3">
                  {p.type}
                </span>

                <h3 className="font-bold text-xl text-white mb-3">{p.title}</h3>

                {/* Meta */}
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {p.city}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" />
                    {p.area}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {p.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 rounded-3xl overflow-hidden">
          {statsRow.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white px-8 py-8 text-center"
            >
              <p className="text-3xl font-extrabold text-graphite">{s.value}</p>
              <p className="text-zinc-500 text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
