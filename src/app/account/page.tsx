"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { inr } from "@/data/catalog";

type Tab = "orders" | "addresses" | "security";

const navItems: { key: Tab; label: string; icon: string }[] = [
  { key: "orders", label: "Orders & Shipments", icon: "/icons/pdp/assure-truck.svg" },
  { key: "addresses", label: "Saved Addresses", icon: "/icons/pdp/assure-shield.svg" },
  { key: "security", label: "Account & Security", icon: "/icons/pdp/assure-return.svg" },
];

const kpis = [
  { label: "Total Orders", value: "3", accent: false },
  { label: "In Transit", value: "1", accent: true },
  { label: "Total Spend", value: inr(20450), accent: false },
];

const trackingSteps = ["Confirmed", "Hallmarked", "Packed", "Shipped", "Delivered"];
const activeStep = 3;

const orderHistory = [
  { id: "SUN-91524", date: "14 Sep 2025", item: "Classic Gold Ring · 14KT", amount: inr(14350), status: "Delivered" },
  { id: "SUN-91380", date: "28 Aug 2025", item: "Diamond Mangalsutra · 18KT", amount: inr(144538), status: "Delivered" },
  { id: "SUN-91101", date: "11 Jul 2025", item: "Solitaire Heart Pendant · 14KT", amount: inr(64200), status: "Returned" },
];

export default function AccountPage() {
  const [tab, setTab] = useState<Tab>("orders");

  return (
    <main className="min-h-screen bg-blush pb-20">
      <div className="page-x pt-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-ink">
          <Link href="/" className="text-[12px] leading-5 hover:underline">
            Home
          </Link>
          <span className="font-inter text-[14px] leading-5">/</span>
          <span className="text-[12px] leading-5">My Account</span>
        </nav>

        <h1 className="mt-4 font-seasons text-[28px] leading-none font-bold tracking-[-0.8px] text-ink sm:text-[32px] lg:text-[40px]">
          My Account
        </h1>

        <div className="mt-6 flex flex-col gap-6 sm:mt-8 sm:gap-8 lg:flex-row">
          {/* Sidebar */}
          <aside className="w-full shrink-0 lg:w-[300px]">
            <div className="rounded-[12px] border border-purple-20 bg-white">
              {/* Profile card */}
              <div className="flex items-center gap-4 border-b border-purple-10 px-6 py-5">
                <div className="flex size-[52px] items-center justify-center rounded-full bg-purple text-[20px] font-bold text-white">
                  A
                </div>
                <div>
                  <p className="text-[15px] font-bold text-ink">Ananya S.</p>
                  <p className="text-[11px] font-semibold tracking-[1.5px] text-gold uppercase">
                    Vault Member
                  </p>
                  <p className="mt-0.5 text-[12px] text-ink-50">ID #SUN-90812</p>
                </div>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col p-2">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setTab(item.key)}
                    className={`flex cursor-pointer items-center gap-3 rounded-[10px] px-4 py-3.5 text-left text-[14px] font-medium transition-colors ${
                      tab === item.key
                        ? "bg-blush font-semibold text-purple"
                        : "text-ink-70 hover:bg-purple-10 hover:text-ink"
                    }`}
                  >
                    <Icon src={item.icon} size={18} />
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="border-t border-purple-10 p-2">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center gap-3 rounded-[10px] px-4 py-3.5 text-left text-[14px] font-medium text-red-600 hover:bg-red-50"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {tab === "orders" && <OrdersTab />}
            {tab === "addresses" && <AddressesTab />}
            {tab === "security" && <SecurityTab />}
          </div>
        </div>
      </div>
    </main>
  );
}

