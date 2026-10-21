/* eslint-disable @next/next/no-img-element -- static SVG icons exported from Figma; no optimisation needed */

interface IconProps {
  src: string;
  /** Square size, or [width, height] when the design's icon is not square. */
  size: number | [number, number];
  className?: string;
  alt?: string;
}

/** Renders an exported Figma icon at its design size. */
export default function Icon({ src, size, className, alt = "" }: IconProps) {
  const [width, height] = Array.isArray(size) ? size : [size, size];
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      width={width}
      height={height}
      className={`block shrink-0 ${className ?? ""}`}
      style={{ width, height }}
      draggable={false}
    />
  );
}
