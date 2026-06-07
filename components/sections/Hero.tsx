"use client";

import { motion } from "framer-motion";

import { DownloadButtons } from "@/components/DownloadButtons";
import { LauncherMockup } from "@/components/LauncherMockup";
import { Starfield } from "@/components/Starfield";

const heroItems = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.72, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="hero-radial relative isolate overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-32"
    >
      <Starfield />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--bg-deep)]" />
      <div className="section-shell relative z-10 text-center">
        <motion.h1
          className="mx-auto max-w-5xl font-display text-[clamp(3rem,9vw,6rem)] font-bold leading-[0.95] tracking-normal text-[var(--text-primary)]"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={heroItems}
        >
          O Minecraft que
          <br />
          você <span className="sin-text-glow">nunca</span> jogou.
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-7 text-[var(--text-secondary)] sm:text-lg"
          custom={0.15}
          initial="hidden"
          animate="visible"
          variants={heroItems}
        >
          Sincretismo Launcher traz o mod mais ambicioso do Brasil com
          instalação de um clique. Sem configuração. Sem complicação.
        </motion.p>
        <motion.div
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={heroItems}
        >
          <DownloadButtons className="mt-8" />
          <p className="mt-4 font-mono text-xs text-[var(--text-muted)]">
            v0.1.0-beta · Windows 10/11 · Ubuntu · Fedora · Arch
          </p>
        </motion.div>
        <motion.div
          className="mx-auto mt-12 max-w-5xl"
          custom={0.45}
          initial="hidden"
          animate="visible"
          variants={heroItems}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <LauncherMockup />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