function OrdersTab() {
  return (
    <div className="flex flex-col gap-6">
      {/* KPI cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className={`flex flex-col items-center justify-center gap-1 rounded-[14px] border py-6 ${
              kpi.accent ? "border-purple bg-purple/5" : "border-purple-20 bg-white"
            }`}
          >
            <span className={`text-[28px] font-bold ${kpi.accent ? "text-purple" : "text-ink"}`}>
              {kpi.value}
            </span>
            <span className="text-[12px] font-medium text-ink-50">{kpi.label}</span>
          </div>
        ))}
      </div>

      {/* Active order tracking */}
      <div className="rounded-[14px] border border-purple-20 bg-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[1.5px] text-purple uppercase">
              Active Order
            </p>
            <p className="mt-1 text-[18px] font-bold text-ink">SUN-91625</p>
          </div>
          <span className="rounded-full bg-gold-cream px-3 py-1 text-[12px] font-semibold text-gold-deep">
            In Transit
          </span>
        </div>

        {/* Progress bar — each step owns a cell with half-connectors either side, so circles sit exactly above their labels */}
        <ol className="no-scrollbar -mx-2 mt-6 flex overflow-x-auto px-2" aria-label="Order progress">
          {trackingSteps.map((step, i) => {
            const done = i < activeStep;
            const current = i === activeStep;
            return (
              <li key={step} className="flex min-w-[72px] flex-1 flex-col items-center gap-2" aria-current={current ? "step" : undefined}>
                <div className="flex w-full items-center">
                  <span className={`h-[3px] flex-1 ${i === 0 ? "invisible" : i <= activeStep ? "bg-success" : "bg-purple-20"}`} />
                  <span
                    className={`flex size-[28px] shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                      done ? "bg-success text-white" : current ? "border-2 border-success bg-white text-success" : "border-2 border-purple-20 bg-white text-ink-50"
                    }`}
                  >
                    {done ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </span>
                  <span className={`h-[3px] flex-1 ${i === trackingSteps.length - 1 ? "invisible" : done ? "bg-success" : "bg-purple-20"}`} />
                </div>
                <span className={`text-center text-[11px] ${i <= activeStep ? "font-semibold text-ink" : "text-ink-50"}`}>{step}</span>
              </li>
            );
          })}
        </ol>

        {/* Order product */}
        <div className="mt-6 flex flex-col gap-4 rounded-[12px] border border-purple-10 bg-blush-light p-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="relative size-[72px] shrink-0 overflow-hidden rounded-[10px] bg-white">
              <Image
                src="/img/products/classic-gold-ring.png"
                alt="Classic Gold Ring"
                fill
                sizes="72px"
                className="object-contain p-1"
              />
            </div>
            <div className="flex-1">
              <p className="text-[14px] font-semibold text-ink">Classic Gold Ring</p>
              <p className="mt-0.5 text-[12px] text-ink-50">14KT Yellow Gold · Size 11 · Qty: 1</p>
              <p className="mt-1 text-[15px] font-bold text-purple">{inr(14350)}</p>
            </div>
          </div>
          <div className="flex gap-2 sm:flex-col sm:shrink-0">
            <button
              type="button"
              className="flex-1 rounded-[8px] border border-purple px-4 py-2 text-[12px] font-semibold text-purple transition-colors hover:bg-purple hover:text-white sm:flex-initial"
            >
              Track Package
            </button>
            <button
              type="button"
              className="flex-1 rounded-[8px] border border-purple-20 px-4 py-2 text-[12px] font-medium text-ink-70 transition-colors hover:border-purple hover:text-purple sm:flex-initial"
            >
              Invoice
            </button>
          </div>
        </div>
      </div>

      {/* Order history */}
      <div className="rounded-[14px] border border-purple-20 bg-white">
        <div className="border-b border-purple-10 px-6 py-4">
          <h3 className="text-[16px] font-bold text-ink">Order History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-purple-10 text-[12px] font-semibold text-ink-50 uppercase">
                <th className="px-6 py-3">Order ID</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Item</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((order) => (
                <tr key={order.id} className="border-b border-purple-10 last:border-0">
                  <td className="px-6 py-4 text-[13px] font-semibold text-purple">{order.id}</td>
                  <td className="px-6 py-4 text-[13px] text-ink-70">{order.date}</td>
                  <td className="px-6 py-4 text-[13px] text-ink">{order.item}</td>
                  <td className="px-6 py-4 text-[13px] font-semibold text-ink">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold ${
                        order.status === "Delivered"
                          ? "bg-green-50 text-success-deep"
                          : order.status === "Returned"
                            ? "bg-red-50 text-red-600"
                            : "bg-gold-cream text-gold-deep"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

type Address = { id: number; name: string; line1: string; city: string; state: string; pincode: string; phone: string };

const initialAddresses: Address[] = [
  { id: 1, name: "Ananya Shah", line1: "B-12, Sunder Nagar Apartments, MG Road", city: "Vadodara", state: "Gujarat", pincode: "390007", phone: "+91 98765 43210" },
  { id: 2, name: "Ananya Shah", line1: "Plot 7, Sunrise Towers, GIDC Road", city: "Godhra", state: "Gujarat", pincode: "389001", phone: "+91 98765 43210" },
];

const emptyAddress: Omit<Address, "id"> = { name: "", line1: "", city: "", state: "Gujarat", pincode: "", phone: "" };

function AddressesTab() {
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [defaultId, setDefaultId] = useState(1);
  // null = no form open, 0 = adding a new address, otherwise the id being edited.
  const [editing, setEditing] = useState<number | null>(null);
  const [draft, setDraft] = useState<Omit<Address, "id">>(emptyAddress);
  const [confirmRemove, setConfirmRemove] = useState<number | null>(null);

  const openForm = (a?: Address) => {
    setConfirmRemove(null);
    setEditing(a ? a.id : 0);
    setDraft(a ? { name: a.name, line1: a.line1, city: a.city, state: a.state, pincode: a.pincode, phone: a.phone } : emptyAddress);
  };

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    if (editing === 0) {
      const id = Math.max(0, ...addresses.map((a) => a.id)) + 1;
      setAddresses((list) => [...list, { id, ...draft }]);
      if (addresses.length === 0) setDefaultId(id);
    } else if (editing !== null) {
      setAddresses((list) => list.map((a) => (a.id === editing ? { id: a.id, ...draft } : a)));
    }
    setEditing(null);
  };

  const remove = (id: number) => {
    const rest = addresses.filter((a) => a.id !== id);
    setAddresses(rest);
    if (id === defaultId && rest.length) setDefaultId(rest[0].id);
    setConfirmRemove(null);
    if (editing === id) setEditing(null);
  };

  // Default address first.
  const sorted = [...addresses].sort((a, b) => Number(b.id === defaultId) - Number(a.id === defaultId));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-[18px] font-bold text-ink">Saved Addresses</h3>
        <button
          type="button"
          onClick={() => openForm()}
          className="flex cursor-pointer items-center gap-1.5 rounded-[10px] border border-purple px-4 py-2.5 text-[13px] font-semibold text-purple transition-colors hover:bg-purple hover:text-white"
        >
          + Add New Address
        </button>
      </div>

      {editing === 0 && <AddressForm title="Add New Address" draft={draft} setDraft={setDraft} onSubmit={save} onCancel={() => setEditing(null)} />}

      {sorted.length === 0 && editing === null && (
        <p className="rounded-[14px] border border-dashed border-purple-20 bg-white p-6 text-center text-[13px] text-ink-50">No saved addresses yet.</p>
      )}

      {sorted.map((a) =>
        editing === a.id ? (
          <AddressForm key={a.id} title="Edit Address" draft={draft} setDraft={setDraft} onSubmit={save} onCancel={() => setEditing(null)} />
        ) : (
          <div key={a.id} className={`rounded-[14px] border bg-white p-5 sm:p-6 ${a.id === defaultId ? "border-purple" : "border-purple-20"}`}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-[15px] font-bold text-ink">{a.name}</p>
                  {a.id === defaultId && <span className="rounded-full bg-purple-10 px-2.5 py-0.5 text-[10px] font-semibold text-purple uppercase">Default</span>}
                </div>
                <p className="mt-2 max-w-[380px] text-[13px] leading-[21px] text-ink-70">
                  {a.line1}
                  <br />
                  {a.city}, {a.state} — {a.pincode}
                </p>
                <p className="mt-1.5 text-[13px] text-ink-50">{a.phone}</p>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {a.id !== defaultId && (
                  <button
                    type="button"
                    onClick={() => setDefaultId(a.id)}
                    className="cursor-pointer rounded-[8px] border border-purple-20 px-3 py-1.5 text-[12px] font-medium text-purple transition-colors hover:border-purple"
                  >
                    Set as default
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => openForm(a)}
                  className="cursor-pointer rounded-[8px] border border-purple-20 px-3 py-1.5 text-[12px] font-medium text-ink-70 transition-colors hover:border-purple hover:text-purple"
                >
                  Edit
                </button>
                {confirmRemove === a.id ? (
                  <>
                    <button
                      type="button"
                      onClick={() => remove(a.id)}
                      className="cursor-pointer rounded-[8px] bg-red-500 px-3 py-1.5 text-[12px] font-semibold text-white transition-colors hover:bg-red-600"
                    >
                      Confirm remove
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirmRemove(null)}
                      className="cursor-pointer rounded-[8px] border border-purple-20 px-3 py-1.5 text-[12px] font-medium text-ink-70"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => setConfirmRemove(a.id)}
                    className="cursor-pointer rounded-[8px] border border-purple-20 px-3 py-1.5 text-[12px] font-medium text-red-500 transition-colors hover:border-red-300 hover:bg-red-50"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

function AddressForm({
  title,
  draft,
  setDraft,
  onSubmit,
  onCancel,
}: {
  title: string;
  draft: Omit<Address, "id">;
  setDraft: (d: Omit<Address, "id">) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}) {
  const field = (key: keyof Omit<Address, "id">, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <label className="flex flex-col gap-1.5">
      <span className="text-[12px] font-medium text-ink-50">{label}</span>
      <input
        required
        value={draft[key]}
        onChange={(e) => setDraft({ ...draft, [key]: e.target.value })}
        className="h-[44px] rounded-[10px] border border-purple-20 bg-white px-3.5 text-[14px] text-ink outline-none focus:border-purple"
        {...props}
      />
    </label>
  );
  return (
    <form onSubmit={onSubmit} className="rounded-[14px] border border-purple bg-white p-5 sm:p-6">
      <h4 className="text-[15px] font-bold text-ink">{title}</h4>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {field("name", "Full name", { autoComplete: "name" })}
        {field("phone", "Phone", { type: "tel", autoComplete: "tel", pattern: "[+0-9 ]{10,15}" })}
        <div className="sm:col-span-2">{field("line1", "Address", { autoComplete: "street-address" })}</div>
        {field("city", "City", { autoComplete: "address-level2" })}
        {field("state", "State", { autoComplete: "address-level1" })}
        {field("pincode", "Pincode", { inputMode: "numeric", pattern: "[0-9]{6}", maxLength: 6, autoComplete: "postal-code" })}
      </div>
      <div className="mt-5 flex gap-3">
        <button type="submit" className="cursor-pointer rounded-[10px] bg-purple px-6 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-purple-deep">
          Save Address
        </button>
        <button type="button" onClick={onCancel} className="cursor-pointer rounded-[10px] border border-purple-20 px-6 py-2.5 text-[13px] font-medium text-ink-70 hover:border-purple">
          Cancel
        </button>
      </div>
    </form>
  );
}

function SecurityTab() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[18px] font-bold text-ink">Account & Security</h3>

      <div className="rounded-[14px] border border-purple-20 bg-white p-6">
        <h4 className="text-[14px] font-bold text-ink">Personal Information</h4>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-ink-50">Full Name</label>
            <input
              type="text"
              defaultValue="Ananya Shah"
              className="h-[48px] rounded-[12px] border border-purple-20 bg-white px-4 text-[14px] text-ink outline-none focus:border-purple"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-ink-50">Email</label>
            <input
              type="email"
              defaultValue="ananya@example.com"
              className="h-[48px] rounded-[12px] border border-purple-20 bg-white px-4 text-[14px] text-ink outline-none focus:border-purple"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-ink-50">Phone</label>
            <input
              type="tel"
              defaultValue="+91 98765 43210"
              className="h-[48px] rounded-[12px] border border-purple-20 bg-white px-4 text-[14px] text-ink outline-none focus:border-purple"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-ink-50">Date of Birth</label>
            <input
              type="text"
              defaultValue="15 Mar 1994"
              className="h-[48px] rounded-[12px] border border-purple-20 bg-white px-4 text-[14px] text-ink outline-none focus:border-purple"
            />
          </div>
        </div>
        <button
          type="button"
          className="mt-5 cursor-pointer rounded-[10px] bg-purple px-6 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-purple-deep"
        >
          Save Changes
        </button>
      </div>

      <div className="rounded-[14px] border border-purple-20 bg-white p-6">
        <h4 className="text-[14px] font-bold text-ink">Change Password</h4>
        <div className="mt-5 flex flex-col gap-5 sm:max-w-[360px]">
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-ink-50">Current Password</label>
            <input
              type="password"
              placeholder="Enter current password"
              className="h-[48px] rounded-[12px] border border-purple-20 bg-white px-4 text-[14px] text-ink outline-none placeholder:text-ink-50 focus:border-purple"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-ink-50">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="h-[48px] rounded-[12px] border border-purple-20 bg-white px-4 text-[14px] text-ink outline-none placeholder:text-ink-50 focus:border-purple"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-ink-50">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="h-[48px] rounded-[12px] border border-purple-20 bg-white px-4 text-[14px] text-ink outline-none placeholder:text-ink-50 focus:border-purple"
            />
          </div>
          <button
            type="button"
            className="cursor-pointer rounded-[10px] bg-purple px-6 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-purple-deep"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}
