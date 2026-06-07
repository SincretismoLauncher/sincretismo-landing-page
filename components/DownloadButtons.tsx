"use client";

import { Download, Terminal } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DownloadButtonsProps = {
  className?: string;
};

export function DownloadButtons({ className }: DownloadButtonsProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center",
        className,
      )}
    >
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Button
          asChild
          size="lg"
          className="h-12 w-full bg-[var(--gold-bright)] px-6 text-sm font-bold text-[var(--bg-void)] shadow-gold hover:bg-[var(--gold-shine)] sm:w-auto"
        >
          <a href="#download">
            <Download className="mr-2 h-4 w-4" />
            Baixar para Windows
          </a>
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="h-12 w-full border-[var(--gold-mid)] bg-transparent px-6 text-sm font-bold text-[var(--gold-bright)] hover:bg-[rgba(240,180,41,0.12)] hover:text-[var(--gold-shine)] sm:w-auto"
        >
          <a href="#download">
            <Terminal className="mr-2 h-4 w-4" />
            Baixar para Linux
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
