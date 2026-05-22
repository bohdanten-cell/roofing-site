"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  "Монтаж нової покрівлі",
  "Ремонт та реконструкція дахів",
  "Демонтаж старого даху",
  "Утеплення та гідроізоляція",
  "Монтаж водостічних систем",
  "Встановлення мансардних вікон",
];

const quickLinks = [
  { href: "#services", label: "Послуги" },
  { href: "#materials", label: "Матеріали" },
  { href: "#portfolio", label: "Портфоліо" },
  { href: "#calculator", label: "Калькулятор" },
];

export default function Footer() {
  return (
    <footer id="contacts" className="bg-graphite border-t border-white/5">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <Image src="/images/logo.svg" alt="RoofMaster" width={22} height={22} className="w-[22px] h-[22px] object-contain" />
              </div>
              <span className="font-bold text-lg text-white">RoofMaster</span>
            </Link>

            <p className="text-white/45 text-sm leading-relaxed mb-6">
              Покрівельні роботи будь-якої складності в Києві та Київській
              області. Гарантія якості на всі виконані роботи.
            </p>

            {/* Messengers */}
            <div className="flex gap-3">
              {[
                { img: "/images/Telegram.svg", href: "https://t.me/roofmaster", label: "Telegram", bg: "bg-[#229ED9] hover:bg-[#1a8ec4]" },
                { img: "/images/WhatsApp.svg", href: "https://wa.me/380634184494", label: "WhatsApp", bg: "bg-[#25D366] hover:bg-[#1eb855]" },
                { img: "/images/Viber.svg", href: "viber://chat?number=+380634184494", label: "Viber", bg: "bg-[#7360F2] hover:bg-[#6350e0]" },
              ].map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={m.label}
                  className={`w-9 h-9 rounded-lg ${m.bg} flex items-center justify-center transition-all duration-200 hover:opacity-90`}
                >
                  <Image src={m.img} alt={m.label} width={18} height={18} className="w-[18px] h-[18px] object-contain" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Services */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <p className="text-white font-semibold mb-5">Послуги</p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/45 text-sm hover:text-white/80 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <p className="text-white font-semibold mb-5">Навігація</p>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/45 text-sm hover:text-white/80 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-5 py-3 rounded-lg text-sm font-semibold transition-colors"
            >
              Розрахувати вартість
            </a>
          </motion.div>

          {/* Column 4: Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <p className="text-white font-semibold mb-5">Контакти</p>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+380634184494"
                  className="flex items-start gap-3 text-white/45 hover:text-white/80 transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent/70 group-hover:text-accent transition-colors" />
                  <div>
                    <p className="text-sm">+38 (063) 418-44-94</p>
                    <p className="text-xs text-white/30 mt-0.5">Основний номер</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@krovmaster.ua"
                  className="flex items-start gap-3 text-white/45 hover:text-white/80 transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent/70 group-hover:text-accent transition-colors" />
                  <p className="text-sm">info@krovmaster.ua</p>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/45">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent/70" />
                <p className="text-sm">Київ та Київська область</p>
              </li>
              <li className="flex items-start gap-3 text-white/45">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-accent/70" />
                <div>
                  <p className="text-sm">Пн–Сб: 8:00–20:00</p>
                  <p className="text-xs text-white/30 mt-0.5">Нд: за домовленістю</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © 2025 RoofMaster. Всі права захищені.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors">
              Політика конфіденційності
            </a>
            <a href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors">
              Умови використання
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
