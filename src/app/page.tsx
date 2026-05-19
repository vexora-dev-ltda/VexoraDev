import Image from "next/image";
import { Reveal, Stagger } from "@/components/motion/reveal";
import { QuoteForm } from "@/components/contact/quote-form";
import {
  differentiators,
  portfolio,
  processSteps,
  services,
} from "@/lib/site-data";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.25),transparent_38%),radial-gradient(circle_at_80%_0%,rgba(124,58,237,0.2),transparent_42%),linear-gradient(145deg,#0b1120_10%,#090f1c_55%,#0b1022_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(circle_at_center,black_10%,transparent_75%)]" />

      <main className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">
        <section className="relative pt-10 sm:pt-16 lg:pt-24">
          <Reveal>
            <div className="inline-flex items-center gap-3">
              <Image
                src="/logo da empresa.png"
                alt="VexoraDev"
                width={220}
                height={56}
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-[#F8FAFC] sm:text-5xl lg:text-6xl">
              Transformamos ideias em solucoes digitais.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Criamos sites, aplicativos e sistemas modernos para empresas que
              querem crescer no digital.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-7 py-3 text-sm font-medium text-white transition hover:scale-[1.02] hover:brightness-110"
              >
                Solicitar orcamento
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
              >
                Ver servicos
              </a>
            </div>
          </Reveal>
        </section>

        <section id="servicos" className="pt-24 sm:pt-28">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
              Servicos
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#F8FAFC] sm:text-4xl">
              Solucoes para acelerar o seu negocio
            </h2>
          </Reveal>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Reveal key={service.title}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:border-[#2563EB]/60 hover:bg-white/[0.07]">
                  <h3 className="text-lg font-medium text-[#F8FAFC]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </Stagger>
        </section>

        <section className="pt-24 sm:pt-28">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
              Diferenciais
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#F8FAFC] sm:text-4xl">
              Por que escolher a VexoraDev
            </h2>
          </Reveal>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <Reveal key={item}>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5">
                  <p className="text-base font-medium text-slate-100">{item}</p>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </section>

        <section className="pt-24 sm:pt-28">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
              Portfolio
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#F8FAFC] sm:text-4xl">
              Projetos que elevam a presenca digital
            </h2>
          </Reveal>

          <Stagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {portfolio.map((project) => (
              <Reveal key={project.title}>
                <article className="group rounded-2xl border border-white/10 bg-[#0F172A]/70 p-6 transition hover:border-[#7C3AED]/55">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#7C3AED]">
                    {project.category}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-[#F8FAFC]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {project.summary}
                  </p>
                </article>
              </Reveal>
            ))}
          </Stagger>
        </section>

        <section className="pt-24 sm:pt-28">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
              Processo
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#F8FAFC] sm:text-4xl">
              Metodo claro, resultado consistente
            </h2>
          </Reveal>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                  <span className="text-sm font-medium text-[#2563EB]">
                    0{index + 1}
                  </span>
                  <p className="mt-2 text-base font-medium text-[#F8FAFC]">
                    {step}
                  </p>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </section>

        <section id="contato" className="pt-24 sm:pt-28">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-[linear-gradient(120deg,rgba(37,99,235,0.2),rgba(124,58,237,0.2))] p-8 sm:p-12">
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
                Leve sua empresa para o proximo nivel digital.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base">
                Fale com a VexoraDev e receba um plano sob medida para construir
                sua presenca digital com tecnologia de ponta.
              </p>
              <QuoteForm />
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0B1120]/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <Image src="/logo da empresa.png" alt="VexoraDev" width={48} height={48} />
            <div>
              <p className="text-base font-semibold text-[#F8FAFC]">VexoraDev</p>
              <p className="mt-1">Tecnologia para crescimento digital.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:vexoradevltda@gmail.com" className="hover:text-white">
              vexoradevltda@gmail.com
            </a>
            <a
              href="https://instagram.com/vexoradevltda"
              className="hover:text-white"
            >
              Instagram
            </a>
          </div>
          <p>© {new Date().getFullYear()} VexoraDev. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
