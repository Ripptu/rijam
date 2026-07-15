import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useIsDesktopPointer } from "../hooks/useIsDesktopPointer";

interface MagneticButtonProps {
  children: React.ReactNode;
  as?: React.ElementType;
  href?: string;
  className?: string;
  [key: string]: any;
}

export function MagneticButton({ children, as: Component = "button", ...props }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | any>(null);
  const isDesktop = useIsDesktopPointer();

  useEffect(() => {
    const button = buttonRef.current;
    if (!button || !isDesktop) return;

    const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      // limit the movement to max 8px
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 8;
      
      if (distance < 60) {
        xTo((x / 60) * maxDistance);
        yTo((y / 60) * maxDistance);
      } else {
        xTo(0);
        yTo(0);
      }
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
      xTo(0);
      yTo(0);
    };
  }, [isDesktop]);

  return (
    <Component ref={buttonRef} {...props}>
      {children}
    </Component>
  );
}
