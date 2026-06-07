import { SinLogo } from "@/components/SinLogo";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { href: "#termos", label: "Termos" },
  { href: "#privacidade", label: "Privacidade" },
  { href: "#github", label: "GitHub" },
  { href: "#discord", label: "Discord" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-void)] py-10">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <SinLogo className="[&_svg]:h-8 [&_svg]:w-8" />
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              © 2025 Projeto Sincretismo
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-3">
            {footerLinks.map((link) => (
              <a
                className="text-sm font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--gold-shine)]"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <Separator className="my-7 bg-[var(--border-subtle)]" />
        <p className="text-sm text-[var(--text-muted)]">
          Não afiliado à Mojang Studios ou Microsoft.
        </p>
      </div>
    </footer>
  );
}
