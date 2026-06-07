"use client";

import { Menu } from "lucide-react";

import { SinLogo } from "@/components/SinLogo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#features", label: "Features" },
  { href: "#requisitos", label: "Requisitos" },
  { href: "#discord", label: "Discord" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border-subtle)] bg-[rgba(6,8,16,0.72)] backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between">
        <a aria-label="Sincretismo Launcher" href="#top">
          <SinLogo />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              className="text-sm font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--gold-shine)]"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button
            asChild
            variant="outline"
            className="border-[var(--gold-mid)] bg-transparent text-[var(--gold-bright)] hover:bg-[var(--gold-bright)] hover:text-[var(--bg-void)]"
          >
            <a href="#download">Download</a>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              aria-label="Abrir menu"
              className="border-[var(--border-mid)] bg-transparent text-[var(--gold-shine)] md:hidden"
              size="icon"
              variant="outline"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="border-[var(--border-mid)] bg-[var(--bg-deep)]">
            <SheetHeader>
              <SheetTitle className="font-serif text-[var(--gold-shine)]">
                Sincretismo
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 grid gap-3">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    className="rounded-md border border-[var(--border-subtle)] px-4 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--border-mid)] hover:bg-[rgba(240,180,41,0.1)]"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button
                  asChild
                  className="mt-3 bg-[var(--gold-bright)] text-[var(--bg-void)] hover:bg-[var(--gold-shine)]"
                >
                  <a href="#download">Download</a>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
