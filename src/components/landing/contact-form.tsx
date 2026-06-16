"use client";

import { useMemo, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  whatsapp: string;
  goal: string;
  website: string;
};

type FormErrors = Partial<Record<keyof Omit<FormValues, "website">, string>>;

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  whatsapp: "",
  goal: "",
  website: "",
};

function sanitizePhone(value: string) {
  return value.replace(/[^\d+\s()-]/g, "").slice(0, 20);
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 3) {
    errors.name = "Informe seu nome completo.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(values.email)) {
    errors.email = "Digite um e-mail válido.";
  }

  const digits = values.whatsapp.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) {
    errors.whatsapp = "Informe um WhatsApp com DDD.";
  }

  if (values.goal.trim().length < 12) {
    errors.goal = "Conte brevemente sua principal dificuldade.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const errors = useMemo(() => validate(values), [values]);

  const isValid = Object.keys(errors).length === 0;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched({ name: true, email: true, whatsapp: true, goal: true });

    if (!isValid || values.website) {
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          whatsapp: values.whatsapp.trim(),
          goal: values.goal.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar");
      }

      setValues(INITIAL_VALUES);
      setTouched({});
      setFeedback({
        type: "success",
        message: "Pedido recebido. Em breve você recebe o retorno para agendamento.",
      });
    } catch {
      setFeedback({
        type: "error",
        message: "Não foi possível enviar agora. Tente novamente em instantes.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function fieldError(field: keyof Omit<FormValues, "website">) {
    return touched[field] ? errors[field] : undefined;
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={values.website}
        onChange={(event) => setValues((prev) => ({ ...prev, website: event.target.value }))}
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="name" className="text-sm font-semibold text-earth-800">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            className="w-full rounded-2xl border border-warm-300 bg-white/95 px-4 py-3 text-earth-900 outline-none transition focus-visible:ring-2 focus-visible:ring-forest-500"
            aria-invalid={Boolean(fieldError("name"))}
            aria-describedby={fieldError("name") ? "name-error" : undefined}
          />
          {fieldError("name") ? (
            <p id="name-error" className="text-sm text-clay-700">
              {fieldError("name")}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-earth-800">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            className="w-full rounded-2xl border border-warm-300 bg-white/95 px-4 py-3 text-earth-900 outline-none transition focus-visible:ring-2 focus-visible:ring-forest-500"
            aria-invalid={Boolean(fieldError("email"))}
            aria-describedby={fieldError("email") ? "email-error" : undefined}
          />
          {fieldError("email") ? (
            <p id="email-error" className="text-sm text-clay-700">
              {fieldError("email")}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="whatsapp" className="text-sm font-semibold text-earth-800">
            WhatsApp
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            value={values.whatsapp}
            onChange={(event) =>
              setValues((prev) => ({
                ...prev,
                whatsapp: sanitizePhone(event.target.value),
              }))
            }
            onBlur={() => setTouched((prev) => ({ ...prev, whatsapp: true }))}
            placeholder="(11) 99999-9999"
            className="w-full rounded-2xl border border-warm-300 bg-white/95 px-4 py-3 text-earth-900 outline-none transition focus-visible:ring-2 focus-visible:ring-forest-500"
            aria-invalid={Boolean(fieldError("whatsapp"))}
            aria-describedby={fieldError("whatsapp") ? "whatsapp-error" : undefined}
          />
          {fieldError("whatsapp") ? (
            <p id="whatsapp-error" className="text-sm text-clay-700">
              {fieldError("whatsapp")}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="goal" className="text-sm font-semibold text-earth-800">
          Principal dificuldade ou objetivo
        </label>
        <textarea
          id="goal"
          name="goal"
          rows={5}
          value={values.goal}
          onChange={(event) => setValues((prev) => ({ ...prev, goal: event.target.value }))}
          onBlur={() => setTouched((prev) => ({ ...prev, goal: true }))}
          placeholder="Ex.: Uso caneta emagrecedora e quero evitar efeito sanfona, ou tenho dificuldade para manter hábitos."
          className="w-full resize-none rounded-2xl border border-warm-300 bg-white/95 px-4 py-3 text-earth-900 outline-none transition focus-visible:ring-2 focus-visible:ring-forest-500"
          aria-invalid={Boolean(fieldError("goal"))}
          aria-describedby={fieldError("goal") ? "goal-error" : "goal-help"}
        />
        {fieldError("goal") ? (
          <p id="goal-error" className="text-sm text-clay-700">
            {fieldError("goal")}
          </p>
        ) : (
          <p id="goal-help" className="text-sm text-earth-700">
            Quanto mais contexto você trouxer, mais assertivo será o primeiro atendimento.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-forest-700 px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-ivory-100 transition hover:bg-forest-800 focus-visible:ring-2 focus-visible:ring-forest-500 disabled:cursor-not-allowed disabled:bg-forest-600"
      >
        {isSubmitting ? "Enviando..." : "Agende sua consulta"}
      </button>

      {feedback ? (
        <p
          className={`rounded-2xl px-4 py-3 text-sm ${
            feedback.type === "success" ? "bg-sage-200/70 text-earth-900" : "bg-clay-200/70 text-clay-900"
          }`}
          role="status"
        >
          {feedback.message}
        </p>
      ) : null}
    </form>
  );
}
