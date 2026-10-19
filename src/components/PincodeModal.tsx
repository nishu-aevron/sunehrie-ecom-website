"use client";

import { useState } from "react";
import { X, MapPin, CheckCircle, Truck, ShieldCheck } from "lucide-react";
import { useShop } from "@/context/ShopContext";

const samplePincodes = [
  { pin: "388001", city: "Godhra (Home Store)" },
  { pin: "389230", city: "Lunawada (Home Store)" },
  { pin: "380001", city: "Ahmedabad" },
  { pin: "390001", city: "Vadodara" },
  { pin: "395001", city: "Surat" },
];

export default function PincodeModal() {
  const { isPincodeModalOpen, setIsPincodeModalOpen, setPincode, showToast } = useShop();
  const [inputVal, setInputVal] = useState("");
  const [status, setStatus] = useState<{ checked: boolean; valid: boolean; text: string } | null>(null);

  if (!isPincodeModalOpen) return null;

  const handleCheck = (val: string) => {
    if (!val || val.length !== 6 || isNaN(Number(val))) {
      setStatus({ checked: true, valid: false, text: "Please enter a valid 6-digit Indian PIN code." });
      return;
    }
    const match = samplePincodes.find((p) => p.pin === val);
    const city = match ? match.city : "Gujarat";
    setStatus({
      checked: true,
      valid: true,
      text: `Delivery available for ${val} (${city})! Free Insured Delivery in 2-3 business days.`,
    });
  };

  const handleApply = (val: string) => {
    const match = samplePincodes.find((p) => p.pin === val);
    const label = match ? `${match.pin} (${match.city.split(" ")[0]})` : val;
    setPincode(label);
    showToast(`Delivery location updated to ${label}`);
    setIsPincodeModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setIsPincodeModalOpen(false)} />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#ece3f0] p-6 z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-[#ece3f0]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#f4edf8] text-[#cca338] flex items-center justify-center">
              <MapPin size={17} />
            </div>
            <h3
              className="text-[19px] font-bold text-[#2e093d]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Check Delivery &amp; Store Pincode
            </h3>
          </div>
          <button
            onClick={() => setIsPincodeModalOpen(false)}
            className="w-8 h-8 rounded-full bg-[#f4edf8] hover:bg-[#ece0f2] text-[#2e093d] flex items-center justify-center transition-colors"
          >
            <X size={17} />
          </button>
        </div>

        <div className="py-5">
          <p className="text-[13px] text-[#6b5575] mb-4">
            Enter your 6-digit PIN code to check exact delivery dates, home trials &amp; nearest store pickup.
          </p>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 flex items-center bg-[#f8f4fb] rounded-full px-4 py-2.5 border border-[#decfe5] focus-within:border-[#7a3f91] focus-within:bg-white transition-all">
              <input
                type="text"
                maxLength={6}
                value={inputVal}
                onChange={(e) => {
                  setInputVal(e.target.value);
                  setStatus(null);
                }}
                placeholder="Enter 6-digit PIN code"
                className="bg-transparent outline-none text-[14px] text-[#2e093d] w-full font-semibold placeholder:font-normal placeholder:text-[#9c89a9]"
                autoFocus
              />
            </div>
            <button
              onClick={() => handleCheck(inputVal)}
              className="px-6 py-2.5 rounded-full bg-[#7a3f91] hover:bg-[#5a2d6e] text-white text-[13px] font-bold uppercase transition-all shadow-sm"
            >
              Check
            </button>
          </div>

          {/* Quick Clickable Suggestions */}
          <div className="mb-4">
            <span className="text-[11px] font-bold text-[#9682a2] uppercase tracking-wider block mb-2">
              Popular Gujarat Delivery Hubs:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {samplePincodes.map((item) => (
                <button
                  key={item.pin}
                  onClick={() => {
                    setInputVal(item.pin);
                    handleCheck(item.pin);
                  }}
                  className="px-3 py-1 rounded-full text-[12px] bg-[#f4edf8] text-[#4d1b54] hover:bg-[#cca338] hover:text-[#180424] font-medium border border-[#e8dcee] transition-all"
                >
                  {item.pin} ({item.city.split(" ")[0]})
                </button>
              ))}
            </div>
          </div>

          {/* Verification Status Banner */}
          {status && (
            <div
              className={`p-3.5 rounded-2xl border text-[13px] ${
                status.valid
                  ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                  : "bg-red-50 border-red-200 text-red-900"
              }`}
            >
              <div className="flex items-start gap-2">
                {status.valid ? (
                  <CheckCircle size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <X size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-semibold">{status.text}</div>
                  {status.valid && (
                    <div className="mt-2.5 pt-2 border-t border-emerald-200 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[11px] text-emerald-700">
                        <Truck size={13} />
                        <span>Insured Delivery by Sequel</span>
                      </div>
                      <button
                        onClick={() => handleApply(inputVal)}
                        className="px-4 py-1 rounded-full bg-emerald-700 text-white text-[11px] font-bold uppercase hover:bg-emerald-800 transition-colors"
                      >
                        Set Location
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="mt-5 pt-4 border-t border-[#f4edf8] flex items-center justify-between text-[11px] text-[#9682a2]">
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} className="text-[#079455]" />
              100% Insured Transit
            </span>
            <span>48-Hour Return Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
