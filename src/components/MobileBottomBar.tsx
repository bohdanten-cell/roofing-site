"use client";

import Image from "next/image";
import { Phone } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white/70 backdrop-blur-md border-t border-zinc-200/60 px-4 py-3 flex gap-3">
        <a
          href="tel:+380634184494"
          className="flex-1 flex items-center justify-center gap-2 bg-graphite text-white py-3.5 rounded-xl font-semibold text-[15px] transition-colors active:bg-zinc-700"
        >
          <Phone className="w-4 h-4" strokeWidth={2} />
          Подзвонити
        </a>
        <a
          href="https://t.me/roofmaster"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#229ED9] text-white py-3.5 rounded-xl font-semibold text-[15px] transition-colors active:bg-[#1a8ec4]"
        >
          <Image src="/images/Telegram.svg" alt="Telegram" width={18} height={18} className="w-[18px] h-[18px] object-contain" />
          Telegram
        </a>
      </div>
      {/* Safe area spacer for iOS */}
      <div className="bg-white/70 h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}
