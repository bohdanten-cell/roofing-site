"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Wrench, Layers, Snowflake, Droplets, Sun, HardHat } from "lucide-react";

const services = [
  {
    title: "Монтаж\nнової покрівлі",
    description: "Встановлюємо дахи будь-якої складності «під ключ»",
    image: "/images/services/montazh 1.jpg",
    icon: Home,
    slug: "montazh-pokrivli",
  },
  {
    title: "Ремонт та\nреконструкція дахів",
    description: "Локальний чи повний ремонт з гарантією",
    image: "/images/services/remont 1.jpg",
    icon: Wrench,
    slug: "remont-dakhiv",
  },
  {
    title: "Демонтаж\nстарого даху",
    description: "Швидко та безпечно з вивозом сміття",
    image: "/images/services/demontazh 1.jpg",
    icon: Layers,
    slug: "demontazh-dakhu",
  },
  {
    title: "Утеплення\nта гідроізоляція",
    description: "Теплий та захищений дах на роки під ключ",
    image: "/images/services/uteplennya 1.jpg",
    icon: Snowflake,
    slug: "uteplennia-hidroizolatsia",
  },
  {
    title: "Монтаж\nводостічних систем",
    description: "Захист фасаду від дощу та талої води",
    image: "/images/services/vodostik 1.jpg",
    icon: Droplets,
    slug: "montazh-vodostoku",
  },
  {
    title: "Встановлення\nмансардних вікон",
    description: "Додаємо світло та комфорт у ваш дім",
    image: "/images/services/vikna 1.jpg",
    icon: Sun,
    slug: "mansardni-vikna",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Services({ heading }: { heading?: string } = {}) {
  return (
    <section id="services" className="py-24 lg:py-32 bg-zinc-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-zinc-200/80 rounded-full px-4 py-1.5 mb-5">
            <HardHat className="w-3.5 h-3.5 text-accent" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Послуги</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-graphite leading-tight tracking-tight mb-4">
            {heading ?? "Швидко та якісно робимо"}
          </h2>
          <p className="text-zinc-500 text-[16px] leading-relaxed max-w-md mx-auto">
            Повний спектр покрівельних робіт — від монтажу до ремонту, з гарантією на кожен етап
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              style={{ aspectRatio: "4/3" }}
            >
            <Link
              href={`/services/${service.slug}`}
              className="group relative rounded-2xl overflow-hidden cursor-pointer [transform:translateZ(0)] block w-full h-full"
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                unoptimized
                loading="lazy"
                decoding="async"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3">
                {/* Text */}
                <div>
                  <h3 className="text-[17px] font-bold text-white leading-snug mb-1.5 whitespace-pre-line">
                    {service.title}
                  </h3>
                  <p className="text-white/65 text-[13px] leading-snug">
                    {service.description}
                  </p>
                </div>

                {/* Right: icon + arrow */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                    <service.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center group-hover:bg-accent-dark transition-colors duration-200 group-hover:scale-105 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
