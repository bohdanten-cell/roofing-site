import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseGallery from "@/components/CaseGallery";
import BeforeAfter from "@/components/BeforeAfter";
import { cases } from "@/data/cases";
import { Check, Phone, MapPin, Calendar, Ruler, ShieldCheck, Layers } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((c) => c.slug === slug);
  if (!c) return {};
  return {
    title: `${c.title} — RoofMaster`,
    description: c.description,
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const c = cases.find((c) => c.slug === slug);
  if (!c) notFound();

  if (c.draft) {
    return (
      <>
        <Header />
        <main className="min-h-[70vh] flex items-center justify-center bg-zinc-50">
          <div className="text-center px-5">
            <div className="w-16 h-16 bg-zinc-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Layers className="w-8 h-8 text-zinc-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-graphite mb-3">
              Сторінка тимчасово недоступна
            </h1>
            <p className="text-zinc-500 text-[16px] max-w-sm mx-auto mb-8">
              Ми готуємо детальний опис цього проєкту. Зовсім скоро він буде тут.
            </p>
            <a
              href="/#portfolio"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-3.5 rounded-xl font-semibold text-[15px] transition-colors"
            >
              Переглянути інші проєкти
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>

        {/* ── Hero ── */}
        <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-end overflow-hidden">
          <Image
            src={c.heroImage}
            alt={c.title}
            fill
            unoptimized
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/95 via-graphite/50 to-graphite/10" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-16 lg:pb-24">
            {/* Type badge */}
            <div className="inline-flex items-center gap-2 bg-accent/90 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white">{c.type}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
              {c.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent/80" />
                {c.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="flex items-center gap-1.5">
                <Ruler className="w-3.5 h-3.5 text-accent/80" />
                {c.area}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent/80" />
                {c.year}
              </span>
            </div>
          </div>
        </section>

        {/* ── Description + quick facts ── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

              {/* Left: text */}
              <div>
                <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-4 py-1.5 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Про проєкт</span>
                </div>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  {c.description}
                </p>

                {/* Complexity tags */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {c.complexity.map((tag) => (
                    <span key={tag.label} className="flex items-center gap-1.5 bg-zinc-100 rounded-full px-3 py-1.5 text-xs font-semibold text-zinc-600">
                      <tag.icon className="w-3 h-3 text-accent" strokeWidth={2.5} />
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: color + materials preview */}
              <div className="space-y-4">
                {/* Color */}
                <div className="bg-zinc-50 rounded-2xl p-6 ring-1 ring-black/5 flex items-center gap-5">
                  <div className="w-14 h-14 rounded-xl shrink-0" style={{ backgroundColor: "#4a4f54" }} />
                  <div>
                    <p className="text-xs text-zinc-400 mb-1">Колір покрівлі</p>
                    <p className="font-bold text-graphite text-lg">{c.color.name}</p>
                    <p className="text-zinc-400 text-sm">{c.color.ral}</p>
                  </div>
                </div>

                {/* Materials */}
                <div className="bg-zinc-50 rounded-2xl p-6 ring-1 ring-black/5">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Матеріали</p>
                  <div className="grid grid-cols-2 gap-3">
                    {c.materials.map((m) => (
                      <div key={m.name} className="flex flex-col gap-0.5">
                        <span className="font-semibold text-graphite text-sm">{m.name}</span>
                        <span className="text-zinc-400 text-xs">{m.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Specs grid ── */}
        <section className="py-16 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {c.specs.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-5 ring-1 ring-black/5 text-center">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <s.icon className="w-5 h-5 text-accent" strokeWidth={1.8} />
                  </div>
                  <p className="font-extrabold text-graphite text-base leading-tight mb-1 break-words hyphens-auto">{s.value}</p>
                  <p className="text-zinc-400 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-4 py-1.5 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Фотографії</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-graphite leading-tight tracking-tight mb-4">
                Галерея проєкту
              </h2>
              <p className="text-zinc-500 text-[16px] max-w-md mx-auto">
                Загальний вигляд, деталі покрівлі, вузли примикань та процес монтажу
              </p>
            </div>
            <CaseGallery images={c.gallery} columns={c.galleryColumns} />
          </div>
        </section>

        {/* ── Works done ── */}
        <section className="py-24 lg:py-32 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

              <div>
                <div className="inline-flex items-center gap-2 bg-zinc-200/80 rounded-full px-4 py-1.5 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Виконані роботи</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-graphite leading-tight tracking-tight mb-4">
                  Що було зроблено
                </h2>
                <p className="text-zinc-500 text-[16px] leading-relaxed">
                  Повний цикл покрівельних робіт від демонтажу до здачі об'єкту
                </p>
              </div>

              <ul className="space-y-3">
                {c.works.map((work) => (
                  <li key={work} className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 ring-1 ring-black/5">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-graphite font-medium">{work}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </section>

        {/* ── Before / After ── */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-4 py-1.5 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Результат</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-graphite leading-tight tracking-tight mb-4">
                До та після
              </h2>
              <p className="text-zinc-500 text-[16px] max-w-md mx-auto">
                Перетягніть повзунок щоб порівняти стан об'єкту до та після наших робіт
              </p>
            </div>
            <BeforeAfter before={c.beforeImage} after={c.afterImage} />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 lg:py-32 bg-graphite">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/50">Хочете так само?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
              Зробимо такий же результат
            </h2>
            <p className="text-white/50 text-lg max-w-md mx-auto mb-10">
              Безкоштовний виїзд замірника, розрахунок вартості та договір з гарантією
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/#calculator"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-bold text-[15px] transition-all duration-200 hover:-translate-y-0.5"
              >
                Розрахувати вартість
              </a>
              <a
                href="tel:+380634184494"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-[15px] transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Отримати консультацію
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
