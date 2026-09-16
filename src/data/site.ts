export const siteConfig = {
  name: "CMC Group",
  legalName: "Cornerstone Marketing Concepts, LLC",
  description:
    "CMC Group is a nationwide customer acquisition firm partnering with leading telecom and technology brands to drive business growth.",
  url: "https://www.cmcgroups.com",
  phone: "888-915-0883",
  phoneHref: "tel:+18889150883",
  email: "cornerstonemgmt@cmcgroups.com",
  address: {
    line1: "17777 Center Ct Dr N",
    city: "Cerritos",
    state: "CA",
    zip: "90703",
  },
  social: {
    facebook: "https://facebook.com/CMCGROUPS",
    instagram: "https://instagram.com/cmc_groups/",
    youtube: "https://youtube.com/@cornerstonemarketingconcep6515",
  },
} as const;

export const navLinks = [
  { label: "What We Do", href: "/what-we-do" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
] as const;

export const brands = [
  { name: "DirecTV", src: "/images/partners/directv.avif" },
  { name: "ADT", src: "/images/partners/adt.avif" },
  { name: "AT&T", src: "/images/partners/att.avif" },
  { name: "Frontier", src: "/images/partners/frontier.avif" },
  { name: "Verizon", src: "/images/partners/verizon.avif" },
  { name: "Ooma", src: "/images/partners/ooma.avif" },
] as const;

export const pressLogos = [
  { name: "Yahoo Finance", src: "/images/press/yahoo.svg" },
  { name: "Insider", src: "/images/press/insider.svg" },
  { name: "NBC", src: "/images/press/nbc.svg" },
  { name: "Digital Journal", src: "/images/press/digitaljournal.svg" },
  { name: "Fox", src: "/images/press/fox.svg" },
  { name: "MarketWatch", src: "/images/press/marketwatch.svg" },
] as const;

export const faqs = [
  {
    question: "Is CMC Group an authorized dealer, or a call center?",
    answer:
      "We're an authorized dealer and sales partner for the brands we represent — DirecTV, ADT, AT&T, Frontier, Verizon, and Ooma. Every account is handled by a trained field representative who meets the customer in person, not an outsourced call queue.",
  },
  {
    question: "How fast do you respond to a new brand or market inquiry?",
    answer:
      "We follow up on every inquiry within one business day, then scope the market and assign a field team — reps are typically active within a couple of weeks depending on territory size.",
  },
  {
    question: "Do your representatives work on commission only?",
    answer:
      "Reps go through our D2D U training program before their first door, and are supported by regional leadership throughout — it isn't a sink-or-swim commission model.",
  },
  {
    question: "What markets does CMC operate in?",
    answer:
      "We're headquartered in Cerritos, California, and run field teams across multiple states for our partner brands. Reach out with your target market and we'll tell you directly whether we have coverage there.",
  },
] as const;

export const testimonials = [
  {
    name: "Andre Parada",
    detail: "A CMC partner for more than a decade, citing consistent service and steady account growth.",
  },
  {
    name: "Henry Vargas",
    detail: "Highlighted the responsiveness and professionalism of his CMC service team.",
  },
  {
    name: "Jennifer Mendoza",
    detail: "Reported a meaningful reduction in her monthly bill after switching through CMC.",
  },
] as const;

export const heroStats = [
  { value: 200, suffix: "+", label: "Small business partners" },
  { value: 110, suffix: "+", label: "National brands served" },
] as const;
