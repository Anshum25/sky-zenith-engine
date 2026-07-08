import { cn } from "@/lib/utils";

export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative grid h-9 w-9 place-items-center">
        <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
          <defs>
            <linearGradient id="skyerp-mark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.68 0.16 262)" />
              <stop offset="55%" stopColor="oklch(0.78 0.14 205)" />
              <stop offset="100%" stopColor="oklch(0.68 0.2 300)" />
            </linearGradient>
          </defs>
          <path
            d="M20 3 L34 11 V29 L20 37 L6 29 V11 Z"
            fill="url(#skyerp-mark)"
            opacity="0.16"
          />
          <path
            d="M20 3 L34 11 V29 L20 37 L6 29 V11 Z"
            fill="none"
            stroke="url(#skyerp-mark)"
            strokeWidth="1.6"
          />
          <path
            d="M13 24 L18 18 L23 22 L28 14"
            fill="none"
            stroke="url(#skyerp-mark)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {showText && (
        <span className="text-lg font-bold tracking-tight">
          Sky<span className="text-gradient">ERP</span>
        </span>
      )}
    </span>
  );
}
