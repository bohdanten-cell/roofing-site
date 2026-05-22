"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const messengers = [
  { href: "https://t.me/+380634184494", img: "/images/Telegram.svg", label: "Telegram", bg: "bg-[#229ED9]" },
  { href: "https://wa.me/380634184494", img: "/images/WhatsApp.svg", label: "WhatsApp", bg: "bg-[#25D366]" },
  { href: "viber://chat?number=+380634184494", img: "/images/Viber.svg", label: "Viber", bg: "bg-[#7360F2]" },
];

export default function ContactBar() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&auto=format&fit=crop&q=80"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-graphite/80" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-[2px] bg-accent" />
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Зв'язок</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
              Немає часу<br />розбиратись?
            </h2>
            <p className="text-white/55 text-[17px] leading-relaxed">
              Просто зателефонуйте або зв&apos;яжіться<br />зручним для вас способом
            </p>
          </motion.div>

          {/* Right: contact card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8 flex flex-col gap-6"
          >
            {/* Online + messengers row */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/50 text-[12px] mb-1">Задайте питання,</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  <span className="text-white font-semibold text-[13px]">Ми онлайн</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {messengers.map((m) => (
                  <a
                    key={m.label}
                    href={m.href}
                    aria-label={m.label}
                    className={`w-10 h-10 ${m.bg} rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity duration-200`}
                  >
                    <Image src={m.img} alt={m.label} width={20} height={20} className="w-5 h-5 object-contain" />
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Phone */}
            <div>
              <a
                href="tel:+380634184494"
                className="block font-extrabold text-[28px] text-white hover:text-accent transition-colors leading-none mb-1.5"
              >
                +380 (93) 308 2995
              </a>
              <span
                className="text-[12px] text-white/40 text-justify"
                style={{ textAlignLast: "justify" }}
              >
                Щоденно з 8:00 до 21:00
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
