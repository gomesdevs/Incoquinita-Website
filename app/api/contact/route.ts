import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Dados inválidos", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, company, service, message } = result.data;

    // TODO: Integrate with Resend/SendGrid and Slack webhook
    console.log("Contact form submission:", { name, email, company, service, message });

    return NextResponse.json(
      { success: true, message: "Mensagem recebida com sucesso" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
