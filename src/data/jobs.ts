/** Sample job openings — placeholder content for the Careers page. Replace
 * with real listings, and wire the Apply button on each one up to a real
 * application flow (ATS, form, mailto, etc.) when ready. */
export interface JobOpening {
  title: string;
  location: string;
  type: string;
  department: string;
  summary: string;
}

export const jobOpenings: JobOpening[] = [
  {
    title: "Field Sales Representative",
    location: "Cerritos, CA",
    type: "Full-time",
    department: "Sales",
    summary: "Represent our partner brands door to door, building relationships and closing new accounts in your territory.",
  },
  {
    title: "Team Lead, Field Sales",
    location: "Cerritos, CA",
    type: "Full-time",
    department: "Sales",
    summary: "Coach and support a small team of reps through D2D U, from their first door to their first promotion.",
  },
  {
    title: "Market Expansion Manager",
    location: "Multiple locations",
    type: "Full-time",
    department: "Operations",
    summary: "Scope and launch new territories for partner brands, from pilot program to full rollout.",
  },
  {
    title: "Marketing Coordinator",
    location: "Cerritos, CA",
    type: "Full-time",
    department: "Marketing",
    summary: "Support recruiting materials, brand assets, and campaign coordination across our field markets.",
  },
];
