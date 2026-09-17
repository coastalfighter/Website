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
  { label: "Our Team", href: "/our-team" },
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
    quote:
      "Over the last decade I've had the pleasure of being partnered with CMC and I can't say enough good things about them. The relationships I've built are those that will last a lifetime. There's nothing better than being part of a company that truly values you and cares about your growth. This business has shaped and transformed my life and that is something I will never take for granted!",
  },
  {
    name: "Henry Vargas",
    quote:
      "Gio from CMC has been great to work with! Their internet service is fast and reliable, and I really like the security system. Customer service has been helpful every time I've needed support. It's convenient to have internet, TV, and security all in one company. I definitely recommend them for home or business services.",
  },
  {
    name: "Jennifer Mendoza",
    quote:
      "Very thankful that CMC walked into my business. Gio was super attentive and answered all my requests. He was very responsive when I called or texted him. He lowered my bill by $100! If that's not a steal, I don't know what is! Will definitely recommend CMC to my colleagues.",
  },
  {
    name: "Corey Yee",
    quote:
      "They helped me greatly reduce my monthly bill. Showed me exactly where I was overpaying and was able to find me a solution while still getting me DirecTV for less monthly. Great value and thankful to have gotten helped!",
  },
  {
    name: "Russell Hirata",
    quote:
      "They helped my parents' business get a better discount on their rates. I'm amazed how much they were paying since they never reviewed their bill. Thankful for having them review our account and helping my parents.",
  },
] as const;

export const clientStat = { value: 2000, suffix: "+", label: "Happy clients" } as const;

export const heroStats = [
  { value: 200, suffix: "+", label: "Small business partners" },
  { value: 110, suffix: "+", label: "National brands served" },
] as const;

export const awardsAbout = {
  eyebrow: "Voices From Our Network",
  heading: "Trusted by Industry Leaders",
  body: "Companies choose CMC Group because we deliver consistent, measurable results backed by proven systems and trusted partnerships with top telecom and technology brands. Our track record of scalable growth and professional execution gives clients the confidence that their goals will be met with precision and accountability. With every campaign, we demonstrate why industry leaders rely on CMC as their go-to partner for market expansion and customer acquisition.",
} as const;

export const awardsHome = {
  heading: "Proud to be an award-winning solutions provider",
  body: "CMC Group has earned recognition for delivering measurable growth, strong client relationships, and consistent execution across national markets. Our commitment to professionalism, training, and performance has positioned us as a trusted solutions provider for leading telecom and technology partners.",
} as const;
