import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Start a conversation with the CMC Group team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        heading="Start a conversation"
        body="Tell us about your brand and your market — we'll follow up within one business day."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-5xl gap-16 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-text">Get in touch</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-600">Phone</dt>
                <dd className="mt-1">
                  <a href={siteConfig.phoneHref} className="text-lg text-text hover:text-brand-600">
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-600">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${siteConfig.email}`} className="text-lg text-text hover:text-brand-600">
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-brand-600">Office</dt>
                <dd className="mt-1 text-lg text-text">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-xl border border-line bg-ink-2 p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
