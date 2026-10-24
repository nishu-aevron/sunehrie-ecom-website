import type { Metadata } from "next";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing your use of Sunehriè's website and purchase of our hallmarked gold and natural diamond jewellery.",
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="page-x pt-[30px] pb-[48px]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-ink">
          <Link href="/" className="text-[12px] leading-5 hover:underline">Home</Link>
          <span className="font-inter text-[14px] leading-5">/</span>
          <span className="text-[12px] leading-5">Terms &amp; Conditions</span>
        </nav>
        <h1 className="mt-[28px] font-seasons text-[32px] leading-[1.1] font-bold tracking-[-1px] text-ink sm:text-[44px] lg:text-[52px]">
          Terms &amp; Conditions
        </h1>
        <p className="mt-3 text-[15px] leading-[24px] text-ink-50">Last updated: 1 October 2026</p>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Introduction</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            Welcome to Sunehriè (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). These Terms &amp; Conditions govern your access to and use of our website at sunehrie.com, our mobile application, and all related services (collectively, the &ldquo;Platform&rdquo;). By accessing or using the Platform, you agree to be bound by these Terms.
          </p>
          <p>
            Sunehriè is a luxury jewellery brand specialising in 9KT, 14KT, and 18KT BIS-hallmarked gold jewellery set with 100% natural, IGI-certified diamonds. We operate from our flagship showrooms in Godhra and Lunawada, Gujarat, and through our online store.
          </p>
          <p>
            If you do not agree with any part of these Terms, please do not use the Platform. We reserve the right to update these Terms at any time, and your continued use of the Platform constitutes acceptance of any modifications.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Definitions</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>&ldquo;Customer&rdquo;</strong> refers to any individual who registers on or makes a purchase through the Platform.</li>
            <li><strong>&ldquo;Product&rdquo;</strong> refers to any item of jewellery, accessory, or merchandise listed for sale on the Platform.</li>
            <li><strong>&ldquo;Order&rdquo;</strong> refers to a confirmed purchase request placed by a Customer through the Platform.</li>
            <li><strong>&ldquo;Hallmarked Gold&rdquo;</strong> refers to gold jewellery that carries a Bureau of Indian Standards (BIS) hallmark and a unique HUID number.</li>
            <li><strong>&ldquo;Natural Diamond&rdquo;</strong> refers to diamonds that are mined, not lab-grown, and certified by the International Gemological Institute (IGI).</li>
          </ul>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">User Accounts</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            To place an order, you must create an account by providing accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.
          </p>
          <p>
            You agree to notify us immediately of any unauthorised use of your account. We reserve the right to suspend or terminate accounts that violate these Terms, contain false information, or are involved in fraudulent activity.
          </p>
          <p>
            You must be at least 18 years old to create an account and make purchases on the Platform. By creating an account, you represent that you meet this age requirement.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Products &amp; Pricing</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            All products listed on the Platform are subject to availability. We make every effort to display product images, descriptions, and specifications accurately; however, slight variations in colour, texture, and dimensions may occur due to the handcrafted nature of our jewellery and differences in display settings.
          </p>
          <p>
            Prices are listed in Indian Rupees (₹) and are inclusive of applicable taxes unless stated otherwise. Gold prices fluctuate daily based on market rates. The price at the time of order confirmation is the price you pay; we do not adjust prices retroactively for market movements.
          </p>
          <p>
            We reserve the right to modify pricing, introduce promotional offers, or discontinue products at any time without prior notice. Promotional prices are valid only for the duration specified and cannot be combined with other offers unless expressly stated.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Orders &amp; Payments</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            When you place an order, it constitutes an offer to purchase the selected product(s). We reserve the right to accept or decline any order at our sole discretion. An order is confirmed only when you receive an order confirmation email from us.
          </p>
          <p>
            We accept payments via credit cards, debit cards, net banking, UPI, and select wallet services. All transactions are processed through PCI-DSS compliant payment gateways. We do not store your full card details on our servers.
          </p>
          <p>
            In the event of a payment failure, the order will not be processed. If an amount is debited without order confirmation, it will be refunded to the original payment method within 7–10 business days.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Shipping &amp; Delivery</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            We offer free insured delivery across India on all orders. Shipments are dispatched in tamper-evident, signature-required packaging. Estimated delivery timelines are provided at checkout and typically range from 5–10 business days depending on your location.
          </p>
          <p>
            Delivery timelines are estimates and may vary due to factors beyond our control, including weather, logistics delays, or public holidays. We are not liable for delays caused by such factors, though we will keep you informed of your shipment&rsquo;s status.
          </p>
          <p>
            Upon delivery, please inspect the package for any signs of tampering before signing. If the package appears damaged or tampered with, please refuse delivery and contact us immediately at sunehrie.care@gmail.com.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Returns &amp; Exchanges</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            We offer a 48-hour return and exchange window from the date of delivery. To be eligible for a return or exchange, the product must be in its original, unworn condition with all tags, certificates, and packaging intact.
          </p>
          <p>
            Customised or personalised jewellery, items purchased during clearance sales, and gift cards are not eligible for returns. Please refer to our <Link href="/refund-exchange" className="text-purple underline">Refund &amp; Exchange Policy</Link> for complete details.
          </p>
          <p>
            To initiate a return or exchange, contact us at sunehrie.care@gmail.com or call +91 93273 31963 within the 48-hour window. Our team will guide you through the process and arrange a secure pickup.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Intellectual Property</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            All content on the Platform — including but not limited to text, graphics, logos, product images, jewellery designs, icons, and software — is the intellectual property of Sunehriè or its licensors and is protected under Indian copyright, trademark, and intellectual property laws.
          </p>
          <p>
            The &ldquo;Sunehriè&rdquo; name, logo, the golden sparrow motif, and all related marks are registered trademarks of Sunehriè. You may not use, reproduce, distribute, or create derivative works from any content on the Platform without our prior written consent.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Limitation of Liability</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            To the fullest extent permitted by applicable law, Sunehriè, its directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Platform or purchase of our products.
          </p>
          <p>
            Our total liability for any claim arising out of these Terms shall not exceed the amount paid by you for the specific product giving rise to the claim. Nothing in these Terms excludes or limits liability that cannot be excluded under applicable Indian law.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Governing Law &amp; Jurisdiction</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from or in connection with these Terms or your use of the Platform shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
          </p>
          <p>
            Before initiating formal proceedings, both parties agree to attempt resolution through good-faith negotiation. If a resolution cannot be reached within 30 days, either party may pursue formal legal remedies.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Contact Information</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>For any questions or concerns regarding these Terms, please contact us:</p>
          <ul className="list-none space-y-2">
            <li><strong>Email:</strong> sunehrie.care@gmail.com</li>
            <li><strong>Phone:</strong> +91 93273 31963</li>
            <li><strong>Godhra Showroom:</strong> 2nd Floor, Besides Shreenathji Jewellers Godhrawala, Adumbar Kuva, Soniwad, Godhra, Gujarat 389001</li>
            <li><strong>Lunawada Showroom:</strong> Opp Shreenathji Jewellers Godhrawala Lunawada, E-Block, Nandan Arched, Modasa Road, Lunawada, Mahisagar 389230</li>
          </ul>
        </div>
      </section>

      <div className="mt-10 pb-10 sm:mt-16 sm:pb-16">
        <TrustStrip variant="light" />
      </div>
    </main>
  );
}
