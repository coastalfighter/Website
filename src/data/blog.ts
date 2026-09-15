export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  paragraphs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "about-cmc",
    title: "About CMC",
    date: "2022-11-22",
    excerpt:
      "Who we are, why we exist, and what a CMC partnership actually looks like day to day.",
    paragraphs: [
      "CMC Group started with a simple idea: telecom and security brands grow fastest when a real person can sit across the table from a customer and answer their questions honestly. A decade later, that's still the whole business.",
      "We're a nationwide customer acquisition firm — an authorized dealer for brands like DirecTV, ADT, AT&T, Frontier, Verizon, and Ooma — built around trained, professional field representatives rather than call centers or ad spend alone.",
      "Everything we do, from our training pipeline to how we structure a new market launch, comes back to one measure: whether the customer and the brand we represent both come out ahead.",
    ],
  },
  {
    slug: "how-to-keep-the-winning-streak-in-the-organization",
    title: "How to Keep the Winning Streak in the Organization",
    date: "2023-01-23",
    excerpt: "Momentum is easy to find and easy to lose. Here's how top teams protect it.",
    paragraphs: [
      "A winning streak feels inevitable right up until it ends — and most streaks end for the same avoidable reasons: complacency, skipped fundamentals, and leaders who stop coaching once results are good.",
      "The teams that keep winning treat a hot streak as a reason to tighten up, not relax. They keep running the same morning huddles, the same role-play drills, and the same honest feedback loops that got them there in the first place.",
      "Protecting momentum is a leadership discipline, not luck. Keep score publicly, keep coaching daily, and keep the standard exactly where it was on your worst day.",
    ],
  },
  {
    slug: "secrets-to-achieving-your-goals",
    title: "Secrets to Achieving Your Goals",
    date: "2023-01-30",
    excerpt: "The gap between a goal and a result is almost always a missing system.",
    paragraphs: [
      "Most people don't fail to hit their goals because the goal was wrong — they fail because they never built a system to get there. A goal is a destination; a system is the vehicle.",
      "Break the goal into weekly, then daily, inputs you actually control — doors knocked, calls made, follow-ups sent — instead of outcomes you don't, like a specific number of sales.",
      "Track the inputs relentlessly and the outcomes tend to take care of themselves. The secret isn't motivation, it's a system that doesn't depend on motivation to run.",
    ],
  },
  {
    slug: "how-to-hit-your-goals-3-tips-to-success",
    title: "How to Hit Your Goals: 3 Tips to Success",
    date: "2023-03-13",
    excerpt: "Three practical habits that separate reps who hit target from those who almost do.",
    paragraphs: [
      "First, write the goal down somewhere you'll see it every single day — not in a note buried on your phone, but somewhere unavoidable.",
      "Second, review progress weekly, not monthly. A month is long enough to drift completely off course before you notice; a week isn't.",
      "Third, tell someone else your number. Accountability to a teammate or a manager closes the gap between what you intend to do and what you actually do.",
    ],
  },
  {
    slug: "how-to-influence-buyers-to-purchase",
    title: "How to Influence Buyers to Purchase",
    date: "2023-03-21",
    excerpt: "Influence isn't pressure — it's removing the reasons a good decision feels risky.",
    paragraphs: [
      "Buyers rarely say no to your product. They say no to uncertainty — about price, about whether it'll actually work for them, about what happens if they're wrong.",
      "The best reps spend more time listening for that specific uncertainty than they spend pitching. Once you know exactly what's holding someone back, you can speak to it directly instead of repeating features they already believe.",
      "Influence, done well, looks like clarity: a buyer who understands exactly what they're getting and exactly why it fits their situation, from someone who clearly isn't just trying to close them.",
    ],
  },
  {
    slug: "the-dickens-process",
    title: "The Dickens Process",
    date: "2023-04-11",
    excerpt: "A simple mental exercise for confronting the cost of staying exactly where you are.",
    paragraphs: [
      "Named for the ghosts of past, present, and future in A Christmas Carol, the Dickens Process asks a blunt question: what does it actually cost you to keep doing what you're doing?",
      "Picture your life a year from now if nothing changes — not vaguely, but specifically: the same numbers, the same excuses, the same conversations with yourself. Then picture it if you commit fully, starting today.",
      "Most people change not because someone convinced them to, but because they finally let themselves feel the real cost of staying still. Use that discomfort on purpose.",
    ],
  },
  {
    slug: "entrepreneurship-versus-employee",
    title: "Entrepreneurship Versus Employee",
    date: "2023-04-04",
    excerpt: "Two different relationships with risk — and why field sales sits closer to one of them.",
    paragraphs: [
      "An employee mindset trades effort for a predictable paycheck. An entrepreneurial mindset trades short-term certainty for ownership of the result — and everything that comes with owning it.",
      "Commission-driven field sales lives in between the two: you get the structure and training of a company, but your results are entirely your own to build, which is exactly why it attracts people who want more control over their ceiling.",
      "The reps who thrive here treat their territory like a small business, not a job — because in every way that matters, that's what it is.",
    ],
  },
  {
    slug: "how-to-grow-your-business-mind-and-goal-setting",
    title: "How to Grow Your Business: Mind and Goal Setting",
    date: "2023-05-12",
    excerpt: "Growth stalls in the mind long before it shows up in the numbers.",
    paragraphs: [
      "Most growth plateaus aren't market problems — they're mindset problems wearing a market problem's clothes. A ceiling you've stopped questioning becomes a ceiling you never break through.",
      "Set goals that are slightly uncomfortable to say out loud. If a goal doesn't make you a little nervous, it's probably not big enough to change how you operate day to day.",
      "Then go back to fundamentals: revisit the goal weekly, restate it in specific numbers, and let it shape today's schedule — not just this quarter's plan.",
    ],
  },
  {
    slug: "why-are-you-working-so-hard",
    title: "Why Are You Working So Hard?",
    date: "2023-05-20",
    excerpt: "Effort without a clear why burns people out. Effort with one builds careers.",
    paragraphs: [
      "It's easy to confuse being busy with being purposeful. Long hours in the field mean very little if you can't say, specifically, what they're building toward.",
      "Get concrete about your why — a promotion, a family goal, financial independence by a certain age — and write it somewhere you'll see it on the hard days, because the hard days are when you'll need it most.",
      "Hard work aimed at a clear target compounds. Hard work aimed at nothing in particular just tires you out.",
    ],
  },
  {
    slug: "what-traits-of-a-leader-must-you-embody-to-be-successful-in-the-business",
    title: "What Traits/Image of a Leader Must You Embody to be Successful in the Business",
    date: "2023-05-27",
    excerpt: "Leadership in the field is demonstrated, not announced.",
    paragraphs: [
      "Nobody follows a title. In door-to-door sales especially, a leader earns credibility by being the first one out the door and the last one to leave — not by the name on their badge.",
      "The traits that hold up under pressure are consistency, calm under rejection, and a genuine investment in the people you're leading, not just the numbers they produce.",
      "Your team will copy your standard, not your speeches. Set the one you actually want repeated.",
    ],
  },
  {
    slug: "how-to-build-a-team-and-create-certainty-with-our-people",
    title: "How to Build a Team and Create Certainty With Our People",
    date: "2023-06-10",
    excerpt: "Certainty is the most underrated thing a leader can give a new hire.",
    paragraphs: [
      "New reps don't quit because the job is hard — they quit because it feels unpredictable. Clear expectations, a defined training path, and fast, honest feedback remove that uncertainty early.",
      "Building a team that stays starts with over-communicating the basics: what success looks like this week, who to ask when something goes wrong, and what growth actually looks like here.",
      "Certainty isn't the absence of challenge. It's knowing exactly what the challenge is and that someone's in it with you.",
    ],
  },
  {
    slug: "three-key-pillars-to-understanding-and-mastering-the-business",
    title: "Three Key Pillars to Understanding and Mastering the Business",
    date: "2023-06-03",
    excerpt: "Strategy, training, and execution — mastering the business means never skipping one.",
    paragraphs: [
      "Every market CMC runs comes back to the same three pillars: a clear strategy for who we're targeting and why, real training before anyone knocks a door, and disciplined execution once they do.",
      "Skip strategy and you get busy teams with no direction. Skip training and you get confident reps giving customers the wrong information. Skip execution and the best plan in the world never leaves the whiteboard.",
      "Mastering the business isn't about being exceptional at one pillar — it's refusing to let any of the three slip.",
    ],
  },
  {
    slug: "the-journey-to-a-new-you",
    title: "The Journey to a New You!",
    date: "2023-02-17",
    excerpt: "Reinvention is rarely one big leap — it's a series of small, repeated decisions.",
    paragraphs: [
      "The version of you that hits every goal this year isn't created in one dramatic moment. It's built in the ordinary decisions: showing up on the tough mornings, making one more call, asking for feedback you'd rather not hear.",
      "Give yourself permission to change slowly and consistently rather than waiting for a single turning point that may never arrive.",
      "A year from now, you'll either be glad you started today or wish you had. Start today.",
    ],
  },
  {
    slug: "student-mentality-in-business-and-in-life",
    title: "Student Mentality, In Business and in Life!",
    date: "2023-02-21",
    excerpt: "The moment you decide you've learned enough is the moment you stop growing.",
    paragraphs: [
      "The best performers in any field share one habit: they never stop treating themselves as students, no matter how experienced they get.",
      "Staying coachable — asking for feedback, studying reps better than you, revisiting fundamentals you think you've mastered — is what separates people who plateau from people who keep climbing.",
      "Ego closes the door that curiosity keeps open. Choose curiosity, especially once you start getting good.",
    ],
  },
  {
    slug: "laws-for-maximum-achievement",
    title: "Laws for Maximum Achievement",
    date: "2023-02-28",
    excerpt: "A short set of operating principles worth revisiting whenever results stall.",
    paragraphs: [
      "Achievement compounds when a few principles are followed consistently: define the goal precisely, control your daily inputs, surround yourself with people already doing what you want to do, and review your results honestly.",
      "None of these are complicated. What's hard is doing them on the days you don't feel like it — which is exactly when they matter most.",
      "Maximum achievement isn't about a secret nobody else knows. It's about the basics, applied longer and more consistently than everyone else is willing to.",
    ],
  },
  {
    slug: "the-warrior-lover-magician-and-sovereign-in-you",
    title: "The Warrior, Lover, Magician, and Sovereign In You!",
    date: "2023-02-06",
    excerpt: "Four archetypes worth balancing if you want to lead without burning out.",
    paragraphs: [
      "The Warrior shows up, does the hard work, and doesn't quit under pressure. The Lover stays connected to people and purpose instead of chasing numbers alone.",
      "The Magician adapts — finds a new way when the old way stops working. The Sovereign holds it all together with calm, grounded decision-making instead of reacting to every high and low.",
      "Lean too hard on the Warrior alone and you burn out. Balance all four, and you get a leader people actually want to follow.",
    ],
  },
  {
    slug: "change-and-challenges-the-pathway-to-success",
    title: "Change and Challenges: The Pathway to Success",
    date: "2023-01-16",
    excerpt: "Every real success story runs directly through the discomfort, not around it.",
    paragraphs: [
      "Nobody grows in the parts of their career that felt easy and comfortable. Growth happens in the stretch — the new market, the harder conversation, the goal that requires you to change first.",
      "Treat challenges as the toll you pay for the next level, not as evidence you're on the wrong path. They almost always mean the opposite.",
      "The pathway to success was never supposed to be smooth. It was only ever supposed to be worth it.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
