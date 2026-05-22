"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Percent, Crown, Layers } from "lucide-react";

const materials = [
  {
    title: "Композитна черепиця",
    description: "Поєднання естетики натуральної черепиці та легкої ваги",
    price: "від 600 грн/м²",
    badge: null,
    bg: "bg-zinc-100",
    titleColor: "text-graphite",
    descColor: "text-zinc-500",
    priceColor: "text-graphite",
    image: "/images/materials/composite.png",
  },
  {
    title: "Металочерепиця",
    description: "Найпопулярніший вибір для приватних будинків",
    price: "від 350 грн/м²",
    badge: { label: "Топ", icon: Zap, bg: "bg-accent", text: "text-white" },
    bg: "bg-zinc-100",
    titleColor: "text-graphite",
    descColor: "text-zinc-500",
    priceColor: "text-graphite",
    image: "/images/materials/metal-tile.png",
  },
  {
    title: "Бітумна черепиця",
    description: "Гнучка, тиха, підходить для складних форм дахів",
    price: "від 400 грн/м²",
    badge: null,
    bg: "bg-zinc-100",
    titleColor: "text-graphite",
    descColor: "text-zinc-500",
    priceColor: "text-graphite",
    image: "/images/materials/bitumen.png",
  },
  {
    title: "Профнастил",
    description: "Надійний і доступний матеріал для будь-яких дахів",
    price: "від 300 грн/м²",
    badge: { label: "Акція", icon: Percent, bg: "bg-accent", text: "text-white" },
    bg: "bg-zinc-100",
    titleColor: "text-graphite",
    descColor: "text-zinc-500",
    priceColor: "text-graphite",
    image: "/images/materials/profnastil.png",
  },
  {
    title: "М'яка покрівля",
    description: "Вигідне рішення для плоских дахів та господарських будівель",
    price: "від 250 грн/м²",
    badge: null,
    bg: "bg-zinc-100",
    titleColor: "text-graphite",
    descColor: "text-zinc-500",
    priceColor: "text-graphite",
    image: "/images/materials/soft-roof.png",
  },
  {
    title: "Фальцева покрівля",
    description: "Сучасний вигляд і довговічність понад 40 років",
    price: "від 500 грн/м²",
    badge: { label: "Преміум", icon: Crown, bg: "bg-graphite", text: "text-white" },
    bg: "bg-zinc-100",
    titleColor: "text-graphite",
    descColor: "text-zinc-500",
    priceColor: "text-graphite",
    image: "/images/materials/seam.png",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Materials() {
  return (
    <section id="materials" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-4 py-1.5 mb-5">
            <Layers className="w-3.5 h-3.5 text-accent" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Матеріали</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-graphite leading-tight tracking-tight mb-4">
            Матеріали, з якими ми працюємо
          </h2>
          <p className="text-zinc-500 text-[16px] leading-relaxed max-w-md mx-auto">
            Тільки перевірені виробники з офіційною гарантією якості та сертифікатами
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
          {materials.map((mat) => (
            <motion.div
              key={mat.title}
              variants={item}
              className={`group relative ${mat.bg} rounded-2xl overflow-hidden px-6 pt-5 pb-4 h-[175px] ring-1 ring-black/8 hover:brightness-95 transition-all duration-300`}
            >
              {/* Badge — absolute top-left */}
              {mat.badge && (
                <div className="absolute top-5 right-6">
                  <span className={`inline-flex items-center gap-1 ${mat.badge.bg} ${mat.badge.text} text-[11px] font-bold px-3 py-1 rounded-full`}>
                    {mat.badge.label}
                    <mat.badge.icon className="w-3 h-3" />
                  </span>
                </div>
              )}

              {/* Text — flex col justify-between, price always at bottom */}
              <div className="flex flex-col justify-between h-full pr-[140px]">
                <div>
                  <h3 className={`font-bold text-[17px] ${mat.titleColor} leading-snug mb-1.5`}>
                    {mat.title}
                  </h3>
                  <p className={`text-[13px] ${mat.descColor} leading-snug`}>
                    {mat.description}
                  </p>
                </div>
                <p className={`font-bold text-[15px] ${mat.priceColor}`}>
                  {mat.price}
                </p>
              </div>

              {/* Image — pinned to right edge, slides in on scroll */}
              <motion.div
                className="absolute right-0 bottom-0 w-[155px] h-[115px]"
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.15 }}
              >
                <Image
                  src={mat.image}
                  alt={mat.title}
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
