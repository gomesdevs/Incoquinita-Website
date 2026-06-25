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
          <mask id="qmark-text-mask">
            <rect width="100" height="140" fill="black" />
            <text
              x="50"
              y="105"
              textAnchor="middle"
              fontSize="120"
              fontFamily="var(--font-instrument-serif), Georgia, serif"
              fontWeight="400"
              fill="white"
            >
              ?
            </text>
          </mask>
        </defs>
      )}

      {animated ? (
        <rect
          width="100"
          height="140"
          fill="url(#qmark-scan)"
          mask="url(#qmark-text-mask)"
        />
      ) : (
        <text
          x="50"
          y="105"
          textAnchor="middle"
          fontSize="120"
          fontFamily="var(--font-instrument-serif), Georgia, serif"
          fontWeight="400"
          fill="var(--accent)"
        >
          ?
        </text>
      )}
    </svg>
  );
}
