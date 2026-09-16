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

/** Secondary-tier nav links — utility/account-style, kept visually distinct from the primary links. */
export const utilityLinks = [{ label: "Careers", href: "/careers" }] as const;

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

export const brandDetails = [
  {
    name: "DirecTV",
    src: "/images/partners/directv.avif",
    blurb: "Satellite TV packages and bundles, brought door to door with clear, honest pricing.",
  },
  {
    name: "ADT",
    src: "/images/partners/adt.avif",
    blurb: "Home security and monitoring, from a rep who walks the property with you first.",
  },
  {
    name: "AT&T",
    src: "/images/partners/att.avif",
    blurb: "Wireless and internet plans matched to the household, not a one-size script.",
  },
  {
    name: "Frontier",
    src: "/images/partners/frontier.avif",
    blurb: "Fiber internet rollouts in newly-served neighborhoods, market by market.",
  },
  {
    name: "Verizon",
    src: "/images/partners/verizon.avif",
    blurb: "Wireless and home internet, represented by reps trained on the current plan lineup.",
  },
  {
    name: "Ooma",
    src: "/images/partners/ooma.avif",
    blurb: "VoIP phone service for small businesses, set up and explained in person.",
  },
] as const;

export const faqs = [
  {
    question: "Is CMC Group actually an authorized dealer, or a call center?",
    answer:
      "We're an authorized dealer and sales partner for the brands we represent — DirecTV, ADT, AT&T, Frontier, Verizon, and Ooma. Every account is handled by a trained field representative who meets the customer in person, not an outsourced call queue.",
  },
  {
    question: "How fast do you respond to a new brand or market inquiry?",
    answer:
      "We follow up on every inquiry within one business day. From there we scope the market, assign a field team, and can typically have reps active within a couple of weeks depending on territory size.",
  },
  {
    question: "Do your representatives work on commission only?",
    answer:
      "Reps are trained and coached through our D2D U program before they ever knock on a door, and are supported by regional leadership throughout — this isn't a sink-or-swim commission model.",
  },
  {
    question: "What markets does CMC currently operate in?",
    answer:
      "We're headquartered in Cerritos, California, and run field teams across multiple states for our partner brands. Reach out with your target market and we'll tell you directly whether we have (or can build) coverage there.",
  },
] as const;

export const whoWeReach = [
  {
    title: "Residential",
    description: "Homeowners and renters evaluating TV, internet, security, and phone options door to door.",
  },
  {
    title: "Small Business",
    description: "Local businesses that need a real point of contact for connectivity and monitoring, not a hold queue.",
  },
  {
    title: "Multi-Dwelling Communities",
    description: "Apartment complexes and HOAs where one conversation can bring a service to an entire building.",
  },
] as const;

export const pressLogos = [
  { name: "Yahoo Finance", src: "/images/press/yahoo.svg" },
  { name: "Insider", src: "/images/press/insider.svg" },
  { name: "NBC", src: "/images/press/nbc.svg" },
  { name: "Digital Journal", src: "/images/press/digitaljournal.svg" },
  { name: "Fox", src: "/images/press/fox.svg" },
  { name: "MarketWatch", src: "/images/press/marketwatch.svg" },
] as const;
