"use client";

import Image from "next/image";
import Link from "next/link";

import { faqs, metrics, pillars, testimonials } from "@/lib/landing-content";

const testUrl = "https://form.respondi.app/Q24DdzrD";
const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=5511944336718&text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.%20Quais%20s%C3%A3o%20os%20hor%C3%A1rios%20dispon%C3%ADveis?";
  function trackWhatsAppClick(location: string) {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "whatsapp_click",
      whatsapp_location: location,
    });
  }
}

const serviceSchema = {
  "@type": "MedicalBusiness",
  name: "Graziela Cervilla Nutricionista",
  description:
    "Nutricionista em São Paulo, Vila Leopoldina e online, com foco em emagrecimento com qualidade de vida, canetas emagrecedoras, efeito sanfona e construção de hábitos.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vila Leopoldina",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: "Brasil",
  medicalSpecialty: "Nutrition",
  priceRange: "$$",
  provider: {
    "@type": "Person",
    name: "Dra. Graziela Cervilla",
    jobTitle: "Nutricionista",
    knowsAbout: [
      "Emagrecimento",
      "Medicamentos agonistas GLP-1",
      "Canetas emagrecedoras",
      "Efeito sanfona",
      "Mudança de hábitos",
    ],
  },
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const audiences = [
  {
    icon: "S",
    title: "Usuários de canetas emagrecedoras",
    description:
      "Usa canetas emagrecedoras ou outro medicamento agonista GLP-1 e quer reduzir risco de perda de cabelo, perda de massa magra e efeito rebote.",
  },
  {
    icon: "R",
    title: "Reféns do efeito sanfona",
    description:
      "Já tentou de tudo e vive em ciclos de emagrece e engorda. Precisa de base sólida para manter hábitos no longo prazo.",
  },
  {
    icon: "U",
    title: "Busca rotina real",
    description:
      "Quer construir uma alimentação que respeite preferências, vida social e agenda corrida, sem restrições extremas.",
  },
  {
    icon: "Z",
    title: "Profissionais com rotina intensa",
    description:
      "Já conquistou várias coisas, mas sente que saúde, energia e alimentação ficaram para depois.",
  },
];

function IconBadge({ children }: { children: string }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-500 font-serif text-xl italic text-white">
      {children}
    </span>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16.01 3.2A12.74 12.74 0 0 0 5.18 22.65L3.6 28.8l6.3-1.5a12.73 12.73 0 1 0 6.11-24.1Zm0 2.27a10.46 10.46 0 0 1 8.9 15.95 10.46 10.46 0 0 1-13.98 3.63l-.46-.27-3.52.84.89-3.43-.3-.49A10.46 10.46 0 0 1 16 5.47Zm-4.1 5.53c-.23 0-.6.08-.91.43-.31.34-1.2 1.17-1.2 2.86 0 1.68 1.23 3.31 1.4 3.54.17.23 2.37 3.8 5.85 5.18 2.89 1.15 3.48.92 4.1.86.63-.06 2.03-.83 2.32-1.63.29-.8.29-1.48.2-1.63-.08-.14-.31-.23-.65-.4-.34-.17-2.03-1-2.34-1.11-.31-.12-.54-.17-.77.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.26-.74.09-.34-.17-1.43-.53-2.73-1.68-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.12-.23.06-.43-.03-.6-.08-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59-.2-.01-.43-.01-.65-.01Z" />
    </svg>
  );
}

