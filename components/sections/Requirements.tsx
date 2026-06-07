"use client";

import { Info, Monitor, Terminal } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const requirements = [
  {
    icon: Monitor,
    title: "Windows",
    items: [
      ["OS", "Windows 10/11 (64-bit)"],
      ["RAM", "4 GB (8 GB recomendado)"],
      ["Disco", "500 MB livres"],
      ["Java", "Instalado automaticamente"],
      ["Conta", "Microsoft/Mojang ativa"],
    ],
  },
  {
    icon: Terminal,
    title: "Linux",
    items: [
      ["OS", "Ubuntu 22.04+ / Fedora 38+ / Arch Linux e derivados"],
      ["RAM", "4 GB (8 GB recomendado)"],
      ["Disco", "500 MB livres"],
      ["Java", "Instalado automaticamente"],
      ["Conta", "Microsoft/Mojang ativa"],
    ],
  },
];

export function Requirements() {
  return (
    <section
      id="requisitos"
      className="relative bg-[var(--bg-deep)] py-20 sm:py-28"
    >
      <div className="section-shell">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="font-display text-4xl text-[var(--text-primary)] sm:text-5xl">
            Requisitos mínimos
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {requirements.map((system, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              key={system.title}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.25 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card className="h-full border-[var(--border-mid)] bg-[var(--bg-surface)]">
                <CardHeader className="flex-row items-center gap-3 space-y-0">
                  <div className="grid h-11 w-11 place-items-center rounded-md border border-[var(--border-mid)] bg-[rgba(240,180,41,0.1)] text-[var(--gold-bright)]">
                    <system.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="font-serif text-2xl text-[var(--text-primary)]">
                    {system.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-3">
                    {system.items.map(([label, value]) => (
                      <div
                        className="grid gap-1 border-b border-[var(--border-subtle)] pb-3 last:border-0 last:pb-0 sm:grid-cols-[88px_1fr]"
                        key={label}
                      >
                        <dt className="font-mono text-xs uppercase text-[var(--text-muted)]">
                          {label}
                        </dt>
                        <dd className="text-sm text-[var(--text-secondary)]">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Badge className="gap-2 border-[var(--border-mid)] bg-[rgba(240,180,41,0.1)] px-4 py-2 text-[var(--gold-shine)]">
            <Info className="h-4 w-4" />
            O launcher instala o Java automaticamente se necessário.
          </Badge>
        </div>
      </div>
    </section>
  );
}
