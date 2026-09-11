import React, { useEffect, useRef, useState } from "react";

interface HeroBackgroundVideoProps {
  /** Poster / fallback image (also used while the video loads) */
  poster: string;
  /** Public path to the webm source */
  webmSrc: string;
  /** Public path to the mp4 source */
  mp4Src: string;
  /** Extra classes for the <video> element (opacity, blend, etc.) */
  className?: string;
}

/**
 * Premium background video layer.
 * - Autoplays muted + looped, inline on iOS
 * - Skipped entirely for prefers-reduced-motion, small screens and Save-Data
 *   (the poster image behind it stays visible => no layout shift, no perf hit)
 * - Hides itself gracefully if the file cannot be loaded
 */
export const HeroBackgroundVideo: React.FC<HeroBackgroundVideoProps> = ({
  poster,
  webmSrc,
  mp4Src,
  className = "",
}) => {
  const [enabled, setEnabled] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = window.matchMedia("(max-width: 767px)");
    const connection = (navigator as unknown as { connection?: { saveData?: boolean } })
      .connection;

    const evaluate = () => {
      setEnabled(!reduceMotion.matches && !smallScreen.matches && !connection?.saveData);
    };

    evaluate();
    reduceMotion.addEventListener("change", evaluate);
    smallScreen.addEventListener("change", evaluate);
    return () => {
      reduceMotion.removeEventListener("change", evaluate);
      smallScreen.removeEventListener("change", evaluate);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = videoRef.current;
    if (!el) return;
    const play = el.play();
    if (play && typeof play.catch === "function") play.catch(() => undefined);
  }, [enabled]);

  if (!enabled || failed) return null;

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
        ready ? "opacity-100" : "opacity-0"
      } ${className}`}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
      onCanPlay={() => setReady(true)}
      onError={() => setFailed(true)}
    >
      <source src={webmSrc} type="video/webm" />
      <source src={mp4Src} type="video/mp4" />
    </video>
  );
};

export default HeroBackgroundVideo;
