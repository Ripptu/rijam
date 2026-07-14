import React, { useRef, useState, MouseEvent } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Calculate rotation (-6 to 6 degrees)
    const rotateX = ((y / height) - 0.5) * -12;
    const rotateY = ((x / width) - 0.5) * 12;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: "none"
    });

    const px = (x / width) * 100;
    const py = (y / height) * 100;
    setGlareStyle({
      background: `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)`,
      opacity: 1,
      transition: "none"
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg)`,
      transition: "transform 0.5s ease-out"
    });
    setGlareStyle({
      opacity: 0,
      transition: "opacity 0.5s ease-out"
    });
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="absolute inset-0 pointer-events-none z-10 mix-blend-soft-light transition-opacity"
        style={glareStyle}
      />
      {children}
    </div>
  );
}
