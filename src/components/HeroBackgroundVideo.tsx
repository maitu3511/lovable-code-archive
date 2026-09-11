import React, { useEffect, useRef, useState } from "react";

interface HeroBackgroundVideoProps {
  /** Poster / fallback image (also used while the video loads) */
  poster: string;
  /** Public path to the webm source */
  webmSrc: string;
  /** Public path to the mp4 source */
  mp4Src: string;
  /** Extra classes for the <video> element */
  className?: string;
  /** Final opacity once the video is playing (0-1) */
  opacity?: number;
}

/**
 * Premium background video layer.
 * - Autoplays muted + looped, inline on iOS
 * - Skipped only for prefers-reduced-motion (accessibility)
 *   (the poster image behind it stays visible => no layout shift, no perf hit)
 * - Hides itself gracefully if the file genuinely cannot be loaded
 */
export const HeroBackgroundVideo: React.FC<HeroBackgroundVideoProps> = ({
  poster,
  webmSrc,
  mp4Src,
  className = "",
  opacity = 1,
}) => {
  // Start enabled by default so the video shows immediately on first paint
  // instead of waiting for an effect to flip it on (was causing a flash /
  // no-show on some devices, especially when the Save-Data check below
  // used to disable the video entirely for a large share of mobile users
  // on data-saver connections in India).
  const [enabled, setEnabled] = useState(true);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Only respect the accessibility "reduce motion" preference. The old
    // navigator.connection.saveData check was silently killing the video
    // for a huge chunk of Indian mobile users (Chrome's Data Saver / Lite
    // mode reports saveData: true on many carriers), which is what made it
    // look like the video "wasn't showing" even though everything else was
    // wired up correctly.
    const evaluate = () => {
      setEnabled(!reduceMotion.matches);
    };

    evaluate();
    reduceMotion.addEventListener("change", evaluate);
    return () => {
      reduceMotion.removeEventListener("change", evaluate);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = videoRef.current;
    if (!el) return;
    // Set muted imperatively (not just via the JSX/HTML attribute). In SSR
    // apps the server-rendered markup can autoplay before React has fully
    // hydrated and attached the `muted` property, which makes browsers
    // silently block autoplay. Setting it directly on the element removes
    // that race condition.
    el.muted = true;
    el.defaultMuted = true;
    const play = el.play();
    if (play && typeof play.catch === "function") {
      play.catch(() => {
        // If autoplay is still blocked for some reason, at least show the
        // poster/first frame instead of nothing.
        setReady(true);
      });
    }
  }, [enabled]);

  if (!enabled || failed) return null;

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 z-[1] ${className}`}
      style={{ opacity: ready ? opacity : 0 }}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
      onLoadedData={() => setReady(true)}
      onPlaying={() => setReady(true)}
      onCanPlay={() => setReady(true)}
      onError={() => setFailed(true)}
    >
      <source src={webmSrc} type="video/webm" />
      <source src={mp4Src} type="video/mp4" />
    </video>
  );
};

export default HeroBackgroundVideo;
