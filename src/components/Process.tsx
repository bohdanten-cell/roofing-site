"use client";

import { motion } from "framer-motion";
import { MessageSquare, Ruler, FileText, HardHat, ShieldCheck, ListChecks } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: MessageSquare,
    title: "Консультація та розрахунок",
    description:
      "Ви залишаєте заявку або телефонуєте — ми уточнюємо деталі та робимо попередній розрахунок вартості.",
    bg: "bg-accent",
    titleColor: "text-white",
    descColor: "text-white/70",
    iconBg: "bg-white/20",
    badgeBg: "bg-white",
    badgeColor: "text-accent",
  },
  {
    num: 2,
    icon: Ruler,
    title: "Безкоштовний виїзд майстра",
    description:
      "Спеціаліст приїжджає для точного заміру і підбирає оптимальні матеріали.",
    bg: "bg-zinc-100",
    titleColor: "text-graphite",
    descColor: "text-zinc-500",
    iconBg: "bg-accent",
    badgeBg: "bg-white",
    badgeColor: "text-graphite",
  },
  {
    num: 3,
    icon: FileText,
    title: "Договір і підбір матеріалів",
    description:
      "Погоджуємо розрахунок, терміни і матеріали. Усе прозоро, без прихованих платежів.",
    bg: "bg-zinc-100",
    titleColor: "text-graphite",
    descColor: "text-zinc-500",
    iconBg: "bg-accent",
    badgeBg: "bg-white",
    badgeColor: "text-graphite",
  },
  {
    num: 4,
    icon: HardHat,
    title: "Монтаж покрівлі",
    description:
      "Наша бригада виконує монтаж згідно стандартів і технічних вимог. Гарантія на кожен етап.",
    bg: "bg-zinc-100",
    titleColor: "text-graphite",
    descColor: "text-zinc-500",
    iconBg: "bg-accent",
    badgeBg: "bg-white",
    badgeColor: "text-graphite",
  },
  {
    num: 5,
    icon: ShieldCheck,
    title: "Перевірка і гарантія",
    description:
      "Після завершення робіт ми проводимо фінальний огляд і надаємо гарантійний сертифікат.",
    bg: "bg-graphite",
    titleColor: "text-white",
    descColor: "text-white/60",
    iconBg: "bg-accent",
    badgeBg: "bg-white/15",
    badgeColor: "text-white",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-4 py-1.5 mb-5">
            <ListChecks className="w-3.5 h-3.5 text-accent" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Процес</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-graphite leading-tight tracking-tight mb-4">
            Як ми працюємо
          </h2>
          <p className="text-zinc-500 text-[16px] leading-relaxed max-w-md mx-auto">
            Прозорий процес без сюрпризів — від першого дзвінка до здачі об&apos;єкту
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              variants={item}
              className={`${s.bg} rounded-2xl p-7 flex flex-col ring-1 ring-black/5 ${
                i === 0 ? "lg:row-span-2" : ""
              }`}
            >
              {/* Step badge + icon */}
              <div className="flex items-center gap-3">
                <span
                  className={`${s.badgeBg} ${s.badgeColor} w-11 h-11 rounded-xl flex flex-col items-center justify-center leading-tight shrink-0`}
                >
                  <span className="text-[15px] font-extrabold">{s.num}</span>
                  <span className="text-[10px] font-semibold">Крок</span>
                </span>
                <div
                  className={`w-11 h-11 ${s.iconBg} rounded-xl flex items-center justify-center shrink-0`}
                >
                  <s.icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2.5 mt-5">
                <h3 className={`font-bold text-[17px] ${s.titleColor} leading-snug`}>
                  {s.title}
                </h3>
                <p className={`text-[14px] ${s.descColor} leading-relaxed`}>
                  {s.description}
                </p>
              </div>

              {/* Extra bullets for tall card */}
              {i === 0 && (
                <ul className="mt-6 space-y-3">
                  {[
                    "Безкоштовна консультація",
                    "Попередній розрахунок за 10 хвилин",
                    "Підбір матеріалів під ваш бюджет",
                    "Відповідаємо протягом 10 хвилин",
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-[13px] text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
