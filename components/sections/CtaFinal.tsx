"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import { DownloadButtons } from "@/components/DownloadButtons";

export function CtaFinal() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-[var(--blue-core)] py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,180,41,0.24),transparent_34rem)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,8,16,0.12),rgba(6,8,16,0.58))]"
      />
      <motion.div
        className="section-shell relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.35 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-[var(--text-primary)] sm:text-5xl">
          Pronto para entrar no Sincretismo?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
          Junte-se à comunidade. O mod está esperando por você.
        </p>
        <DownloadButtons className="mt-8" />
        <a
          className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[var(--gold-shine)] transition-colors hover:text-white"
          href="#discord"
          id="discord"
        >
          <MessageCircle className="h-4 w-4" />
          Entrar no Discord
        </a>
      </motion.div>
    </section>
  );
}
