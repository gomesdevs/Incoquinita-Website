import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  company: z.string().min(1, "Empresa é obrigatória"),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const proposalSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  company: z.string().min(1, "Empresa é obrigatória"),
  services: z.array(z.string()).min(1, "Selecione pelo menos um serviço"),
  environmentSize: z.string().min(1, "Selecione o tamanho do ambiente"),
  urgency: z.enum(["baixa", "media", "alta"]),
  previousPentest: z.enum(["sim", "nao"]),
  budget: z.string().optional(),
  howFound: z.string().optional(),
  message: z.string().optional(),
});

export type ProposalFormData = z.infer<typeof proposalSchema>;
