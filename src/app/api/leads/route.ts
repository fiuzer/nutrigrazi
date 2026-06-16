import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  whatsapp?: string;
  goal?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const whatsapp = body.whatsapp?.trim() ?? "";
    const goal = body.goal?.trim() ?? "";

    if (name.length < 3 || !isValidEmail(email)) {
      return NextResponse.json(
        { message: "Dados inválidos. Confira nome e e-mail." },
        { status: 400 },
      );
    }

    const phoneDigits = whatsapp.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 13 || goal.length < 12) {
      return NextResponse.json(
        { message: "Dados inválidos. Confira WhatsApp e objetivo." },
        { status: 400 },
      );
    }

    // Integração futura: enviar para CRM, e-mail, planilha ou automação.
    return NextResponse.json({ message: "Lead recebido com sucesso." }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Erro ao processar solicitação." }, { status: 500 });
  }
}
