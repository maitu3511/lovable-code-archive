import React from "react";
import monogramImg from "../assets/digibasera-monogram.png";

interface DigiBaseraLogoProps {
  variant?: "light" | "dark" | "full-gold";
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  className?: string;
  layout?: "horizontal" | "vertical" | "mark-only";
}

export const DigiBaseraLogo: React.FC<DigiBaseraLogoProps> = ({
  variant = "dark",
  size = "md",
  showTagline = true,
  className = "",
  layout = "horizontal",
}) => {
  // Height and scale profiles
  const sizeMap = {
    sm: { markSize: 40, titleSize: "text-base", subSize: "text-[8px]", gap: "gap-2.5" },
    md: { markSize: 50, titleSize: "text-xl", subSize: "text-[9px]", gap: "gap-3" },
    lg: { markSize: 66, titleSize: "text-2xl", subSize: "text-[10px]", gap: "gap-3.5" },
    xl: { markSize: 84, titleSize: "text-3xl", subSize: "text-xs", gap: "gap-4" },
  };

  const currentSize = sizeMap[size];

  // Colors & styling based on background variant
  const isDark = variant === "dark"; // on dark footer
  const isLight = variant === "light"; // on light header

  return (
    <div
      className={`inline-flex ${
        layout === "vertical" ? "flex-col items-center text-center" : "items-center"
      } ${currentSize.gap} select-none ${className}`}
      id="digibasera-official-logo"
    >
      {/* Official DigiBasera Monogram */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src={monogramImg}
          alt="Digi Basera logo"
          width={currentSize.markSize}
          height={currentSize.markSize}
          loading="eager"
          decoding="async"
          style={{ width: currentSize.markSize, height: currentSize.markSize }}
          className="object-contain max-w-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Typography: "Digi Basera" & "— MARKETING AGENCY —" */}
      {layout !== "mark-only" && (
        <div className={`flex flex-col ${layout === "vertical" ? "items-center" : "items-start"}`}>
          {/* Main Title: Digi Basera */}
          <div className="flex items-baseline tracking-tight font-heading leading-none">
            <span
              className={`${currentSize.titleSize} font-extrabold tracking-normal font-heading ${
                isDark ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" : "text-[#111111]"
              }`}
            >
              Digi{" "}
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E096] to-[#AA821C] bg-clip-text text-transparent drop-shadow-xs font-black">
                Basera
              </span>
            </span>
          </div>

          {/* Subtitle: — MARKETING AGENCY — */}
          {showTagline && (
            <div
              className={`flex items-center gap-1.5 ${currentSize.subSize} font-bold uppercase tracking-[0.22em] mt-1 font-['Plus_Jakarta_Sans',sans-serif] ${
                isDark ? "text-[#D4AF37]" : "text-[#8C6B16]"
              }`}
            >
              <span className="w-3.5 h-[1.2px] bg-gradient-to-r from-transparent to-[#D4AF37] opacity-80" />
              <span>Marketing Agency</span>
              <span className="w-3.5 h-[1.2px] bg-gradient-to-l from-transparent to-[#D4AF37] opacity-80" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
