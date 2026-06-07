"use client";

import {
  Check,
  Circle,
  Cog,
  DownloadCloud,
  Gauge,
  Newspaper,
  Play,
  Server,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export type LauncherMockupVariant =
  | "hero"
  | "home"
  | "installation"
  | "settings";

type LauncherMockupProps = {
  className?: string;
  variant?: LauncherMockupVariant;
};

const sidebarItems = [
  { icon: Play, label: "Jogar", active: true },
  { icon: Sparkles, label: "Mods", active: false },
  { icon: Cog, label: "Configurações", active: false },
  { icon: Server, label: "Servidor", active: false },
];

export function LauncherMockup({
  className,
  variant = "hero",
}: LauncherMockupProps) {
  return (
    <div
      className={cn(
        "sin-panel relative overflow-hidden rounded-lg shadow-launcher",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold-shine)]/40 to-transparent" />
      <WindowBar />
      <div className="grid min-h-[420px] grid-cols-[116px_1fr] bg-[var(--bg-deep)]/72 sm:grid-cols-[148px_1fr]">
        <Sidebar />
        <main className="relative overflow-hidden p-4 sm:p-6">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[var(--blue-glow)]/10 blur-3xl" />
          <div className="relative h-full">
            {variant === "hero" ? <HeroPanel /> : null}
            {variant === "home" ? <HomePanel /> : null}
            {variant === "installation" ? <InstallationPanel /> : null}
            {variant === "settings" ? <SettingsPanel /> : null}
          </div>
        </main>
      </div>
    </div>
  );
}

function WindowBar() {
  return (
    <div className="flex h-11 items-center justify-between border-b border-[var(--border-subtle)] bg-[rgba(6,8,16,0.88)] px-4">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>
      <div className="font-mono text-[11px] text-[var(--text-muted)]">
        Sincretismo Launcher v0.1.0-beta
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="border-r border-[var(--border-subtle)] bg-[rgba(6,8,16,0.62)] p-3 sm:p-4">
      <div className="mb-6 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-md border border-[var(--border-mid)] bg-[var(--blue-core)]/60 font-serif text-sm font-bold text-[var(--gold-shine)]">
          SIN
        </div>
        <div className="hidden min-w-0 sm:block">
          <p className="truncate text-sm font-semibold text-[var(--text-primary)]">
            Jogador
          </p>
          <p className="text-xs text-[var(--text-muted)]">Microsoft</p>
        </div>
      </div>
      <nav className="space-y-2">
        {sidebarItems.map((item) => (
          <a
            className={cn(
              "flex items-center gap-2 rounded-md px-2.5 py-2 text-xs font-semibold transition-colors",
              item.active
                ? "bg-[rgba(240,180,41,0.12)] text-[var(--gold-shine)]"
                : "text-[var(--text-secondary)] hover:bg-[rgba(61,94,255,0.1)] hover:text-[var(--text-primary)]",
            )}
            href="#download"
            key={item.label}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            <span className="hidden sm:inline">{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}

function HeroPanel() {
  return (
    <div className="flex h-full flex-col justify-between gap-8">
      <div>
        <Badge className="mb-4 border-[var(--border-mid)] bg-[rgba(26,42,108,0.45)] text-[var(--gold-shine)]">
          Perfil selecionado
        </Badge>
        <h3 className="font-serif text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
          Sincretismo
        </h3>
        <p className="mt-2 font-mono text-xs text-[var(--text-secondary)]">
          Modpack 0.1.0-beta · Forge 47.2.0 · Java 21
        </p>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
          <span>Preparando ambiente</span>
          <span className="font-mono text-[var(--gold-shine)]">73%</span>
        </div>
        <Progress
          value={73}
          className="progress-shimmer h-3 bg-[rgba(232,234,246,0.08)]"
        />
      </div>
      <Button className="h-14 w-full bg-[var(--gold-bright)] text-base font-black text-[var(--bg-void)] hover:bg-[var(--gold-shine)]">
        <Play className="mr-2 h-5 w-5 fill-current" />
        JOGAR
      </Button>
    </div>
  );
}

function HomePanel() {
  const news = [
    "Nova dimensão em desenvolvimento",
    "Sistema de rituais recebeu melhorias",
    "Servidor oficial em fase de testes",
  ];

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--gold-mid)]">
            Início
          </p>
          <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
            Notícias do mod
          </h3>
        </div>
        <Badge className="w-fit border-emerald-400/30 bg-emerald-400/10 text-emerald-200">
          Online · 42 jogadores
        </Badge>
      </div>
      <div className="grid gap-3">
        {news.map((item, index) => (
          <div
            className="rounded-md border border-[var(--border-subtle)] bg-[rgba(15,24,41,0.78)] p-4"
            key={item}
          >
            <div className="mb-3 flex items-center gap-2 text-[var(--gold-bright)]">
              <Newspaper className="h-4 w-4" />
              <span className="font-mono text-xs">Atualização 0{index + 1}</span>
            </div>
            <p className="text-sm font-semibold text-[var(--text-primary)]">
              {item}
            </p>
          </div>
        ))}
      </div>
      <Button className="h-12 w-full bg-[var(--gold-bright)] font-black text-[var(--bg-void)] hover:bg-[var(--gold-shine)]">
        <Play className="mr-2 h-4 w-4 fill-current" />
        JOGAR
      </Button>
    </div>
  );
}

function InstallationPanel() {
  const steps = [
    { label: "Java 21 detectado", state: "done" },
    { label: "Forge 47.2.0 instalado", state: "done" },
    { label: "Baixando Sincretismo Mod", state: "active" },
    { label: "Verificando integridade", state: "waiting" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--gold-mid)]">
          Instalação
        </p>
        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
          Tudo pronto em um clique
        </h3>
      </div>
      <div className="space-y-3">
        {steps.map((step) => (
          <div
            className="flex items-center gap-3 rounded-md border border-[var(--border-subtle)] bg-[rgba(15,24,41,0.78)] p-3"
            key={step.label}
          >
            <StepIcon state={step.state} />
            <span className="text-sm text-[var(--text-primary)]">
              {step.label}
            </span>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
          <span>Progresso do download</span>
          <span className="font-mono text-[var(--gold-shine)]">73%</span>
        </div>
        <motion.div
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Progress
            value={73}
            className="progress-shimmer h-3 bg-[rgba(232,234,246,0.08)]"
          />
        </motion.div>
      </div>
    </div>
  );
}

function StepIcon({ state }: { state: string }) {
  if (state === "done") {
    return (
      <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-400/15 text-emerald-200">
        <Check className="h-4 w-4" />
      </span>
    );
  }

  if (state === "active") {
    return (
      <span className="grid h-7 w-7 place-items-center rounded-full bg-[rgba(240,180,41,0.14)] text-[var(--gold-shine)]">
        <DownloadCloud className="h-4 w-4 animate-pulse" />
      </span>
    );
  }

  return (
    <span className="grid h-7 w-7 place-items-center rounded-full bg-[rgba(136,146,176,0.1)] text-[var(--text-muted)]">
      <Circle className="h-3 w-3" />
    </span>
  );
}

function SettingsPanel() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--gold-mid)]">
          Configurações
        </p>
        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
          Controle fino do jogo
        </h3>
      </div>
      <div className="space-y-4 rounded-md border border-[var(--border-subtle)] bg-[rgba(15,24,41,0.78)] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
            <Gauge className="h-4 w-4 text-[var(--gold-bright)]" />
            Memória RAM
          </div>
          <span className="font-mono text-sm text-[var(--gold-shine)]">4 GB</span>
        </div>
        <input
          aria-label="Memória RAM"
          className="h-2 w-full accent-[var(--gold-bright)]"
          defaultValue={4}
          max={12}
          min={2}
          type="range"
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-[var(--border-subtle)] bg-[rgba(15,24,41,0.78)] p-4">
          <div className="mb-3 flex items-center gap-2 text-sm text-[var(--text-primary)]">
            <SlidersHorizontal className="h-4 w-4 text-[var(--gold-bright)]" />
            Java
          </div>
          <div className="rounded-md border border-[var(--border-mid)] bg-[rgba(6,8,16,0.5)] px-3 py-2 font-mono text-xs text-[var(--gold-shine)]">
            Java 21 automático
          </div>
        </div>
        <div className="rounded-md border border-[var(--border-subtle)] bg-[rgba(15,24,41,0.78)] p-4">
          <p className="mb-4 text-sm text-[var(--text-primary)]">Tema</p>
          <div className="flex items-center justify-between rounded-full border border-[var(--border-mid)] bg-[rgba(6,8,16,0.5)] p-1">
            <span className="rounded-full bg-[var(--gold-bright)] px-3 py-1 text-xs font-bold text-[var(--bg-void)]">
              Escuro
            </span>
            <span className="px-3 py-1 text-xs text-[var(--text-muted)]">
              Claro
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
