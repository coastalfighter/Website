import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { GlowField } from "@/components/ui/GlowField";
import { FloatingIcons } from "@/components/ui/FloatingIcons";
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
        image={{ src: "/images/photos/mes02829.webp", alt: "CMC Group team members in conversation" }}
      />

      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <GlowField />
        <FloatingIcons seed={11} count={3} />
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-paper">Get in touch</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-accent-ink">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a href={siteConfig.phoneHref} className="text-lg text-paper hover:text-brand-ink">
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-accent-ink">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-lg text-paper hover:text-brand-ink"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-accent-ink">
                  Office
                </dt>
                <dd className="mt-1 text-lg text-paper">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-line/80 bg-surface/40 p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
