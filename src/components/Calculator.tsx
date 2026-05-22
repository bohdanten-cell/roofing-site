"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Check } from "lucide-react";
import Image from "next/image";

const materials = [
  { id: "composite", label: "Композитна черепиця", price: 600, image: "/images/materials 2/composite.png" },
  { id: "metal", label: "Металочерепиця", price: 350, image: "/images/materials 2/metal-tile.png" },
  { id: "bitumen", label: "Бітумна черепиця", price: 400, image: "/images/materials 2/bitumen.png" },
  { id: "profile", label: "Профнастил", price: 300, image: "/images/materials 2/profnastil.png" },
  { id: "soft", label: "М'яка покрівля", price: 250, image: "/images/materials 2/soft-roof.png" },
  { id: "seam", label: "Фальцева покрівля", price: 500, image: "/images/materials 2/seam.png" },
];

const quickAreas = [50, 100, 150, 200, 300];

const stepLabels = [
  "Оберіть тип покрівлі, яка вас цікавить",
  "Вкажіть площу покрівлі",
  "Залиште контакти для отримання результату",
];

function formatPrice(n: number) {
  return n.toLocaleString("uk-UA");
}

export default function Calculator({ sectionClassName }: { sectionClassName?: string } = {}) {
  const [step, setStep] = useState(0);
  const [material, setMaterial] = useState<string | null>(null);
  const [area, setArea] = useState("100");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedMat = materials.find((m) => m.id === material);
  const areaNum = parseInt(area) || 0;
  const priceMin = selectedMat ? areaNum * selectedMat.price : 0;
  const priceMax = Math.round(priceMin * 1.25);

  const canNext = () => {
    if (step === 0) return !!material;
    if (step === 1) return areaNum > 0;
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setStep(0);
    setMaterial(null);
    setArea("100");
    setName("");
    setPhone("");
    setSubmitted(false);
  };

  return (
    <section id="calculator" className={sectionClassName ?? "py-24 lg:py-32 bg-zinc-100"}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-accent rounded-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">

            {/* Left: info */}
            <div className="p-10 lg:p-14 flex flex-col justify-between gap-10">
              <div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
                  Розрахуйте вартість вашої покрівлі за 1 хвилину
                </h2>
                <p className="text-white/70 text-[16px] leading-relaxed">
                  Та отримайте безкоштовний виїзд спеціаліста для точного заміру і персональної знижки 8%
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { v: "1 200+", l: "Завершених об'єктів" },
                  { v: "15 років", l: "Гарантія на роботи" },
                  { v: "від 7 днів", l: "Термін монтажу" },
                  { v: "8%", l: "Знижка після розрахунку" },
                ].map((s) => (
                  <div key={s.l} className="bg-white/10 rounded-xl p-4">
                    <p className="text-white font-extrabold text-2xl">{s.v}</p>
                    <p className="text-white/60 text-xs mt-0.5 leading-snug">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: calculator */}
            <div className="bg-white rounded-2xl m-2 p-7 sm:p-8 flex flex-col">

              {/* Progress bar */}
              <div className="flex gap-1.5 mb-6">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= step ? "bg-accent" : "bg-zinc-200"}`}
                  />
                ))}
              </div>

              {/* Step header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <p className="font-semibold text-[15px] text-graphite leading-snug">
                  {stepLabels[step]}
                </p>
                <span className="text-sm text-zinc-400 shrink-0">
                  Крок <span className="text-accent font-bold">{step + 1}</span>/3
                </span>
              </div>

              {/* Step content */}
              <div className="flex-1">
                <AnimatePresence mode="wait">

                  {/* Step 0: Material */}
                  {step === 0 && (
                    <motion.div
                      key="step0"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.25 }}
                      className="grid grid-cols-2 sm:grid-cols-3 gap-3"
                    >
                      {materials.map((mat) => (
                        <button
                          key={mat.id}
                          onClick={() => setMaterial(mat.id)}
                          className={`relative flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all duration-200 ${
                            material === mat.id
                              ? "border-accent bg-accent/5"
                              : "border-zinc-200 bg-zinc-50 hover:border-zinc-300"
                          }`}
                        >
                          <div className="relative w-full h-14">
                            <Image
                              src={mat.image}
                              alt={mat.label}
                              fill
                              unoptimized
                              className="object-contain"
                            />
                          </div>
                          <span className={`text-[11px] font-medium text-center leading-snug ${material === mat.id ? "text-accent" : "text-zinc-600"}`}>
                            {mat.label}
                          </span>
                          {material === mat.id && (
                            <div className="absolute top-2 right-2 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 text-white" />
                            </div>
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {/* Step 1: Area */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="flex flex-wrap gap-2 mb-5">
                        {quickAreas.map((a) => (
                          <button
                            key={a}
                            onClick={() => setArea(String(a))}
                            className={`px-4 py-2 rounded-xl text-sm font-semibold border-2 transition-all ${
                              area === String(a)
                                ? "border-accent bg-accent/5 text-accent"
                                : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
                            }`}
                          >
                            {a} м²
                          </button>
                        ))}
                      </div>
                      <div className="relative">
                        <input
                          type="number"
                          value={area}
                          onChange={(e) => setArea(e.target.value)}
                          min={10}
                          max={9999}
                          className="w-full bg-zinc-50 border-2 border-zinc-200 focus:border-accent rounded-xl px-5 py-4 text-xl font-bold text-graphite outline-none transition-colors"
                          placeholder="Введіть площу..."
                        />
                        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400 font-semibold">м²</span>
                      </div>
                      {areaNum > 0 && selectedMat && (
                        <div className="mt-4 p-4 bg-zinc-50 rounded-xl border border-zinc-200">
                          <p className="text-zinc-500 text-sm mb-1">Попередня вартість:</p>
                          <p className="text-2xl font-extrabold text-graphite">
                            {formatPrice(priceMin)}–{formatPrice(priceMax)}{" "}
                            <span className="text-base font-medium text-zinc-400">грн</span>
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* Step 2: Contact */}
                  {step === 2 && !submitted && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.25 }}
                    >
                      {/* Price + free measurement promo */}
                      <div className="bg-graphite rounded-xl p-5 mb-4">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <p className="text-white/50 text-xs mb-0.5">Орієнтовна вартість</p>
                            <p className="text-2xl font-extrabold text-white leading-none">
                              {formatPrice(priceMin)}–{formatPrice(priceMax)}
                              <span className="text-sm text-white/50 font-medium ml-1">грн</span>
                            </p>
                          </div>
                          <div className="bg-accent rounded-lg px-3 py-1.5 shrink-0">
                            <p className="text-white text-[11px] font-bold">Знижка 8%</p>
                          </div>
                        </div>
                        <div className="h-px bg-white/10 mb-3" />
                        <ul className="space-y-1.5">
                          {[
                            "Безкоштовний виїзд спеціаліста",
                            "Точний замір і розрахунок за 24 год",
                            "Персональна знижка 8% на матеріали",
                          ].map((item) => (
                            <li key={item} className="flex items-center gap-2 text-[12px] text-white/70">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-2.5">
                        <input
                          type="text"
                          placeholder="Ваше ім'я"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full bg-zinc-50 border-2 border-zinc-200 focus:border-accent rounded-xl px-5 py-3.5 text-[15px] text-graphite outline-none transition-colors placeholder:text-zinc-400"
                        />
                        <input
                          type="tel"
                          placeholder="+38 (0__) ___-__-__"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          className="w-full bg-zinc-50 border-2 border-zinc-200 focus:border-accent rounded-xl px-5 py-3.5 text-[15px] text-graphite outline-none transition-colors placeholder:text-zinc-400"
                        />
                        <button
                          type="submit"
                          className="w-full bg-accent hover:bg-accent-dark text-white py-4 rounded-xl font-bold text-[15px] transition-colors"
                        >
                          Замовити безкоштовний замір
                        </button>
                        <p className="text-zinc-400 text-xs text-center">
                          Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних
                        </p>
                      </form>
                    </motion.div>
                  )}

                  {/* Success */}
                  {step === 2 && submitted && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-6"
                    >
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                        <Check className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h3 className="font-bold text-2xl text-graphite mb-2">Дякуємо, {name}!</h3>
                      <p className="text-zinc-500 mb-6">Наш менеджер зв'яжеться з вами протягом 15 хвилин</p>
                      <button onClick={reset} className="text-accent hover:text-accent-dark font-semibold text-sm transition-colors">
                        Зробити новий розрахунок
                      </button>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Navigation */}
              {!(step === 2 && submitted) && (
                <div className="mt-6 space-y-2">
                  {step < 2 && (
                    <button
                      onClick={() => setStep((s) => s + 1)}
                      disabled={!canNext()}
                      className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark disabled:bg-zinc-200 disabled:text-zinc-400 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-[15px] transition-all"
                    >
                      Перейти до розрахунку вартості
                    </button>
                  )}
                  {step > 0 && (
                    <button
                      onClick={() => setStep((s) => s - 1)}
                      className="w-full flex items-center justify-center gap-1 py-2 text-sm text-zinc-400 hover:text-zinc-600 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Назад
                    </button>
                  )}
                  <p className="text-zinc-400 text-[11px] text-center pt-1">
                    Безкоштовний виїзд майстра та персональна знижка 8% після розрахунку
                  </p>
                </div>
              )}

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
