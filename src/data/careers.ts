export const programTiers = [
  { title: "Sales Foundations", description: "Customer acquisition fundamentals — the skills every rep builds on." },
  { title: "Leadership Development", description: "Management and coaching training for reps stepping into their first team lead role." },
  { title: "Executive Growth", description: "Regional roles and mentorship for leaders ready to run their own market." },
] as const;

export const teamGrowth = {
  heading: "D2D U: training tomorrow's leaders",
  points: [
    { title: "Hands-on coaching", body: "Every rep is paired with experienced field leadership from day one, not left to figure it out alone." },
    { title: "Promoted from within", body: "Our management team is built almost entirely from people who started on the doors — leadership is earned, not imported." },
    { title: "Culture-first values", body: "Integrity, accountability, and collaboration are trained the same way a sales pitch is: deliberately, and every day." },
  ],
} as const;
