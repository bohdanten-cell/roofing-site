"use client";

import { motion } from "framer-motion";
import { Users, FileText, MapPin, Clock, BadgeDollarSign, Key, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Власні монтажні бригади",
    description: "Ми не залучаємо посередників/сторонніх майстрів. Усі роботи виконують наші сертифіковані фахівці, що гарантує стабільну якість на кожному етапі.",
    bg: "bg-graphite",
    titleColor: "text-white",
    descColor: "text-white/60",
    iconBg: "bg-accent",
  },
  {
    icon: FileText,
    title: "Офіційний договір і гарантія 15 років",
    description: "Усі зобов'язання фіксуємо письмово — ніяких «на словах». Ви отримуєте договір, акт виконаних робіт і реальну гарантію на покрівлю.",
    bg: "bg-zinc-100",
    titleColor: "text-graphite",
    descColor: "text-zinc-500",
    iconBg: "bg-accent",
  },
  {
    icon: MapPin,
    title: "Безкоштовний виїзд і замір",
    description: "Наш спеціаліст приїде у зручний для вас час, зробить точний замір даху, допоможе обрати матеріал і на місці прорахує орієнтовну вартість.",
    bg: "bg-zinc-100",
    titleColor: "text-graphite",
    descColor: "text-zinc-500",
    iconBg: "bg-accent",
  },
  {
    icon: Clock,
    title: "Монтаж від 7 днів",
    description: "Завдяки налагодженим процесам і власним бригадам ми виконуємо роботи швидко — навіть на складних об'єктах, без втрати якості.",
    bg: "bg-zinc-100",
    titleColor: "text-graphite",
    descColor: "text-zinc-500",
    iconBg: "bg-accent",
  },
  {
    icon: BadgeDollarSign,
    title: "Фіксована вартість без доплат",
    description: "Ціна, яку ми погодили на старті, не змінюється під час виконання. Жодних прихованих платежів або додаткових витрат по ходу робіт.",
    bg: "bg-zinc-100",
    titleColor: "text-graphite",
    descColor: "text-zinc-500",
    iconBg: "bg-accent",
  },
  {
    icon: Key,
    title: "Повний цикл робіт під ключ",
    description: "Ми беремо на себе весь процес: від демонтажу старої покрівлі та підготовки основи до встановлення нової покрівлі, утеплення і водостоку.",
    bg: "bg-accent",
    titleColor: "text-white",
    descColor: "text-white/70",
    iconBg: "bg-white/20",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-white">
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
            <ThumbsUp className="w-3.5 h-3.5 text-accent" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Переваги</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-graphite leading-tight tracking-tight mb-4">
            Чому нас обирають клієнти
          </h2>
          <p className="text-zinc-500 text-[16px] leading-relaxed max-w-md mx-auto">
            Ми не просто кладемо покрівлю — ми беремо на себе повну відповідальність за результат
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
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className={`${f.bg} rounded-2xl p-7 flex flex-col gap-5 ring-1 ring-black/5`}
            >
              {/* Icon */}
              <div className={`w-11 h-11 ${f.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                <f.icon className="w-5 h-5 text-white" strokeWidth={1.8} />
              </div>

              {/* Text */}
              <div>
                <h3 className={`font-bold text-[17px] ${f.titleColor} leading-snug mb-2.5`}>
                  {f.title}
                </h3>
                <p className={`text-[14px] ${f.descColor} leading-relaxed`}>
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
