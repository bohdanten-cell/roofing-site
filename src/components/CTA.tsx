"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function ViberIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.4 0C7.46.03 2.4 1.4.9 6.03c-.7 2.2-.77 4.63-.46 6.9.23 1.67.64 3.32 1.42 4.82.17.33.4.73.7 1.07l.27.28c.06.07.12.13.18.17l.06.05c.17.14.3.2.38.2h.06c.07-.02.13-.06.18-.12.07-.1.1-.23.1-.37 0-.14-.03-.28-.07-.4-.04-.14-.1-.25-.14-.35-.08-.18-.18-.37-.25-.5-.62-1.13-1.06-2.36-1.3-3.62-.23-1.23-.27-2.5-.12-3.74.3-2.53 1.4-4.43 3.18-5.5C6.5 4.47 8.4 4 10.37 3.93h.03c.8-.02 1.6 0 2.38.1.72.1 1.44.26 2.1.53 1.24.5 2.2 1.4 2.86 2.63.6 1.15.87 2.5.84 3.82-.03 1.36-.37 2.7-1.04 3.83-.62 1.07-1.5 1.9-2.53 2.36-.35.15-.7.27-1.06.34-.22.04-.44.07-.66.08h-.16c-.2 0-.4-.01-.6-.03-.36-.04-.7-.11-1.03-.22-.33-.1-.64-.25-.93-.43-.04-.02-.08-.05-.12-.08-.16-.1-.3-.2-.45-.32-.03-.02-.05-.04-.07-.06l-.07-.07c-.07-.07-.14-.15-.2-.23-.06-.08-.1-.16-.14-.25-.04-.09-.06-.19-.07-.28 0-.1.02-.19.06-.28.06-.13.16-.24.28-.3.07-.04.14-.06.22-.07h.05c.1 0 .2.03.28.08.08.05.15.12.2.2.1.16.2.32.3.47.1.14.2.27.3.38.2.22.42.38.66.47.23.08.48.1.73.07.24-.03.47-.1.68-.22.6-.33 1.07-.93 1.38-1.68.3-.73.45-1.58.45-2.43 0-.82-.14-1.64-.43-2.38-.3-.76-.75-1.42-1.35-1.88-.45-.34-.95-.56-1.5-.66-.28-.05-.57-.08-.87-.09h-.17c-.3 0-.6.02-.9.07-1.06.16-2 .66-2.65 1.42-.65.76-1 1.75-1.03 2.78-.02.7.1 1.4.36 2.04.08.2.18.4.3.58.06.1.12.18.18.27.04.05.07.1.1.14.12.16.25.3.4.42.08.07.16.13.25.18l.1.06c.13.07.26.12.4.16.14.04.28.06.43.07h.1c.12 0 .24-.01.36-.04.23-.05.45-.13.65-.26.1-.06.2-.14.29-.22.04-.04.08-.08.12-.12.06-.07.12-.15.17-.23.04-.08.08-.16.1-.24.02-.09.03-.17.02-.26 0-.08-.03-.17-.07-.24-.04-.07-.1-.14-.17-.18-.07-.04-.15-.07-.24-.08-.08 0-.16.01-.23.04-.07.03-.14.07-.2.13-.1.1-.18.22-.23.35-.02.05-.04.1-.04.16v.04c0 .04.01.08.03.12.02.04.05.07.08.1.07.06.16.09.26.1h.03c.08 0 .17-.03.24-.08.07-.05.12-.12.15-.2.02-.05.03-.1.03-.16 0-.05-.01-.1-.04-.15-.03-.05-.07-.09-.12-.12-.05-.03-.1-.05-.16-.05z" />
    </svg>
  );
}

const messengers = [
  {
    label: "Telegram",
    href: "https://t.me/roofmaster",
    icon: TelegramIcon,
    bg: "bg-[#229ED9] hover:bg-[#1a8ec4]",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/380634184494",
    icon: WhatsAppIcon,
    bg: "bg-[#25D366] hover:bg-[#1eb855]",
  },
  {
    label: "Viber",
    href: "viber://chat?number=+380634184494",
    icon: ViberIcon,
    bg: "bg-[#7360F2] hover:bg-[#6350e0]",
  },
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        unoptimized
        className="object-cover object-center"
        priority={false}
      />
      {/* Dark + red gradient overlay */}
      <div className="absolute inset-0 bg-graphite/80" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Tag */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-[2px] bg-accent" />
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                Зв&apos;язатись з нами
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Готові обговорити
              <br />
              ваш проект?
            </h2>

            <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-md">
              Зателефонуйте або напишіть у будь-який месенджер — відповімо
              протягом 10 хвилин. Безкоштовна консультація та виїзд.
            </p>

            {/* Trust points */}
            <div className="flex flex-col gap-3">
              {[
                "Безкоштовний виїзд спеціаліста",
                "Відповідаємо протягом 10 хвилин",
                "Пн–Нд: 8:00–21:00",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-white/60 text-[15px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: contact card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8 lg:p-10"
          >
            {/* Phone */}
            <p className="text-white/50 text-sm mb-2">Зателефонуйте нам</p>
            <a
              href="tel:+380634184494"
              className="flex items-center gap-3 group mb-8"
            >
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent-dark transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-3xl font-extrabold text-white tracking-tight group-hover:text-white/80 transition-colors">
                +38 (063) 418-44-94
              </span>
            </a>

            <div className="h-px bg-white/10 mb-8" />

            {/* Messengers */}
            <p className="text-white/50 text-sm mb-4">Або напишіть у месенджер</p>
            <div className="grid grid-cols-3 gap-3">
              {messengers.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${m.bg} flex flex-col items-center gap-2 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5`}
                >
                  <m.icon className="w-6 h-6 text-white" />
                  <span className="text-white text-[13px] font-semibold">{m.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
