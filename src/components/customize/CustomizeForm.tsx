"use client";

import { useRef, useState } from "react";
import { ChevronDown, RotateCw } from "lucide-react";

const jewelleryTypes = ["Ring", "Earrings", "Pendant", "Necklace", "Mangalsutra", "Bracelet / Bangle", "Nose pin", "Other"];
const MAX_BYTES = 5 * 1024 * 1024;

// No 0/O or 1/I so the code is easy to read back.
const CAPTCHA_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const newCaptcha = () => {
  const pick = () => CAPTCHA_CHARS[Math.floor(Math.random() * CAPTCHA_CHARS.length)];
  return `${pick()}${pick()}${pick()} ${pick()}${pick()}${pick()}`;
};

const input = "h-[52px] w-full rounded-[12px] border border-[#e8e5eb] bg-white px-4 text-[14px] font-medium text-[#1d1a20] outline-none placeholder:text-[#a8a3b0] focus:border-purple";

function Label({ children, required, htmlFor }: { children: React.ReactNode; required?: boolean; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="flex gap-[3px] text-[13px] font-semibold text-[#1d1a20]">
      {children}
      {required && <span className="text-purple">*</span>}
    </label>
  );
}

export default function CustomizeForm() {
  // Seeded with the design's sample code so server and client render the same markup; regenerated on refresh/submit.
  const [captcha, setCaptcha] = useState("7K3 P9X");
  const [captchaInput, setCaptchaInput] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const onFile = (f: File | undefined) => {
    setError(null);
    if (!f) return setFile(null);
    if (!["image/jpeg", "image/png"].includes(f.type)) return setError("Please choose a JPG or PNG image.");
    if (f.size > MAX_BYTES) return setError("That image is larger than 5 MB.");
    setFile(f);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (captchaInput.replace(/\s/g, "").toUpperCase() !== captcha.replace(/\s/g, "")) {
      setError("The code doesn't match. Please try again.");
      setCaptcha(newCaptcha());
      setCaptchaInput("");
      return;
    }
    setError(null);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-1 flex-col items-start gap-4 rounded-[24px] border border-[#e8e5eb] bg-white p-6 sm:p-10" role="status">
        <span className="flex size-14 items-center justify-center rounded-full border-[1.5px] border-gold-deep bg-gold-deep/10 text-[26px] font-bold text-gold-deep">✓</span>
        <h2 className="font-seasons text-[26px] font-bold text-[#1d1a20]">Thank you — we&apos;ve got your request.</h2>
        <p className="text-[14px] leading-[1.6] text-[#6b6673]">
          One of our design consultants will call you within one working day to talk through the design, metal, stones and budget.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setFile(null);
            setCaptcha(newCaptcha());
            setCaptchaInput("");
          }}
          className="cursor-pointer rounded-[50px] border border-purple px-6 py-3 text-[14px] font-semibold text-purple hover:bg-purple-10"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex min-w-0 flex-1 flex-col gap-5 rounded-[24px] border border-[#e8e5eb] bg-white p-5 sm:p-10">
      <h2 className="font-seasons text-[24px] font-bold text-[#1d1a20] sm:text-[26px]">Tell us about your piece</h2>

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="cz-name" required>Name</Label>
          <input id="cz-name" name="name" required autoComplete="name" placeholder="Your full name" className={input} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="cz-phone" required>Phone Number</Label>
          <input id="cz-phone" name="phone" type="tel" required autoComplete="tel" pattern="[+0-9 ]{10,15}" placeholder="+91 00000 00000" className={input} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="cz-email" required>Email</Label>
          <input id="cz-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={input} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="cz-type">Jewellery Type</Label>
          <div className="relative">
            <select id="cz-type" name="type" defaultValue="" className={`${input} cursor-pointer appearance-none pr-10 invalid:text-[#a8a3b0]`}>
              <option value="" disabled>
                Select type
              </option>
              {jewelleryTypes.map((t) => (
                <option key={t} value={t} className="text-[#1d1a20]">
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#6b6673]" aria-hidden />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="cz-notes" required>Comments / Instructions</Label>
        <textarea
          id="cz-notes"
          name="notes"
          required
          rows={5}
          placeholder="Describe the design, metal, stones, size or occasion…"
          className="h-[140px] w-full resize-y rounded-[12px] border border-[#e8e5eb] bg-white p-4 text-[14px] font-medium text-[#1d1a20] outline-none placeholder:text-[#a8a3b0] focus:border-purple"
        />
      </div>

      <div
        className="flex flex-col items-center justify-center gap-1.5 rounded-[16px] border-[1.25px] border-dashed border-[#a8a3b0] bg-[#f8f7f9] px-4 py-7 text-center"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          onFile(e.dataTransfer.files[0]);
        }}
      >
        <p className="text-[14px] font-semibold text-[#1d1a20]">{file ? file.name : "Upload a reference image"}</p>
        <p className="text-[12px] font-medium text-[#6b6673]">{file ? `${(file.size / 1024 / 1024).toFixed(1)} MB` : "JPG or PNG, up to 5 MB. Optional."}</p>
        <input ref={fileRef} type="file" name="reference" accept="image/jpeg,image/png" className="sr-only" onChange={(e) => onFile(e.target.files?.[0])} tabIndex={-1} />
        <div className="mt-1 flex gap-2">
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="cursor-pointer rounded-[50px] border border-[#1d1a20] bg-white px-[18px] py-[9px] text-[13px] font-semibold text-[#1d1a20] hover:bg-purple-10"
          >
            {file ? "Change file" : "Choose file"}
          </button>
          {file && (
            <button
              type="button"
              onClick={() => {
                setFile(null);
                if (fileRef.current) fileRef.current.value = "";
              }}
              className="cursor-pointer rounded-[50px] px-3 py-[9px] text-[13px] font-semibold text-[#6b6673] hover:text-red-600"
            >
              Remove
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-3 rounded-[10px] border border-[#e8e5eb] bg-[#f8f7f9] px-[22px] py-3 text-[#6b6673] select-none" aria-label={`Security code ${captcha.split("").join(" ")}`}>
          <span className="text-[18px] font-extrabold tracking-[4px] whitespace-pre" aria-hidden>
            {captcha}
          </span>
          <button
            type="button"
            onClick={() => {
              setCaptcha(newCaptcha());
              setCaptchaInput("");
            }}
            aria-label="Get a new code"
            className="cursor-pointer hover:text-purple"
          >
            <RotateCw size={16} />
          </button>
        </div>
        <label className="w-full sm:w-[240px]">
          <span className="sr-only">Enter the code</span>
          <input value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} required placeholder="Enter the code" autoComplete="off" className={input} />
        </label>
      </div>

      <label className="flex cursor-pointer items-start gap-2.5">
        <input type="checkbox" required className="mt-px size-[18px] shrink-0 cursor-pointer rounded-[5px] accent-purple" />
        <span className="text-[12px] font-medium text-[#6b6673]">I agree not to submit copyrighted designs. Existing designs may be used as inspiration for a unique piece.</span>
      </label>

      {error && (
        <p className="text-[13px] font-medium text-red-600" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="w-fit cursor-pointer rounded-[50px] bg-purple px-7 py-[15px] text-[14px] font-semibold text-white transition-colors hover:bg-purple-deep">
        Send request
      </button>
    </form>
  );
}
