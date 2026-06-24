"use client";

interface QuestionMarkFallbackProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export function QuestionMarkFallback({
  className = "",
  size = 200,
  animated = false,
}: QuestionMarkFallbackProps) {
  return (
    <svg
      viewBox="0 0 100 140"
      width={size}
      height={size * 1.4}
      className={className}
      aria-hidden="true"
    >
      {animated && (
        <defs>
          <linearGradient id="qmark-scan" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0">
              <animate
                attributeName="offset"
                values="-0.3;1.3"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="15%" stopColor="var(--accent)" stopOpacity="0.6">
              <animate
                attributeName="offset"
                values="-0.15;1.45"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="30%" stopColor="var(--accent)" stopOpacity="0">
              <animate
                attributeName="offset"
                values="0;1.6"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
      )}

      {/* Main ? shape — SVG path */}
      <path
        d="M45 10 C20 10, 5 30, 5 50 C5 70, 20 80, 35 85 L35 95 L55 95 L55 85 C70 82, 90 72, 90 50 C90 28, 72 10, 45 10 Z M35 68 L55 68 L55 48 L35 48 Z M35 108 L55 108 L55 128 L35 128 Z"
        fill={animated ? "url(#qmark-scan)" : "var(--accent)"}
        className="transition-colors duration-500"
      />
    </svg>
  );
}
