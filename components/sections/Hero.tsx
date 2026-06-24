"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const cw = () => canvas.offsetWidth;
    const ch = () => canvas.offsetHeight;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }

    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * cw(),
      y: Math.random() * ch(),
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    let scanAngle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, cw(), ch());
      const cx = cw() / 2;
      const cy = ch() / 2;
      const maxR = Math.min(cx, cy) * 0.8;

      // Grid
      ctx.strokeStyle = "rgba(34, 211, 238, 0.04)";
      ctx.lineWidth = 0.5;
      for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, (maxR / 5) * i, 0, Math.PI * 2);
        ctx.stroke();
      }
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 6) {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a) * maxR, cy + Math.sin(a) * maxR);
        ctx.stroke();
      }

      // Scan sweep
      const grad = ctx.createConicGradient(scanAngle, cx, cy);
      grad.addColorStop(0, "rgba(34, 211, 238, 0.12)");
      grad.addColorStop(0.15, "rgba(34, 211, 238, 0)");
      grad.addColorStop(1, "rgba(34, 211, 238, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, maxR, 0, Math.PI * 2);
      ctx.fill();

      // Particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > cw()) p.vx *= -1;
        if (p.y < 0 || p.y > ch()) p.vy *= -1;

        ctx.fillStyle = `rgba(34, 211, 238, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      scanAngle += 0.008;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-sm font-medium uppercase tracking-widest text-accent">
            Consultoria em Cibersegurança
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
            Pentest, cloud assessment, segurança wireless e awareness — com
            metodologia rigorosa, entregáveis acionáveis e retest incluso.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/proposta">
              <Button size="lg">
                Solicitar Proposta
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/servicos">
              <Button variant="secondary" size="lg">
                Conheça Nossos Serviços
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
}
