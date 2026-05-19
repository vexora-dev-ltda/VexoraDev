"use client";

import { useMemo, useState } from "react";

const emailAddress = "vexoradevltda@gmail.com";
const instagramProfile = "https://instagram.com/vexoradevltda";

type FormState = {
  name: string;
  company: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  service: "",
  message: "",
};

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(() => {
    return form.name.trim().length > 2 && form.message.trim().length > 9;
  }, [form]);

  const contactMessage = useMemo(() => {
    return [
      "Ola, equipe VexoraDev.",
      "",
      `Nome: ${form.name || "Nao informado"}`,
      `Empresa: ${form.company || "Nao informada"}`,
      `Servico de interesse: ${form.service || "Nao informado"}`,
      "",
      "Detalhes do projeto:",
      form.message || "Sem detalhes.",
    ].join("\n");
  }, [form]);

  const emailHref = `mailto:${emailAddress}?subject=${encodeURIComponent("Solicitacao de orcamento - VexoraDev")}&body=${encodeURIComponent(contactMessage)}`;
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (submitted) {
      setSubmitted(false);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    if (!isValid) {
      return;
    }

    if (formspreeEndpoint) {
      fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          service: form.service,
          message: form.message,
        }),
      })
        .then(async (res) => {
          if (res.ok) {
            window.alert("Mensagem enviada com sucesso. Entraremos em contato em breve.");
            setForm(initialState);
          } else {
            const text = await res.text();
            console.error("Formspree error:", text);
            window.location.href = emailHref;
          }
        })
        .catch((err) => {
          console.error("Formspree exception:", err);
          window.location.href = emailHref;
        });
      return;
    }

    window.location.href = emailHref;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 grid gap-4 rounded-2xl border border-white/15 bg-[#0b1120]/60 p-5 backdrop-blur md:grid-cols-2"
    >
      <label className="text-sm text-slate-200">
        Nome
        <input
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#F8FAFC] outline-none transition focus:border-[#2563EB]"
          placeholder="Seu nome"
          required
        />
      </label>

      <label className="text-sm text-slate-200">
        Empresa
        <input
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#F8FAFC] outline-none transition focus:border-[#2563EB]"
          placeholder="Nome da empresa"
        />
      </label>

      <label className="text-sm text-slate-200 md:col-span-2">
        Servico de interesse
        <select
          value={form.service}
          onChange={(event) => updateField("service", event.target.value)}
          className="mt-2 w-full rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-[#F8FAFC] outline-none transition focus:border-[#7C3AED]"
        >
          <option value="">Selecione uma opcao</option>
          <option value="Site profissional">Site profissional</option>
          <option value="Aplicativo">Aplicativo</option>
          <option value="Sistema personalizado">Sistema personalizado</option>
          <option value="Landing page">Landing page</option>
          <option value="Automacao e integracoes">Automacao e integracoes</option>
        </select>
      </label>

      <label className="text-sm text-slate-200 md:col-span-2">
        Mensagem
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="mt-2 h-32 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#F8FAFC] outline-none transition focus:border-[#2563EB]"
          placeholder="Conte um pouco sobre seu projeto, objetivos e prazo."
          required
        />
      </label>

      <div className="md:col-span-2 flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-7 py-3 text-sm font-semibold text-white transition hover:scale-[1.01] hover:brightness-110"
        >
          Enviar por e-mail
        </button>

        <a
          href={instagramProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
        >
          Falar no Instagram
        </a>
      </div>

      {submitted && !isValid ? (
        <p className="md:col-span-2 text-sm text-red-300">
          Preencha nome e uma mensagem mais detalhada para continuar.
        </p>
      ) : null}
    </form>
  );
}