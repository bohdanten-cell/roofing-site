"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Послуги" },
  { href: "#materials", label: "Матеріали" },
  { href: "#portfolio", label: "Портфоліо" },
  { href: "#calculator", label: "Калькулятор" },
  { href: "#contacts", label: "Контакти" },
];

function IconTelegram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function IconViber({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.4 0C8.64 0 3.87.6 1.67 2.67.36 4.02-.02 6.42 0 9.5c.02 3.07.31 6.1 2.82 8.05v3.41c0 .18.09.34.24.43.09.05.19.08.29.08.1 0 .2-.03.29-.09l3.11-1.95c1.14.22 2.3.34 3.5.34h.4c3.77 0 8.52-.58 10.52-2.67 1.39-1.36 1.82-3.72 1.83-6.67C22.97 4.42 19.74 0 11.4 0zm5.94 15.48c-.7.76-2.16 1.2-4.27 1.44-.68.07-1.38.1-2.1.1-.98 0-1.95-.09-2.9-.26L6 18.2v-2.55C4.46 14.5 4.03 12.3 4 9.5c-.02-2.44.27-4.46 1.28-5.48C6.87 2.44 10.84 2 11.4 2h.45c7.22.05 9.05 3.7 9.08 7.43.01 2.65-.35 4.8-1.59 6.05z" /><path d="M15.06 12.38c-.35-.19-.65-.35-.91-.5-.37-.21-.66-.3-.89-.08l-.58.63c-.23.25-.53.22-.53.22s-2.17-1.07-3.3-3.28c0 0-.03-.3.23-.52l.64-.57c.21-.22.13-.51-.07-.88-.14-.25-.3-.55-.49-.88-.42-.72-.77-.97-1.09-.92l-.3.04c-.3.07-.61.23-.82.5-.5.67-.68 1.4-.21 2.35.83 1.7 1.72 2.88 3.05 3.89 1.06.8 2.14 1.2 2.93 1.46.94.3 1.71.15 2.38-.3.28-.2.45-.5.53-.8l.05-.3c.06-.32-.2-.67-.62-1.08l-.01.02z" />
    </svg>
  );
}

const messengers = [
  { href: "https://t.me/+380634184494", img: "/images/Telegram.svg", bg: "bg-[#229ED9] hover:bg-[#1a8ec4]", label: "Telegram" },
  { href: "https://wa.me/380634184494", img: "/images/WhatsApp.svg", bg: "bg-[#25D366] hover:bg-[#1eb855]", label: "WhatsApp" },
  { href: "viber://chat?number=+380634184494", img: "/images/Viber.svg", bg: "bg-[#7360F2] hover:bg-[#6350e0]", label: "Viber" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-zinc-100 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <motion.div
              className="flex items-center gap-2.5"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center shrink-0">
                <Image
                  src="/images/logo.svg"
                  alt="RoofMaster"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px] object-contain"
                  priority
                />
              </div>
              <span className="font-bold text-lg text-graphite">RoofMaster</span>
            </motion.div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: online + messengers + phone */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Online status */}
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] text-zinc-500">Задайте питання,</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                <span className="text-[12px] font-semibold text-graphite">Ми онлайн</span>
              </div>
            </div>

            {/* Messengers */}
            <div className="flex items-center gap-1.5">
              {messengers.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  aria-label={m.label}
                  className={`w-9 h-9 ${m.bg} rounded-lg flex items-center justify-center transition-colors duration-200`}
                >
                  <Image src={m.img} alt={m.label} width={22} height={22} />
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-9 bg-zinc-200" />

            {/* Phone */}
            <div className="flex flex-col leading-tight">
              <a
                href="tel:+380634184494"
                className="font-bold text-[16px] text-graphite hover:text-accent transition-colors"
              >
                +38 (063) 418-44-94
              </a>
              <span
                className="text-[11px] text-zinc-500 text-justify"
                style={{ textAlignLast: "justify" }}
              >
                Щоденно з 8:00 до 21:00
              </span>
            </div>
          </div>

          {/* Mobile: messengers + burger */}
          <div className="flex items-center gap-2 lg:hidden">
            {messengers.map((m) => (
              <a
                key={m.label}
                href={m.href}
                aria-label={m.label}
                className={`w-8 h-8 ${m.bg} rounded-lg flex items-center justify-center transition-colors duration-200`}
              >
                <Image src={m.img} alt={m.label} width={18} height={18} />
              </a>
            ))}
            <button
              className="p-2 rounded-lg text-graphite hover:bg-zinc-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Відкрити меню"
            >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-zinc-100 shadow-xl"
          >
            <div className="px-5 py-5 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-3 px-3 rounded-xl font-medium text-zinc-700 hover:text-accent hover:bg-red-50 transition-colors"
                  onClick={closeMobile}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-4 border-t border-zinc-100 space-y-3">
                <a
                  href="tel:+380634184494"
                  className="flex items-center gap-2 px-3 font-bold text-graphite text-[17px]"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  +38 (063) 418-44-94
                </a>
                <p className="px-3 text-[11px] text-zinc-400">Щоденно з 8:00 до 21:00</p>
                <div className="flex gap-2 px-3">
                  {messengers.map((m) => (
                    <a
                      key={m.label}
                      href={m.href}
                      aria-label={m.label}
                      className={`w-10 h-10 ${m.bg} rounded-lg flex items-center justify-center transition-colors duration-200`}
                    >
                      <Image src={m.img} alt={m.label} width={24} height={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
