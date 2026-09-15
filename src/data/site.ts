export const siteConfig = {
  name: "CMC Group",
  legalName: "Cornerstone Marketing Concepts, LLC",
  description:
    "CMC Group partners with leading telecom and technology brands to drive measurable growth, expand markets, and build lasting customer relationships.",
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
  { label: "About CMC", href: "/about" },
  { label: "Our Team", href: "/our-team" },
  { label: "Blog", href: "/blogs" },
] as const;

export const heroContent = {
  eyebrow: "A DECADE OF SCALED GROWTH",
  headline: ["We help businesses scale", "with industry leading solutions."],
  subcopy:
    "Built on performance, powered by people. CMC Group partners with leading telecom and technology brands to drive measurable growth, expand markets, and build lasting customer relationships.",
  cta: { label: "Start a Conversation", href: "/contact" },
  secondaryCta: { label: "See What We Do", href: "/what-we-do" },
  stats: [
    { value: 200, suffix: "+", label: "Small Business Partners" },
    { value: 110, suffix: "+", label: "National Brands Served" },
  ],
} as const;

export const partners = [
  { name: "DirecTV", src: "/images/partners/directv.avif" },
  { name: "ADT", src: "/images/partners/adt.avif" },
  { name: "Verizon", src: "/images/partners/verizon.avif" },
  { name: "AT&T", src: "/images/partners/att.avif" },
  { name: "Frontier", src: "/images/partners/frontier.avif" },
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
