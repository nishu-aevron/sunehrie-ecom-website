import Image from "next/image";

interface CroppedImageProps {
  src: string;
  alt?: string;
  /** Size of the clipping frame in the design. */
  frame: [number, number];
  /** Image box inside that frame in design px: [x, y, width, height]. */
  box: [number, number, number, number];
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/**
 * Reproduces a Figma "FILL" image that is offset/zoomed inside its frame.
 * Offsets are converted to percentages so the crop scales with the frame.
 */
export default function CroppedImage({ src, alt = "", frame: [fw, fh], box: [x, y, w, h], sizes = "600px", priority, className = "" }: CroppedImageProps) {
  return (
    <span
      className={`absolute block ${className}`}
      style={{ left: `${(x / fw) * 100}%`, top: `${(y / fh) * 100}%`, width: `${(w / fw) * 100}%`, height: `${(h / fh) * 100}%` }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </span>
  );
}
