"use client";

import {
  Download,
  Gauge,
  Monitor,
  RefreshCw,
  Shield,
  Wifi,
} from "lucide-react";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Download,
    title: "Instalação com 1 clique",
    description:
      "Forge, Java e o mod instalados automaticamente. Sem tocar em arquivo nenhum.",
  },
  {
    icon: RefreshCw,
    title: "Sempre atualizado",
    description:
      "O launcher detecta novas versões do mod e atualiza sozinho, sem interrupção.",
  },
  {
    icon: Shield,
    title: "Autenticação oficial",
    description:
      "Login com sua conta Microsoft/Mojang. Seguro, oficial, sem gambiarras.",
  },
  {
    icon: Gauge,
    title: "Ultra leve",
    description:
      "Menos de 15 MB. Usa a webview nativa do seu sistema. Zero Chromium empacotado.",
  },
  {
    icon: Monitor,
    title: "Windows & Linux",
    description:
      "Suporte nativo para Windows 10/11, Ubuntu, Fedora e Arch Linux.",
  },
  {
    icon: Wifi,
    title: "Status do servidor",
    description:
      "Veja se o servidor oficial está online direto do launcher, em tempo real.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative bg-[var(--bg-deep)] py-20 sm:py-28"
    >
      <div className="section-shell">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-display text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl">
            Tudo que você precisa. Nada que você não quer.
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              key={feature.title}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card className="group h-full overflow-hidden border-[var(--border-subtle)] bg-[var(--bg-surface)] transition-colors hover:border-[var(--border-mid)] hover:shadow-blue">
                <CardHeader>
                  <div className="mb-3 grid h-12 w-12 place-items-center rounded-md border border-[var(--border-mid)] bg-[rgba(240,180,41,0.1)] text-[var(--gold-bright)] shadow-gold">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-serif text-xl text-[var(--text-primary)]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-7 text-[var(--text-secondary)]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