export function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [serviceSchema, faqSchema],
          }),
        }}
      />

      <div className="bg-grain min-h-screen overflow-hidden bg-cream-100 text-stone-900">
        <header className="fixed left-0 top-0 z-50 w-full border-b border-stone-200 bg-cream-100/95 shadow-sm backdrop-blur">
          <div className="site-shell flex h-20 items-center justify-between">
            <Link href="#inicio" className="flex flex-col">
              <span className="font-serif text-xl leading-none tracking-tight text-sage-500">Graziela Cervilla</span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-stone-900/60">CRN-3 43973</span>
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wide text-stone-900 lg:flex">
              <Link href="#sobre" className="transition-colors hover:text-sage-500">
                Sobre
              </Link>
              <Link href="#para-quem" className="transition-colors hover:text-sage-500">
                Para quem é
              </Link>
              <Link href="#metodo" className="transition-colors hover:text-sage-500">
                Como funciona
              </Link>
              <Link href="#depoimentos" className="transition-colors hover:text-sage-500">
                Depoimentos
              </Link>
              <Link href="#contato" className="transition-colors hover:text-sage-500">
                Contato
              </Link>
            </nav>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("header")}
              className="rounded-full bg-sage-500 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-clay-700"
            >
              Agende sua consulta
            </Link>
          </div>
        </header>

        <main>
          <section id="inicio" className="relative overflow-hidden pb-20 pt-36 lg:pb-32 lg:pt-56">
            <div className="site-shell grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-8 flex flex-wrap gap-4">
                  {metrics.slice(1, 3).map((metric) => (
                    <span
                      key={metric.value}
                      className="rounded-full border border-stone-200 bg-stone-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-stone-900"
                    >
                      {metric.value}
                    </span>
                  ))}
                </div>

                <h1 className="max-w-4xl text-balance font-serif text-4xl leading-[1.1] text-stone-900 md:text-6xl lg:text-7xl">
                  Nutricionista em São Paulo especializada em{" "}
                  <span className="italic text-sage-500">emagrecimento</span> com qualidade de vida
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 lg:text-xl">
                  Emagreça de forma sustentável, com ou sem caneta emagrecedora, sem perder músculo, sem efeito sanfona e
                  sem abrir mão da sua rotina real.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("hero")}
                    className="rounded-full bg-sage-500 px-8 py-4 text-center font-bold uppercase tracking-[0.14em] text-white transition hover:scale-[1.03] hover:bg-clay-700"
                  >
                    Agende sua consulta
                  </Link>
                </div>
              </div>

              <div className="relative flex justify-center lg:col-span-5">
                <div className="relative aspect-square w-full max-w-md">
                  <div className="custom-shape absolute inset-0 animate-pulse bg-sand-100 [animation-duration:4s]" />
                  <div className="custom-shape absolute inset-0 rotate-12 border border-sage-500/30" />
                  <div className="custom-shape absolute left-1/2 top-1/2 h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 overflow-hidden border-4 border-white shadow-2xl">
                    <Image
                      src="/images/2.jpeg"
                      alt="Dra. Graziela Cervilla sentada em consultório"
                      fill
                      priority
                      sizes="(min-width: 1024px) 380px, 86vw"
                      className="object-cover object-[50%_38%]"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-6 rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-sage-500 shadow-lg">
                    Ciência & comportamento
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="para-quem" className="bg-stone-50 py-24">
            <div className="site-shell">
              <div className="mb-16 text-center">
                <h2 className="font-serif text-3xl text-stone-900 md:text-5xl">Este acompanhamento é para você que...</h2>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-stone-500">Entendendo sua realidade atual</p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {audiences.map((item, index) => (
                  <article
                    key={item.title}
                    className={`rounded-3xl border border-stone-200 bg-white p-8 transition-colors hover:border-sage-500 ${
                      index === 1 || index === 3 ? "lg:mt-8" : ""
                    }`}
                  >
                    <IconBadge>{item.icon}</IconBadge>
                    <h3 className="mt-6 font-bold leading-snug text-stone-900">{item.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-stone-600">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="sobre" className="bg-white py-24">
            <div className="site-shell grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div className="relative">
                <div className="portrait-shape relative aspect-[4/5] overflow-hidden border-4 border-white bg-sand-100 shadow-2xl">
                  <Image
                    src="/images/1.jpeg"
                    alt="Retrato profissional da nutricionista Graziela Cervilla"
                    fill
                    sizes="(min-width: 1024px) 560px, 92vw"
                    className="object-cover object-[50%_36%]"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full border border-terracotta-500/30" />
              </div>

              <div>
                <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-terracotta-500">
                  Nutricionista & especialista
                </span>
                <h2 className="font-serif text-4xl leading-tight text-stone-900 md:text-5xl">
                  Abordagem prática, acolhedora e baseada em evidência.
                </h2>
                <p className="mt-8 leading-relaxed text-stone-600">
                  Sou Graziela Cervilla, nutricionista com CRN-3 43973, focada em transformar a relação das pessoas com a
                  comida por meio da ciência, do metabolismo e da construção de hábitos possíveis.
                </p>
                <div className="my-10 rounded-3xl border-l-4 border-sage-500 bg-sand-100/50 p-8">
                  <p className="font-serif text-xl italic leading-relaxed text-sage-500">
                    &ldquo;Meu trabalho integra nutrição, metabolismo e comportamento alimentar para criar um processo que
                    você consegue sustentar de verdade.&rdquo;
                  </p>
                </div>
                <p className="leading-relaxed text-stone-600">
                  No consultório na Vila Leopoldina ou via atendimento online, você encontra um espaço livre de
                  julgamentos, com manejo alimentar para quem usa análogos de GLP-1 e deseja emagrecer sem cair no efeito
                  sanfona.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white py-20">
            <div className="mx-auto max-w-5xl px-6">
              <div className="relative overflow-hidden rounded-[40px] bg-terracotta-500 p-10 text-center text-white shadow-xl md:p-20">
                <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10" />
                <h2 className="relative z-10 font-serif text-3xl md:text-5xl">
                  Descubra como está seu metabolismo, de graça
                </h2>
                <p className="relative z-10 mx-auto mt-6 max-w-2xl text-lg text-stone-100/90">
                  Um diagnóstico inicial online para identificar sinais que podem estar influenciando emagrecimento,
                  energia, fome e constância antes mesmo da consulta.
                </p>
                <Link
                  href={testUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 mt-10 inline-block rounded-full bg-white px-10 py-5 font-bold uppercase tracking-[0.14em] text-terracotta-500 transition hover:scale-[1.03]"
                >
                  Fazer o teste gratuito agora
                </Link>
              </div>
            </div>
          </section>

          <section id="metodo" className="bg-sand-100/30 py-24">
            <div className="site-shell">
              <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                <div className="max-w-xl">
                  <h2 className="font-serif text-4xl text-stone-900 md:text-5xl">
                    Um método em 4 etapas para resultados duradouros
                  </h2>
                  <p className="mt-6 italic text-stone-600">Nada de planos de gaveta. Construção ativa de novos padrões.</p>
                </div>
                <span className="hidden text-6xl text-sage-500/20 lg:block">↘</span>
              </div>

              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                {pillars.map((pillar) => (
                  <article key={pillar.id} className="relative">
                    <span className="absolute -top-10 left-0 -z-0 font-serif text-7xl text-sage-500/10">{pillar.id}</span>
                    <div className="relative space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-500 font-serif text-white">
                        {pillar.id}
                      </div>
                      <h3 className="text-lg font-bold text-stone-900">{pillar.title}</h3>
                      <p className="text-sm leading-relaxed text-stone-500">{pillar.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="depoimentos" className="bg-white py-24">
            <div className="site-shell">
              <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-baseline">
                <h2 className="font-serif text-4xl text-stone-900 md:text-5xl">Histórias de transformação real</h2>
                <p className="font-medium text-sage-500">Resultados com rotina, ciência e acompanhamento</p>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <figure
                    key={testimonial.author}
                    className="flex flex-col justify-between rounded-[2rem] border border-stone-100 bg-white p-10 shadow-md"
                  >
                    <span className="mb-6 font-serif text-5xl text-stone-200">&ldquo;</span>
                    <blockquote className="mb-8 text-lg italic text-stone-600">{testimonial.quote}</blockquote>
                    <figcaption className="border-t border-stone-100 pt-6">
                      <span className="block font-bold text-stone-900">{testimonial.author}</span>
                      <span className="text-xs text-stone-400">{testimonial.context}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-stone-50 py-24">
            <div className="mx-auto max-w-4xl px-6">
              <h2 className="mb-16 text-center font-serif text-3xl text-stone-900 md:text-5xl">Dúvidas frequentes</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group rounded-2xl border border-stone-200 bg-white">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6">
                      <span className="text-lg font-medium text-stone-900">{faq.question}</span>
                      <span className="text-2xl text-sage-500 transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="px-6 pb-6 leading-relaxed text-stone-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section id="contato" className="relative overflow-hidden bg-white py-24">
            <div className="site-shell text-center">
              <h2 className="mx-auto max-w-4xl font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
                Pronta para emagrecer de um jeito que dura?
              </h2>
              <p className="mx-auto mt-8 max-w-xl text-xl text-stone-600">
                Inicie sua jornada com um método que considera metabolismo, rotina e qualidade de vida.
              </p>
              <div className="mt-10 flex flex-col items-center gap-6">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("cta_final")}
                  className="rounded-full bg-sage-500 px-12 py-5 text-lg font-bold uppercase tracking-[0.14em] text-white shadow-xl transition hover:scale-[1.03] hover:bg-clay-700"
                >
                  Agende sua consulta agora
                </Link>
                <Link href={testUrl} target="_blank" rel="noopener noreferrer" className="text-stone-500 underline underline-offset-4 hover:text-sage-500">
                  Ou faça o teste gratuito do metabolismo primeiro
                </Link>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-stone-900 py-20 text-stone-400">
          <div className="site-shell grid grid-cols-1 gap-12 border-b border-stone-800 pb-16 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="font-serif text-2xl leading-none tracking-tight text-white">Graziela Cervilla</span>
                <span className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/60">CRN-3 43973</span>
              </div>
              <p className="text-sm leading-relaxed">
                Nutricionista especializada em emagrecimento com qualidade de vida e saúde metabólica em São Paulo.
              </p>
            </div>

            <div>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Localização</h3>
              <p className="text-sm leading-relaxed">
                Vila Leopoldina, São Paulo - SP
                <br />
                Atendimento presencial & online
              </p>
            </div>

            <div>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Links rápidos</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#sobre" className="transition-colors hover:text-white">
                    Sobre mim
                  </Link>
                </li>
                <li>
                  <Link href="#metodo" className="transition-colors hover:text-white">
                    Meu método
                  </Link>
                </li>
                <li>
                  <Link href="#depoimentos" className="transition-colors hover:text-white">
                    Resultados
                  </Link>
                </li>
                <li>
                  <Link href={testUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                    Teste metabólico
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Contato</h3>
              <p className="text-sm">contato@nutrigrazi.com.br</p>
              <p className="mt-3 text-sm">Instagram: @nutrigrazi</p>
            </div>
          </div>

          <div className="site-shell flex flex-col items-center justify-between gap-6 pt-10 text-[10px] uppercase tracking-[0.2em] md:flex-row">
            <p>© {new Date().getFullYear()} Graziela Cervilla. Todos os direitos reservados.</p>
            <p>Criado com foco em ciência & ética</p>
          </div>
        </footer>

        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("floating_button")}
          className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110 hover:bg-[#1ebe5d] lg:bottom-12 lg:right-12"
          aria-label="Ir para contato pelo WhatsApp"
        >
          <WhatsAppIcon />
        </Link>
      </div>
    </>
  );
}
