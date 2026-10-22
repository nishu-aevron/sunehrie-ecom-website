import type { Metadata } from "next";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Sunehriè collects, uses, and protects your personal information when you shop for hallmarked gold and diamond jewellery.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="page-x pt-[30px] pb-[48px]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-ink">
          <Link href="/" className="text-[12px] leading-5 hover:underline">Home</Link>
          <span className="font-inter text-[14px] leading-5">/</span>
          <span className="text-[12px] leading-5">Privacy Policy</span>
        </nav>
        <h1 className="mt-[28px] font-seasons text-[44px] leading-[1.1] font-bold tracking-[-1px] text-ink sm:text-[52px]">
          Privacy Policy
        </h1>
        <p className="mt-3 text-[15px] leading-[24px] text-ink-50">Last updated: 1 October 2026</p>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Introduction</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            At Sunehriè, we value your trust as deeply as the craftsmanship in every piece we create. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website, use our mobile application, or interact with our services.
          </p>
          <p>
            By using our Platform, you consent to the practices described in this policy. We encourage you to read this document carefully and contact us if you have any questions.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Information We Collect</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p><strong>Personal information you provide:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, phone number, and date of birth when you create an account.</li>
            <li>Billing and shipping addresses when you place an order.</li>
            <li>Payment details processed securely through our PCI-DSS compliant payment partners.</li>
            <li>Ring size, jewellery preferences, and occasion details when you use our customisation tools.</li>
            <li>Messages, feedback, and reviews you submit through the Platform.</li>
          </ul>
          <p><strong>Information collected automatically:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Device information (browser type, operating system, screen resolution).</li>
            <li>IP address and approximate geographic location.</li>
            <li>Browsing behaviour, pages visited, time spent, and interaction patterns.</li>
            <li>Referral source and search terms used to find our Platform.</li>
          </ul>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">How We Use Your Information</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Processing and fulfilling your orders, including delivery and payment verification.</li>
            <li>Communicating order updates, shipping notifications, and delivery confirmations.</li>
            <li>Providing customer support and responding to your inquiries.</li>
            <li>Personalising your shopping experience with product recommendations and curated collections.</li>
            <li>Sending promotional communications about new arrivals, offers, and events (with your consent).</li>
            <li>Improving our Platform, products, and services through analytics and user feedback.</li>
            <li>Preventing fraud, ensuring security, and complying with legal obligations.</li>
          </ul>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Sharing &amp; Disclosure</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            We do not sell, rent, or trade your personal information to third parties for their marketing purposes. We may share your information only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service providers:</strong> Trusted partners who assist with payment processing, shipping, analytics, and customer communication, bound by confidentiality agreements.</li>
            <li><strong>Legal requirements:</strong> When required by law, regulation, court order, or government authority.</li>
            <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, where your information may be transferred as part of the business.</li>
            <li><strong>Fraud prevention:</strong> To protect against fraud, unauthorised transactions, or other illegal activities.</li>
          </ul>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Data Security</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            We implement industry-standard security measures to protect your personal information, including SSL/TLS encryption for data in transit, encrypted storage for sensitive data, and regular security audits. Our payment processing partners are PCI-DSS Level 1 certified.
          </p>
          <p>
            While we take every reasonable precaution, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your data to the best of our ability.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Cookies &amp; Tracking</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            We use cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyse site traffic. The types of cookies we use include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential cookies:</strong> Required for the Platform to function (e.g., shopping cart, authentication).</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our Platform.</li>
            <li><strong>Preference cookies:</strong> Remember your settings, such as language or currency preferences.</li>
            <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements and measure campaign effectiveness.</li>
          </ul>
          <p>
            You can manage cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of the Platform.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Your Rights</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>Under applicable Indian data protection laws, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate or incomplete information.</li>
            <li>Request deletion of your personal data, subject to legal retention requirements.</li>
            <li>Withdraw consent for marketing communications at any time.</li>
            <li>Lodge a complaint with the relevant data protection authority.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at sunehrie.care@gmail.com. We will respond to your request within 30 days.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Children&rsquo;s Privacy</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            Our Platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete it promptly. If you believe a child has submitted personal information to us, please contact us immediately.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Changes to This Policy</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will notify you by updating the &ldquo;Last updated&rdquo; date at the top of this page and, where appropriate, through email notification.
          </p>
          <p>
            We encourage you to review this policy periodically. Your continued use of the Platform after any changes constitutes acceptance of the updated policy.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Contact Us</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>If you have any questions about this Privacy Policy or our data practices, please reach out:</p>
          <ul className="list-none space-y-2">
            <li><strong>Email:</strong> sunehrie.care@gmail.com</li>
            <li><strong>Phone:</strong> +91 93273 31963</li>
            <li><strong>Godhra Showroom:</strong> 2nd Floor, Besides Shreenathji Jewellers Godhrawala, Adumbar Kuva, Soniwad, Godhra, Gujarat 389001</li>
            <li><strong>Lunawada Showroom:</strong> Opp Shreenathji Jewellers Godhrawala Lunawada, E-Block, Nandan Arched, Modasa Road, Lunawada, Mahisagar 389230</li>
          </ul>
        </div>
      </section>

      <div className="mt-16 pb-16">
        <TrustStrip variant="light" />
      </div>
    </main>
  );
}
