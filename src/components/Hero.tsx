"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calculator, Clock, ShieldCheck, Ruler } from "lucide-react";

const fadeUp = (delay = 0) =>
  ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: "easeOut" as const, delay },
  }) as const;

const features = [
  { icon: Ruler, label: "Безкоштовний замір\nі консультація" },
  { icon: Clock, label: "Монтаж\nвід 7 днів" },
  { icon: ShieldCheck, label: "15 років гарантії\nна роботи" },
];

/*
  Ліва колонка: padding-left підібраний так, щоб вирівнятись з шапкою.
  Формула: max(40px, (100vw - 1280px) / 2 + 40px)  ≈ те саме що max-w-7xl + px-10.
  На практиці: lg:pl-10 xl:pl-[calc((100vw-1280px)/2+40px)]
*/
const leftPad =
  "pl-5 sm:pl-8 lg:pl-10 xl:pl-[max(40px,calc((100vw_-_80rem)_/_2_+_2.5rem))]";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row overflow-hidden bg-white lg:min-h-[700px]">

      {/* ── Mobile photo (top) ── */}
      <div className="block lg:hidden w-full h-[260px] relative shrink-0">
        <Image
          src="/images/hero.jpg"
          alt="Монтаж покрівлі"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ── Left half ── */}
      <div className={`w-full lg:w-1/2 flex flex-col ${leftPad} pr-5 sm:pr-8 lg:pr-10 xl:pr-16`}>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center py-10 lg:py-16">
          <motion.h1
            {...fadeUp(0)}
            className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-graphite leading-[1.05] tracking-tight mb-5 text-center lg:text-left"
          >
            Покрівля дахів
            <br />
            у Києві під ключ
          </motion.h1>

          <motion.p
            {...fadeUp(0.1)}
            className="text-zinc-500 text-[17px] leading-relaxed mb-8 text-center lg:text-left"
          >
            Дізнайтеся вартість за 1 хвилину в онлайн-калькуляторі та
            отримайте безкоштовний замір
          </motion.p>

          <motion.div {...fadeUp(0.17)} className="flex flex-col sm:grid sm:grid-cols-2 gap-3 mb-8">
            <a
              href="#calculator"
              className="relative overflow-hidden flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-5 py-4 rounded-xl font-semibold text-[15px] transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            >
              <motion.span
                className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                animate={{ x: ["-100%", "220%"] }}
                transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
              />
              Розрахувати вартість
              <Calculator className="w-4 h-4 shrink-0" />
            </a>
            <a
              href="tel:+380634184494"
              className="flex items-center justify-center border-2 border-zinc-200 hover:border-zinc-300 bg-white text-graphite px-5 py-4 rounded-xl font-semibold text-[15px] transition-all duration-200 hover:-translate-y-0.5"
            >
              Отримати консультацію
            </a>
          </motion.div>

          {/* Feature badges */}
          <motion.div
            {...fadeUp(0.25)}
            className="grid grid-cols-3 gap-3"
          >
            {features.map((f) => (
              <motion.div
                key={f.label}
                className="flex flex-col items-center gap-3 bg-zinc-50 rounded-xl py-6 px-3 text-center cursor-default"
                whileHover={{ y: -5, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <motion.div
                  className="w-12 h-12 bg-graphite rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.12, rotate: -6 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <f.icon className="w-6 h-6 text-white" strokeWidth={1.7} />
                </motion.div>
                <p className="text-[13px] text-zinc-500 font-medium leading-snug whitespace-pre-line">
                  {f.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* ── Right half: photo ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="hidden lg:block w-1/2 shrink-0 relative min-h-[640px]"
      >
        <Image
          src="/images/hero.jpg"
          alt="Монтаж покрівлі"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

    </section>
  );
}
