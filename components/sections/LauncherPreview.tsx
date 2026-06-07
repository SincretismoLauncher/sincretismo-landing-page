"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import {
  LauncherMockup,
  type LauncherMockupVariant,
} from "@/components/LauncherMockup";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const previewTabs: Array<{
  label: string;
  value: LauncherMockupVariant;
  eyebrow: string;
  description: string;
}> = [
  {
    label: "Início",
    value: "home",
    eyebrow: "Notícias, servidor e jogar",
    description:
      "A primeira tela concentra novidades do mod, presença do servidor e o botão principal para entrar sem ruído.",
  },
  {
    label: "Instalação",
    value: "installation",
    eyebrow: "Dependências automáticas",
    description:
      "Java, Forge, download do mod e verificação aparecem como uma fila clara de estados, sem mexer em pastas.",
  },
  {
    label: "Configurações",
    value: "settings",
    eyebrow: "Ajustes essenciais",
    description:
      "RAM, Java e tema ficam visíveis para quem quer controlar o launcher sem transformar isso em trabalho.",
  },
];

export function LauncherPreview() {
  const [activeTab, setActiveTab] = useState<LauncherMockupVariant>("home");
  const activeContent = previewTabs.find((tab) => tab.value === activeTab);

  return (
    <section id="sobre" className="bg-[var(--bg-void)] py-20 sm:py-28">
      <div className="section-shell">
        <motion.div
          className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.18 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                initial={{ opacity: 0, x: 18 }}
                key={activeTab}
                transition={{ duration: 0.34, ease: "easeOut" }}
              >
                <LauncherMockup variant={activeTab} />
              </motion.div>
            </AnimatePresence>
          </div>
          <Tabs
            className="sin-panel rounded-lg p-5 sm:p-6"
            onValueChange={(value) =>
              setActiveTab(value as LauncherMockupVariant)
            }
            value={activeTab}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--gold-mid)]">
              Demo interativa
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--text-primary)] sm:text-4xl">
              O launcher em ação.
            </h2>
            <TabsList className="mt-6 grid h-auto w-full grid-cols-1 gap-2 bg-transparent p-0">
              {previewTabs.map((tab) => (
                <TabsTrigger
                  className="justify-start rounded-md border border-[var(--border-subtle)] bg-[rgba(15,24,41,0.78)] px-4 py-3 text-left text-[var(--text-secondary)] data-[state=active]:border-[var(--border-mid)] data-[state=active]:bg-[rgba(240,180,41,0.11)] data-[state=active]:text-[var(--gold-shine)]"
                  key={tab.value}
                  value={tab.value}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="mt-6 rounded-md border border-[var(--border-subtle)] bg-[rgba(6,8,16,0.38)] p-4">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--gold-mid)]">
                {activeContent?.eyebrow}
              </p>
              <p className="mt-3 leading-7 text-[var(--text-secondary)]">
                {activeContent?.description}
              </p>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
