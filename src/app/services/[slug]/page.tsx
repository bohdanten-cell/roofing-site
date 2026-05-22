import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Calculator from "@/components/Calculator";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { Check, Phone } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — RoofMaster`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden min-h-[520px] lg:min-h-[600px] flex items-end">
          <Image
            src={service.image}
            alt={service.title}
            fill
            unoptimized
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/95 via-graphite/65 to-graphite/30" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-14 lg:pb-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5 text-center lg:text-left">
                {service.hero.heading}
              </h1>
              <p className="text-white/65 text-lg leading-relaxed mb-8 text-center lg:text-left">
                {service.hero.subheading}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-7 py-4 rounded-xl font-bold text-[15px] transition-all duration-200 hover:-translate-y-0.5"
                >
                  Розрахувати вартість
                </a>
                <a
                  href="tel:+380634184494"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-4 rounded-xl font-semibold text-[15px] transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Подзвонити
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="mb-12 lg:mb-16 text-center">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-4 py-1.5 mb-5">
                <service.icon className="w-3.5 h-3.5 text-accent" strokeWidth={1.8} />
                <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">Переваги</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-graphite leading-tight tracking-tight mb-4">
                Чому варто довірити нам цю роботу
              </h2>
              <p className="text-zinc-500 text-[16px] leading-relaxed max-w-md mx-auto">
                Гарантуємо якість матеріалів, чіткі терміни та прозору ціну — без сюрпризів на кожному етапі
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-5 items-start">

              {/* Left: benefits */}
              <div>
                <div className="grid sm:grid-cols-2 gap-5">
                  {service.benefits.map((b) => (
                    <div key={b.title} className="bg-zinc-50 rounded-2xl p-6 ring-1 ring-black/5">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                        <Check className="w-4 h-4 text-accent" strokeWidth={2.5} />
                      </div>
                      <h3 className="font-bold text-[15px] text-graphite mb-2">{b.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{b.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: included */}
              <div>
                <div className="bg-graphite rounded-3xl p-8 lg:p-10">
                  <h3 className="text-xl font-bold text-white mb-6">Що входить у вартість</h3>
                  <ul className="space-y-4 mb-8">
                    {service.included.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                        </div>
                        <span className="text-white/80 text-[15px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="h-px bg-white/10 mb-6" />
                  <a
                    href="tel:+380634184494"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-11 h-11 bg-accent rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent-dark transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">+38 (063) 418-44-94</p>
                      <p className="text-white/40 text-xs">Безкоштовна консультація</p>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Also we do ── */}
        <Services heading="Також ми робимо" />

        {/* ── Calculator ── */}
        <Calculator sectionClassName="py-24 lg:py-32 bg-white" />

      </main>
      <Footer />
    </>
  );
}
