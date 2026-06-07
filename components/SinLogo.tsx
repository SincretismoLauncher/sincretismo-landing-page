import { cn } from "@/lib/utils";

type SinLogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function SinLogo({ className, showWordmark = true }: SinLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        aria-hidden="true"
        viewBox="0 0 64 64"
        className="h-10 w-10 shrink-0"
        role="img"
      >
        <defs>
          <linearGradient id="sin-gold" x1="12" x2="52" y1="10" y2="54">
            <stop stopColor="#ffd97d" offset="0" />
            <stop stopColor="#f0b429" offset="0.38" />
            <stop stopColor="#8a5c10" offset="1" />
          </linearGradient>
          <linearGradient id="sin-blue" x1="8" x2="58" y1="8" y2="58">
            <stop stopColor="#3d5eff" offset="0" />
            <stop stopColor="#1a2a6c" offset="0.72" />
            <stop stopColor="#060810" offset="1" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="12" fill="url(#sin-blue)" />
        <path
          d="M14 17h36l4 5v25l-5 6H14l-5-6V22l5-5Z"
          fill="#300016"
          opacity="0.94"
        />
        <path d="M17 19h31l3 4v21l-4 5H17l-4-5V23l4-4Z" fill="url(#sin-gold)" />
        <path d="M17 19h31l3 4H19l-6 9v-9l4-4Z" fill="#ffd97d" opacity="0.78" />
        <g fill="#300016">
          <path d="M17 28h12v5h-7v3h7v11H15v-5h8v-3h-7V29l1-1Z" />
          <path d="M31 26h7v21h-7V26Z" />
          <path d="M41 26h7v9h3v12h-7v-9h-3V26Z" />
        </g>
        <path d="M17 47h30l4-5v6l-4 5H17l-4-5v-6l4 5Z" fill="#5b2c0b" opacity="0.52" />
      </svg>
      {showWordmark ? (
        <span className="font-serif text-lg font-semibold tracking-normal text-[var(--text-primary)]">
          Sincretismo
        </span>
      ) : null}
    </div>
  );
}
