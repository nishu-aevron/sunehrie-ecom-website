import type { Metadata } from "next";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: "Refund & Exchange Policy",
  description: "Sunehriè's refund and exchange policy — 48-hour return window, exchange process, and refund timelines for hallmarked gold jewellery.",
};

export default function RefundExchangePage() {
  return (
    <main className="bg-white">
      <section className="page-x pt-[30px] pb-[48px]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-ink">
          <Link href="/" className="text-[12px] leading-5 hover:underline">Home</Link>
          <span className="font-inter text-[14px] leading-5">/</span>
          <span className="text-[12px] leading-5">Refund &amp; Exchange Policy</span>
        </nav>
        <h1 className="mt-[28px] font-seasons text-[32px] leading-[1.1] font-bold tracking-[-1px] text-ink sm:text-[44px] lg:text-[52px]">
          Refund &amp; Exchange Policy
        </h1>
        <p className="mt-3 max-w-[700px] text-[15px] leading-[24px] text-ink-50">
          We want you to be completely delighted with every Sunehriè piece. If something isn&rsquo;t quite right, our straightforward return and exchange process is here to help.
        </p>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Return Eligibility</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            We offer a 48-hour return window from the date of delivery. To be eligible, the following conditions must be met:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The item must be in its original, unworn, and unaltered condition.</li>
            <li>All original tags, BIS hallmark labels, IGI diamond certificates, and packaging must be intact.</li>
            <li>The return request must be initiated within 48 hours of delivery.</li>
            <li>The item must be returned through our authorised pickup service — self-shipped returns are not accepted.</li>
          </ul>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Non-Returnable Items</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>The following items are not eligible for return or exchange:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Customised or personalised jewellery (engraved, custom-sized beyond standard adjustment, or made-to-order pieces).</li>
            <li>Items purchased during clearance or final-sale promotions.</li>
            <li>Gift cards and digital vouchers.</li>
            <li>Items that show signs of wear, damage, resizing, or alteration after delivery.</li>
            <li>Items returned without original packaging, tags, or certificates.</li>
          </ul>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Exchange Process</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            If you wish to exchange an item for a different size, metal colour, or design, follow these steps:
          </p>
          <ul className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Initiate the request:</strong> Contact us at sunehrie.care@gmail.com or call +91 93273 31963 within 48 hours of delivery. Provide your order number and the reason for exchange.
            </li>
            <li>
              <strong>Schedule pickup:</strong> Our team will arrange a secure, insured pickup from your address at no additional cost.
            </li>
            <li>
              <strong>Quality inspection:</strong> Upon receiving the returned item, our quality team will inspect it within 2 business days.
            </li>
            <li>
              <strong>Exchange dispatch:</strong> Once approved, your exchange item will be dispatched within 3–5 business days. If the exchange item is of higher value, you will be invoiced for the difference; if lower, the difference will be refunded.
            </li>
          </ul>
          <p>
            Exchanges are subject to availability. If the desired item is out of stock, we will offer a full refund or help you select an alternative piece.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Refund Timeline</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            Once a return is approved after quality inspection, refunds are processed as follows:
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-purple-20">
                  <th className="py-3 pr-6 font-semibold text-ink">Payment Method</th>
                  <th className="py-3 font-semibold text-ink">Refund Timeline</th>
                </tr>
              </thead>
              <tbody className="text-ink-70">
                <tr className="border-b border-purple-20">
                  <td className="py-3 pr-6">Credit / Debit Card</td>
                  <td className="py-3">5–7 business days</td>
                </tr>
                <tr className="border-b border-purple-20">
                  <td className="py-3 pr-6">Net Banking</td>
                  <td className="py-3">5–7 business days</td>
                </tr>
                <tr className="border-b border-purple-20">
                  <td className="py-3 pr-6">UPI</td>
                  <td className="py-3">2–3 business days</td>
                </tr>
                <tr className="border-b border-purple-20">
                  <td className="py-3 pr-6">Wallet</td>
                  <td className="py-3">1–2 business days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Refunds are credited to the original payment method used at the time of purchase. We do not process refunds to alternate accounts or payment methods.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">How to Initiate a Return</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>To initiate a return or exchange:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Email:</strong> sunehrie.care@gmail.com with subject &ldquo;Return — [Order ID]&rdquo;</li>
            <li><strong>Phone:</strong> +91 93273 31963 (Monday to Saturday, 10:00 AM – 7:00 PM IST)</li>
            <li><strong>In person:</strong> Visit our Godhra or Lunawada showroom with the original invoice and packaging.</li>
          </ul>
          <p>
            For any questions about our return policy, please don&rsquo;t hesitate to reach out. Our team is here to ensure your Sunehriè experience is nothing short of exceptional.
          </p>
        </div>
      </section>

      <div className="mt-10 pb-10 sm:mt-16 sm:pb-16">
        <TrustStrip variant="light" />
      </div>
    </main>
  );
}
