"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";

const reviews = [
  {
    name: "Олег Марченко",
    initials: "ОМ",
    color: "bg-blue-600",
    role: "Власник приватного будинку",
    city: "Оболонь, Київ",
    rating: 5,
    date: "Лютий 2025",
    text: "Чудова компанія! Зробили металочерепицю на нашому будинку — швидко, акуратно і в термін. Менеджер завжди був на зв'язку. Рекомендую без жодних застережень.",
  },
  {
    name: "Наталія Бойко",
    initials: "НБ",
    color: "bg-rose-600",
    role: "Власниця котеджу",
    city: "Конча-Заспа",
    rating: 5,
    date: "Грудень 2024",
    text: "Звернулась після протікання даху. Майстри приїхали наступного дня, виявили причину і усунули все за один день. Якість роботи відмінна, ціна справедлива.",
  },
  {
    name: "Сергій Коваленко",
    initials: "СК",
    color: "bg-emerald-600",
    role: "Директор будівельної компанії",
    city: "Бровари",
    rating: 5,
    date: "Листопад 2024",
    text: "Співпрацюємо з RoofMaster вже другий рік. Виконали плоску покрівлю на трьох наших об'єктах. Завжди вкладаються в терміни, документація в повному порядку.",
  },
  {
    name: "Ірина Савченко",
    initials: "ІС",
    color: "bg-violet-600",
    role: "Власниця таунхаусу",
    city: "Буча",
    rating: 5,
    date: "Жовтень 2024",
    text: "Дуже задоволена результатом! Бітумна черепиця виглядає чудово. Хлопці прибрали за собою повністю, ніяких слідів роботи. Обов'язково звернемось знову.",
  },
  {
    name: "Андрій Мельник",
    initials: "АМ",
    color: "bg-amber-600",
    role: "Власник дачі",
    city: "Боярка",
    rating: 4,
    date: "Вересень 2024",
    text: "Замовляв ремонт старої покрівлі. Прийшли, зробили розрахунок, все пояснили. Роботу виконали якісно, є невелика затримка по термінах, але зате без зауважень по якості.",
  },
];

const DESKTOP_VISIBLE = 3;
const desktopMax = reviews.length - DESKTOP_VISIBLE; // 2

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 ring-1 ring-black/5 h-full">
      {/* Author row */}
      <div className="flex items-center gap-3">
        <div
          className={`w-11 h-11 rounded-xl ${review.color} flex items-center justify-center shrink-0`}
        >
          <span className="text-white font-bold text-sm">{review.initials}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-graphite text-[15px] truncate">{review.name}</p>
          <p className="text-zinc-400 text-xs truncate">{review.city}</p>
        </div>
        <div className="flex gap-0.5 shrink-0">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              className={`w-3.5 h-3.5 ${
                s <= review.rating
                  ? "fill-amber-400 text-amber-400"
                  : "fill-zinc-200 text-zinc-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Text */}
      <div className="flex-1">
        <Quote className="w-6 h-6 text-accent/20 mb-2" />
        <p className="text-zinc-600 text-[14px] leading-relaxed">{review.text}</p>
      </div>

      {/* Date */}
      <p className="text-zinc-400 text-xs">{review.date}</p>
    </div>
  );
}

export default function Reviews() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(0);

  const next = useCallback(() => {
    setDirection(1);
    setActive((a) => (a + 1) % (desktopMax + 1));
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((a) => (a - 1 + desktopMax + 1) % (desktopMax + 1));
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  const desktopSlice = reviews.slice(active, active + DESKTOP_VISIBLE);

  return (
    <section className="py-24 lg:py-32 bg-zinc-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-16 lg:mb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-zinc-200/80 rounded-full px-4 py-1.5 mb-5">
            <MessageSquare className="w-3.5 h-3.5 text-accent" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Відгуки</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-graphite leading-tight tracking-tight mb-4"
          >
            Що кажуть наші клієнти
          </motion.h2>
          <p className="text-zinc-500 text-[16px] leading-relaxed max-w-md mx-auto">
            Понад 240 реальних відгуків від власників будинків та забудовників Київщини
          </p>
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Desktop: 3 cards */}
          <div className="hidden lg:block overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ opacity: 0, x: d * 40 }),
                  center: { opacity: 1, x: 0 },
                  exit: (d: number) => ({ opacity: 0, x: d * -40 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-3 gap-4"
              >
                {desktopSlice.map((review) => (
                  <ReviewCard key={review.name} review={review} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile: single card with swipe */}
          <div
            className="lg:hidden bg-white rounded-3xl overflow-hidden shadow-sm"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="p-6"
              >
                <ReviewCard review={reviews[active]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation bar */}
          <div className="mt-6 flex items-center justify-between">
            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: desktopMax + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > active ? 1 : -1);
                    setActive(i);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 h-2 bg-accent"
                      : "w-2 h-2 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                  aria-label={`Перейти до групи ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-xl border border-zinc-200 bg-white flex items-center justify-center text-zinc-400 hover:text-graphite hover:border-zinc-300 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-xl border border-zinc-200 bg-white flex items-center justify-center text-zinc-400 hover:text-graphite hover:border-zinc-300 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
