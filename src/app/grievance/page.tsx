import type { Metadata } from "next";
import Link from "next/link";
import TrustStrip from "@/components/TrustStrip";

export const metadata: Metadata = {
  title: "Grievance Redressal",
  description: "Sunehriè's grievance redressal mechanism — how to raise a complaint and our commitment to resolving it promptly.",
};

export default function GrievancePage() {
  return (
    <main className="bg-white">
      <section className="page-x pt-[30px] pb-[48px]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-ink">
          <Link href="/" className="text-[12px] leading-5 hover:underline">Home</Link>
          <span className="font-inter text-[14px] leading-5">/</span>
          <span className="text-[12px] leading-5">Grievance Redressal</span>
        </nav>
        <h1 className="mt-[28px] font-seasons text-[44px] leading-[1.1] font-bold tracking-[-1px] text-ink sm:text-[52px]">
          Grievance Redressal
        </h1>
        <p className="mt-3 max-w-[700px] text-[15px] leading-[24px] text-ink-50">
          We are committed to addressing your concerns promptly and fairly. If you have a grievance related to any product, service, or interaction with Sunehriè, please follow the process outlined below.
        </p>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Grievance Redressal Mechanism</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            In accordance with the Consumer Protection Act, 2019 and the Information Technology Act, 2000 (as amended), Sunehriè has established a grievance redressal mechanism to ensure that all customer complaints are handled in a timely, transparent, and satisfactory manner.
          </p>
          <p>
            Our goal is to resolve every grievance at the first point of contact. Where this is not possible, we follow a structured escalation process to ensure your concern receives the attention it deserves.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">How to File a Complaint</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>You may file a complaint through any of the following channels:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Email:</strong> Send a detailed description of your grievance to sunehrie.care@gmail.com with the subject line &ldquo;Grievance — [Order ID / Issue]&rdquo;.</li>
            <li><strong>Phone:</strong> Call us at +91 93273 31963 (Monday to Saturday, 10:00 AM – 7:00 PM IST).</li>
            <li><strong>In person:</strong> Visit either of our showrooms in Godhra or Lunawada during business hours.</li>
            <li><strong>Contact form:</strong> Use the <Link href="/contact" className="text-purple underline">Contact Us</Link> page on our website.</li>
          </ul>
          <p>
            When filing a complaint, please include your full name, order number (if applicable), a clear description of the issue, and any supporting documents or photographs.
          </p>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Grievance Officer</h2>
        <div className="mt-4 text-[15px] leading-[26px] text-ink-70">
          <p className="mb-4">In compliance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, we have appointed a Grievance Officer:</p>
          <div className="rounded-2xl border border-purple-20 bg-purple-10 p-8 space-y-3">
            <p><strong>Name:</strong> Mr. Salman Vohra</p>
            <p><strong>Designation:</strong> Grievance Officer</p>
            <p><strong>Email:</strong> sunehrie.care@gmail.com</p>
            <p><strong>Phone:</strong> +91 93273 31963</p>
            <p><strong>Address:</strong> 2nd Floor, Besides Shreenathji Jewellers Godhrawala, Adumbar Kuva, Soniwad, Godhra, Gujarat 389001</p>
          </div>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Escalation Process</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>If you are not satisfied with the initial resolution, you may escalate your complaint:</p>
          <ul className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Level 1 — Customer Support:</strong> Your complaint is first addressed by our customer support team within 48 hours of receipt.
            </li>
            <li>
              <strong>Level 2 — Grievance Officer:</strong> If unresolved, the matter is escalated to the Grievance Officer, who will review and respond within 7 business days.
            </li>
            <li>
              <strong>Level 3 — Management Review:</strong> For matters requiring further attention, the Grievance Officer escalates to senior management for a final resolution within 15 business days.
            </li>
          </ul>
        </div>
      </section>

      <section className="page-x py-10 border-t border-purple-20">
        <h2 className="font-seasons text-[28px] font-bold text-ink tracking-[-0.5px]">Timeline for Resolution</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-[26px] text-ink-70">
          <p>
            We acknowledge all complaints within 24 hours of receipt. Our target resolution timelines are:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Simple queries and order-related issues:</strong> Within 48 hours.</li>
            <li><strong>Product quality or defect complaints:</strong> Within 7 business days.</li>
            <li><strong>Complex matters requiring investigation:</strong> Within 15 business days.</li>
            <li><strong>Matters involving external parties:</strong> Within 30 days, with interim updates provided.</li>
          </ul>
          <p>
            If we are unable to resolve your grievance within the stipulated time, we will inform you of the reason for the delay and provide an expected resolution date.
          </p>
        </div>
      </section>

      <div className="mt-16 pb-16">
        <TrustStrip variant="light" />
      </div>
    </main>
  );
}
