import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { QuestionMarkFallback } from "@/components/creative/QuestionMarkFallback";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="relative">
        <QuestionMarkFallback size={160} className="opacity-15" />
        <span
          data-text="404"
          className="glitch absolute inset-0 flex items-center justify-center font-display text-6xl font-normal text-text-primary sm:text-8xl"
        >
          404
        </span>
      </div>

      <h1 className="mt-8 font-display text-2xl font-normal text-text-primary">
        Incógnita não encontrada
      </h1>
      <p className="mt-3 max-w-md text-text-muted">
        A página que você procura não existe ou foi movida.
      </p>

      <div className="mt-8 flex gap-4">
        <Link href="/">
          <Button>Voltar ao Início</Button>
        </Link>
        <Link href="/contato">
          <Button variant="secondary">Fale Conosco</Button>
        </Link>
      </div>
    </section>
  );
}
