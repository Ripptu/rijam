import React, { useState, useEffect } from "react";

interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  placeholderSrc?: string;
  className?: string;
  alt?: string;
}

export function ProgressiveImage({ src, placeholderSrc, className = "", alt = "", ...props }: ProgressiveImageProps) {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [blur, setBlur] = useState(!!placeholderSrc);

  useEffect(() => {
    if (!placeholderSrc) return;
    
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setBlur(false);
    };
  }, [src, placeholderSrc]);

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      className={`${className} transition-[filter] duration-1000 ease-out ${blur ? "blur-xl" : "blur-0"}`}
    />
  );
}
