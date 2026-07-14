import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
      glowRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300"
      style={{
        background: `radial-gradient(800px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(201, 151, 74, 0.06), transparent 80%)`,
      }}
    />
  );
}
