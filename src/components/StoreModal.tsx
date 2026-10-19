"use client";

import { X, MapPin, Phone, Clock, Navigation, Calendar } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function StoreModal() {
  const { isStoreModalOpen, setIsStoreModalOpen, setIsAccountModalOpen } = useShop();

  if (!isStoreModalOpen) return null;

  const stores = [
    {
      name: "Sunehriè Flagship Showroom",
      city: "Godhra, Gujarat",
      address: "MG Road, Near Historical Clock Tower, Godhra - 388001",
      phone: "+91 98250 12345",
      hours: "10:30 AM - 8:30 PM (Open 7 Days)",
      badge: "FLAGSHIP SHOWROOM",
      highlight: "Custom Bridal Studio, Karatmeter Testing, VIP Lounge",
      mapUrl: "https://maps.google.com/?q=Godhra+Gujarat+Jewellery",
    },
    {
      name: "Sunehriè Boutique Showroom",
      city: "Lunawada, Gujarat",
      address: "Station Road, Opp. State Bank of India, Lunawada, Mahisagar - 389230",
      phone: "+91 98250 54321",
      hours: "10:30 AM - 8:00 PM (Monday - Saturday)",
      badge: "BOUTIQUE",
      highlight: "Daily Wear 9KT & 14KT Gold, Natural Diamond Mangalsutras",
      mapUrl: "https://maps.google.com/?q=Lunawada+Gujarat+Jewellery",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsStoreModalOpen(false)}
      />

      <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl z-10 border border-[#ece3f0] my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={() => setIsStoreModalOpen(false)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f4edf8] hover:bg-[#e8dcee] text-[#2b0d3e] flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X size={17} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#f4edf8] text-[#7a3f91] flex items-center justify-center flex-shrink-0">
            <MapPin size={24} />
          </div>
          <div>
            <h3
              className="text-[22px] sm:text-[24px] font-bold text-[#2e093d]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Showrooms
            </h3>
            <p className="text-[13px] text-[#7a6b82]">
              Experience Sunehriè fine jewellery in person across Gujarat
            </p>
          </div>
        </div>

        {/* Store Cards */}
        <div className="space-y-4">
          {stores.map((store, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-[#ece3f0] bg-[#faf7fc] hover:bg-white hover:border-[#cca338]/60 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#cca338]/15 text-[#9e7616] uppercase border border-[#cca338]/30">
                  {store.badge}
                </span>
                <span className="text-[12px] font-semibold text-[#7a3f91]">{store.city}</span>
              </div>

              <h4
                className="text-[17px] font-bold text-[#2e093d] mb-1.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {store.name}
              </h4>

              <div className="space-y-1.5 text-[13px] text-[#4a3952] mb-4">
                <div className="flex items-start gap-2">
                  <MapPin size={15} className="text-[#cca338] flex-shrink-0 mt-0.5" />
                  <span>{store.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#cca338] flex-shrink-0" />
                  <a href={`tel:${store.phone}`} className="hover:text-[#7a3f91] font-medium">
                    {store.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[#cca338] flex-shrink-0" />
                  <span className="text-[12px] text-[#695473]">{store.hours}</span>
                </div>
              </div>

              <div className="text-[11px] text-[#7a3f91] bg-white px-3 py-1.5 rounded-lg border border-[#ece3f0] mb-4 font-medium">
                ✨ {store.highlight}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={store.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-white border border-[#2e093d] hover:bg-[#2e093d] hover:text-white text-[#2e093d] text-[12px] font-bold uppercase tracking-wider transition-all"
                >
                  <Navigation size={13} />
                  <span>Get Directions</span>
                </a>
                <button
                  onClick={() => {
                    setIsStoreModalOpen(false);
                    setIsAccountModalOpen(true);
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[#7a3f91] hover:bg-[#5a2d6e] text-white text-[12px] font-bold uppercase tracking-wider transition-all"
                >
                  <Calendar size={13} />
                  <span>Book VIP Visit</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
